"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
const words = [
 {
  "name": "bloom",
  "src": "/campaign/lettering-bloom.png",
  "width": 2170,
  "height": 725
 },
 {
  "name": "your",
  "src": "/campaign/lettering-your.png",
  "width": 2156,
  "height": 729
 },
 {
  "name": "way",
  "src": "/campaign/lettering-way.png",
  "width": 1958,
  "height": 803
 }
];

export default function ScrollLettering() {
 const element = useRef<HTMLDivElement>(null);
 useEffect(() => {
  const target = element.current;
  if (!target || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(([entry]) => {
   if (entry.isIntersecting) { target.classList.add("is-visible"); observer.disconnect(); }
  }, { threshold: 0.25 });
  observer.observe(target);
  return () => observer.disconnect();
 }, []);
 return <div ref={element} className="experience-lettering" role="img" aria-label="BLOOM YOUR WAY">{words.map(word => <span key={word.name} className={"lettering-line lettering-" + word.name}><Image src={word.src} alt="" width={word.width} height={word.height} sizes="(max-width: 700px) 30vw, 200px" /></span>)}</div>;
}
