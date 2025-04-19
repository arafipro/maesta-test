import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">
          AIコーチングプラットフォーム
        </h1>
        <p className="text-xl text-gray-600">
          AIコーチングでスキルアップをサポートします
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/register">新規登録</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/login">ログイン</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
