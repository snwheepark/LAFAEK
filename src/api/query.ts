import { SYSTEM_PROMPT } from '../data/systemPrompt';
import { KNOWLEDGE_BASE } from '../data/knowledgeBase';

export async function queryLafaek(userQuestion: string): Promise<string> {
  const response = await fetch('/api/ask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: userQuestion,
      systemPrompt: SYSTEM_PROMPT,
      knowledgeBase: KNOWLEDGE_BASE,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error || `Server error: ${response.status}`);
  }

  const data = await response.json();
  return data.answer;
}
