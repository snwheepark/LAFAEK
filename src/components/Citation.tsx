interface CitationProps {
  text: string;
}

export function Citation({ text }: CitationProps) {
  return (
    <p
      style={{
        fontSize: '10px',
        fontFamily: 'Inter, system-ui, sans-serif',
        color: '#6B6B6B',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginTop: '8px',
      }}
    >
      {text}
    </p>
  );
}
