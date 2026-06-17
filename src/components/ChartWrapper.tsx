import { ReactNode } from 'react';
import { Citation } from './Citation';

interface ChartWrapperProps {
  title?: string;
  citation: string;
  children: ReactNode;
  minHeight?: number;
}

export function ChartWrapper({ title, citation, children, minHeight = 300 }: ChartWrapperProps) {
  return (
    <div style={{ marginBottom: '56px' }}>
      {title && (
        <h3
          style={{
            fontFamily: 'EB Garamond, Georgia, serif',
            fontSize: '22px',
            fontWeight: 500,
            color: '#1A1A1A',
            marginBottom: '24px',
          }}
        >
          {title}
        </h3>
      )}
      <div style={{ minHeight: `${minHeight}px`, width: '100%' }}>
        {children}
      </div>
      <Citation text={citation} />
    </div>
  );
}
