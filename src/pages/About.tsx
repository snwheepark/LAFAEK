import { SectionHeader } from '../components/SectionHeader';

export function About() {
  const sources = [
    { name: 'World Bank DataBank', desc: 'GDP, population, education spending, health, unemployment indicators' },
    { name: 'IMF Article IV Consultations', desc: '2010, 2019, 2023, 2025 — fiscal sustainability, growth projections' },
    { name: 'Ministry of Finance — Petroleum Fund Annual Report 2024', desc: 'Fund balance, ESI, withdrawals, investment returns, Greater Sunrise loan' },
    { name: "La'o Hamutuk", desc: 'Budget analysis, petroleum fund index, policy critiques, primary source aggregation' },
    { name: 'ILO Country Profile Timor-Leste 2021–2022', desc: 'Labor market reality, informality, underutilization' },
    { name: 'WHO SEARO SDG Profile Timor-Leste (September 29, 2025)', desc: 'Health outcomes, maternal mortality, stunting, life expectancy' },
    { name: 'WFP Timor-Leste Country Brief May 2026', desc: 'Food security, nutrition, social registry' },
    { name: 'UNDP Human Development Report 2023', desc: 'HDI, subnational variation, GNI per capita' },
    { name: 'World Bank Human Capital Project — Timor-Leste Country Brief (October 2020)', desc: 'HCI, learning-adjusted years, test scores' },
    { name: 'EITI Timor-Leste', desc: 'Revenue transparency, petroleum dependency ratios' },
    { name: 'UNDP MPI Database', desc: 'Multidimensional poverty index' },
    { name: 'ASEAN Official Portal (October 26, 2025)', desc: 'ASEAN membership confirmation' },
    { name: 'Budget Transparency Portal (budgettransparency.gov.tl)', desc: 'Real-time budget execution data' },
    { name: 'ANP — Autoridade Nacional do Petróleo', desc: 'Bayu-Undan cessation confirmation June 4, 2025' },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
      <SectionHeader title="Why Lafaek Exists" />

      {/* Main narrative */}
      <div style={{ maxWidth: '720px', marginBottom: '80px' }}>
        <p style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 400, color: '#1A1A1A', lineHeight: 1.6, marginBottom: '32px' }}>
          East Timor has one of the most complex economic situations in the world. A $18B sovereign wealth
          fund. Oil production that just ceased. A fiscal cliff somewhere between 2027 and 2045.
          A population of 1.4 million with a median age of 19. And almost nowhere to find the
          data explained clearly.
        </p>

        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#6B6B6B', lineHeight: 1.8, marginBottom: '24px' }}>
          The data exists. The IMF publishes Article IV consultations. The Ministry of Finance publishes
          annual petroleum fund reports. The World Bank runs analyses. La'o Hamutuk has been tracking
          every number since 2000. The ILO has detailed labor market profiles. The WHO has SDG data.
          The WFP publishes monthly country briefs.
        </p>

        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#6B6B6B', lineHeight: 1.8, marginBottom: '24px' }}>
          What doesn't exist is a single place that aggregates it, verifies it against primary sources,
          flags where figures conflict, and presents it in a format usable by someone who needs to
          understand what's happening — a minister, a journalist, a researcher, an investor, a student.
        </p>

        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#6B6B6B', lineHeight: 1.8, marginBottom: '24px' }}>
          Lafaek is that place. Every figure on this platform is sourced to a named primary institution.
          Where sources conflict, we note it. Where data is estimated or projected, we mark it (E) or (P).
          Where headline figures are misleading — like unemployment rates in an 80% informal economy,
          or total GDP in an oil state — we explain exactly why and what to look at instead.
        </p>

        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#6B6B6B', lineHeight: 1.8, marginBottom: '24px' }}>
          The AI layer — Ask Lafaek — lets you query this knowledge base directly using Claude claude-sonnet-4-6.
          It responds in a structured policy brief format: executive summary, key data points, historical
          context, policy implications, and sources. It will not invent data. If information isn't in
          the knowledge base, it says so.
        </p>

        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#6B6B6B', lineHeight: 1.8 }}>
          Lafaek means "crocodile" in Tetum — the national symbol of East Timor. In Timorese legend,
          a young boy helped an exhausted crocodile reach the sea, and in gratitude the crocodile
          became the island of Timor-Leste. The platform takes its name from that story: careful,
          grounded, oriented toward the place.
        </p>
      </div>

      {/* What Lafaek is and isn't */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '28px', fontWeight: 500, marginBottom: '32px' }}>
          What this platform is — and isn't
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: '#E8E4DC', border: '1px solid #E8E4DC' }}>
          <div style={{ backgroundColor: '#FAFAF8', padding: '28px' }}>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#2D6A4F', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '16px' }}>LAFAEK IS</div>
            {[
              'A verified data aggregation platform — all figures sourced to named primary institutions',
              'Transparent about methodology — conflicts noted, projections marked (P), estimates marked (E)',
              'Neutral on policy debates — FOR and AGAINST positions presented with equal rigor',
              'Oriented toward practical use — written for ministers and analysts, not academics',
              'AI-assisted — Ask Lafaek uses Claude claude-sonnet-4-6 to query the knowledge base',
              'Updated — knowledge base current to June 2026',
            ].map((item, i) => (
              <div key={i} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: 1.6, marginBottom: '12px', paddingLeft: '12px', borderLeft: '2px solid #2D6A4F' }}>
                {item}
              </div>
            ))}
          </div>
          <div style={{ backgroundColor: '#F5F3EF', padding: '28px' }}>
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#8B3A3A', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '16px' }}>LAFAEK IS NOT</div>
            {[
              'An advocacy platform — Lafaek does not endorse fiscal consolidation or growth spending',
              'A substitute for primary sources — always verify against originals for official use',
              "La'o Hamutuk — the definitive civil society monitor of East Timor's petroleum sector",
              'The government — this is independent analysis, not official positions',
              'A real-time data feed — figures updated periodically, not live',
              'Comprehensive on all topics — certain data gaps are acknowledged honestly',
            ].map((item, i) => (
              <div key={i} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: 1.6, marginBottom: '12px', paddingLeft: '12px', borderLeft: '2px solid #8B3A3A' }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sources */}
      <div>
        <h2 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '28px', fontWeight: 500, marginBottom: '32px' }}>
          Primary Sources
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {sources.map((source, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: '24px',
                padding: '16px 0',
                borderBottom: i < sources.length - 1 ? '1px solid #E8E4DC' : 'none',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', fontWeight: 500, color: '#1A1A1A', width: '280px', flexShrink: 0, lineHeight: 1.4 }}>
                {source.name}
              </div>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#6B6B6B', lineHeight: 1.5 }}>
                {source.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
