"use client";

import { useState } from "react";
import { useLanguage } from "./i18n/provider";

export default function FloatingActions() {
 const { t } = useLanguage();
 const [status, setStatus] = useState("");

 async function share() {
  setStatus("");
  const url = new URL(window.location.href);
  url.hash = "";
  try {
   if (navigator.share) {
    await navigator.share({ title: document.title, url: url.href });
    return;
   }
   await navigator.clipboard.writeText(url.href);
   setStatus("링크를 복사했어요.");
  } catch (error) {
   if (error instanceof DOMException && error.name === "AbortError") return;
   setStatus("공유하지 못했어요.");
  }
 }

 return (
  <div className="floating-actions">
   <p role="status">{t(status)}</p>
   <button type="button" aria-label={t("공유하기")} onClick={share}>
    <svg viewBox="0 0 24 24" aria-hidden="true">
     <path d="m8 11 8-5M8 13l8 5" />
     <circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="5" r="2.5" /><circle cx="18" cy="19" r="2.5" />
    </svg>
   </button>
   <button type="button" aria-label={t("맨 위로")} onClick={() => window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
   })}>
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21V3m-7 7 7-7 7 7" /></svg>
   </button>
  </div>
 );
}
