import Image from "next/image";
import Localized from "./i18n/localized";

export default function PicnicStory(){
 return <Localized>{<section className="picnic-story" aria-labelledby="picnic-title">
  <Image src="/campaign/dongbaeki-picnic.png" alt="동백숲에서 동백이와 함께 따뜻한 차를 마시며 쉬는 피크닉 콘셉트" width={1536} height={1024} sizes="100vw"/>
  <div className="picnic-copy">
   <p className="picnic-eyebrow">FOREST PICNIC</p>
   <h2 id="picnic-title">동백숲 피크닉은 이렇게</h2>
   <p className="picnic-description">동백이와 따뜻한 차 한 잔,<br/>숲의 고요를 느껴보세요.</p>
   <p className="picnic-note">피크닉 콘셉트 이미지이며, 실제 운영 프로그램과 일정은 확정 후 안내합니다.</p>
  </div>
 </section>}</Localized>;
}

