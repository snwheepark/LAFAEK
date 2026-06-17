import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { SectionHeader } from '../components/SectionHeader';
import { StatCard } from '../components/StatCard';
import { ChartWrapper } from '../components/ChartWrapper';

const populationData = [
  { year: 2002, pop: 0.87 },
  { year: 2005, pop: 0.94 },
  { year: 2010, pop: 1.08 },
  { year: 2015, pop: 1.20 },
  { year: 2019, pop: 1.30 },
  { year: 2020, pop: 1.32 },
  { year: 2022, pop: 1.36 },
  { year: 2023, pop: 1.38 },
  { year: 2024, pop: 1.40 },
];

const youthUnemploymentData = [
  { year: '2021', total: 2.3, youth: 6.8 },
  { year: '2022', total: 1.5, youth: 4.8 },
  { year: '2023', total: 1.5, youth: 3.2 },
  { year: '2024', total: 1.5, youth: 3.2 },
  { year: '2025', total: 1.6, youth: 3.7 },
];

export function PopulationLabor() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
      <SectionHeader
        title="Population & Labor"
        subtitle="1.40 million people. Median age 19. The headline unemployment rate of 1.5% is almost meaningless — 80.6% of employment is informal, and labor underutilization reaches 35–40% for youth."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', marginBottom: '80px' }}>
        <StatCard value="1.40M" label="Population 2024" note="World Bank DataBank" />
        <StatCard value="~19" label="Median age" note="~40% of population under 15" />
        <StatCard value="80.6%" label="Informal employment rate" note="2021 — ILO Country Profile" />
        <StatCard value="42%" label="Workforce in subsistence agriculture" note="ILO 2021-2022" />
        <StatCard value="15%" label="Youth in formal employment" note="vs 99% of foreign-born workers" />
      </div>

      {/* Chart 1 — Population */}
      <ChartWrapper
        title="Population Growth 2002–2024 (Millions)"
        citation="Source: World Bank DataBank SP.POP.TOTL, SP.POP.GROW. Growth rate ~1.9% declining to ~1.2% by 2024. WFP May 2026 Country Brief uses 1.3 million figure."
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={populationData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 11, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis
              tickFormatter={(v) => `${v}M`}
              tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }}
              domain={[0.7, 1.6]}
            />
            <Tooltip
              formatter={(value: number) => [`${value}M`, 'Population']}
              contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }}
            />
            <Line type="monotone" dataKey="pop" stroke="#1A1A1A" strokeWidth={2} dot={{ r: 3, fill: '#1A1A1A' }} />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* Labor Market Reality — two-panel HTML layout */}
      <div style={{ marginBottom: '64px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 500, marginBottom: '24px' }}>
          Labor Market Reality
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: '#E8E4DC', border: '1px solid #E8E4DC', marginBottom: '8px' }}>
          {/* Panel A */}
          <div style={{ backgroundColor: '#FAFAF8', padding: '32px' }}>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>
              Headline figures (ILO modeled)
            </div>
            {[
              { label: 'Total unemployment rate', value: '1.5%', note: '2023–2024' },
              { label: 'Youth unemployment rate', value: '3.2%', note: '2023–2024' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid #E8E4DC' }}>
                <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '32px', color: '#2D6A4F' }}>{item.value}</div>
                <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B' }}>{item.label} — {item.note}</div>
              </div>
            ))}
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#9B9B9B', fontStyle: 'italic' }}>
              These figures count only those actively seeking work within the ILO definition.
              In a subsistence economy, most people are not classified as unemployed.
            </div>
          </div>
          {/* Panel B */}
          <div style={{ backgroundColor: '#F5F3EF', padding: '32px' }}>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>
              Real picture (ILO Country Profile 2021–2022)
            </div>
            {[
              { label: 'Informal employment rate', value: '80.6%', color: '#8B3A3A' },
              { label: 'Labour underutilization (LU4)', value: '22.0%', color: '#8B3A3A', note: '~35–40% for youth' },
              { label: 'Workforce in subsistence agriculture', value: '42%', color: '#C9A97A' },
              { label: 'Youth in formal sector', value: '15%', color: '#C9A97A' },
              { label: 'Foreign-born workers in formal sector', value: '99%', color: '#1A1A1A' },
            ].map(item => (
              <div key={item.label} style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid #E8E4DC' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '26px', color: item.color, flexShrink: 0 }}>{item.value}</div>
                  <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B' }}>
                    {item.label}
                    {item.note && <span style={{ display: 'block', color: '#9B9B9B', fontSize: '11px' }}>{item.note}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: '10px', fontFamily: 'Inter, system-ui, sans-serif', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Source: ILO Country Profile Timor-Leste 2021–2022 (ilostat.ilo.org); World Bank DataBank SL.UEM.TOTL.ZS
        </p>
      </div>

      {/* Chart 3 — Youth Unemployment */}
      <ChartWrapper
        title="Unemployment Rates: Total vs Youth (%)"
        citation="Source: World Bank DataBank SL.UEM.TOTL.ZS; SL.UEM.1524.ZS (ILO modeled estimates). These headline figures substantially understate true labor market stress in a predominantly informal economy."
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={youthUnemploymentData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis
              tickFormatter={(v) => `${v}%`}
              tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }}
            />
            <Tooltip
              formatter={(value: number, name: string) => [`${value}%`, name === 'total' ? 'Total unemployment' : 'Youth unemployment']}
              contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }}
            />
            <Line type="monotone" dataKey="youth" stroke="#C9A97A" strokeWidth={2} dot={{ r: 3 }} name="youth" />
            <Line type="monotone" dataKey="total" stroke="#1A1A1A" strokeWidth={2} dot={{ r: 3 }} name="total" strokeDasharray="4 4" />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>

      <div style={{ backgroundColor: '#F5F3EF', borderLeft: '3px solid #C9A97A', padding: '24px 28px' }}>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: 1.6, marginBottom: 0 }}>
          <strong>The structural trap:</strong> Tax base expansion requires labor market formalization.
          But formalization requires private sector investment. Private sector investment is constrained by
          infrastructure gaps, skills gaps, and a regulatory environment built around petroleum dependence.
          80.6% of workers outside the formal system means most economic activity is untaxed — keeping
          domestic revenue below 12% of GDP despite 25 years of petroleum wealth.
        </p>
      </div>
    </div>
  );
}
