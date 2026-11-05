import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { LogoutButton } from "./forms";
export default async function AccountHeader() {
 const supabase=await createClient();
 const {data:{user}}=await supabase.auth.getUser();
 const {data:profile}=user?await supabase.from("profiles").select("nickname").eq("id",user.id).single():{data:null};
 return <div className="account-header"><Link href="/" aria-label="메인으로">bloom ✳</Link><nav aria-label="회원 메뉴">{user?<><span>{profile?.nickname ?? "회원"}님</span><span aria-hidden="true">/</span><Link href="/mypage">마이페이지</Link><span aria-hidden="true">/</span><LogoutButton/></>:<><Link href="/login">로그인</Link><span aria-hidden="true">/</span><Link href="/signup">회원가입</Link></>}</nav></div>;
}

