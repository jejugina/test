"use client";
import Localized from "@/app/i18n/localized";
import { useActionState, type FormEvent } from "react";
import { useLanguage } from "../i18n/provider";
import Link from "next/link";
import { signup, login, logout, updateNickname, deleteAccount } from "./actions";
export function AuthForm({mode}:{mode:"signup"|"login"}) {
 const {t}=useLanguage();
 const invalid=(event:FormEvent<HTMLFormElement>)=>{const input=event.target as HTMLInputElement;if(input.validity.valueMissing)input.setCustomValidity(t("필수 항목을 입력해 주세요."));else if(input.validity.typeMismatch)input.setCustomValidity(t("올바른 이메일을 입력해 주세요."));else if(input.validity.tooShort)input.setCustomValidity(t("6자 이상 입력해 주세요."));};
 const signingUp=mode==="signup";
 const [state, action, pending]=useActionState(signingUp?signup:login,{});
 return <Localized>{<form action={action} className="account-form" onInvalid={invalid} onInput={event=>(event.target as HTMLInputElement).setCustomValidity("")}>
 <label htmlFor={mode+"-email"}>이메일<input id={mode+"-email"} name="email" type="email" autoComplete="email" required maxLength={254}/></label>
 <label htmlFor={mode+"-password"}>비밀번호<input id={mode+"-password"} name="password" type="password" autoComplete={signingUp?"new-password":"current-password"} minLength={signingUp?6:undefined} required/>{signingUp&&<small>6자 이상 입력해 주세요.</small>}</label>
 {signingUp&&<label htmlFor="signup-nickname">닉네임<input id="signup-nickname" name="nickname" autoComplete="nickname" required maxLength={30}/></label>}
 <p role="alert" className="account-error">{state.error}</p><p role="status">{state.success}</p>
 <button className="button" disabled={pending}>{pending?"처리 중…":signingUp?"회원가입":"로그인"}</button>

 <Link href={signingUp?"/login":"/signup"}>{signingUp?"로그인":"회원가입"}</Link>
 </form>}</Localized>;
}
export function LogoutButton() {
 const [state,action,pending]=useActionState(logout,{});
 return <Localized>{<form action={action}><button disabled={pending}>{pending?"로그아웃 중…":"로그아웃"}</button>{state.error&&<span role="alert">{state.error}</span>}</form>}</Localized>;
}
export function ProfileForm({nickname}:{nickname:string}) {
 const {t}=useLanguage();
 const invalid=(event:FormEvent<HTMLFormElement>)=>(event.target as HTMLInputElement).setCustomValidity(t("필수 항목을 입력해 주세요."));
 const [state,action,pending]=useActionState(updateNickname,{});
 return <Localized>{<form action={action} className="account-form" onInvalid={invalid} onInput={event=>(event.target as HTMLInputElement).setCustomValidity("")}><label htmlFor="profile-nickname">닉네임<input id="profile-nickname" name="nickname" defaultValue={nickname} required maxLength={30}/></label><p role="alert" className="account-error">{state.error}</p><p role="status">{state.success}</p><button className="button" disabled={pending}>{pending?"저장 중…":"닉네임 수정"}</button></form>}</Localized>;
}
export function DeleteButton() {
 const {t}=useLanguage();
 const [state,action,pending]=useActionState(deleteAccount,{});
 return <Localized>{<form action={action} className="account-delete" onSubmit={event=>{if(!window.confirm(t("정말 탈퇴하시겠습니까? 계정과 프로필이 삭제됩니다.")))event.preventDefault();}}>
 <button disabled={pending}>{pending?"탈퇴 중…":"회원 탈퇴"}</button><p role="alert" className="account-error">{state.error}</p><p role="status">{state.success}</p></form>}</Localized>;
}




