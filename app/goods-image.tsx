import type { CSSProperties } from "react";
import Localized from "@/app/i18n/localized";
import Image from "next/image";

// A 6 x 4 sheet: frame 0 is the front view; each next frame rotates 15 degrees.
export default function GoodsImage({src,alt,frame=0}:{src:string;alt:string;frame?:number}) {
 const index=((frame%24)+24)%24;
 return <Localized>{<div className="goods-photo goods-photo-single" style={{"--goods-column":index%6,"--goods-row":Math.floor(index/6)} as CSSProperties}>
  <div className="goods-frame-window"><Image src={src} alt={alt} width={1448} height={1086} sizes="(max-width: 700px) 240vw, 2400px" draggable={false}/></div>
 </div>}</Localized>;
}

