import Image from "next/image";

export default function GoodsImage({src,alt}:{src:string;alt:string}) {
 return <div className="goods-photo"><Image src={src} alt={alt} width={1456} height={1094} sizes="(max-width: 700px) 90vw, 450px" /></div>;
}
