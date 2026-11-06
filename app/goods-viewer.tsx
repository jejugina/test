"use client";
import { useRef, useState, type PointerEvent } from "react";
import Localized from "./i18n/localized";
import GoodsImage from "./goods-image";

export default function GoodsViewer({src,name}:{src:string;name:string}){
 const [frame,setFrame]=useState(0);
 const drag=useRef<number|null>(null);
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
 </div>}</Localized>;
}

