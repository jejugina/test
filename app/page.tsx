"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { campaign } from "./campaign-config";
import GoodsShowcase from "./goods-showcase";



function Flower({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="-65 -65 130 130" aria-hidden="true">{[0,72,144,216,288].map(angle => <ellipse key={angle} cx="0" cy="-25" rx="24" ry="35" fill="currentColor" transform={`rotate(${angle})`} />)}<circle r="16" fill="#eac66d" /></svg>;
}

export default function Home() {
  const dialog = useRef<HTMLDialogElement>(null);
  const logoStage = useRef<HTMLDivElement>(null);
  const [logoRevealed, setLogoRevealed] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLogoRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (logoStage.current) observer.observe(logoStage.current);
    return () => observer.disconnect();
  }, []);
  const notify = () => {
    if (campaign.signupFormUrl) window.open(campaign.signupFormUrl, "_blank", "noopener,noreferrer");
    else dialog.current?.showModal();
  };
  return <>
    <a className="skip-link" href="#main">본문으로 바로가기</a>
    <header className="site-header">
      <Link href="/components/pyramid" className="wordmark" aria-label="bloom 피라미드 보기">bloom<span>✳</span></Link>
      <nav aria-label="주 메뉴"><a href="#story">우리의 이야기</a><a href="#goods">굿즈 이야기</a><Link href="/cards">SNS 이야기 ↗</Link></nav>
      <button className="button small" onClick={notify}>알림받기 <span aria-hidden="true">↗</span></button>
    </header>
    <main id="main">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="tiny-flower">✳</span> DONGBAEK VILLAGE × A2O LITE</p>
          <h1>동백숲의 이야기가,<br />당신의 일상에<br /><em>피어납니다.</em></h1>
          <p className="hero-description">마을소녀 꽃님이와 작은 친구 블룸이가 전하는<br className="desktop-break" /> 동백마을의 아름다움. 곧, 일상에서 만나세요.</p>
          <div className="hero-actions"><button className="button launch-notify" onClick={notify}>출시 소식 알림받기 <span aria-hidden="true">↗</span></button><a className="text-link" href="#story">이야기 따라가기 <span aria-hidden="true">↓</span></a><Link className="button pyramid-shortcut" href="/components/pyramid">피라미드 보기 <span aria-hidden="true">↗</span></Link></div>
          <p className="fine-print">COMING SOON · 제품과 출시 일정은 추후 공개됩니다.</p>
        </div>
        <div className="hero-art"><div className="art-label">A LITTLE VILLAGE, A NEW BLOOM</div><video className="hero-video" controls autoPlay muted loop playsInline preload="metadata" poster="/campaign/key-visual.png" aria-label="동백마을 학생 체험 영상"><source src="/campaign/dongbaek-students.mp4" type="video/mp4" />이 브라우저에서는 영상을 재생할 수 없습니다. <a href="/campaign/dongbaek-students.mp4">체험 영상 열기</a></video><span className="round-seal">동백의 마음을<br /><b>일상 가까이</b><br />WITH BLOOM</span><span className="art-caption">01 — 동백마을 학생 체험</span></div>
      </section>
      <div className="ticker" aria-hidden="true"><span>FROM THE VILLAGE, TO YOUR EVERYDAY</span><Flower /><span>동백의 마음을 일상 가까이</span><Flower /><span>LET YOUR EVERYDAY BLOOM</span></div>
      <section id="story" className="story section-wrap">
        <div className="story-image"><Image src="/campaign/key-visual.png" alt="BLOOM YOUR WAY — 동백꽃이 핀 제주 마을에서 동백이와 함께하는 산책과 동백유 체험 키비주얼" width={1600} height={900} sizes="(max-width: 700px) 90vw, 45vw" /><span className="image-note">BLOOM YOUR WAY · 동백마을 키비주얼</span></div>
        <div className="story-copy"><p className="eyebrow">01 / OUR LITTLE STORY</p><h2>마을의 온기를,<br />오래 간직하는 방법.</h2><p>동백꽃 아래를 걷는 시간. 작은 풍경 앞에 잠시 멈추는 마음. 우리가 동백마을에서 만나고 싶은 아름다움입니다.</p><p>동백마을과 A2O Lite는 그 마음을 일상으로 옮기는 콜라보레이션을 준비합니다. 꽃님이의 시선으로 마을을 만나고, 블룸이와 함께 새로운 이야기를 발견해 보세요.</p><div className="friends"><div><b>꽃님이</b><span>마을의 아름다움을 안내하는 소녀</span></div><div><b>블룸이</b><span>함께 걷고 발견하는 작은 친구</span></div></div></div>
      </section>
      <section className="village section-wrap">
        <div className="section-heading"><div><p className="eyebrow">02 / MOMENTS IN DONGBAEK</p><h2>천천히 걸을수록,<br />더 많이 피어나는.</h2></div><p>꽃님이와 블룸이의 눈으로 만나는 마을.<br />아래 장면은 체험 콘텐츠를 위한 연출 시안입니다.</p></div>
        <div className="moments"><article><span>01</span><Flower /><h3>숲을 만나는 시간</h3><p>동백꽃과 잎의 색, 숲 사이의 빛을 따라 걷는 이야기.</p></article><article><span>02</span><div className="moment-symbol" aria-hidden="true">⌁</div><h3>마을의 손길을 따라서</h3><p>마을의 재료와 손길을 가까이 만나는 체험 이야기.</p></article><article><span>03</span><div className="moment-symbol" aria-hidden="true">✧</div><h3>작은 발견을 간직하기</h3><p>꽃님이와 블룸이가 찾은 장면을 일상에 담는 이야기.</p></article></div>
        <p className="fine-print">실제 운영 체험과 일정은 확정 후 안내합니다.</p>
      </section>
      <GoodsShowcase onNotify={notify} />
      <section className="logo-story" aria-labelledby="logo-title"><div className="logo-intro"><p className="eyebrow">04 / A FAIRY BECOMES A BLOOM</p><h2 id="logo-title">숲의 작은 요정이,<br />하나의 이름으로 피어나는 순간.</h2><p>동백요정의 꽃잎과 빛이 모여 bloom이 됩니다.</p></div><div ref={logoStage} className={`logo-stage${logoRevealed ? " is-visible" : ""}`} aria-label="동백요정을 상징하는 꽃잎들이 모여 bloom 워드마크가 되는 애니메이션"><div className="fairy-orbit">{[0,1,2,3,4,5].map(i=><Flower key={i} className={`orbit-flower petal-${i}`} />)}</div><span className="formed-logo">bloom<Flower /></span></div><p className="logo-footnote">숲에서 시작해, 당신 곁에 피어날 이름. bloom.</p></section>
      <section className="signup section-wrap" id="notify"><Flower /><p className="eyebrow">BE THE FIRST TO MEET BLOOM</p><h2>다음 이야기가 피어날 때,<br />가장 먼저 만나세요.</h2><p>동백마을 × A2O Lite 콜라보 제품의 출시 소식을 전해드려요.</p><button className="button" onClick={notify}>알림받기 <span aria-hidden="true">↗</span></button><span className="fine-print">구글 폼에서 알림 신청 · 구매 예약이 아닙니다.</span></section>
    </main>
    <footer className="site-footer"><div><a href="#" className="wordmark">bloom<span>✳</span></a><p>동백마을 × A2O Lite</p></div><p>동백의 마음을 일상 가까이.<br /><small>본 페이지의 캐릭터·제품·체험 이미지는 기획 시안입니다.</small></p><Link href="/cards">5장의 이야기 보기 ↗</Link></footer>
    <dialog ref={dialog} className="signup-dialog"><form method="dialog"><button className="dialog-close" aria-label="닫기">×</button><Flower /><p className="eyebrow">COMING SOON</p><h2>알림 신청 폼을<br />준비하고 있어요.</h2><p>구글 폼이 연결되면 이곳에서 출시 알림을 신청하실 수 있어요. 지금은 신청이 접수되지 않습니다.</p><button className="button">확인</button></form></dialog>
  </>;
}





