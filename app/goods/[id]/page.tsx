import Link from "next/link";
import { notFound } from "next/navigation";
import { goods } from "@/app/goods-data";
import GoodsViewer from "@/app/goods-viewer";
import Localized from "@/app/i18n/localized";

export function generateStaticParams(){return goods.map(item=>({id:String(item.id)}));}

export default async function GoodsPage({params}:{params:Promise<{id:string}>}){
 const {id}=await params;
 const item=goods.find(item=>String(item.id)===id);
 if(!item)notFound();
 return <Localized>{<main className="goods-product-page section-wrap">
  <Link href="/#goods" className="text-link">목록으로 돌아가기</Link>
  <div className="goods-product-layout">
   <GoodsViewer src={item.image} name={item.name}/>
   <div className="goods-product-copy">
    <p className="eyebrow">{item.english}</p>
    <h1>{item.name}</h1>
    <p>{item.story}</p>
    <p className="fine-print">최종 소재·규격·가격·출시 일정은 추후 공개됩니다.</p>
    <Link className="button" href="/#goods">목록으로 돌아가기</Link>
   </div>
  </div>
 </main>}</Localized>;
}

