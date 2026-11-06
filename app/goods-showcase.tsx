"use client";
import Localized from "@/app/i18n/localized";
import Link from "next/link";

import { goods } from "./goods-data";
import Image from "next/image";
import GoodsImage from "./goods-image";

export default function GoodsShowcase({ onNotify }: { onNotify: () => void }) {

 return <Localized>{<><section id="goods" className="goods-showcase section-wrap" aria-labelledby="goods-title">
  <div className="section-heading goods-intro"><div className="goods-intro-copy"><p className="eyebrow">03 / BLOOM GOODS SET</p><h2 id="goods-title">동백마을의 마음을,<br /><em>다섯 가지로 담았어요.</em></h2></div><div className="goods-set-preview goods-set-reference" aria-label="동백마을 굿즈 5종"><Image src="/goods/goods-set-card-dongbaeki.png" alt="너의 방식대로 피어나 — 동백마을 × A2O LITE 굿즈 5종 카드뉴스" width={1074} height={1464} sizes="(max-width: 700px) 90vw, 45vw" /></div><p className="goods-intro-description">하나의 이야기로 이어지는 굿즈 5종 세트.<br />가방부터 텀블러까지,<br />일상 가까이 만나는 블룸.</p></div>
  <div className="goods-detail goods-set-detail">

   <div className="goods-copy"><p className="eyebrow">DONGBAEK VILLAGE × A2O LITE</p><h3>숲에서 시작된 이야기,<br />일상으로 가져오는 한 세트.</h3><p className="goods-description">메고, 마시고, 쓰고, 요리하는 일상. 동백의 색과 블룸의 이야기를 가방·머그컵·모자·앞치마·텀블러에 담았어요.</p><ol className="goods-set-list goods-catalog" aria-label="굿즈 5종">{goods.map(item=><li key={item.id}>
 <span className="goods-card-badge">출시 소식 준비 중</span>
 <Link className="goods-card-image" href={"/goods/"+item.id} aria-label={item.name}>
  <GoodsImage src={item.image} alt={item.name}/><span className="goods-card-zoom" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="10" cy="10" r="6" /><path d="m14.5 14.5 5 5M7.5 10h5M10 7.5v5" /></svg></span>
 </Link>
 <div className="goods-card-caption"><h4><Link className="goods-card-title" href={"/goods/"+item.id}>{item.name}</Link></h4><p>{item.story}</p>
 <a className="goods-card-notify" href="#notify" onClick={onNotify}>알림받기 <span aria-hidden="true">→</span></a></div>
</li>)}</ol><p className="fine-print">구성: 가방·머그컵·모자·앞치마·텀블러<br />최종 구성·소재·규격·세트 가격·출시 일정은 추후 공개됩니다.</p></div>
  </div>
 </section></>}</Localized>;
}

