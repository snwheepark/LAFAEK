import { SectionHeader } from '../components/SectionHeader';
import { StatCard } from '../components/StatCard';

const budgetTimeline = [
  { year: '~2004', amount: '$70M' },
  { year: '~2009', amount: '$680M' },
  { year: '~2012', amount: '$1.8B' },
  { year: '~2017', amount: '$1.3B' },
  { year: '2024', amount: '$2.257B' },
  { year: '2025', amount: '$2.2B' },
  { year: '2026', amount: '$2.546B' },
];

export function GovernmentBudget() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
      <SectionHeader
        title="Government Budget"
        subtitle="East Timor spends an average 85% of GDP — one of the world's highest ratios. Funded almost entirely by petroleum fund withdrawals. Domestic revenue has never exceeded 12% of GDP."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', marginBottom: '80px' }}>
        <StatCard value="85.3%" label="Avg public expenditure % of GDP (2014–2024)" note="World Bank Feb 2025" />
        <StatCard value="39.6%" label="Avg fiscal deficit % of GDP (2014–2024)" note="World Bank Feb 2025" />
        <StatCard value="<12%" label="Domestic revenue as % of GDP" note="Consistently — IMF Article IV" />
        <StatCard value="69.2%" label="Budget execution rate 2024" note="$1.56B of $2.26B approved — MoF" />
        <StatCard value="$2.546B" label="Approved budget 2026" note="Projects spending ~90% of GDP" />
      </div>

      {/* Budget Timeline */}
      <div style={{ marginBottom: '64px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 500, marginBottom: '24px' }}>
          Budget Growth Trajectory
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {budgetTimeline.map((item, i) => (
            <div
              key={item.year}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '24px',
                padding: '16px 0',
                borderBottom: i < budgetTimeline.length - 1 ? '1px solid #E8E4DC' : 'none',
              }}
            >
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', width: '60px', flexShrink: 0 }}>
                {item.year}
              </div>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', color: '#1A1A1A', width: '100px', flexShrink: 0 }}>
                {item.amount}
              </div>
              <div
                style={{
                  height: '8px',
                  backgroundColor: '#1A1A1A',
                  width: `${Math.min(100, (parseFloat(item.amount.replace(/[^0-9.]/g, '')) / 2.546) * 100)}%`,
                  opacity: 0.15 + (i / budgetTimeline.length) * 0.85,
                }}
              />
            </div>
          ))}
        </div>
        <p style={{ fontSize: '10px', fontFamily: 'Inter, system-ui, sans-serif', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '8px' }}>
          Source: La'o Hamutuk OGE index (laohamutuk.org/econ/OGE/OGEindex.htm)
        </p>
      </div>

      {/* Budget Execution */}
      <div style={{ marginBottom: '64px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 500, marginBottom: '24px' }}>
          Budget Execution
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: '#E8E4DC', border: '1px solid #E8E4DC', marginBottom: '12px' }}>
          {/* 2024 */}
          <div style={{ backgroundColor: '#FAFAF8', padding: '28px' }}>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>2024</div>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', marginBottom: '4px' }}>Approved</div>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '26px', color: '#1A1A1A' }}>$2.258B</div>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', marginBottom: '4px' }}>Actual spending</div>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '26px', color: '#1A1A1A' }}>$1.564B</div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', marginBottom: '4px' }}>Execution rate</div>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '36px', color: '#C9A97A' }}>69.2%</div>
            </div>
            <div style={{ height: '8px', backgroundColor: '#E8E4DC', borderRadius: 0 }}>
              <div style={{ height: '8px', backgroundColor: '#C9A97A', width: '69.2%' }} />
            </div>
          </div>
          {/* 2026 mid-year */}
          <div style={{ backgroundColor: '#F5F3EF', padding: '28px' }}>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>2026 (mid-year)</div>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', marginBottom: '4px' }}>Approved</div>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '26px', color: '#1A1A1A' }}>$2.546B</div>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', marginBottom: '4px' }}>Collected mid-year</div>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '26px', color: '#1A1A1A' }}>$612M</div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B', marginBottom: '4px' }}>Execution rate</div>
              <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '36px', color: '#8B3A3A' }}>24%</div>
            </div>
            <div style={{ height: '8px', backgroundColor: '#E8E4DC' }}>
              <div style={{ height: '8px', backgroundColor: '#8B3A3A', width: '24%' }} />
            </div>
          </div>
        </div>
        <p style={{ fontSize: '10px', fontFamily: 'Inter, system-ui, sans-serif', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Source: Timor-Leste Budget Transparency Portal, Ministry of Finance (budgettransparency.gov.tl), June 2026
        </p>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', marginTop: '12px', lineHeight: 1.6, maxWidth: '640px' }}>
          Pattern: Government routinely approves ambitious budgets and fails to execute them, particularly
          infrastructure and capital spending. The gap between approved and actual expenditure has been persistent since independence.
        </p>
      </div>

      {/* Recurrent Spending */}
      <div style={{ border: '1px solid #E8E4DC', padding: '32px', marginBottom: '40px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 500, marginBottom: '20px' }}>
          Major Recurrent Spending Items
        </h3>
        {[
          {
            label: 'Electricity subsidies',
            values: ['$146M/year avg (2019–2023)', '$174M (2024)', '$202M proposed (2025)'],
            note: 'Largest single recurrent item. Near-universal electricity subsidy.',
          },
          {
            label: 'Veterans Pension',
            values: ['~$100M/year', '~28,000 beneficiaries', '>$1B total past decade'],
            note: 'Social protection = 7% of non-oil GDP, but excluding veterans = ~3% (ASEAN avg). Distorts social spending comparison.',
          },
        ].map(item => (
          <div key={item.label} style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #E8E4DC' }}>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', fontWeight: 500, color: '#1A1A1A', marginBottom: '8px' }}>{item.label}</div>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '8px' }}>
              {item.values.map(v => (
                <div key={v} style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '20px', color: '#1A1A1A' }}>{v}</div>
              ))}
            </div>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#6B6B6B' }}>{item.note}</div>
          </div>
        ))}
        <p style={{ fontSize: '10px', fontFamily: 'Inter, system-ui, sans-serif', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Source: La'o Hamutuk budget analyses; World Bank "Transforming Public Spending" February 13, 2025
        </p>
      </div>

      {/* 2026 Context */}
      <div style={{ backgroundColor: '#F5F3EF', borderLeft: '3px solid #C9A97A', padding: '24px 28px' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '20px', fontWeight: 500, marginBottom: '12px' }}>
          2026/2027 Budget Context
        </h3>
        <ul style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', lineHeight: 1.8, paddingLeft: '20px' }}>
          <li>New Budget Framework Law 3/2025 and Decree-Law 42/2025 — reformed budget methodology</li>
          <li>PM Xanana Gusmão budget seminar June 12, 2026: <em>"Strengthening Resilience through Transformation: Diversifying the Economy for a Sustainable Future"</em></li>
          <li>Ministry of Finance held public consultations in all 13 municipalities May 2026</li>
          <li>2026 budget projects spending ~90% of GDP, deficits {'>'}50% — exceeding all prior averages</li>
          <li>Domestic revenue target: still below 12% of GDP — structural problem unchanged</li>
        </ul>
        <p style={{ fontSize: '10px', fontFamily: 'Inter, system-ui, sans-serif', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '12px' }}>
          Source: La'o Hamutuk OGE27; MoF June 2026
        </p>
      </div>
    </div>
  );
}
