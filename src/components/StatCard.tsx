interface StatCardProps {
  value: string;
  label: string;
  note?: string;
}

export function StatCard({ value, label, note }: StatCardProps) {
  return (
    <div style={{ paddingBottom: '24px', borderBottom: '1px solid #E8E4DC' }}>
      <div
        style={{
          fontFamily: 'EB Garamond, Georgia, serif',
          fontSize: '40px',
          fontWeight: 500,
          color: '#1A1A1A',
          lineHeight: 1.1,
          marginBottom: '6px',
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '13px',
          color: '#6B6B6B',
          fontWeight: 400,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}
      >
        {label}
      </div>
      {note && (
        <div
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '11px',
            color: '#9B9B9B',
            marginTop: '4px',
          }}
        >
          {note}
        </div>
      )}
    </div>
  );
}
