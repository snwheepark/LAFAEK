import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
} from 'recharts';
import { SectionHeader } from '../components/SectionHeader';
import { StatCard } from '../components/StatCard';
import { ChartWrapper } from '../components/ChartWrapper';

const educationSpendingData = [
  { year: '2017', pct: 7.2 },
  { year: '2018', pct: 6.8 },
  { year: '2019', pct: 4.2 },
  { year: '2020', pct: 3.7 },
  { year: '2021', pct: 3.0 },
  { year: '2023', pct: 5.2 },
];

const literacyData = [
  { year: '2015', rate: 64 },
  { year: '2016', rate: 66 },
  { year: '2022', rate: 69 },
];

export function HumanDevelopment() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
      <SectionHeader
        title="Human Development"
        subtitle="HDI rank 155 of 193, but significant progress since 2000 — life expectancy up 10.5 years, maternal mortality down 76%, stunting improving. The challenge is converting petroleum wealth into human capital."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '40px', marginBottom: '80px' }}>
        <StatCard value="0.566" label="HDI 2022" note="Rank 155/193 — UNDP HDR 2023" />
        <StatCard value="0.45" label="Human Capital Index 2020" note="Up from 0.41 in 2010 — World Bank" />
        <StatCard value="4.3 yrs" label="School years lost to quality failure" note="10.6 expected vs 6.3 learning-adjusted" />
        <StatCard value="30%" label="Stunting under-5s 2024" note="Down from 46% (2020) — still among Asia's highest" />
        <StatCard value="75%" label="Cannot afford nutritious diet" note="2023 cost-of-diet study — WFP" />
        <StatCard value="192" label="Maternal deaths per 100k (2023)" note="Down from 796 in 2000 — WHO 2025" />
      </div>

      {/* HDI Panel */}
      <div style={{ border: '1px solid #E8E4DC', padding: '32px', marginBottom: '56px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 500, marginBottom: '24px' }}>
          Human Development Index 2022
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '28px', marginBottom: '24px' }}>
          {[
            { label: 'HDI Score', value: '0.566', note: 'Medium human development' },
            { label: 'Global Rank', value: '155/193', note: 'East Asia & Pacific region' },
            { label: 'Change since 2000', value: '+14.3%', note: '0.495 → 0.566' },
            { label: 'Life expectancy gain', value: '+10.5 yrs', note: '2000–2022' },
          ].map(item => (
            <div key={item.label} style={{ paddingBottom: '16px', borderBottom: '1px solid #E8E4DC' }}>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '28px', color: '#1A1A1A', marginBottom: '4px' }}>{item.value}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#9B9B9B', marginTop: '2px' }}>{item.note}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', lineHeight: 1.6 }}>
          Notable anomaly: GNI per capita change 2000–2022 = <strong style={{ color: '#8B3A3A' }}>−46.9%</strong> — reflecting the oil sector's
          collapse in per capita terms as population grew. Human development improved despite this.
        </div>
      </div>

      {/* Subnational HDI */}
      <div style={{ marginBottom: '56px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 500, marginBottom: '24px' }}>
          Subnational HDI Variation
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[
            { municipality: 'Dili', hdi: '0.787', level: 'High', color: '#2D6A4F' },
            { municipality: 'National avg', hdi: '0.688', level: 'Medium', color: '#C9A97A' },
            { municipality: 'Ermera (lowest)', hdi: '0.605', level: 'Medium (low)', color: '#8B3A3A' },
          ].map(item => (
            <div key={item.municipality} style={{ flex: '1 1 180px', padding: '24px', border: '1px solid #E8E4DC' }}>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '32px', color: item.color, marginBottom: '4px' }}>{item.hdi}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#1A1A1A', fontWeight: 500 }}>{item.municipality}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', marginTop: '2px' }}>{item.level}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '10px', fontFamily: 'Inter, system-ui, sans-serif', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '8px' }}>
          Source: UNDP Human Development Report 2023
        </p>
      </div>

      {/* Education Spending */}
      <ChartWrapper
        title="Education Spending (% of GDP)"
        citation="Source: World Bank DataBank SE.XPD.TOTL.GD.ZS. Regional average ~4.7%. Gross primary enrollment 114–120% reflects grade repetition, not universal enrollment (net ~70–80%)."
      >
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={educationSpendingData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <Tooltip formatter={(value: number) => [`${value}%`, 'Education spending % GDP']} contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }} />
            <Bar dataKey="pct">
              {educationSpendingData.map((entry, index) => (
                <Cell key={index} fill={entry.pct < 4.7 ? '#C9A97A' : '#2D6A4F'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* Literacy */}
      <ChartWrapper
        title="Adult Literacy Rate, Ages 15+ (%)"
        citation="Source: World Bank DataBank. Data gaps between survey years are common in East Timor's statistical system."
      >
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={literacyData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E4DC" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <YAxis domain={[55, 75]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 12, fontFamily: 'Inter, system-ui, sans-serif', fill: '#6B6B6B' }} />
            <Tooltip formatter={(value: number) => [`${value}%`, 'Literacy rate']} contentStyle={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', border: '1px solid #E8E4DC', borderRadius: 0 }} />
            <Bar dataKey="rate" fill="#1A1A1A" />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>

      {/* Health outcomes */}
      <div style={{ border: '1px solid #E8E4DC', padding: '32px', marginBottom: '40px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 500, marginBottom: '24px' }}>
          Health Outcomes
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '24px' }}>
          {[
            { label: 'Life expectancy (2021)', value: '66.5M / 69.6F', note: 'WHO SEARO 2025' },
            { label: 'Maternal mortality (2023)', value: '192/100k', note: 'Down from 796 in 2000' },
            { label: 'Under-5 mortality', value: '~50/1,000', note: 'Down from 110.5 — WHO 2025' },
            { label: 'Skilled birth attendant', value: '69%', note: '2016 — up from 24% (2002)' },
            { label: 'Adult smoking 15+', value: '43%', note: '78% of men — vs 25% regional avg' },
            { label: 'UHC Index (2017)', value: '52/100', note: 'Regional avg 65' },
          ].map(item => (
            <div key={item.label} style={{ paddingBottom: '16px', borderBottom: '1px solid #E8E4DC' }}>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', color: '#1A1A1A', marginBottom: '4px' }}>{item.value}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#9B9B9B', marginTop: '2px' }}>{item.note}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '10px', fontFamily: 'Inter, system-ui, sans-serif', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Source: WHO SEARO SDG Profile Timor-Leste, September 29, 2025
        </p>
      </div>

      {/* Food Security */}
      <div style={{ backgroundColor: '#F5F3EF', borderLeft: '3px solid #8B3A3A', padding: '24px 28px', marginBottom: '40px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '20px', fontWeight: 500, marginBottom: '16px' }}>Food Security (WFP May 2026)</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
          {[
            { value: '75%', label: 'Cannot afford a nutritious diet', note: '2023 cost-of-diet study' },
            { value: '27%', label: 'Households acutely food-insecure', note: '2024 IPC analysis' },
            { value: '+78%', label: 'Food price increase since 2019', note: '' },
          ].map(item => (
            <div key={item.label}>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '28px', color: '#8B3A3A' }}>{item.value}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', lineHeight: 1.4 }}>{item.label}</div>
              {item.note && <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#9B9B9B' }}>{item.note}</div>}
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', marginTop: '20px', lineHeight: 1.6 }}>
          Government launching first national social registry (RSU) using machine learning and census data — June 2026.
          East Timor's first AI initiative in the social sector.
        </p>
      </div>

      {/* Poverty */}
      <div style={{ border: '1px solid #E8E4DC', padding: '32px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 500, marginBottom: '20px' }}>Poverty</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', marginBottom: '20px' }}>
          {[
            { value: '41.8%', label: 'Below national poverty line', note: '2014 — most recent survey' },
            { value: '24.4%', label: 'Extreme poverty (<$2.15/day)', note: 'World Bank' },
            { value: '0.222', label: 'Multidimensional Poverty Index', note: '48.3% multidim. poor' },
          ].map(item => (
            <div key={item.label} style={{ paddingBottom: '16px', borderBottom: '1px solid #E8E4DC' }}>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '28px', color: '#8B3A3A' }}>{item.value}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.label}</div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#9B9B9B' }}>{item.note}</div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', lineHeight: 1.6 }}>
          Poverty fell from 50.4% (2007) to 41.8% (2014) — progress made, but no survey since.
          For comparison: Indonesia MPI 0.014, Philippines MPI 0.024. Source: UNDP MPI database; World Bank.
        </p>
      </div>
    </div>
  );
}
