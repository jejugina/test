"use client";

import { useEffect, useRef, useState } from "react";
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

function CardArtwork({ index, liked = false, onLike, onOpen }: {
 index: number;
 liked?: boolean;
 onLike?: () => void;
 onOpen?: () => void;
}) {
 const [shareStatus, setShareStatus] = useState("");

 async function shareCard() {
  const url = new URL("/campaign/sns-card-5.png", window.location.href).href;
  try {
   if (navigator.share) {
    await navigator.share({ title: titles[4], url });
   } else {
    await navigator.clipboard.writeText(url);
    setShareStatus("링크를 복사했어요.");
   }
  } catch (error) {
   if (!(error instanceof DOMException && error.name === "AbortError")) setShareStatus("공유하지 못했어요.");
  }
 }
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
    <>
     <div className="news-info-header">
      <div className="news-info-masthead" aria-hidden="true"><span>＋</span><strong>Instagram</strong><span>♡</span></div>
      <div className="news-info-profile"><span className="news-info-avatar" aria-hidden="true">✿</span><span>bloom · 제주 동백마을</span></div>
     </div>
     <Image className="news-info-photo" src="/campaign/cards-final-dated-poster-portrait.png" alt="동백이와 함께하는 제주 여행 포스터" width={1122} height={1402} sizes="360px" />
     {onOpen && <button className="news-info-open" type="button" aria-label="5장 크게 보기" aria-haspopup="dialog" onClick={onOpen} />}
     <div className="news-info-caption">
      <h2>동백마을 × <span className="group-name-neon">A2O LITE</span></h2>
      <p>2026.11.11~2026.11.18 · 제주 신흥2리 동백마을</p>
     </div>
     <div className="news-info-reactions">
      <button type="button" aria-label="좋아요" aria-pressed={liked} onClick={onLike}>
       <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21S3 15 3 8.5a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1C21 15 12 21 12 21Z" /></svg>
      </button>
      <button type="button" aria-label="공유하기" onClick={shareCard}>
       <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 4 19-1-7 18-4-8-8-4Zm8 9L22 3" /></svg>
      </button>
      <span className="news-info-dots" aria-hidden="true">· · · · ●</span>
      <a href="/campaign/sns-card-5.png" download aria-label="PNG 저장">
       <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4Z" /></svg>
      </a>
      <span className="news-info-status" role="status">{shareStatus}</span>
     </div>
     <p className="news-info-tags">#동백마을 #동백숲체험 #동백씨앗 #동백오일 #굿즈5종 #BLOOMYOURWAY #교육용가상캠페인</p>
    </>
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
 const [liked, setLiked] = useState(false);

 function openCard(index: number) {
  setSelected(index);
  dialog.current?.showModal();
 }

 useEffect(() => {
  const list = gallery.current;
  if (!list || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let timer: ReturnType<typeof setInterval> | undefined;
  const stop = () => clearInterval(timer);
  const observer = new IntersectionObserver(([entry]) => {
   stop();
   if (!entry.isIntersecting) return;
   timer = setInterval(() => {
    if (document.hidden || dialog.current?.open || list.matches(":hover, :focus-within")) return;
    const slides = Array.from(list.children) as HTMLElement[];
    const index = slides.findIndex(slide => Math.abs(slide.offsetLeft - slides[0].offsetLeft - list.scrollLeft) < 8);
    const next = slides[(index + 1) % slides.length];
    if (next) list.scrollTo({ left: next.offsetLeft - slides[0].offsetLeft, behavior: "smooth" });
   }, 2000);
  }, { threshold: 0.35 });
  observer.observe(list);
  return () => { stop(); observer.disconnect(); };
 }, []);

 const swipeStart = useRef<number | null>(null);

 return <Localized><Wrapper className={embedded ? "story-card-news" : "cards-page section-wrap"} aria-label="SNS 카드뉴스">
  {!embedded && <Link className="text-link" href="/#story">← bloom 웹사이트</Link>}
  {embedded ? <h2>SNS에서 만난 이야기 다시 보기</h2> : <h1>SNS에서 만난 이야기 다시 보기</h1>}
  <p>동백마을 × A2O LITE 이야기. 카드를 누르면 크게 볼 수 있어요.</p>
  <ol ref={gallery} className="news-gallery">
   {titles.map((title, index) => <li key={title}>
    {index === titles.length - 1 ? (
     <CardArtwork index={index} liked={liked} onLike={() => setLiked(!liked)} onOpen={() => openCard(index)} />
    ) : (
     <button type="button" aria-label={(index + 1) + "장: " + title} aria-haspopup="dialog" onClick={() => openCard(index)}><CardArtwork index={index} /></button>
    )}
   </li>)}
  </ol>
  <dialog ref={dialog} className="news-dialog" aria-label="SNS 카드뉴스"
   onTouchStart={event => { swipeStart.current = event.touches[0].clientX; }}
   onTouchEnd={event => {
    if (swipeStart.current === null) return;
    const distance = event.changedTouches[0].clientX - swipeStart.current;
    swipeStart.current = null;
    if (Math.abs(distance) > 45) setSelected(current => Math.max(0, Math.min(titles.length - 1, current + (distance < 0 ? 1 : -1))));
   }}
   onKeyDown={event => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    setSelected(current => Math.max(0, Math.min(titles.length - 1, current + (event.key === "ArrowRight" ? 1 : -1))));
   }}>
   <button className="news-close" type="button" aria-label="닫기" onClick={() => dialog.current?.close()}>×</button>
   <CardArtwork index={selected} liked={liked} onLike={() => setLiked(!liked)} />
   <a className="news-download" href={`/campaign/sns-card-${selected + 1}.png`} download>PNG 다운로드 ↓</a>
  </dialog>
 </Wrapper></Localized>;
}
