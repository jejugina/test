"use client";
import { useEffect, useId, useState, type FormEvent } from "react";
import CamelliaMark from "./camellia-mark";
import Localized from "./i18n/localized";
import { useLanguage } from "./i18n/provider";

const interests=["굿즈 출시","캠페인 소식","체험 이야기","브랜드 이야기"];

export default function NotificationSignup(){
 const id=useId();
 const {t}=useLanguage();
 const [selected,setSelected]=useState<string[]>([]);
 const [error,setError]=useState("");
 const [submitted,setSubmitted]=useState(false);
 useEffect(()=>{
  const receive=(event:Event)=>{const topic=(event as CustomEvent<unknown>).detail;if(typeof topic==="string"&&interests.includes(topic)){setSelected(current=>current.includes(topic)?current:[...current,topic]);setError("");setSubmitted(false);}};
  window.addEventListener("bloom:notification-topic",receive);
  return()=>window.removeEventListener("bloom:notification-topic",receive);
 },[]);
 const toggle=(topic:string)=>{
  setSelected(current=>current.includes(topic)?current.filter(item=>item!==topic):[...current,topic]);
  setError("");setSubmitted(false);
 };
 const submit=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  if(!selected.length){setError("관심 있는 소식을 하나 이상 선택해 주세요.");return;}
  // Prototype only: no email reads, network requests, browser storage or submission.
  setError("");setSubmitted(true);
 };
 const invalid=(event:FormEvent<HTMLFormElement>)=>{
  const input=event.target as HTMLInputElement;
  input.setCustomValidity(t(input.type==="checkbox"?"시연 안내 확인에 체크해 주세요.":input.validity.typeMismatch?"올바른 이메일을 입력해 주세요.":"필수 항목을 입력해 주세요."));
 };
 return <Localized>{<section id="notify" className="notification-signup" aria-labelledby={id+"-title"}>
  <div className="notification-inner">
   <div className="notification-brand" aria-hidden="true"><b className="notification-brand-name">bloom</b><CamelliaMark/><span>YOUR WAY</span></div>
   <h2 id={id+"-title"}>블룸이 피어나는 날,<br/>가장 먼저 알려드릴게요.</h2>
   <p className="notification-intro">새로운 굿즈와 캠페인 소식을<br/>너의 방식대로 만나보세요.</p>
   <form className="notification-form" onSubmit={submit} onInvalid={invalid} onInput={event=>{(event.target as HTMLInputElement).setCustomValidity("");setSubmitted(false);}}>
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
    <label className="notification-consent"><input type="checkbox" required/><span>교육용 시연이며 이메일이 저장·전송되지 않음을 확인했습니다.</span></label>
    <p id={id+"-privacy"} className="notification-privacy">입력한 이메일은 저장하거나 전송하지 않습니다.</p>
    <p id={id+"-error"} role="alert" className="notification-error">{error}</p>
    <video className="notification-video" controls playsInline preload="metadata" aria-label="날 따라와 영상">
     <source src="/campaign/follow-me.mp4" type="video/mp4" />
     <a href="/campaign/follow-me.mp4">날 따라와 영상 열기</a>
    </video>
    <button className="notification-submit" type="submit">알림받기 <span aria-hidden="true">↗</span></button>
    <p role="status" className="notification-result">{submitted?"시연을 완료했습니다. 실제 알림 신청은 접수되지 않았습니다.":""}</p>
   </form>
  </div>
 </section>}</Localized>;
}

