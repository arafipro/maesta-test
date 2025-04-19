"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ここで実際のアプリケーションでは認証状態をチェックします
    // ダミーのチェックロジック
    const isAuthenticated =
      sessionStorage.getItem("isAuthenticated") === "true";

    if (!isAuthenticated) {
      // ログイン成功時にフラグを設定するため
      // (実際の実装ではトークンや認証クッキーを使用)
      const demoEmail = localStorage.getItem("demoEmail");
      const demoPassword = localStorage.getItem("demoPassword");

      if (demoEmail === "demo@example.com" && demoPassword === "password") {
        sessionStorage.setItem("isAuthenticated", "true");
        setIsLoading(false);
      } else {
        router.push("/login");
      }
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>読み込み中...</p>
      </div>
    );
  }

  return <>{children}</>;
}
