"use client";

import Localized from "@/app/i18n/localized";
import { useEffect, useRef } from "react";

import GoodsImage from "./goods-image";
import { goods } from "./goods-data";

type GoodsItem = (typeof goods)[number];

export default function GoodsDetail({ item, onClose }: {
  item: GoodsItem;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialog.current?.showModal();
  }, []);

  return <Localized>{(
    <dialog
      ref={dialog}
      className="goods-detail-dialog"
      aria-labelledby="goods-detail-title"
      aria-describedby="goods-detail-story"
      onClose={onClose}
      onClick={event => {
        if (event.target === event.currentTarget) dialog.current?.close();
      }}
    >
      <div className="goods-detail-panel">
        <button className="goods-detail-close" type="button" aria-label="상세보기 닫기" autoFocus onClick={() => dialog.current?.close()}>×</button>
        <div className="goods-detail-content">
          <GoodsImage src={item.image} alt={item.name + " 디자인 전체 보기"} />
          <div className="goods-detail-copy">
            <p className="eyebrow">{item.english}</p>
            <h2 id="goods-detail-title">{item.name}</h2>
            <p id="goods-detail-story">{item.story}</p>
            <p className="fine-print">최종 소재·규격·가격·출시 일정은 추후 공개됩니다.</p>
            <button className="button" type="button" onClick={() => dialog.current?.close()}>목록으로 돌아가기</button>
          </div>
        </div>
      </div>
    </dialog>
  )}</Localized>;
}
