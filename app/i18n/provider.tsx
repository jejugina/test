"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { languageTags, translate, type Locale } from "./messages";

type LanguageContextValue = {
 locale:Locale;
 t:(text:string)=>string;
 changeLanguage:(locale:Locale)=>void;
};
const LanguageContext=createContext<LanguageContextValue>({
 locale:"ko", t:text=>text, changeLanguage:()=>{},
});
export function useLanguage(){return useContext(LanguageContext);}

export function LanguageSwitcher(){
 const {locale,changeLanguage}=useLanguage();
 return <div className="language-switch" role="group" aria-label={locale==="ko"?"언어 선택":locale==="en"?"Choose language":"选择语言"}>
  {([["ko","KO","한국어"],["en","EN","English"],["zh","中文","简体中文"]] as const).map(([value,label,title])=>
  <button type="button" key={value} lang={languageTags[value]} aria-label={title} aria-pressed={locale===value} onClick={()=>changeLanguage(value)}>{label}</button>)}
 </div>;
}

export default function LanguageProvider({initialLocale,children}:{initialLocale:Locale;children:ReactNode}){
 const [locale,setLocale]=useState(initialLocale);
 useEffect(()=>{
  document.documentElement.lang=languageTags[locale];
  document.cookie="bloom-locale="+locale+"; Path=/; Max-Age=31536000; SameSite=Lax"+(location.protocol==="https:"?"; Secure":"");
 },[locale]);
 return <LanguageContext.Provider value={{locale,t:text=>translate(text,locale),changeLanguage:setLocale}}>
  <div className="locale-bar"><span className="prototype-tag">{translate("교육용 프로토타입",locale)}</span></div>
  {children}
 </LanguageContext.Provider>;
}
