"use client";
import { useId, useRef, useState, type PointerEvent } from "react";
import Localized from "./i18n/localized";
import { useLanguage } from "./i18n/provider";
import GoodsImage from "./goods-image";

export default function GoodsViewer({src,name}:{src:string;name:string}){
 const angleId=useId();
 const [frame,setFrame]=useState(0);
 const drag=useRef<number|null>(null);
 const {t}=useLanguage();
 const step=(amount:number)=>setFrame(current=>(current+amount+24)%24);
 const move=(event:PointerEvent<HTMLDivElement>)=>{
  if(drag.current===null)return;
  const distance=event.clientX-drag.current;
  if(Math.abs(distance)>=20){step(distance<0?1:-1);drag.current=event.clientX;}
 };
 return <Localized>{<div className="goods-viewer">
  <div className="goods-viewer-stage"
    onPointerDown={event=>{if(event.pointerType==="mouse"&&event.button!==0)return;drag.current=event.clientX;event.currentTarget.setPointerCapture(event.pointerId);}}
    onPointerMove={move}
    onPointerUp={()=>{drag.current=null;}}
    onPointerCancel={()=>{drag.current=null;}}>
    <GoodsImage src={src} alt={name} frame={frame}/>
  </div>
  <div className="goods-viewer-controls">
   <button type="button" aria-label="이전 각도" onClick={()=>step(-1)}>‹</button>
   <output aria-live="polite" aria-atomic="true">{frame*15}° <span>/ 360°</span></output>
   <button type="button" aria-label="다음 각도" onClick={()=>step(1)}>›</button>
  </div>
  <label className="goods-angle-label" htmlFor={angleId}>보기 각도</label>
  <input id={angleId} aria-label={t("보기 각도")} type="range" min={0} max={23} step={1} value={frame} aria-valuetext={frame*15+"°"} onChange={event=>setFrame(Number(event.target.value))}/>
  <p className="goods-viewer-hint">좌우로 드래그하거나 버튼으로 돌려보세요.</p>
  <button type="button" className="goods-name-link" onClick={()=>setFrame(0)}>정면 보기</button>
 </div>}</Localized>;
}

