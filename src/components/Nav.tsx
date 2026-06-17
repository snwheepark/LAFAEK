import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/petroleum-fund', label: 'Petroleum Fund' },
  { to: '/economy', label: 'Economy' },
  { to: '/population-labor', label: 'Population' },
  { to: '/human-development', label: 'Human Dev' },
  { to: '/government-budget', label: 'Budget' },
  { to: '/policy-debates', label: 'Policy' },
  { to: '/geopolitical-context', label: 'Geopolitics' },
  { to: '/about', label: 'About' },
];

export function Nav() {
  const location = useLocation();

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#FAFAF8',
        borderBottom: '1px solid #E8E4DC',
        padding: '0 48px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          height: '56px',
          maxWidth: '1200px',
          margin: '0 auto',
          overflowX: 'auto',
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: '22px',
            fontWeight: 600,
            color: '#1A1A1A',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          Lafaek
        </Link>

        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexShrink: 0 }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                color: location.pathname === link.to ? '#1A1A1A' : '#6B6B6B',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                borderBottom: location.pathname === link.to ? '1px solid #1A1A1A' : 'none',
                paddingBottom: location.pathname === link.to ? '1px' : '0',
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/ask"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              color: '#C9A97A',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              borderBottom: location.pathname === '/ask' ? '1px solid #C9A97A' : 'none',
              paddingBottom: location.pathname === '/ask' ? '1px' : '0',
            }}
          >
            Ask Lafaek
          </Link>
        </div>
      </div>
    </nav>
  );
}
