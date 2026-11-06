"use client";
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { useLanguage } from "./provider";

// Translate presentation text only. Inputs, user data, URLs and handlers stay untouched.
export default function Localized({children}:{children:ReactNode}){
 const {t}=useLanguage();
 function visit(node:ReactNode):ReactNode {
  if(typeof node==="string"){
   const text=t(node);
   if(!text.includes("A2O LITE"))return text;
   return text.split(/(A2O LITE)/g).map((part,index)=>part==="A2O LITE"?<span className="group-name-neon" key={index}>{part}</span>:part);
  }
  if(!isValidElement(node))return node;
  const element=node as ReactElement<Record<string,unknown>>;
  if(element.props["data-no-translate"] || element.props.className==="group-name-neon")return element;
  const props:Record<string,unknown>={};
  for(const key of ["alt","aria-label","placeholder","title"])
   if(typeof element.props[key]==="string")props[key]=t(element.props[key] as string);
  if(element.props.children!==undefined)props.children=Children.map(element.props.children as ReactNode,visit);
  return cloneElement(element,props);
 }
 return <>{Children.map(children,visit)}</>;
}

