"use client";
import { useState } from "react";
import GoodsDetail from "./goods-detail";
import { goods } from "./goods-data";
import GoodsImage from "./goods-image";

export default function GoodsShowcase({ onNotify }: { onNotify: () => void }) {
 const [selected, setSelected] = useState<(typeof goods)[number] | null>(null);
 return <><section id="goods" className="goods-showcase section-wrap" aria-labelledby="goods-title">
  <div className="section-heading"><div><p className="eyebrow">03 / BLOOM GOODS SET</p><h2 id="goods-title">동백마을의 마음을,<br /><em>다섯 가지로 담았어요.</em></h2></div><p>하나의 이야기로 이어지는 굿즈 5종 세트.<br />가방부터 텀블러까지, 일상 가까이 만나는 블룸.</p></div>
  <div className="goods-detail goods-set-detail">
   <div className="goods-set-preview" aria-label="동백마을 굿즈 5종"><div className="goods-preview-heading"><span className="eyebrow">BLOOM YOUR WAY</span><p>동백마을 굿즈 컬렉션</p></div>{goods.map(item=><div key={item.id}><GoodsImage src={item.image} alt={item.name+" 디자인 전체 보기"} /><button className="goods-name-link" type="button" aria-haspopup="dialog" onClick={() => setSelected(item)}>{item.name} <span aria-hidden="true">↗</span></button></div>)}</div>
   <div className="goods-copy"><p className="eyebrow">DONGBAEK VILLAGE × A2O LITE</p><h3>숲에서 시작된 이야기,<br />일상으로 가져오는 한 세트.</h3><p className="goods-description">메고, 마시고, 쓰고, 요리하는 일상. 동백의 색과 블룸의 이야기를 가방·머그컵·모자·앞치마·텀블러에 담았어요.</p><ol className="goods-set-list">{goods.map(item=><li key={item.id}><span className="goods-set-number">0{item.id}</span><div><h4><button className="goods-name-link" type="button" aria-haspopup="dialog" onClick={() => setSelected(item)}>{item.name} <span aria-hidden="true">↗</span></button></h4><p>{item.story}</p></div></li>)}</ol><button className="button" type="button" onClick={onNotify}>5종 세트 출시 알림받기 <span aria-hidden="true">↗</span></button><p className="fine-print">구성: 가방·머그컵·모자·앞치마·텀블러<br />최종 구성·소재·규격·세트 가격·출시 일정은 추후 공개됩니다.</p></div>
  </div>
 </section>{selected && <GoodsDetail item={selected} onClose={() => setSelected(null)} />}</>;
}

