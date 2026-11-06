"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Localized from "../i18n/localized";
import { experiences } from "../experience-data";

const titles = [
 "제주도로 달려가야 하는 이유",
 "제주로 향하는 비행기 창문",
 "씨앗을 줍고, 요리하고, 오일을 짜는 하루",
 "동백마을을 담은 굿즈 5종",
 "동백이와 함께하는 제주 여행",
];

function CardArtwork({ index }: { index: number }) {
 return (
  <div className={`news-art news-art-${index + 1}`}>
   {index === 0 ? (
    <Image src="/campaign/cards-instagram-cover.png" alt={titles[0]} width={404} height={682} sizes="360px" />
   ) : index === 1 ? (
    <Image src="/campaign/cards-flight.png" alt={titles[1]} width={1122} height={1402} sizes="360px" />
   ) : index === 3 ? (
    <div className="news-goods-post">
     <Image src="/campaign/cards-goods-post-frame.png" alt="동백마을 굿즈를 소개하는 인스타그램 게시물 시안" width={337} height={578} sizes="360px" />
     <Image className="news-goods-post-insert" src="/campaign/cards-goods-post-photo.png" alt="검은 패턴 가방과 동백 굿즈" width={593} height={436} sizes="360px" />
    </div>
   ) : index === 4 ? (
    <Image src="/campaign/cards-final-dated-poster.png" alt={titles[4]} width={1122} height={1402} sizes="360px" />
   ) : (
    <>
     <div className="news-art-label">

      <span>{index + 1} / {titles.length}</span>
     </div>
     <p className="news-brand-slogan">BLOOM YOUR WAY</p>
     <h2>{titles[index]}</h2>
     {index === 2 && <div className="news-experience-photos">
      {["seeds", "pasta", "oil", "village"].map(id => experiences.find(item => item.id === id)!).map(item => (
       <Image key={item.id} src={item.image} alt={item.title} width={1672} height={941} sizes="(max-width: 700px) 45vw, 220px" />
      ))}
     </div>}
     <p className="news-art-footer">DONGBAEK VILLAGE × <span className="group-name-neon">A2O LITE</span></p>
    </>
   )}
  </div>
 );
}

export default function CardNews({ embedded = false }: { embedded?: boolean }) {
 const Wrapper = embedded ? "section" : "main";
 const dialog = useRef<HTMLDialogElement>(null);
 const gallery = useRef<HTMLOListElement>(null);
 const [selected, setSelected] = useState(0);

 function moveGallery(direction: number) {
  const list = gallery.current;
  if (!list) return;
  list.scrollBy({ left: direction * list.clientWidth, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
 }

 return <Localized><Wrapper className={embedded ? "story-card-news" : "cards-page section-wrap"} aria-label="SNS 카드뉴스">
  {!embedded && <Link className="text-link" href="/#story">← bloom 웹사이트</Link>}
  {embedded ? <h2>SNS 카드뉴스</h2> : <h1>SNS 카드뉴스</h1>}
  <p>동백마을 × A2O LITE 이야기. 카드를 누르면 크게 볼 수 있어요.</p>
  <ol ref={gallery} className="news-gallery">
   {titles.map((title, index) => <li key={title}>
    <button type="button" aria-label={`${index + 1}장: ${title}`} aria-haspopup="dialog" onClick={() => {
     setSelected(index);
     dialog.current?.showModal();
    }}><CardArtwork index={index} /></button>
   </li>)}
  </ol>
  <div className="experience-carousel-controls news-gallery-controls">
   <button type="button" aria-label="이전 카드" onClick={() => moveGallery(-1)}>‹</button>
   <button type="button" aria-label="다음 카드" onClick={() => moveGallery(1)}>›</button>
  </div>
  <dialog ref={dialog} className="news-dialog" aria-label="SNS 카드뉴스">
   <button className="news-close" type="button" aria-label="닫기" onClick={() => dialog.current?.close()}>×</button>
   <CardArtwork index={selected} />
   <a className="news-download" href={selected === titles.length - 1 ? "/campaign/cards-final-dated-poster.png" : `/campaign/sns-card-${selected + 1}.png`} download>PNG 다운로드 ↓</a>
   <div className="news-dialog-controls experience-carousel-controls">
    <button type="button" aria-label="이전 카드" disabled={selected === 0} onClick={() => setSelected(selected - 1)}>‹</button>
    <span aria-live="polite">{selected + 1} / {titles.length}</span>
    <button type="button" aria-label="다음 카드" disabled={selected === titles.length - 1} onClick={() => setSelected(selected + 1)}>›</button>
   </div>
  </dialog>
 </Wrapper></Localized>;
}

