import { cookies } from "next/headers";
import type { ReactNode } from "react";
import LanguageProvider from "./provider";
import { isLocale } from "./messages";

export default async function LocalizedApp({children}:{children:ReactNode}){
 const value=(await cookies()).get("bloom-locale")?.value;
 return <LanguageProvider initialLocale={isLocale(value)?value:"ko"}>{children}</LanguageProvider>;
}

