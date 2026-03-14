import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export const analyzeJournal = async (text) => {

  const prompt = `
You are an AI assistant that analyzes personal journal entries.

Your task:
1. Identify the primary emotion
2. Extract 3–5 important keywords
3. Generate a short summary

Rules:
- Return STRICT JSON
- Do NOT include explanation
- Do NOT include markdown
- Only valid JSON

Format:

{
"emotion": "",
"keywords": [],
"summary": ""
}

Journal Entry:
${text}
`;

  const response = await groq.chat.completions.create({
    model: "openai/gpt-oss-20b",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.2
  });

  const content = response.choices[0].message.content;

  try {
    return JSON.parse(content);
  } catch {
    return {
      emotion: "unknown",
      keywords: [],
      summary: content
    };
  }
};