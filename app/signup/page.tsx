import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { AuthForm } from "../auth/forms";
export default async function SignupPage() {
 const supabase=await createClient(); const {data:{user}}=await supabase.auth.getUser();
 if(user) redirect("/");
 return <main className="account-page"><p className="eyebrow">WELCOME TO BLOOM</p><h1>회원가입</h1><AuthForm mode="signup"/></main>;
}

