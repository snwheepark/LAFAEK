interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '48px' }}>
      <h2
        style={{
          fontFamily: 'EB Garamond, Georgia, serif',
          fontSize: '36px',
          fontWeight: 500,
          color: '#1A1A1A',
          marginBottom: subtitle ? '12px' : '0',
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '15px',
            color: '#6B6B6B',
            lineHeight: 1.6,
            maxWidth: '680px',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
