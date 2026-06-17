export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { question, systemPrompt, knowledgeBase } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Missing question' });
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `${knowledgeBase}\n\nQuestion: ${question}` },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    return res.status(response.status).json({ error: errorBody || response.statusText });
  }

  const data = await response.json();
  return res.status(200).json({ answer: data.choices[0].message.content });
}
