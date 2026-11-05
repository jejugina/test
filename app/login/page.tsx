import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { AuthForm } from "../auth/forms";

export default async function LoginPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/");
  return (
    <main className="account-page">
      <p className="eyebrow">WELCOME BACK</p>
      <h1>로그인</h1>
      <AuthForm mode="login" />
    </main>
  );
}
