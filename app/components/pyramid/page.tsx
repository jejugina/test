import Link from "next/link";
import Pyramid from "@/ui-components/components/Pyramid";

export const metadata = { title: "피라미드 컴포넌트 | bloom" };
export default function PyramidPreview() {
  return <main className="pyramid-preview"><Link href="/" className="pyramid-preview__back">← bloom 웹사이트</Link><Pyramid /><p className="pyramid-preview__note">동백숲에서 알림까지, 다섯 단계의 이야기를 담은 UI 시안입니다.<br />각 단은 마우스·터치·키보드로 선택할 수 있습니다.</p></main>;
}
