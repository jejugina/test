import CamelliaMark from "./camellia-mark";
export default function CampaignDecoration(){return <div className="campaign-decoration" aria-hidden="true">{Array.from({length:12},(_,i)=><span className={"decor-item decor-"+i} key={i}>{i%3===1?<svg viewBox="0 0 50 60"><path d="M25 56C-10 30 1 0 21 6C43-7 65 22 25 56Z" fill="#FF0176"/></svg>:<CamelliaMark/>}</span>)}</div>;}
