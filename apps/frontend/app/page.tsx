import { GeminiAgentForm } from "./components/gemini-agent-form";
import { GptAgentForm } from "./components/gpt-agent-form";

export default async function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="text-center space-y-6">
        <GptAgentForm />
        <GeminiAgentForm />
      </div>
    </div>
  );
}
