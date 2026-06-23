import lafaekLogo from '../assets/lafaek-logo.png';

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #E8E4DC',
      marginTop: '80px',
      padding: '48px 48px 40px',
      textAlign: 'center',
      backgroundColor: '#FAFAF8',
    }}>
      <img
        src={lafaekLogo}
        alt="Lafaek"
        style={{ width: '40px', height: '40px', objectFit: 'contain', marginBottom: '16px', opacity: 0.75 }}
      />
      <p style={{
        fontFamily: 'EB Garamond, Georgia, serif',
        fontSize: '16px',
        color: '#1A1A1A',
        marginBottom: '6px',
      }}>
        Lafaek — East Timor Economic Intelligence Platform
      </p>
      <p style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '12px',
        color: '#6B6B6B',
        marginBottom: '6px',
      }}>
        Free. Public. Built for East Timor.
      </p>
      <p style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '11px',
        color: '#9B9B9B',
      }}>
        © 2026 Lafaek. Data from IMF, World Bank, Ministry of Finance, La'o Hamutuk, WHO, WFP, ILO, UNDP, EITI.
      </p>
    </footer>
  );
}
