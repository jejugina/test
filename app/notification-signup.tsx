"use client";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import CamelliaMark from "./camellia-mark";
import Localized from "./i18n/localized";
import { useLanguage } from "./i18n/provider";

const interests=["굿즈 출시","캠페인 소식","체험 이야기","브랜드 이야기"];

export default function NotificationSignup(){
 const id=useId();
 const dialog=useRef<HTMLDialogElement>(null);
 const open=()=>{ if(dialog.current && !dialog.current.open) dialog.current.showModal(); };
 const {t}=useLanguage();
 const [selected,setSelected]=useState<string[]>([]);
 const [error,setError]=useState("");
 const [submitted,setSubmitted]=useState(false);
 const [pending,setPending]=useState(false);
 useEffect(()=>{
  const receive=(event:Event)=>{const topic=(event as CustomEvent<unknown>).detail;if(typeof topic==="string"&&interests.includes(topic)){setSelected(current=>current.includes(topic)?current:[...current,topic]);setError("");setSubmitted(false);}};
  window.addEventListener("bloom:notification-topic",receive);
  return()=>window.removeEventListener("bloom:notification-topic",receive);
 },[]);
 useEffect(()=>{
  const openFromHash=()=>{ if(window.location.hash==="#notify") open(); };
  const openFromLink=(event:MouseEvent)=>{
   if(event.defaultPrevented || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)return;
   const link=event.target instanceof Element?event.target.closest<HTMLAnchorElement>("a[href]"):null;
   if(!link || link.origin!==location.origin || link.pathname!==location.pathname || link.hash!=="#notify")return;
   event.preventDefault();
   open();
  };
  openFromHash();
  window.addEventListener("hashchange",openFromHash);
  window.addEventListener("bloom:open-notification",open);
  document.addEventListener("click",openFromLink,true);
  return ()=>{
   window.removeEventListener("hashchange",openFromHash);
   window.removeEventListener("bloom:open-notification",open);
   document.removeEventListener("click",openFromLink,true);
  };
 },[]);
 const toggle=(topic:string)=>{
  setSelected(current=>current.includes(topic)?current.filter(item=>item!==topic):[...current,topic]);
  setError("");setSubmitted(false);
 };
 const submit=async (event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  if(pending)return;
  if(!selected.length){setError("관심 있는 소식을 하나 이상 선택해 주세요.");return;}
  const form=event.currentTarget;
  const email=form.querySelector<HTMLInputElement>('input[type="email"]')?.value;
  const name=form.querySelector<HTMLInputElement>('#'+CSS.escape(id+"-name"))?.value;
  const phone=form.querySelector<HTMLInputElement>('input[type="tel"]')?.value;
  const consent=form.querySelector<HTMLInputElement>(".notification-consent input")?.checked;
  setError("");setSubmitted(false);setPending(true);
  try {
   const response=await fetch("/api/notifications",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email,name,phone,topics:selected,consent}),
   });
   if(response.status===503){setError("알림 신청 연결을 준비 중입니다.");return;}
   if(!response.ok)throw Error("Submission failed");
   form.reset();setSelected([]);setSubmitted(true);
   dialog.current?.close();
  } catch {
   setError("알림 신청을 저장하지 못했습니다. 잠시 뒤 다시 시도해 주세요.");
  } finally {
   setPending(false);
  }
 };
 const invalid=(event:FormEvent<HTMLFormElement>)=>{
  const input=event.target as HTMLInputElement;
  input.setCustomValidity(t(input.type==="checkbox"?"이메일 수집 동의에 체크해 주세요.":input.validity.typeMismatch?"올바른 이메일을 입력해 주세요.":"필수 항목을 입력해 주세요."));
 };
 return <Localized>{<section id="notify" className="notification-signup" aria-labelledby={id+"-title"}>
  <div className="notification-inner">
   <div className="notification-brand" aria-hidden="true"><b className="notification-brand-name">bloom</b><CamelliaMark/><span>YOUR WAY</span></div>
   <h2 id={id+"-title"}>블룸이 피어나는 날,<br/>가장 먼저 알려드릴게요.</h2>
   <p className="notification-intro">새로운 굿즈와 캠페인 소식을<br/>너의 방식대로 만나보세요.</p>
    <video className="notification-video" controls playsInline preload="metadata" aria-label="날 따라와 영상">
     <source src="/campaign/follow-me.mp4" type="video/mp4" />
     <a href="/campaign/follow-me.mp4">날 따라와 영상 열기</a>
    </video>
   <button className="notification-submit" type="button" aria-haspopup="dialog" onClick={open}>알림받기 ↗</button>
   <dialog ref={dialog} className="notification-dialog" aria-labelledby={id+"-dialog-title"}>
   <button type="button" className="notification-dialog-close" aria-label="닫기" onClick={()=>dialog.current?.close()}>×</button>
   <h2 id={id+"-dialog-title"}>알림 신청</h2>
   <form className="notification-form" onSubmit={submit} onInvalid={invalid} onInput={event=>{(event.target as HTMLInputElement).setCustomValidity("");setSubmitted(false);}}>
    <label htmlFor={id+"-name"}>이름</label>
    <input id={id+"-name"} type="text" autoComplete="name" required maxLength={80}/>
    <label htmlFor={id+"-phone"}>전화번호</label>
    <input id={id+"-phone"} type="tel" autoComplete="tel" required maxLength={32}/>
    <label htmlFor={id+"-email"}>알림 받을 이메일</label>
    {/* No name attribute: email must not be serialized if JavaScript is unavailable. */}
    <input id={id+"-email"} type="email" placeholder="you@example.com" autoComplete="email" required maxLength={254} aria-describedby={id+"-privacy"}/>
    <fieldset aria-describedby={error?id+"-error":undefined}>
     <legend>관심 있는 소식 <span>복수 선택 가능</span></legend>
     <div className="notification-topics">{interests.map(topic=><label key={topic} className="notification-topic">
      <input type="checkbox" checked={selected.includes(topic)} onChange={()=>toggle(topic)}/>
      <span>{topic}</span>
     </label>)}</div>
    </fieldset>
    <label className="notification-consent"><input type="checkbox" required/><span>알림 신청을 위한 이름·이메일·전화번호 수집 및 저장에 동의합니다.</span></label>
    <p id={id+"-privacy"} className="notification-privacy">이름·이메일·전화번호와 관심 항목은 알림 신청 관리에 사용됩니다.</p>
    <p id={id+"-error"} role="alert" className="notification-error">{error}</p>
    <button className="notification-submit" type="submit" disabled={pending}>{pending?"저장 중…":"알림받기"} <span aria-hidden="true">↗</span></button>
   </form>
   </dialog>
    <p role="status" className="notification-result">{submitted?"알림 신청이 접수되었습니다.":""}</p>
  </div>
 </section>}</Localized>;
}

