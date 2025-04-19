import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

export const myGptAgent = new Agent({
  name: "myGptAgent",
  instructions: "You are a helpful assistant.",
  model: openai("gpt-4.1-nano"),
});

export const myGeminiAgent = new Agent({
  name: "myGeminiAgent",
  instructions: "You are a helpful assistant.",
  model: google("gemini-1.5-flash"),
});
