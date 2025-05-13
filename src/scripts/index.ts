import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY! });

export const main = async (content: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    config: {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    },
    contents: content,
  });

  console.log(response);
};
