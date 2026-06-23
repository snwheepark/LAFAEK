import { Link } from 'react-router-dom';
import { StatCard } from '../components/StatCard';
import lafaekLogo from '../assets/lafaek-logo.png';

const sections = [
  { to: '/petroleum-fund', title: 'Petroleum Fund', desc: '$18.274B balance. 16 consecutive years of ESI violations. Fiscal cliff scenarios 2027–2045.' },
  { to: '/economy', title: 'Economy Overview', desc: 'Non-oil GDP growing at 4.8% while total GDP collapses. Regional comparison. Inflation data.' },
  { to: '/population-labor', title: 'Population & Labor', desc: '1.40M people. Median age 19. 80.6% informal employment. Youth underutilization ~35-40%.' },
  { to: '/human-development', title: 'Human Development', desc: 'HDI 0.566, rank 155/193. Stunting 30%. Maternal mortality down 76% since 2000.' },
  { to: '/government-budget', title: 'Government Budget', desc: 'Spending avg 85% of GDP. Fiscal deficit avg 39.6%. 69.2% execution rate in 2024.' },
  { to: '/policy-debates', title: 'Key Policy Debates', desc: 'Tasi Mane Project. Greater Sunrise pipeline vs FLNG. Fiscal consolidation vs growth.' },
  { to: '/geopolitical-context', title: 'Geopolitical Context', desc: 'ASEAN member since October 26, 2025. China BRI. Australia maritime boundary. US engagement.' },
  { to: '/about', title: 'Why Lafaek?', desc: 'Data sources, methodology, and the gap this platform fills.' },
];

export function Home() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
      {/* Hero */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100vh - 56px)',
        gap: '48px',
        marginBottom: '96px',
      }}>
        {/* Left — text */}
        <div style={{ flex: '1 1 0', minWidth: 0 }}>
          <h1 style={{
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: '108px',
            fontWeight: 500,
            color: '#1A1A1A',
            lineHeight: 0.95,
            letterSpacing: '-1px',
            margin: '0 0 8px 0',
          }}>
            Lafaek
          </h1>
          <p style={{
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: '32px',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.25,
            margin: '0 0 20px 0',
            maxWidth: '540px',
          }}>
            East Timor's economy. Finally explained.
          </p>
          <p style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '15px',
            color: '#6B6B6B',
            maxWidth: '480px',
            lineHeight: 1.7,
            margin: '0 0 32px 0',
          }}>
            25 years of verified economic data from the IMF, World Bank, Ministry of Finance, La'o Hamutuk,
            WHO, WFP, and ILO — organized for analysts, journalists, and policymakers.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              to="/ask"
              style={{
                display: 'inline-block',
                padding: '11px 28px',
                backgroundColor: '#1A1A1A',
                color: '#FAFAF8',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Ask Lafaek
            </Link>
            <Link
              to="/petroleum-fund"
              style={{
                display: 'inline-block',
                padding: '11px 28px',
                border: '1px solid #E8E4DC',
                color: '#1A1A1A',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                textDecoration: 'none',
              }}
            >
              Explore the data
            </Link>
          </div>
        </div>

        {/* Right — logo */}
        <div style={{ flex: '0 0 420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={lafaekLogo}
            alt="Lafaek crocodile"
            style={{ width: '420px', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Key stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '96px',
        }}
      >
        <StatCard value="$18.274B" label="Petroleum Fund balance" note="End 2024 — Ministry of Finance" />
        <StatCard value="2035" label="MoF fiscal cliff projection" note="Under current spending trajectory" />
        <StatCard value="1.40M" label="Population" note="2024 — World Bank" />
        <StatCard value="0.566" label="HDI score" note="2022, rank 155/193 — UNDP" />
      </div>

      {/* Section links */}
      <div style={{ marginBottom: '48px' }}>
        <h2
          style={{
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: '28px',
            fontWeight: 500,
            color: '#1A1A1A',
            marginBottom: '40px',
          }}
        >
          Explore the platform
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1px',
            backgroundColor: '#E8E4DC',
            border: '1px solid #E8E4DC',
          }}
        >
          {sections.map((section) => (
            <Link
              key={section.to}
              to={section.to}
              style={{
                display: 'block',
                padding: '28px 32px',
                backgroundColor: '#FAFAF8',
                textDecoration: 'none',
                transition: 'background-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F5F3EF';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#FAFAF8';
              }}
            >
              <div
                style={{
                  fontFamily: 'EB Garamond, Georgia, serif',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginBottom: '8px',
                }}
              >
                {section.title}
              </div>
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '13px',
                  color: '#6B6B6B',
                  lineHeight: 1.5,
                }}
              >
                {section.desc}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div
        style={{
          borderTop: '1px solid #E8E4DC',
          paddingTop: '32px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '12px',
          color: '#9B9B9B',
        }}
      >
        Lafaek means "crocodile" in Tetum — the national symbol of East Timor, said to have become the island itself.
        All data from primary institutional sources. Last knowledge base update: June 2026.
      </div>
    </div>
  );
}
