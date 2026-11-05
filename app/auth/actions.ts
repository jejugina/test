"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
export type FormState = { error?: string; success?: string };
const text = (data: FormData, name: string) => String(data.get(name) ?? "").trim();
export async function signup(_: FormState, data: FormData): Promise<FormState> {
 const email = text(data,"email"), password = String(data.get("password") ?? ""), nickname = text(data,"nickname");
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6 || !nickname || nickname.length > 30)
  return {error:"이메일, 비밀번호(6자 이상), 닉네임(1~30자)을 확인해 주세요."};
 const supabase = await createClient();

 const {data: result,error} = await supabase.auth.signUp({email,password,options:{data:{nickname}}});
 if (error) return {error:"회원가입에 실패했습니다. 입력 내용을 확인하고 다시 시도해 주세요."};
 if (!result.session) return {error:"가입 후 로그인하지 못했습니다. 사이트의 회원가입 설정을 확인해 주세요."};
 revalidatePath("/","layout"); redirect("/");
}
export async function login(_: FormState, data: FormData): Promise<FormState> {
 const supabase = await createClient();
 const {error} = await supabase.auth.signInWithPassword({email:text(data,"email"),password:String(data.get("password") ?? "")});
 if(error) return {error:"이메일 또는 비밀번호가 틀렸습니다"};
 revalidatePath("/","layout"); redirect("/");
}
export async function logout(previous: FormState): Promise<FormState> {
 void previous;
 const supabase = await createClient();
 const {error} = await supabase.auth.signOut();
 if(error) return {error:"로그아웃하지 못했습니다. 다시 시도해 주세요."};
 revalidatePath("/","layout"); redirect("/");
}
export async function updateNickname(_: FormState, data: FormData): Promise<FormState> {
 const supabase = await createClient();
 const {data:{user}} = await supabase.auth.getUser();
 if(!user) redirect("/login");
 const nickname = text(data,"nickname");
 if(!nickname || nickname.length>30) return {error:"닉네임은 1~30자로 입력해 주세요."};
 const {data:profile,error} = await supabase.from("profiles").update({nickname}).eq("id",user.id).select("nickname").single();
 if(error || !profile) return {error:"닉네임을 수정하지 못했습니다. 다시 시도해 주세요."};
 revalidatePath("/","layout"); return {success:"닉네임이 수정되었습니다."};
}
export async function deleteAccount(previous: FormState): Promise<FormState> {
 void previous;
 const supabase = await createClient();
 const {data:{user}} = await supabase.auth.getUser();
 if(!user) redirect("/login");
 const {error} = await supabase.rpc("delete_own_account");
 if(error) return {error:"탈퇴하지 못했습니다. 다시 시도해 주세요."};
 // The database already revoked every session; local sign-out clears browser cookies.
 await supabase.auth.signOut({scope:"local"});
 revalidatePath("/","layout"); redirect("/");
}


