import { SectionHeader } from '../components/SectionHeader';

interface DebateProps {
  title: string;
  description: string;
  forPoints: string[];
  againstPoints: string[];
  status: string;
  statusColor?: string;
}

function DebateCard({ title, description, forPoints, againstPoints, status, statusColor = '#C9A97A' }: DebateProps) {
  return (
    <div style={{ border: '1px solid #E8E4DC', marginBottom: '48px' }}>
      <div style={{ padding: '28px 32px', borderBottom: '1px solid #E8E4DC' }}>
        <h3 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '26px', fontWeight: 500, color: '#1A1A1A', marginBottom: '10px' }}>
          {title}
        </h3>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#6B6B6B', lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: '#E8E4DC' }}>
        <div style={{ backgroundColor: '#FAFAF8', padding: '28px 32px' }}>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#2D6A4F', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '16px' }}>
            FOR
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {forPoints.map((point, i) => (
              <li key={i} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: 1.6, marginBottom: '10px', paddingLeft: '12px', borderLeft: '2px solid #2D6A4F' }}>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ backgroundColor: '#F5F3EF', padding: '28px 32px' }}>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#8B3A3A', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '16px' }}>
            AGAINST
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {againstPoints.map((point, i) => (
              <li key={i} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#1A1A1A', lineHeight: 1.6, marginBottom: '10px', paddingLeft: '12px', borderLeft: '2px solid #8B3A3A' }}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ padding: '20px 32px', borderTop: '1px solid #E8E4DC', backgroundColor: '#FAFAF8' }}>
        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6B6B6B' }}>STATUS: </span>
        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: statusColor }}>{status}</span>
      </div>
    </div>
  );
}

export function PolicyDebates() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
      <SectionHeader
        title="Key Policy Debates"
        subtitle="The three defining choices that will determine East Timor's fiscal future. Lafaek presents the evidence on both sides without advocacy."
      />

      <DebateCard
        title="Tasi Mane Project"
        description="$13–16B petroleum processing infrastructure on the south coast — LNG plant at Beaço, refinery, supply base, and pipeline from Greater Sunrise. The biggest investment decision in East Timor's history."
        forPoints={[
          'ACIL Allen estimate: $13.2B cost vs $41.7B projected profit over project life',
          'Sovereign industrial capacity — processed LNG rather than raw gas export',
          'Infrastructure on south coast promotes regional development',
          'Government argues long-term diversification beyond petroleum dependence',
          '$943M contract with CCEC for LNG plant already signed — sunk cost argument',
        ]}
        againstPoints={[
          "La'o Hamutuk: $14–16B cost ≈ entire Petroleum Fund; risks entire national savings",
          'UN-backed conciliation commission: NEGATIVE 4% return on East Timor equity',
          'Timor Gap has valued Greater Sunrise stake at $0 since 2020 (ERCE valuation)',
          'Government amended Petroleum Activities Law to remove judicial oversight of projects >$5M',
          'No commercially agreed development plan with Woodside — first revenue minimum 2031',
          'Government disputes negative return finding but has provided no alternative analysis',
        ]}
        status="Hundreds of millions spent on preliminary works. No final investment decision. Commercial negotiations with Woodside ongoing."
        statusColor="#C9A97A"
      />

      <DebateCard
        title="Greater Sunrise: Pipeline vs FLNG"
        description="~5.13 trillion cubic feet of gas. East Timor holds 56.56%, Australia 43.44%. How this field is developed determines whether Tasi Mane is viable — and when East Timor sees any revenue."
        forPoints={[
          'East Timor position: Pipeline to south coast → domestic processing → sovereign control',
          '2018 Maritime Boundary Treaty secured 70% ownership (up from 50/50 CMATS)',
          'Pipeline + Tasi Mane = potential value-add through domestic processing',
          'Government: sovereign right to determine development pathway on its own territory',
          'Pipeline would create permanent infrastructure with broader economic utility',
        ]}
        againstPoints={[
          'Woodside position: Floating LNG (FLNG) → cheaper, faster, commercially viable',
          'Timor Gap valued own Greater Sunrise interest at $0 since 2020',
          "FLNG is operational technology — pipeline to Tasi Mane requires full Tasi Mane project",
          'Every year of negotiation delay = revenue not flowing while fund is drawn down',
          'First significant revenue: Q4 2030 at earliest even if agreed today',
          '2018 treaty resolved ownership, NOT pipeline route — legal dispute remains possible',
        ]}
        status="Development plan not agreed. Commercial negotiations ongoing. No timeline for resolution. Every year of delay narrows fiscal runway."
        statusColor="#8B3A3A"
      />

      <DebateCard
        title="Fiscal Consolidation vs Growth Spending"
        description="The core fiscal dilemma: reduce withdrawals from the Petroleum Fund to extend its life, or maintain/increase spending to drive economic growth before the fund runs out."
        forPoints={[
          'Government: High spending drives non-oil GDP growth (averaging 4.8%)',
          '2026 budget framed around ASEAN integration and diversification investment',
          'PM Xanana: Growth now prevents worse adjustment later',
          'Infrastructure investment has long-run payoff even if short-run deficits are high',
          'ASEAN membership (Oct 2025) opens new investment and trade channels',
        ]}
        againstPoints={[
          'IMF (Sept 2025): "Gradual fiscal consolidation needed to avoid PF depletion"',
          'World Bank (Feb 2025): Fund depleted by 2038 without consolidation',
          "MoF's own projection: depletion by 2034–2035 on current trajectory",
          '2024 withdrawal = 2.5× the ESI legal limit; 16 consecutive years of violations',
          'Real fund return (1.88%) is below the 3% ESI assumption — eroding the base',
          'Domestic revenue <12% of GDP — growth alone cannot replace petroleum revenue',
          'Greater Sunrise revenue at earliest 2031 — gap between depletion and revenue clear',
        ]}
        status="Unresolved. 2026 budget increases spending above prior averages. IMF and World Bank recommend consolidation. Government frames growth as the alternative."
        statusColor="#C9A97A"
      />

      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#9B9B9B', borderTop: '1px solid #E8E4DC', paddingTop: '24px' }}>
        Lafaek presents verified evidence on each side of these debates. The platform does not advocate for any position.
        Sources: La'o Hamutuk; IMF Article IV Consultations 2024/2025; World Bank February 2025; Ministry of Finance Annual Report 2024; ACIL Allen; RSIS; Irish Times.
      </div>
    </div>
  );
}
