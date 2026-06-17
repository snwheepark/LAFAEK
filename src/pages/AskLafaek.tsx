import { useState } from 'react';
import { queryLafaek } from '../api/query';

const SAMPLE_QUESTIONS = [
  'How long before the Petroleum Fund runs out?',
  'What is the real unemployment rate in East Timor?',
  'Explain the Tasi Mane Project — for and against',
  'What happened to East Timor GDP per capita since independence?',
  'How does East Timor compare to Cambodia and Laos on human development?',
  'What does ASEAN membership mean for East Timor economically?',
  'Why does the government keep exceeding the ESI limit?',
  'What is Greater Sunrise and when will it generate revenue?',
];

interface ParsedResponse {
  executiveSummary: string;
  keyDataPoints: string[];
  historicalContext: string;
  policyImplication: string;
  sourcesDrawnFrom: string;
}

function parseResponse(text: string): ParsedResponse {
  const sections: ParsedResponse = {
    executiveSummary: '',
    keyDataPoints: [],
    historicalContext: '',
    policyImplication: '',
    sourcesDrawnFrom: '',
  };

  const execMatch = text.match(/EXECUTIVE SUMMARY\s*([\s\S]*?)(?=KEY DATA POINTS|$)/i);
  if (execMatch) sections.executiveSummary = execMatch[1].trim();

  const dataMatch = text.match(/KEY DATA POINTS\s*([\s\S]*?)(?=HISTORICAL CONTEXT|$)/i);
  if (dataMatch) {
    sections.keyDataPoints = dataMatch[1]
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('•') || line.startsWith('-') || line.startsWith('*'))
      .map(line => line.replace(/^[•\-*]\s*/, '').trim())
      .filter(Boolean);
  }

  const histMatch = text.match(/HISTORICAL CONTEXT\s*([\s\S]*?)(?=POLICY IMPLICATION|$)/i);
  if (histMatch) sections.historicalContext = histMatch[1].trim();

  const policyMatch = text.match(/POLICY IMPLICATION\s*([\s\S]*?)(?=SOURCES DRAWN FROM|$)/i);
  if (policyMatch) sections.policyImplication = policyMatch[1].trim();

  const sourcesMatch = text.match(/SOURCES DRAWN FROM\s*([\s\S]*?)$/i);
  if (sourcesMatch) sections.sourcesDrawnFrom = sourcesMatch[1].trim();

  // Fallback: if parsing failed, put everything in executiveSummary
  if (!sections.executiveSummary && !sections.keyDataPoints.length) {
    sections.executiveSummary = text;
  }

  return sections;
}

export function AskLafaek() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ParsedResponse | null>(null);
  const [rawResponse, setRawResponse] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(q?: string) {
    const query = q || question;
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResponse(null);
    setRawResponse('');
    if (q) setQuestion(q);

    try {
      const text = await queryLafaek(query);
      setRawResponse(text);
      setResponse(parseResponse(text));
    } catch (err) {
      setError('Unable to generate brief. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 48px' }}>
      {/* Header */}
      <div style={{ marginBottom: '56px' }}>
        <h1 style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '52px', fontWeight: 500, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.1 }}>
          Ask Lafaek
        </h1>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '15px', color: '#6B6B6B', lineHeight: 1.7, maxWidth: '580px' }}>
          Query 25 years of East Timor economic data using Claude claude-sonnet-4-6. Receive a structured policy
          brief with cited figures, historical context, and policy implications — grounded in the
          Lafaek knowledge base.
        </p>
        {!hasApiKey && (
          <div style={{ marginTop: '16px', padding: '12px 16px', backgroundColor: '#FEF3C7', border: '1px solid #C9A97A', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#92400E' }}>
            API key not configured. Add <code>VITE_ANTHROPIC_API_KEY=your_key</code> to a <code>.env</code> file and restart the dev server.
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{ marginBottom: '24px' }}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask about East Timor's economy, petroleum fund, budget, human development, geopolitical context, or any policy debate..."
          rows={4}
          style={{
            width: '100%',
            padding: '16px',
            border: '1px solid #E8E4DC',
            backgroundColor: '#FAFAF8',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '15px',
            color: '#1A1A1A',
            resize: 'vertical',
            outline: 'none',
            boxSizing: 'border-box',
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
              handleSubmit();
            }
          }}
        />
      </div>

      {/* Sample questions */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#9B9B9B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
          Sample questions
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {SAMPLE_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => handleSubmit(q)}
              disabled={loading}
              style={{
                padding: '8px 14px',
                border: '1px solid #E8E4DC',
                backgroundColor: '#FAFAF8',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '12px',
                color: '#6B6B6B',
                cursor: loading ? 'not-allowed' : 'pointer',
                textAlign: 'left',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLButtonElement).style.borderColor = '#C9A97A'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#E8E4DC'; }}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Submit button */}
      <button
        onClick={() => handleSubmit()}
        disabled={loading || !question.trim()}
        style={{
          padding: '12px 32px',
          backgroundColor: loading || !question.trim() ? '#9B9B9B' : '#1A1A1A',
          color: '#FAFAF8',
          border: 'none',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          cursor: loading || !question.trim() ? 'not-allowed' : 'pointer',
          marginBottom: '48px',
        }}
      >
        {loading ? 'Analyzing East Timor economic data...' : 'Generate Brief'}
      </button>

      {/* Error */}
      {error && (
        <div style={{ padding: '16px', backgroundColor: '#FEF2F2', border: '1px solid #8B3A3A', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#8B3A3A', marginBottom: '32px' }}>
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <div style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', color: '#6B6B6B', marginBottom: '8px' }}>
            Analyzing East Timor economic data...
          </div>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#9B9B9B' }}>
            Querying knowledge base via Claude claude-sonnet-4-6
          </div>
        </div>
      )}

      {/* Response */}
      {response && !loading && (
        <div style={{ borderTop: '2px solid #1A1A1A', paddingTop: '40px' }}>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: '#9B9B9B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
            Policy Brief — {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '13px', color: '#C9A97A', marginBottom: '32px' }}>
            Question: {question}
          </div>

          {response.executiveSummary && (
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                Executive Summary
              </div>
              <p style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '22px', color: '#1A1A1A', lineHeight: 1.5, margin: 0 }}>
                {response.executiveSummary}
              </p>
            </div>
          )}

          {response.keyDataPoints.length > 0 && (
            <div style={{ marginBottom: '40px', paddingLeft: '0' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                Key Data Points
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {response.keyDataPoints.map((point, i) => (
                  <li key={i} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: 1.7, marginBottom: '10px', paddingLeft: '16px', borderLeft: '2px solid #C9A97A' }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {response.historicalContext && (
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                Historical Context
              </div>
              <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: 1.8, margin: 0 }}>
                {response.historicalContext}
              </p>
            </div>
          )}

          {response.policyImplication && (
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                Policy Implication
              </div>
              <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: 1.8, margin: 0 }}>
                {response.policyImplication}
              </p>
            </div>
          )}

          {response.sourcesDrawnFrom && (
            <div style={{ borderTop: '1px solid #E8E4DC', paddingTop: '24px' }}>
              <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '10px', color: '#6B6B6B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>
                Sources Drawn From
              </div>
              <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#9B9B9B', lineHeight: 1.7, margin: 0 }}>
                {response.sourcesDrawnFrom}
              </p>
            </div>
          )}

          {/* Raw fallback */}
          {!response.executiveSummary && !response.keyDataPoints.length && rawResponse && (
            <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', color: '#1A1A1A', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
              {rawResponse}
            </div>
          )}
        </div>
      )}

      {/* Disclaimer */}
      <div style={{ marginTop: '64px', borderTop: '1px solid #E8E4DC', paddingTop: '24px', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', color: '#9B9B9B', lineHeight: 1.6 }}>
        Lafaek AI responses are generated from the Lafaek knowledge base — a curated set of verified data points
        from primary institutional sources. Responses cite specific figures and sources. Lafaek will not invent
        data; if information is unavailable it says so. Always verify figures against primary sources before
        official use. Knowledge base last updated June 2026.
      </div>
    </div>
  );
}
