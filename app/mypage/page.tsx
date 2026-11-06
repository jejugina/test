import Localized from "@/app/i18n/localized";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { ProfileForm, DeleteButton } from "../auth/forms";
export default async function MyPage() {
 const supabase=await createClient(); const {data:{user}}=await supabase.auth.getUser();
 if(!user) redirect("/login");
 const {data:profile,error}=await supabase.from("profiles").select("nickname").eq("id",user.id).single();
 if(error || !profile) throw new Error("프로필을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
 return <Localized>{<main className="account-page"><p className="eyebrow">MY BLOOM</p><h1>마이페이지</h1><div className="account-email"><span>이메일</span><p data-no-translate="true">{user.email}</p></div><ProfileForm nickname={profile.nickname}/><DeleteButton/></main>}</Localized>;
}

