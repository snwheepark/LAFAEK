import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine, Cell,
} from 'recharts';
import { SectionHeader } from '../components/SectionHeader';
import { StatCard } from '../components/StatCard';
import { ChartWrapper } from '../components/ChartWrapper';

const fundBalanceData = [
  { year: 2005, balance: 0.205, estimated: false },
  { year: 2008, balance: 4.197, estimated: false },
  { year: 2009, balance: 5.377, estimated: false },
  { year: 2010, balance: 6.904, estimated: false },
  { year: 2012, balance: 10.0, estimated: false },
  { year: 2015, balance: 17.0, estimated: false },
  { year: 2018, balance: 15.804, estimated: false },
  { year: 2020, balance: 18.905, estimated: false },
  { year: 2023, balance: 18.288, estimated: false },
  { year: 2024, balance: 18.274, estimated: false },
  { year: 2025, balance: 18.61, estimated: true },
];

const esiData = [
  { year: '2022', esi: 552, actual: 885 },
  { year: '2023', esi: 549, actual: 1090 },
  { year: '2024', esi: 522, actual: 1300 },
];

const returnsData = [
  { year: '2022', return: -10.36 },
  { year: '2023', return: 9.99 },
  { year: '2024', return: 6.80 },
];

const fiscalCliffMarkers = [
  { year: 2027, label: "La'o Hamutuk worst case", color: '#8B3A3A', position: 0 },
  { year: 2035, label: 'MoF own projection', color: '#C9A97A', position: 1 },
  { year: 2038, label: 'World Bank baseline', color: '#6B6B6B', position: 2 },
  { year: 2045, label: 'MoF optimistic', color: '#2D6A4F', position: 3 },
];

export function PetroleumFund() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
      <SectionHeader
        title="Petroleum Fund"
        subtitle="East Timor's $18.274B sovereign wealth fund — the sole source of government revenue since Bayu-Undan ceased production in June 2025. Every dollar spent comes from this fund."
      />

      {/* Key stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
          marginBottom: '80px',
        }}
      >
        <StatCard value="$18.274B" label="Fund balance end 2024" note="Ministry of Finance Annual Report 2024" />
        <StatCard value="$25.45B" label="Total petroleum receipts since 2005" note="Cumulative — MoF 2024" />
        <StatCard value="2.5×" label="2024 withdrawal vs legal ESI limit" note="$1,300M vs $522.1M" />
        <StatCard value="−2.53%" label="Greater Sunrise loan annualized return" note="2019–2024 — MoF 2024" />
        <StatCard value="$13,400" label="Fund per capita" note="939% of non-oil GDP — 2024" />
      </div>

      {/* Chart 1 — Fund Balance */}
      <ChartWrapper
        title="Fund Balance 2005–2025 (USD Billions)"
        citation="Source: BCTL Petroleum Fund Reports; Ministry of Finance Petroleum Fund Annual Report 2024; La'o Hamutuk PF Index. 2025 figure = estimated (E)."
      >
        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={fundBalanceData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis
              tickFormatter={(v) => `$${v}B`}
              tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }}
            />
            <Tooltip
              formatter={(value: number) => [`$${value}B`, 'Fund Balance']}
              labelFormatter={(l) => `Year: ${l}`}
              contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }}
            />
            <ReferenceLine x={2025} stroke="#8B3A3A" strokeDasharray="4 4" label={{ value: 'Bayu-Undan ceases', position: 'top', fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif', fill: '#8B3A3A' }} />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#1A1A1A"
              strokeWidth={2}
              dot={(props) => {
                const { cx, cy, payload } = props;
                return (
                  <circle
                    key={payload.year}
                    cx={cx}
                    cy={cy}
                    r={4}
                    fill={payload.estimated ? '#C9A97A' : '#1A1A1A'}
                    stroke={payload.estimated ? '#C9A97A' : '#1A1A1A'}
                  />
                );
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* Chart 2 — ESI vs Withdrawals */}
      <ChartWrapper
        title="ESI Legal Limit vs Actual Withdrawals (USD Millions)"
        citation="Source: Ministry of Finance Petroleum Fund Annual Report 2024; La'o Hamutuk PF Index. ESI = Estimated Sustainable Income (3% of total petroleum wealth). Exceeded every year since 2009."
      >
        <div style={{ marginBottom: '16px', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B' }}>
          16 consecutive years exceeding the legal limit. MoF describes excess withdrawals as "now standard practice, not an exception."
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={esiData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis
              tickFormatter={(v) => `$${v}M`}
              tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }}
            />
            <Tooltip
              formatter={(value: number, name: string) => [`$${value}M`, name === 'esi' ? 'ESI Legal Limit' : 'Actual Withdrawal']}
              contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }}
            />
            <Legend
              formatter={(value) => value === 'esi' ? 'ESI Legal Limit' : 'Actual Withdrawal'}
              wrapperStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px' }}
            />
            <Bar dataKey="esi" fill="#E8E4DC" name="esi" />
            <Bar dataKey="actual" name="actual" fill="#8B3A3A" />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* Chart 3 — Investment Returns */}
      <ChartWrapper
        title="Annual Investment Return (%)"
        citation="Source: Ministry of Finance Petroleum Fund Annual Report 2024. Annualized since inception 2005–2024: 4.40%. Real return (after US inflation): 1.88% — below the 3% ESI target."
      >
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={returnsData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }}
            />
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Return']}
              contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }}
            />
            <ReferenceLine y={0} stroke="#1A1A1A" strokeWidth={1} />
            <Bar dataKey="return" name="Return">
              {returnsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.return < 0 ? '#8B3A3A' : '#2D6A4F'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* Fiscal Cliff Timeline */}
      <div style={{ marginBottom: '64px' }}>
        <h3
          style={{
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: '22px',
            fontWeight: 500,
            color: '#1A1A1A',
            marginBottom: '24px',
          }}
        >
          Fiscal Cliff Scenarios
        </h3>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#6B6B6B', marginBottom: '32px', maxWidth: '640px', lineHeight: 1.6 }}>
          Four independent projections for when the Petroleum Fund is depleted, ranging from 2027 to 2045.
          Spread reflects different assumptions about withdrawal rates and Tasi Mane investment. No single date is correct.
        </p>
        <div style={{ position: 'relative', paddingTop: '48px', paddingBottom: '32px' }}>
          {/* Timeline line */}
          <div style={{ position: 'absolute', top: '24px', left: '0', right: '0', height: '2px', backgroundColor: '#E8E4DC' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            {fiscalCliffMarkers.map((marker) => (
              <div key={marker.year} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                {/* Dot on timeline */}
                <div
                  style={{
                    position: 'absolute',
                    top: '18px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: marker.color,
                    border: '2px solid #FAFAF8',
                  }}
                />
                <div style={{ marginTop: '40px', textAlign: 'center', padding: '0 8px' }}>
                  <div
                    style={{
                      fontFamily: 'EB Garamond, Georgia, serif',
                      fontSize: '28px',
                      fontWeight: 500,
                      color: marker.color,
                      marginBottom: '4px',
                    }}
                  >
                    {marker.year}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: '12px',
                      color: '#6B6B6B',
                      lineHeight: 1.4,
                    }}
                  >
                    {marker.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p
          style={{
            fontSize: '10px',
            fontFamily: 'Inter, system-ui, sans-serif',
            color: '#6B6B6B',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginTop: '8px',
          }}
        >
          Sources: La'o Hamutuk; MoF 2025 Budget Book; World Bank February 2025; IMF Article IV 2024/2025
        </p>
      </div>

      {/* Greater Sunrise Card */}
      <div style={{ border: '1px solid #E8E4DC', padding: '32px', marginBottom: '40px' }}>
        <h3
          style={{
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: '22px',
            fontWeight: 500,
            color: '#1A1A1A',
            marginBottom: '16px',
          }}
        >
          Greater Sunrise Loan
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '20px' }}>
          <div>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Original loan (2019)</div>
            <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '24px', color: '#1A1A1A' }}>$650M</div>
          </div>
          <div>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>2024 fair value</div>
            <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '24px', color: '#8B3A3A' }}>$561M</div>
          </div>
          <div>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Annualized return</div>
            <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '24px', color: '#8B3A3A' }}>−2.53%</div>
          </div>
          <div>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>First repayment</div>
            <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '24px', color: '#1A1A1A' }}>Apr 2031</div>
          </div>
        </div>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', lineHeight: 1.6 }}>
          Timor Gap has valued its own Greater Sunrise participating interest at $0 since 2020 (ERCE independent valuation).
          The accounting gap between amortized cost ($836.455M) and fair value ($561.044M) is $275M.
          Bayu-Undan ceased production June 4, 2025.
        </p>
      </div>

      {/* Fund Law Box */}
      <div style={{ backgroundColor: '#F5F3EF', padding: '32px', borderLeft: '3px solid #C9A97A' }}>
        <h3
          style={{
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: '20px',
            fontWeight: 500,
            color: '#1A1A1A',
            marginBottom: '16px',
          }}
        >
          Petroleum Fund Law & Governance
        </h3>
        <ul style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', lineHeight: 1.8, paddingLeft: '20px' }}>
          <li>Law 9/2005 (August 3, 2005) — established fund</li>
          <li>Law 12/2011 — amended; allowed equity investments (Schroders appointed)</li>
          <li>Law 2/2022 — further amendment</li>
          <li>Managed by BCTL as account of Ministry of Finance</li>
          <li>Governance: BCTL + MoF + Investment Advisory Board (non-binding) + Consultative Council</li>
          <li>Investment objective: 3% real return over long run</li>
          <li>2009: "Asian Champ Investment Ltd" attempted to steal $1.2B — IAB blocked it</li>
        </ul>
      </div>
    </div>
  );
}
