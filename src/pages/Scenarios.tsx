import { useState, useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ReferenceLine, ResponsiveContainer, Legend,
} from 'recharts';

const STARTING_BALANCE = 18.274;
const INVESTMENT_RETURN = 0.044;
const START_YEAR = 2024;
const END_YEAR = 2060;

function projectFund(
  withdrawalRate: number,
  spendingGrowth: number,
  sunriseYear: number | null,
  sunriseRevenue: number,
): { year: number; balance: number }[] {
  const points: { year: number; balance: number }[] = [];
  let balance = STARTING_BALANCE;
  // Initial withdrawal is fixed-dollar amount derived from rate × starting balance,
  // then grows with spending each year — matches how real budgets work.
  let annualWithdrawal = STARTING_BALANCE * (withdrawalRate / 100);

  for (let y = START_YEAR; y <= END_YEAR; y++) {
    points.push({ year: y, balance: parseFloat(balance.toFixed(3)) });
    if (balance <= 0) break;

    const ret = balance * INVESTMENT_RETURN;
    const withdrawal = Math.min(annualWithdrawal, balance + ret); // can't withdraw more than exists
    const sunrise = sunriseYear !== null && y >= sunriseYear ? sunriseRevenue / 1000 : 0;

    balance = balance + ret - withdrawal + sunrise;
    if (balance < 0) balance = 0;

    annualWithdrawal *= (1 + spendingGrowth / 100);
  }
  return points;
}

function depletionYear(points: { year: number; balance: number }[]): number | null {
  const hit = points.find((p) => p.balance === 0);
  return hit ? hit.year : null;
}

function mergeData(
  current: { year: number; balance: number }[],
  scenario: { year: number; balance: number }[],
  esi: { year: number; balance: number }[],
) {
  const map: Record<number, { year: number; current?: number; scenario?: number; esi?: number }> = {};
  for (let y = START_YEAR; y <= END_YEAR; y++) map[y] = { year: y };
  current.forEach((p) => { map[p.year].current = p.balance; });
  scenario.forEach((p) => { map[p.year].scenario = p.balance; });
  esi.forEach((p) => { map[p.year].esi = p.balance; });
  return Object.values(map);
}

function SliderRow({
  label, value, min, max, step, format, onChange, disabled, mark, markLabel,
}: {
  label: string; value: number; min: number; max: number; step: number;
  format: (v: number) => string; onChange: (v: number) => void;
  disabled?: boolean; mark?: number; markLabel?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  const markPct = mark !== undefined ? ((mark - min) / (max - min)) * 100 : null;
  return (
    <div style={{ marginBottom: '28px', opacity: disabled ? 0.4 : 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
          {label}
        </span>
        <span style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '20px', fontWeight: 500, color: '#C9A97A', marginLeft: '12px', flexShrink: 0 }}>
          {format(value)}
        </span>
      </div>
      <div style={{ position: 'relative', height: '22px' }}>
        <input
          type="range" min={min} max={max} step={step} value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            width: '100%', appearance: 'none', height: '2px',
            background: `linear-gradient(to right, #C9A97A ${pct}%, #E8E4DC ${pct}%)`,
            outline: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
            position: 'absolute', top: '10px',
          }}
        />
        {markPct !== null && (
          <div style={{
            position: 'absolute', left: `${markPct}%`, top: 0,
            width: '2px', height: '22px', background: '#8B3A3A',
            transform: 'translateX(-50%)', pointerEvents: 'none',
          }}>
            <span style={{
              position: 'absolute', top: '-16px', left: '4px', whiteSpace: 'nowrap',
              fontFamily: 'Inter, system-ui, sans-serif', fontSize: '9px',
              color: '#8B3A3A', textTransform: 'uppercase', letterSpacing: '0.04em',
            }}>
              {markLabel}
            </span>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#9B9B9B' }}>{format(min)}</span>
        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#9B9B9B' }}>{format(max)}</span>
      </div>
    </div>
  );
}

const DEFAULTS = {
  withdrawalRate: 7,
  spendingGrowth: 8,
  sunriseYear: 2030,
  sunriseNever: false,
  sunriseRevenue: 500,
};

export function Scenarios() {
  const [withdrawalRate, setWithdrawalRate] = useState(DEFAULTS.withdrawalRate);
  const [spendingGrowth, setSpendingGrowth] = useState(DEFAULTS.spendingGrowth);
  const [sunriseYear, setSunriseYear] = useState(DEFAULTS.sunriseYear);
  const [sunriseNever, setSunriseNever] = useState(DEFAULTS.sunriseNever);
  const [sunriseRevenue, setSunriseRevenue] = useState(DEFAULTS.sunriseRevenue);

  // Fixed reference lines — always use 7% withdrawal, 8% spending growth, no Sunrise
  const currentData = useMemo(() => projectFund(7, 8, null, 0), []);
  // ESI-compliant: 3% withdrawal, 3% spending growth (disciplined scenario)
  const esiData = useMemo(() => projectFund(3, 3, null, 0), []);
  const scenarioData = useMemo(
    () => projectFund(withdrawalRate, spendingGrowth, sunriseNever ? null : sunriseYear, sunriseRevenue),
    [withdrawalRate, spendingGrowth, sunriseYear, sunriseNever, sunriseRevenue],
  );

  const chartData = useMemo(() => mergeData(currentData, scenarioData, esiData), [currentData, scenarioData, esiData]);

  const currentDepletion = useMemo(() => depletionYear(currentData), [currentData]);
  const scenarioDepletion = useMemo(() => depletionYear(scenarioData), [scenarioData]);

  const yearsGained =
    currentDepletion !== null && scenarioDepletion !== null
      ? scenarioDepletion - currentDepletion
      : currentDepletion !== null && scenarioDepletion === null
      ? 2060 - currentDepletion
      : 0;

  function reset() {
    setWithdrawalRate(DEFAULTS.withdrawalRate);
    setSpendingGrowth(DEFAULTS.spendingGrowth);
    setSunriseYear(DEFAULTS.sunriseYear);
    setSunriseNever(DEFAULTS.sunriseNever);
    setSunriseRevenue(DEFAULTS.sunriseRevenue);
  }

  const depletionLines = [
    { year: currentDepletion, color: '#8B3A3A', label: 'Current' },
    { year: scenarioDepletion, color: '#2563EB', label: 'Scenario' },
  ].filter((d): d is { year: number; color: string; label: string } => d.year !== null);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: '56px', maxWidth: '720px' }}>
        <h1 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '48px', fontWeight: 500, color: '#1A1A1A', margin: '0 0 16px 0' }}>
          Fiscal Cliff Scenario Modeler
        </h1>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#6B6B6B', lineHeight: 1.7, margin: 0 }}>
          How do policy decisions affect East Timor's petroleum fund trajectory?
          Adjust the variables and see the impact in real time.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '64px', alignItems: 'start' }}>

        {/* LEFT — sliders */}
        <div>
          <style>{`
            input[type=range] { -webkit-appearance: none; }
            input[type=range]::-webkit-slider-thumb {
              -webkit-appearance: none;
              width: 16px; height: 16px; border-radius: 50%;
              background: #C9A97A; border: 2px solid #fff;
              box-shadow: 0 0 0 1px #C9A97A; cursor: pointer;
            }
            input[type=range]::-moz-range-thumb {
              width: 16px; height: 16px; border-radius: 50%;
              background: #C9A97A; border: 2px solid #fff; cursor: pointer;
            }
          `}</style>

          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#9B9B9B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>
            Fund & Withdrawal
          </p>

          <SliderRow
            label="Annual withdrawal rate"
            value={withdrawalRate} min={3} max={12} step={0.1}
            format={(v) => `${v.toFixed(1)}%`} onChange={setWithdrawalRate}
            mark={3} markLabel="ESI legal limit"
          />

          <SliderRow
            label="Annual spending growth"
            value={spendingGrowth} min={0} max={15} step={0.5}
            format={(v) => `${v.toFixed(1)}%`} onChange={setSpendingGrowth}
          />

          <div style={{ borderTop: '1px solid #E8E4DC', paddingTop: '20px', marginTop: '4px', marginBottom: '20px' }}>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#9B9B9B', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
              Greater Sunrise
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#1A1A1A' }}>
                First revenue year
              </span>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input type="checkbox" checked={sunriseNever} onChange={(e) => setSunriseNever(e.target.checked)} style={{ accentColor: '#C9A97A' }} />
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B' }}>Never</span>
              </label>
            </div>

            <SliderRow
              label="" value={sunriseYear} min={2028} max={2040} step={1}
              format={(v) => `${v}`} onChange={setSunriseYear}
              disabled={sunriseNever}
            />

            <SliderRow
              label="Annual revenue (USD)"
              value={sunriseRevenue} min={0} max={2000} step={50}
              format={(v) => `$${v}M`} onChange={setSunriseRevenue}
              disabled={sunriseNever}
            />
          </div>

          <button
            onClick={reset}
            style={{
              padding: '10px 20px', background: 'none', border: '1px solid #E8E4DC',
              cursor: 'pointer', fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px', color: '#6B6B6B',
            }}
          >
            Reset to current trajectory
          </button>
        </div>

        {/* RIGHT — chart + cards + note */}
        <div>
          <ResponsiveContainer width="100%" height={380}>
            <LineChart data={chartData} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
              <XAxis
                dataKey="year" tickLine={false}
                tick={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 11, fill: '#6B6B6B' }}
              />
              <YAxis
                tickFormatter={(v) => `$${v}B`} tickLine={false} width={52}
                tick={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 11, fill: '#6B6B6B' }}
              />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `$${value.toFixed(2)}B`,
                  name === 'current' ? 'Current trajectory'
                    : name === 'scenario' ? 'Your scenario'
                    : 'ESI-compliant (3%)',
                ]}
                labelFormatter={(l) => `Year: ${l}`}
                contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', border: '1px solid #E8E4DC', borderRadius: 0 }}
              />
              <Legend
                formatter={(value) =>
                  value === 'current' ? 'Current trajectory (7%, 8% spending growth)'
                    : value === 'scenario' ? 'Your scenario'
                    : 'ESI-compliant (3%, 3% spending growth)'
                }
                wrapperStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', paddingTop: '8px' }}
              />
              {depletionLines.map((d) => (
                <ReferenceLine
                  key={d.year} x={d.year} stroke={d.color}
                  strokeDasharray="4 2" strokeWidth={1.5}
                  label={{ value: `${d.year}`, position: 'insideTopRight', fontFamily: 'Inter, system-ui, sans-serif', fontSize: 10, fill: d.color }}
                />
              ))}
              <Line dataKey="current" stroke="#8B3A3A" strokeWidth={2.5} dot={false} name="current" />
              <Line dataKey="scenario" stroke="#2563EB" strokeWidth={2} dot={false} name="scenario" strokeDasharray="6 3" />
              <Line dataKey="esi" stroke="#2D6A4F" strokeWidth={2} dot={false} name="esi" strokeDasharray="2 4" />
            </LineChart>
          </ResponsiveContainer>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '32px' }}>
            {[
              {
                label: 'Current trajectory depletes fund in',
                value: currentDepletion ? `${currentDepletion}` : '2060+',
                color: '#8B3A3A',
              },
              {
                label: 'Your scenario depletes fund in',
                value: scenarioDepletion ? `${scenarioDepletion}` : '2060+',
                color: '#2563EB',
              },
              {
                label: 'Years gained by your policy change',
                value: yearsGained >= 0 ? `+${yearsGained}` : `${yearsGained}`,
                color: yearsGained >= 0 ? '#2D6A4F' : '#8B3A3A',
              },
            ].map((card) => (
              <div key={card.label} style={{ borderTop: '2px solid #E8E4DC', paddingTop: '16px' }}>
                <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '36px', fontWeight: 500, color: card.color, marginBottom: '6px' }}>
                  {card.value}
                </div>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', lineHeight: 1.4 }}>
                  {card.label}
                </div>
              </div>
            ))}
          </div>

          {/* Methodology note */}
          <div style={{ marginTop: '32px', padding: '20px 24px', borderLeft: '2px solid #E8E4DC' }}>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', lineHeight: 1.7, margin: '0 0 12px 0' }}>
              <strong style={{ color: '#1A1A1A' }}>Model methodology.</strong> This model uses a simplified constant-rate framework for educational
              purposes. Annual withdrawal is calculated as a percentage of the 2024 starting balance ($18.274B),
              then grows with the spending growth rate each year. Investment returns are applied as 4.40% of
              the remaining fund balance annually. Greater Sunrise revenue is modelled as an instantaneous
              annual flow beginning in the selected year.
            </p>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', lineHeight: 1.7, margin: '0 0 12px 0' }}>
              Real-world outcomes depend on volatile investment returns, fixed-dollar budget commitments that
              do not shrink with the fund, and production ramp-up timelines. Under these simplified assumptions
              the model is directionally consistent with IMF and World Bank projections which place fund
              depletion between 2034 and 2038 under current trajectory.
            </p>
            <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#9B9B9B', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              Source: IMF Article IV September 2025; World Bank February 2025. For research and educational purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
