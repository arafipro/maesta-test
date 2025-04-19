"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 新規登録後のリダイレクトパラメータがある場合
    if (searchParams.get("registered") === "true") {
      setSuccess("アカウント登録が完了しました。ログインしてください。");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーション
    if (!email || !password) {
      setError("メールアドレスとパスワードを入力してください");
      return;
    }

    setIsLoading(true);

    // ダミーの成功処理（実際はAPIリクエストが必要）
    setTimeout(() => {
      setIsLoading(false);
      // ダミーの認証ロジック（デモ用）
      if (email === "demo@example.com" && password === "password") {
        // デモ用の認証情報をローカルストレージに保存
        localStorage.setItem("demoEmail", email);
        localStorage.setItem("demoPassword", password);
        sessionStorage.setItem("isAuthenticated", "true");

        // ログイン成功後、チャット画面へリダイレクト
        router.push("/chat");
      } else {
        setError("メールアドレスまたはパスワードが正しくありません");
      }
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">ログイン</CardTitle>
        </CardHeader>
        <CardContent>
          {success && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 rounded">
              {success}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">パスワード</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "ログイン中..." : "ログイン"}
            </Button>
          </form>
          <div className="mt-4">
            <p className="text-sm text-gray-500 text-center">
              デモアカウント：demo@example.com / password
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm">
            アカウントをお持ちでないですか？{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              新規登録
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
