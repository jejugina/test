import Image from "next/image";

export default function BloomWordmark() {
 return (
  <span className="bloom-logo">
   <Image src="/campaign/bloom-logo-attached.png" alt="BLOOM" width={2164} height={727} sizes="180px" />
  </span>
 );
}
