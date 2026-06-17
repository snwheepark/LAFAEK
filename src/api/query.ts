import { SYSTEM_PROMPT } from '../data/systemPrompt';
import { KNOWLEDGE_BASE } from '../data/knowledgeBase';

export async function queryLafaek(userQuestion: string): Promise<string> {
  const apiKey = (import.meta as any).env.VITE_ANTHROPIC_API_KEY;

  if (!apiKey) {
    throw new Error('API key not configured. Please add VITE_ANTHROPIC_API_KEY to your .env file.');
  }

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1500,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: 'user',
          content: `${KNOWLEDGE_BASE}\n\nUser question: ${userQuestion}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    throw new Error(`API error ${response.status}: ${errorBody || response.statusText}`);
  }

  const data = await response.json();
  return data.content[0].text as string;
}
