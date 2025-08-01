require('dotenv').config();

const fetch = require('node-fetch');

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

async function askGroq(prompt) {
  if (!GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not set in your .env file.");
  }

  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      let errorMessage = `Request failed with status ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData?.error?.message) {
          errorMessage = errorData.error.message;
        }
      } catch (_) {}
      throw new Error(errorMessage);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "No output from model.";
  } catch (error) {
    console.error("Error calling Groq API:", error.message);
    throw error;
  }
}

module.exports = askGroq;
