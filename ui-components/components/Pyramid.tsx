"use client";
import CamelliaMark from "@/app/camellia-mark";

import Localized from "@/app/i18n/localized";
import { useId, useState, type CSSProperties } from "react";
import "../css/pyramid.css";

export type PyramidLevel = { id: string; label: string; title: string; description: string };
const defaultLevels: PyramidLevel[] = [
  { id: "notify", label: "알림", title: "다음 이야기를 기다리기", description: "출시 알림으로 동백마을과 블룸이의 다음 이야기를 만나세요." },
  { id: "goods", label: "굿즈", title: "일상에 담아가기", description: "마을에서 만난 아름다움을 다섯 가지 굿즈로 간직하는 단계입니다." },
  { id: "friends", label: "친구", title: "꽃님이와 블룸이 만나기", description: "마을을 안내하는 꽃님이와 함께 발견하는 블룸이의 이야기를 알아가요." },
  { id: "experience", label: "체험", title: "마을의 시간을 느끼기", description: "천천히 걷고, 살펴보고, 마을의 손길을 만나는 시간을 상상해 보세요." },
  { id: "forest", label: "동백숲", title: "모든 이야기가 시작되는 곳", description: "피라미드의 바탕은 동백숲입니다. 숲의 색과 온기에서 bloom의 이야기가 시작됩니다." },
];

type PyramidProps = { levels?: PyramidLevel[]; title?: string; subtitle?: string };
export default function Pyramid({ levels = defaultLevels, title = "작은 숲에서, 하나의 이야기로.", subtitle = "각 층을 눌러 이야기를 발견해 보세요." }: PyramidProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const detailId = useId();
  const titleId = useId();
  const visibleLevels = levels.slice(0, 7);
  const selected = visibleLevels.find(level => level.id === selectedId) ?? visibleLevels[visibleLevels.length - 1];
  if (!selected) return null;
  return <Localized>{<section className="bloom-pyramid" aria-labelledby={titleId}>
    <header className="bloom-pyramid__header"><span className="bloom-pyramid__eyebrow">BLOOM / STORY PYRAMID</span><h2 id={titleId}>{title}</h2><p>{subtitle}</p></header>
    <div className="bloom-pyramid__layers" role="group" aria-label="피라미드 이야기 단계">
      {visibleLevels.map((level,index) => <button key={level.id} type="button" className="bloom-pyramid__layer" aria-pressed={selected.id === level.id} aria-controls={detailId} onClick={() => setSelectedId(level.id)} style={{ "--layer-width": `${((index+1)/visibleLevels.length)*100}%`, "--layer-inset": `${50/(index+1)}%`, "--layer-color": ["#e7dcae", "#c3cc9b", "#97b087", "#6f9370", "#447055", "#365e49", "#294b3c"][index], "--layer-ink": index < 3 ? "#203e2d" : "#fff9e9" } as CSSProperties}><span>{level.label}</span><span className="bloom-pyramid__check" aria-hidden="true">{selected.id === level.id ? "•" : ""}</span></button>)}
    </div>
    <div id={detailId} className="bloom-pyramid__detail" aria-live="polite" aria-atomic="true"><span className="bloom-pyramid__eyebrow">{selected.label}</span><h3>{selected.title}</h3><p>{selected.description}</p></div>
    <footer className="bloom-pyramid__footer">bloom<CamelliaMark /></footer>
  </section>}</Localized>;
}
