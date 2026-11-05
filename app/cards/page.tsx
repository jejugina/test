import Image from "next/image";
import Link from "next/link";
export const metadata = { title: "다섯 장의 이야기 | bloom" };
const cards = ["동백숲에서 발견한, 조금 특별한 만남.", "마을과 일상이 만나, 새로운 이야기가 피어납니다.", "꽃님이와 걷고, 블룸이와 발견하는 마을.", "마을에서 만난 아름다움이, 곧 당신의 일상으로.", "동백숲의 이야기는 어떤 모습으로 피어날까요?"];
export default function Cards() {
  return <main className="cards-page section-wrap"><Link className="text-link" href="/">← bloom 웹사이트</Link><p className="eyebrow">DONGBAEK VILLAGE × A2O LITE</p><h1>다섯 장으로 만나는<br /><em>동백숲의 이야기.</em></h1><p>1080 × 1350 · SNS 카드뉴스 콘셉트 시안<br />캐릭터·굿즈·체험 정보는 최종 확정 전입니다.</p><div className="cards-grid">{cards.map((title,i)=><article key={title}><Image src={`/campaign/card-${i+1}.png`} width={1080} height={1350} loading={i === 0 ? "eager" : "lazy"} alt={`${i+1}장: ${title}`} /><div><h2>{String(i+1).padStart(2,"0")} / {title}</h2><span className="card-downloads"><a href={`/campaign/card-${i+1}.png`} download={`bloom-card-${i+1}.png`}>PNG 다운로드 ↓</a><a href={`/campaign/card-${i+1}.svg`} download={`bloom-card-${i+1}.svg`}>SVG 원본 ↓</a></span></div></article>)}</div><p>게시용 캡션: 동백숲의 이야기가, 당신의 일상에 피어납니다. 동백마을과 A2O Lite가 준비하는 새로운 만남. 꽃님이와 블룸이의 이야기를 웹사이트에서 만나고, 출시 알림을 신청해 주세요.</p><Link className="button" href="/#notify">더 알아보기 ↗</Link></main>;
}

