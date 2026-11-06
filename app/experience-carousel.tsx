"use client";
import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Localized from "./i18n/localized";
import { experiences, type Experience } from "./experience-data";

function ExperienceDetail({item,onClose,onNotify}:{item:Experience;onClose:()=>void;onNotify:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 const id=useId();
 useEffect(()=>{
  dialog.current?.showModal();
  const previous=document.body.style.overflow;
  document.body.style.overflow="hidden";
  return ()=>{document.body.style.overflow=previous;};
 },[]);
 const subscribe=()=>{
  dialog.current?.close();
  requestAnimationFrame(onNotify);
 };
 return <Localized><dialog ref={dialog} className="experience-dialog" aria-labelledby={id+"-title"} aria-describedby={id+"-notice"} onClose={onClose} onClick={event=>{if(event.target===event.currentTarget)dialog.current?.close();}}>
  <button className="experience-close" type="button" aria-label="닫기" autoFocus onClick={()=>dialog.current?.close()}>×</button>
  <Image src={item.image} alt={item.title} width={1672} height={941} sizes="(max-width: 700px) 94vw, 860px"/>
  <div className="experience-dialog-copy">
   <p className="eyebrow">DONGBAEK VILLAGE</p><h2 id={id+"-title"}>{item.title}</h2>
   <h3>이용 방법</h3><p>{item.usage}</p>
   <h3>체험 과정</h3><ol>{item.steps.map(step=><li key={step}>{step}</li>)}</ol>
   <p className="experience-concept" id={id+"-notice"}>교육용 체험 콘셉트 안내입니다. 실제 프로그램·이용 조건·일정·가격은 확정 후 안내합니다.</p>
   <p className="experience-invitation">동백마을의 다음 체험 소식, 가장 먼저 받아보세요.</p>
   <button className="button notification-cta" type="button" onClick={subscribe}>체험 소식 알림받기 <span aria-hidden="true">↗</span></button>
  </div>
 </dialog></Localized>;
}

export default function ExperienceCarousel({onNotify}:{onNotify:()=>void}){
 const track=useRef<HTMLOListElement>(null);
 const [selected,setSelected]=useState<Experience|null>(null);
 const [current,setCurrent]=useState(0);
 const move=(direction:number)=>{
  const list=track.current;
  const width=list?.firstElementChild?.getBoundingClientRect().width;
  if(!list||!width)return;
  list.scrollBy({left:direction*(width+16),behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});
 };
 const subscribe=()=>{
  window.dispatchEvent(new CustomEvent("bloom:notification-topic",{detail:"체험 이야기"}));
  onNotify();
 };
 return <Localized><div className="experience-carousel">
  <div className="experience-carousel-toolbar"><p>옆으로 넘겨 체험 장면을 만나보세요.</p><div className="experience-carousel-controls">
   <button type="button" aria-label="이전 체험" onClick={()=>move(-1)}>‹</button>
   <span aria-live="polite">{current+1} / {experiences.length}</span>
   <button type="button" aria-label="다음 체험" onClick={()=>move(1)}>›</button>
  </div></div>
  <ol ref={track} className="experience-track" aria-label="체험 장면 5가지" onScroll={event=>{
   const list=event.currentTarget,width=list.firstElementChild?.getBoundingClientRect().width;
   if(width)setCurrent(Math.min(experiences.length-1,Math.round(list.scrollLeft/(width+16))));
  }}>
   {experiences.map((item,index)=><li key={item.id} className="experience-slide">
    <button type="button" className="experience-open" aria-haspopup="dialog" onClick={()=>setSelected(item)}>
     <Image src={item.image} alt={item.title} width={1672} height={941} sizes="(max-width: 700px) 82vw, 380px"/>
     <span className="experience-card-copy"><span className="experience-card-number">0{index+1}</span><span className="experience-card-title">{item.title}</span><span className="experience-card-summary">{item.summary}</span><span className="experience-card-action">이용 방법 보기 <span aria-hidden="true">↗</span></span></span>
    </button>
   </li>)}
  </ol>
  <div className="experience-follow"><p>동백마을의 다음 체험 소식, 가장 먼저 받아보세요.</p><button className="button notification-cta" type="button" onClick={subscribe}>체험 소식 알림받기 <span aria-hidden="true">↗</span></button></div>
  {selected&&<ExperienceDetail item={selected} onClose={()=>setSelected(null)} onNotify={subscribe}/>}
 </div></Localized>;
}

