"use client";

import { mastraClient } from "@/lib/mastra";
import { useState } from "react";

export function GeminiAgentForm() {
  const [answer, setAnswer] = useState<string>("");

  async function handleSubmit(formData: FormData) {
    const content = formData.get("content") as string;
    const agent = mastraClient.getAgent("myGeminiAgent");

    try {
      const response = await agent.generate({
        messages: [{ role: "user", content }],
      });
      setAnswer(response.text);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">Gemini Agent</h2>
      <form action={handleSubmit}>
        <input name="content" placeholder="質問を入力してください" />
        <button type="submit">質問する</button>
      </form>
      {answer && <div className="mt-4 p-4 bg-gray-100 rounded">{answer}</div>}
    </div>
  );
}
