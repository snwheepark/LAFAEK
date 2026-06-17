import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine, Cell,
} from 'recharts';
import { SectionHeader } from '../components/SectionHeader';
import { StatCard } from '../components/StatCard';
import { ChartWrapper } from '../components/ChartWrapper';

const nonOilGrowthData = [
  { year: 2005, growth: 6.2 },
  { year: 2006, growth: -5.8 },
  { year: 2007, growth: 9.1 },
  { year: 2008, growth: 11.0 },
  { year: 2009, growth: 12.9 },
  { year: 2010, growth: 6.1 },
  { year: 2011, growth: 7.3 },
  { year: 2012, growth: 6.4 },
  { year: 2013, growth: 2.8 },
  { year: 2014, growth: 5.5 },
  { year: 2015, growth: 4.0 },
  { year: 2016, growth: 5.3 },
  { year: 2017, growth: -4.6 },
  { year: 2018, growth: 0.8 },
  { year: 2019, growth: 5.0 },
  { year: 2020, growth: 4.8 },
  { year: 2021, growth: 4.8 },
  { year: 2022, growth: 4.8 },
  { year: 2023, growth: 4.8 },
  { year: 2024, growth: 4.8 },
];

const nonOilGDPValueData = [
  { year: 2005, gdp: 332 },
  { year: 2006, gdp: 327 },
  { year: 2007, gdp: 358 },
  { year: 2008, gdp: 444 },
  { year: 2009, gdp: 556 },
  { year: 2010, gdp: 627 },
  { year: 2011, gdp: 708 },
  { year: 2012, gdp: 750 },
  { year: 2022, gdp: 1672 },
  { year: 2023, gdp: 1833 },
  { year: 2024, gdp: 1992 },
];

const regionalGDPData = [
  { year: '2020', eastTimor: 1631, cambodia: 2081, laos: 2583, myanmar: 1490 },
  { year: '2021', eastTimor: 2685, cambodia: 2167, laos: 2526, myanmar: 1242 },
  { year: '2022', eastTimor: 2343, cambodia: 2325, laos: 2046, myanmar: 1158 },
  { year: '2023', eastTimor: 1502, cambodia: 2429, laos: 2066, myanmar: 1233 },
  { year: '2024', eastTimor: 1332, cambodia: 2627, laos: 2124, myanmar: 1359 },
];

const inflationData = [
  { year: '2020', inflation: 0.5 },
  { year: '2021', inflation: 3.7 },
  { year: '2022', inflation: 7.0 },
  { year: '2023', inflation: 8.4 },
  { year: '2024', inflation: 2.1 },
];

export function Economy() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
      <SectionHeader
        title="Economy Overview"
        subtitle="Total GDP figures are dominated by oil sector volatility. Non-oil GDP growth is the correct measure of the real economy's performance — and it has grown consistently at 4–5% annually."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
          marginBottom: '80px',
        }}
      >
        <StatCard value="$1.99B" label="Non-oil GDP 2024 (P)" note="IMF Article IV — growing steadily" />
        <StatCard value="4.8%" label="Non-oil GDP growth 2020–2024" note="Consistent despite oil collapse" />
        <StatCard value="1.2%" label="Avg non-oil GDP per capita growth, 2002–2023" note="IMF — very low in real terms" />
        <StatCard value="2.1%" label="Inflation 2024" note="Down from 8.4% peak in 2023" />
      </div>

      <div
        style={{
          backgroundColor: '#F5F3EF',
          borderLeft: '3px solid #C9A97A',
          padding: '20px 24px',
          marginBottom: '64px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '14px',
          color: '#6B6B6B',
          lineHeight: 1.6,
        }}
      >
        <strong style={{ color: '#1A1A1A' }}>Why total GDP is misleading:</strong> Total GDP swings wildly based on oil production timing —
        +31.7% in 2020, then −20.5% in 2022. This reflects accounting changes, not economic reality.
        Non-oil GDP is East Timor's actual productive economy and has grown steadily at 4–5% annually.
      </div>

      {/* Chart 1 — Non-Oil GDP Growth */}
      <ChartWrapper
        title="Non-Oil GDP Real Growth Rate (%)"
        citation="Source: IMF Article IV Consultations 2010/2019/2023/2025; World Bank DataBank NY.GDP.MKTP.KD.ZG. 2006 = political crisis year. 2023–2024 = estimated/projected."
      >
        <ResponsiveContainer width="100%" height={340}>
          <LineChart data={nonOilGrowthData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }}
            />
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Non-oil GDP growth']}
              contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }}
            />
            <ReferenceLine y={0} stroke="#6B6B6B" strokeWidth={1} />
            <ReferenceLine x={2006} stroke="#8B3A3A" strokeDasharray="3 3" label={{ value: '2006 crisis', position: 'top', fontSize: 10, fill: '#8B3A3A' }} />
            <Line type="monotone" dataKey="growth" stroke="#1A1A1A" strokeWidth={2} dot={{ r: 3, fill: '#1A1A1A' }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* Chart 2 — Non-Oil GDP Value */}
      <ChartWrapper
        title="Non-Oil GDP Value (USD Millions)"
        citation="Source: IMF Article IV Consultations. 2011 = projected in original source. 2012 = approximate. 2023 (E), 2024 (P)."
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={nonOilGDPValueData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis
              tickFormatter={(v) => `$${v}M`}
              tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }}
            />
            <Tooltip
              formatter={(value: number) => [`$${value}M`, 'Non-oil GDP']}
              contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }}
            />
            <Line type="monotone" dataKey="gdp" stroke="#2D6A4F" strokeWidth={2} dot={{ r: 3, fill: '#2D6A4F' }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* Chart 3 — Regional Comparison */}
      <ChartWrapper
        title="GDP Per Capita — Regional Comparison (USD)"
        citation="Source: World Bank DataBank NY.GDP.PCAP.CD — East Timor (TL), Cambodia (KH), Laos (LA), Myanmar (MM). East Timor 2024 total GDP figure; non-oil GDP per capita ~$1,454."
      >
        <div style={{ marginBottom: '16px', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B' }}>
          Despite $25.45B in cumulative petroleum revenues, East Timor's non-oil GDP per capita remains lowest in this peer group.
        </div>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={regionalGDPData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis
              tickFormatter={(v) => `$${v}`}
              tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }}
            />
            <Tooltip
              formatter={(value: number, name: string) => {
                const labels: Record<string, string> = { eastTimor: 'East Timor', cambodia: 'Cambodia', laos: 'Laos', myanmar: 'Myanmar' };
                return [`$${value}`, labels[name] || name];
              }}
              contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }}
            />
            <Legend
              formatter={(value) => {
                const labels: Record<string, string> = { eastTimor: 'East Timor', cambodia: 'Cambodia', laos: 'Laos', myanmar: 'Myanmar' };
                return labels[value] || value;
              }}
              wrapperStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px' }}
            />
            <Bar dataKey="eastTimor" fill="#1A1A1A" />
            <Bar dataKey="cambodia" fill="#C9A97A" />
            <Bar dataKey="laos" fill="#9B9B9B" />
            <Bar dataKey="myanmar" fill="#6B6B6B" />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* Chart 4 — Inflation */}
      <ChartWrapper
        title="Inflation Rate (%)"
        citation="Source: World Bank DataBank FP.CPI.TOTL.ZG. East Timor uses USD — no independent monetary policy. Inflation is largely imported. IMF (Sept 2025): fell to -0.2% YoY by May 2025."
      >
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={inflationData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }}
            />
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Inflation']}
              contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }}
            />
            <Bar dataKey="inflation" name="Inflation">
              {inflationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.inflation > 5 ? '#8B3A3A' : '#2D6A4F'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* IMF Projections */}
      <div style={{ border: '1px solid #E8E4DC', padding: '32px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '20px', fontWeight: 500, marginBottom: '16px' }}>
          IMF Growth Projections
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[{ year: '2024', val: '4.1%', note: 'actual' }, { year: '2025', val: '3.9%', note: 'projected' }, { year: '2026', val: '3.3%', note: 'projected' }].map(item => (
            <div key={item.year}>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '28px', color: '#1A1A1A' }}>{item.val}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.year} — {item.note}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', marginTop: '20px', lineHeight: 1.6 }}>
          Source: IMF Article IV Consultation September 2025. ASEAN accession partly offsets fiscal drag in 2025–2026 projections. Non-oil GDP basis.
        </p>
      </div>
    </div>
  );
}
