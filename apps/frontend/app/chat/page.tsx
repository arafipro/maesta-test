"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// ダミーのメッセージ履歴
const initialMessages: Message[] = [
  {
    id: 1,
    sender: "ai",
    content: "こんにちは！AIコーチです。今日はどのようなサポートが必要ですか？",
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
  },
];

type Message = {
  id: number;
  sender: "user" | "ai";
  content: string;
  timestamp: string;
};

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 新しいメッセージが追加されたときに自動的に最下部にスクロール
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isProcessing) return;

    // ユーザーのメッセージをセット
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      content: input,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsProcessing(true);

    // AIの応答をシミュレート（実際はAPIリクエストが必要）
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now(),
        sender: "ai",
        content: getAIResponse(input),
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 1000);
  };

  // ダミーのAI応答を生成
  const getAIResponse = (userInput: string): string => {
    const responses = [
      "なるほど、それは興味深い視点ですね。もう少し詳しく教えていただけますか？",
      "素晴らしい進捗ですね！次のステップについて考えてみましょう。",
      "その課題に対しては、まず目標を明確にすることが重要かもしれません。",
      "その経験から学んだことはありますか？",
      "その状況では、別の視点からも考えてみることが役立つかもしれません。",
      "よく頑張っていますね！自分の成長を認めることも大切です。",
    ];

    // ユーザー入力に含まれる特定のキーワードに基づいた応答の選択（簡易版）
    if (userInput.includes("目標")) {
      return "目標設定は成長の第一歩ですね。どのような目標を考えていますか？";
    }

    // 特定のキーワードがない場合はランダムな応答を返す
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Ctrl+Enterまたは⌘+Enterでメッセージを送信
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  const logout = () => {
    // 実際にはセッションをクリアする処理が必要
    router.push("/login");
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* ヘッダー */}
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">AIコーチング</h1>
        <Button variant="outline" onClick={logout}>
          ログアウト
        </Button>
      </header>

      {/* メッセージエリア */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex gap-3 max-w-[80%] ${
                message.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Avatar
                className={`h-10 w-10 ${message.sender === "ai" ? "bg-blue-500" : "bg-gray-300"}`}
              >
                <div className="text-sm font-medium">
                  {message.sender === "ai" ? "AI" : "You"}
                </div>
              </Avatar>
              <div
                className={`rounded-lg p-3 ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
                <p className="text-xs mt-1 opacity-70">
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* 入力エリア */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Textarea
            placeholder="メッセージを入力..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow resize-none"
            disabled={isProcessing}
            rows={1}
          />
          <Button
            onClick={sendMessage}
            disabled={!input.trim() || isProcessing}
          >
            送信
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Ctrl + Enter または ⌘ + Enter で送信
        </p>
      </div>
    </div>
  );
}
