"use client";
import Localized from "@/app/i18n/localized";
import Link from "next/link";
import { useRef, useState } from "react";

import { goods } from "./goods-data";
import Image from "next/image";
import GoodsImage from "./goods-image";

export default function GoodsShowcase({ onNotify }: { onNotify: () => void }) {

 const dialog = useRef<HTMLDialogElement>(null);
 const [selected, setSelected] = useState<(typeof goods)[number] | null>(null);

 return <Localized>{<><section id="goods" className="goods-showcase section-wrap" aria-labelledby="goods-title">
  <div className="section-heading goods-intro"><div className="goods-intro-copy"><p className="eyebrow">03 / BLOOM GOODS SET</p><h2 id="goods-title">동백마을의 마음을,<br /><em>다섯 가지로 담았어요.</em></h2></div><div className="goods-set-preview goods-set-reference" aria-label="동백마을 굿즈 5종"><Image src="/goods/goods-set-card-dongbaeki.png" alt="너의 방식대로 피어나 — 동백마을 × A2O LITE 굿즈 5종 카드뉴스" width={1074} height={1464} sizes="(max-width: 360px) 90vw, 320px" />
   {goods.map((item, index) => (
    <button type="button" key={item.id} className={"goods-poster-pin goods-poster-pin-" + item.id} aria-label={item.name} aria-haspopup="dialog" onClick={() => { setSelected(item); dialog.current?.showModal(); }}>{index + 1}</button>
   ))}
  </div><p className="goods-intro-description">하나의 이야기로 이어지는 굿즈 5종 세트.<br />가방부터 텀블러까지, 일상 가까이 만나는 블룸.</p></div>
  <div className="goods-detail goods-set-detail">

   <div className="goods-copy"><p className="eyebrow">DONGBAEK VILLAGE × A2O LITE</p><h3>숲에서 시작된 이야기,<br />일상으로 가져오는 한 세트.</h3><p className="goods-description">메고, 마시고, 쓰고, 요리하는 일상. 동백의 색과 블룸의 이야기를 가방·머그컵·모자·앞치마·텀블러에 담았어요.</p><p className="fine-print">구성: 가방·머그컵·모자·앞치마·텀블러<br />최종 구성·소재·규격·세트 가격·출시 일정은 추후 공개됩니다.</p></div>
  </div>
  <dialog ref={dialog} className="goods-pin-dialog" aria-label={selected?.name}>
   {selected && <>
    <button type="button" className="goods-pin-close" aria-label="닫기" onClick={() => dialog.current?.close()}>×</button>
    <p className="eyebrow">출시 소식 준비 중</p>
    <GoodsImage src={selected.image} alt={selected.name} />
    <h3>{selected.name}</h3>
    <p>{selected.story}</p>
    <Link className="text-link" href={"/goods/" + selected.id}>상세 보기 ↗</Link>
    <a href="#notify" className="goods-card-notify" onClick={() => { dialog.current?.close(); onNotify(); }}>알림받기 →</a>
   </>}
  </dialog>
 </section></>}</Localized>;
}

