import { SectionHeader } from '../components/SectionHeader';

interface GeoCardProps {
  title: string;
  flag?: string;
  items: Array<{ label?: string; text: string }>;
  highlight?: string;
  highlightColor?: string;
}

function GeoCard({ title, flag, items, highlight, highlightColor = '#C9A97A' }: GeoCardProps) {
  return (
    <div style={{ border: '1px solid #E8E4DC', padding: '28px 32px', marginBottom: '24px' }}>
      <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', fontWeight: 500, color: '#1A1A1A', marginBottom: '4px' }}>
        {flag && <span style={{ marginRight: '8px' }}>{flag}</span>}{title}
      </h3>
      {highlight && (
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: highlightColor, marginBottom: '20px', fontWeight: 500 }}>
          {highlight}
        </div>
      )}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: 1.7, marginBottom: '8px', display: 'flex', gap: '8px' }}>
            {item.label && <strong style={{ color: '#6B6B6B', flexShrink: 0 }}>{item.label}:</strong>}
            <span style={{ color: '#6B6B6B' }}>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GeopoliticalContext() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
      <SectionHeader
        title="Geopolitical Context"
        subtitle="ASEAN member since October 2025. BRI signatory since 2017. Australia's nearest maritime neighbor. Indonesia's colonial aftermath still shapes the economy. East Timor's foreign policy is a careful balancing act."
      />

      <GeoCard
        title="ASEAN Membership"
        highlight="Full member since October 26, 2025 — 11th member, first expansion since Cambodia 1999"
        items={[
          { label: 'Process', text: 'Applied 2011 → Observer 2022 → Roadmap 2023 → Full membership October 26, 2025 at 47th ASEAN Summit, Kuala Lumpur' },
          { label: 'Key figure', text: 'Malaysian PM Anwar Ibrahim drove consensus as 2025 ASEAN chair. PM Xanana: "Today history is made."' },
          { label: 'Opportunities', text: 'ASEAN free trade agreements, regional investment networks, diplomatic standing, access to ASEAN infrastructure funds' },
          { label: 'Challenge', text: 'Smallest and least developed economy in ASEAN. Oil production ceased same year as accession. Private sector underdeveloped. Capacity to meet institutional commitments questioned.' },
          { label: 'IMF view', text: 'Article IV September 2025: ASEAN accession partly offsets fiscal drag in 2025–2026 projections' },
          { label: 'US response', text: 'Secretary Rubio congratulated accession October 26, 2025. France and EU also congratulated.' },
        ]}
        highlightColor="#2D6A4F"
      />

      <GeoCard
        title="China"
        highlight="BRI signatory 2017. $943M Tasi Mane contract. New BRI plan 2024. No formal debt."
        items={[
          { label: '2017', text: 'Signed Belt and Road Initiative' },
          { label: '2024', text: 'New BRI cooperation plan signed (China Daily January 2025)' },
          { label: 'Tasi Mane', text: '$943M contract with China Civil Engineering Construction (unit of China Railway Construction) for LNG plant at Beaço — signed 2019 (SCMP)' },
          { label: 'Debt position', text: 'No AIIB loans taken — East Timor has avoided formal debt trap instruments' },
          { label: "La'o Hamutuk 2021", text: "China's total aid ~3% of all aid received; almost entirely benefited Chinese companies, not local economy" },
          { label: 'Ramos-Horta', text: 'Described China as strategic balancing partner against Western conditionality (Shangri-La Dialogue 2022)' },
          { label: '2019', text: 'Chinese warships hosted in ports — raised concerns about strategic footprint' },
        ]}
      />

      <GeoCard
        title="Australia"
        highlight="Largest bilateral development partner. Primary defense relationship. Maritime boundary history is complicated."
        items={[
          { label: '2006', text: 'CMATS treaty — temporarily split Sunrise revenues 50/50, suspended development' },
          { label: '2013', text: 'Spying scandal — Australia bugged East Timor cabinet during CMATS treaty negotiations' },
          { label: '2016', text: 'East Timor initiated UNCLOS compulsory conciliation — unprecedented move against a neighbor' },
          { label: 'March 2018', text: 'Permanent Maritime Boundary Treaty — more favorable for East Timor (70/30 Sunrise split)' },
          { label: 'Sunrise split', text: '70% East Timor, 30% Australia — pipeline route still unresolved' },
          { label: 'Current', text: 'Cooperative relationship. Australia = largest bilateral development partner, primary defense partner' },
        ]}
        highlightColor="#1A1A1A"
      />

      <GeoCard
        title="Indonesia"
        highlight="Largest neighbor. Shares land border. 24-year occupation ended 1999."
        items={[
          { label: 'Geography', text: 'Largest neighbor. Land border on Timor island. Oecusse exclave surrounded by Indonesian territory — a logistical and political complexity.' },
          { label: 'History', text: '1975–1999: Indonesian occupation (24 years). 1999: independence referendum, military withdrawal following international pressure.' },
          { label: 'Current', text: 'Cooperative diplomatic relationship. No active territorial disputes.' },
          { label: 'Economy', text: 'Most imports transit through Indonesia. Labor migration increasing as formal employment remains scarce domestically.' },
        ]}
      />

      <GeoCard
        title="Portugal"
        highlight="400+ years colonial power. Portuguese co-official language. CPLP membership."
        items={[
          { label: 'History', text: '400+ years colonial power until 1975, when Indonesia invaded during Portuguese decolonization.' },
          { label: 'Language', text: 'Portuguese official language alongside Tetum — creates education and ASEAN integration challenges. Most ASEAN business is in English.' },
          { label: 'CPLP', text: 'Community of Portuguese-speaking countries: Brazil, Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé, Equatorial Guinea' },
          { label: 'Current', text: 'Development assistance and judicial system support ongoing. Portugal championed East Timor at the UN during independence struggle.' },
        ]}
        highlightColor="#6B6B6B"
      />

      <GeoCard
        title="US & Multilateral Partners"
        highlight="Limited direct US engagement. World Bank and IMF are the primary multilateral relationships."
        items={[
          { label: 'US', text: "Secretary Rubio congratulated ASEAN accession October 26, 2025. Millennium Challenge Corporation (MCC) programs active. Strategic interest as counterweight to Chinese influence." },
          { label: 'World Bank', text: 'Major technical assistance partner. February 13, 2025: "Transforming Public Spending for a More Prosperous Timor-Leste" — key analytical document.' },
          { label: 'IMF', text: 'Annual Article IV consultations. September 2025 most recent. Primary fiscal sustainability monitor.' },
          { label: 'UNDP', text: 'Supported municipal data portal (portal.municipio.gov.tl). HDR data collection. Human capital programming.' },
          { label: 'WFP', text: 'Food security programming. Social registry (RSU) with machine learning launched June 2026 — East Timor first AI initiative in social sector.' },
          { label: 'ADB', text: 'Infrastructure and private sector development programs.' },
          { label: 'KOICA', text: 'Korean International Cooperation Agency — donor to WFP Country Strategic Plan 2026–2030.' },
        ]}
        highlightColor="#6B6B6B"
      />
    </div>
  );
}
