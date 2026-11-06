import Localized from "@/app/i18n/localized";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { LogoutButton } from "./forms";
import { LanguageSwitcher } from "../i18n/provider";
import BloomWordmark from "../bloom-wordmark";

export default async function AccountHeader() {
 const supabase=await createClient();
 const {data:{user}}=await supabase.auth.getUser();
 const {data:profile}=user?await supabase.from("profiles").select("nickname").eq("id",user.id).single():{data:null};
 return <Localized><header className="campaign-header">
  <div className="account-header"><nav aria-label="회원 메뉴">
   {user?<><span className="account-identity">{profile?.nickname?<span data-no-translate="true">{profile.nickname}</span>:<span>회원</span>}<span>님</span></span><span aria-hidden="true">/</span><Link href="/mypage">마이페이지</Link><span aria-hidden="true">/</span><LogoutButton/></>:<><Link href="/login">로그인</Link><span aria-hidden="true">/</span><Link href="/signup">회원가입</Link></>}
  </nav></div>
  <div className="header-brand-row"><Link href="/" className="wordmark" aria-label="메인으로"><BloomWordmark /></Link><LanguageSwitcher/></div>
  <nav className="header-pills" aria-label="주 메뉴">
   <Link href="/#story">콜라보</Link><Link href="/#village">동백마을</Link><Link href="/#goods">굿즈</Link><Link href="/#experiences">체험</Link><Link href="/#visit">방문 안내</Link><Link className="notification-cta" href="/#notify">알림받기</Link>
  </nav>
 </header></Localized>;
}

