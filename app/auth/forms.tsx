"use client";
import { useActionState } from "react";
import Link from "next/link";
import { signup, login, logout, updateNickname, deleteAccount } from "./actions";
export function AuthForm({mode}:{mode:"signup"|"login"}) {
 const signingUp=mode==="signup";
 const [state, action, pending]=useActionState(signingUp?signup:login,{});
 return <form action={action} className="account-form">
 <label htmlFor="email">이메일<input id="email" name="email" type="email" autoComplete="email" required maxLength={254}/></label>
 <label htmlFor="password">비밀번호<input id="password" name="password" type="password" autoComplete={signingUp?"new-password":"current-password"} minLength={signingUp?6:undefined} required/>{signingUp&&<small>6자 이상 입력해 주세요.</small>}</label>
 {signingUp&&<label htmlFor="nickname">닉네임<input id="nickname" name="nickname" autoComplete="nickname" required maxLength={30}/></label>}
 <p role="alert" className="account-error">{state.error}</p><p role="status">{state.success}</p>
 <button className="button" disabled={pending}>{pending?"처리 중…":signingUp?"회원가입":"로그인"}</button>

 <Link href={signingUp?"/login":"/signup"}>{signingUp?"로그인":"회원가입"}</Link>
 </form>;
}
export function LogoutButton() {
 const [state,action,pending]=useActionState(logout,{});
 return <form action={action}><button disabled={pending}>{pending?"로그아웃 중…":"로그아웃"}</button>{state.error&&<span role="alert">{state.error}</span>}</form>;
}
export function ProfileForm({nickname}:{nickname:string}) {
 const [state,action,pending]=useActionState(updateNickname,{});
 return <form action={action} className="account-form"><label htmlFor="nickname">닉네임<input id="nickname" name="nickname" defaultValue={nickname} required maxLength={30}/></label><p role="alert" className="account-error">{state.error}</p><p role="status">{state.success}</p><button className="button" disabled={pending}>{pending?"저장 중…":"닉네임 수정"}</button></form>;
}
export function DeleteButton() {
 const [state,action,pending]=useActionState(deleteAccount,{});
 return <form action={action} className="account-delete" onSubmit={event=>{if(!window.confirm("정말 탈퇴하시겠습니까? 계정과 프로필이 삭제됩니다."))event.preventDefault();}}>
 <button disabled={pending}>{pending?"탈퇴 중…":"회원 탈퇴"}</button><p role="alert" className="account-error">{state.error}</p><p role="status">{state.success}</p></form>;
}




