import { Mastra } from "@mastra/core";
import { z } from "zod";
import { myGeminiAgent, myGptAgent } from "./agents";

export const mastra = new Mastra({
  agents: { myGeminiAgent, myGptAgent },
});

// Zodスキーマを定義する
const schema = z.object({
  summary: z.string(),
  keywords: z.array(z.string()),
});

// エージェントでスキーマを使用する
// const response = await weatherAgent.generate(
//   [
//     {
//       role: "user",
//       content: "Hello, how can you assist me today?",
//     },
//   ],
//   {
//     experimental_output: schema,
//   }
// );

// console.log("Structured Output:", response.object);
