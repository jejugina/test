"use client";

import Localized from "@/app/i18n/localized";
import Image from "next/image";
import CardNews from "./cards/card-news";
import PicnicStory from "./picnic-story";
import ScrollLettering from "./scroll-lettering";
import CamelliaMark from "./camellia-mark";
import CampaignDecoration from "./campaign-decoration";
import ExperienceCarousel from "./experience-carousel";
import NotificationSignup from "./notification-signup";
import GoodsShowcase from "./goods-showcase";
import FloatingActions from "./floating-actions";
import BloomWordmark from "./bloom-wordmark";




function Flower({ className = "" }: { className?: string }) {
  return <Localized>{<svg className={className} viewBox="-65 -65 130 130" aria-hidden="true">{[0,72,144,216,288].map(angle => <ellipse key={angle} cx="0" cy="-25" rx="24" ry="35" fill="currentColor" transform={`rotate(${angle})`} />)}<circle r="16" fill="#eac66d" /></svg>}</Localized>;
}

export default function Home() {

  const notify = () => {
    window.dispatchEvent(new Event("bloom:open-notification"));
  };
  return <Localized>{<>

    <a className="skip-link" href="#main">본문으로 바로가기</a>
    <main id="main"><CampaignDecoration />
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><CamelliaMark className="tiny-flower" /> DONGBAEK VILLAGE × A2O LITE</p>
          <h1>동백숲의 이야기가,<br />당신의 일상에<br /><em>피어납니다.</em></h1>
          <p className="hero-description">마을소녀 꽃님이와 작은 친구 블룸이가 전하는<br className="desktop-break" /> 동백마을의 아름다움. 곧, 일상에서 만나세요.</p>
          <div className="hero-actions"><button className="button launch-notify notification-cta" onClick={notify}>출시 소식 알림받기 <span aria-hidden="true">↗</span></button><a className="text-link" href="#story">이야기 따라가기 <span aria-hidden="true">↓</span></a></div>
          <p className="fine-print">COMING SOON · 제품과 출시 일정은 추후 공개됩니다.</p>
        </div>
        <div className="hero-art"><div className="art-label">A LITTLE VILLAGE, A NEW BLOOM</div><video className="hero-video" controls autoPlay muted loop playsInline preload="metadata" poster="/campaign/seed-video-poster.webp" aria-label="동백씨앗 줍기 영상"><source src="/campaign/camellia-seed-picking.mp4" type="video/mp4" />이 브라우저에서는 영상을 재생할 수 없습니다. <a href="/campaign/camellia-seed-picking.mp4">체험 영상 열기</a></video><span className="round-seal">동백의 마음을<br /><b>일상 가까이</b><br />WITH BLOOM</span></div>
      </section>
      <div className="ticker" aria-hidden="true"><span>FROM THE VILLAGE, TO YOUR EVERYDAY</span><Flower /><span>동백의 마음을 일상 가까이</span><Flower /><span>LET YOUR EVERYDAY BLOOM</span></div>
      <section id="story" className="story section-wrap">
        <div className="story-copy"><p className="eyebrow">01 / OUR LITTLE STORY</p><h2>마을의 온기를,<br />오래 간직하는 방법.</h2><p>동백꽃 아래를 걷는 시간. 작은 풍경 앞에 잠시 멈추는 마음. 우리가 동백마을에서 만나고 싶은 아름다움입니다.</p><p>동백마을과 A2O LITE는 그 마음을 일상으로 옮기는 콜라보레이션을 준비합니다. A2O LITE의 시선으로 마을을 만나고, 동백이와 함께 새로운 이야기를 발견해 보세요.</p><div className="friends campaign-friends campaign-friends-trio"><article><Image className="dongbaeki-intro-image" src="/partners/camellia-friends-grass.png" alt="잔디밭에 나란히 앉은 동백 씨앗, 동백이, 동백오일" width={1774} height={887} sizes="(max-width: 700px) 85vw, 560px" /><div><b>동백이와 친구들</b><span>작은 씨앗이 황금빛 오일이 되는 이야기를 들려줘요.</span></div></article></div></div>

      </section>
      <section id="experiences" className="village section-wrap">
        <div className="section-heading experience-heading" id="village"><div className="experience-heading-title"><p className="eyebrow">02 / MOMENTS IN&nbsp;DONGBAEK</p><h2>천천히 걸을수록,<br />더 많이 피어나는.</h2></div><ScrollLettering /><p>동백이와 함께 천천히 경험하는 마을.<br />아래 장면은 체험 콘텐츠를 위한 연출 시안입니다.</p></div>
        <ExperienceCarousel onNotify={notify}/>
        <p className="fine-print">실제 운영 체험과 일정은 확정 후 안내합니다.</p>
      </section>
      <GoodsShowcase onNotify={notify} />
      <PicnicStory />
      <NotificationSignup />
      <CardNews embedded />
    </main>
    <aside className="prototype-notice" aria-label="교육용 프로토타입"><p>교육용 가상 캠페인 · 공식 협업 아님</p></aside>
    <footer className="site-footer" id="visit"><div className="footer-brand-and-maps"><div><a href="#" className="wordmark"><BloomWordmark /></a><p>동백마을 × A2O LITE</p></div><div className="footer-visit-details"><p>제주특별자치도 서귀포시 남원읍 중산간동로 5830</p><nav className="footer-map-links" aria-label="지도에서 찾기"><a href="https://www.google.com/maps/search/?api=1&query=%EC%A0%9C%EC%A3%BC%20%EB%8F%99%EB%B0%B1%EB%A7%88%EC%9D%84" target="_blank" rel="noopener noreferrer" title="새 창에서 열기">구글지도에서 보기 <span aria-hidden="true">↗</span></a><a href="https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%EB%8F%99%EB%B0%B1%EB%A7%88%EC%9D%84" target="_blank" rel="noopener noreferrer" title="새 창에서 열기">네이버지도에서 보기 <span aria-hidden="true">↗</span></a></nav></div></div><p>동백의 마음을 일상 가까이.<br /><small>본 페이지의 캐릭터·제품·체험 이미지는 기획 시안입니다.</small></p></footer>
    <FloatingActions />
  </>}</Localized>;
}





