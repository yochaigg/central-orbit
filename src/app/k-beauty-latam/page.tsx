"use client";

import { useState } from "react";

type Question = { question: string; answers: [string,string,string,string]; correct: number; explanation: string };
const questions: Question[] = [
  {question:"Your skincare products are already sold internationally. Can they be sold in Brazil without meeting Brazilian regulatory requirements?",answers:["Yes, if they are sold in several other countries","Yes, if they comply with Korean regulations","No, Brazilian requirements still apply","Yes, provided the labels are translated"],correct:2,explanation:"Brazil applies its own cosmetics rules through ANVISA. The applicable regularization route depends on the product and its claims; international sales do not substitute for Brazilian compliance."},
  {question:"Which marketplace is especially important for online retail across Latin America?",answers:["Mercado Libre","Rakuten","Coupang","Allegro"],correct:0,explanation:"Mercado Libre is a major regional marketplace, especially in Argentina and Brazil. Its relative importance varies by country; Amazon and Shopee are also relevant competitors."},
  {question:"You search Google for a small skincare retailer in Latin America. Its website link might lead to which destination?",answers:["Only a traditional standalone website","An Instagram business profile","Only a government-registered store directory","Only a brand manufacturer's site"],correct:1,explanation:"Some independent retailers use Instagram as their principal public-facing storefront. A conventional website is not the only indicator of an active retail business."},
  {question:"Which pair of platforms is especially relevant for skincare discovery and direct customer conversations in many LATAM markets?",answers:["Naver and KakaoTalk","WeChat and Weibo","Instagram and WhatsApp","LINE and Yahoo Japan"],correct:2,explanation:"Instagram is widely used for discovery and brand engagement; WhatsApp supports direct customer conversations. This does not mean that most e-commerce payments occur inside those apps."},
  {question:"A serum retails for US$20 abroad. What is the soundest basis for setting its Brazilian retail price?",answers:["Convert US$20 into Brazilian reais","Apply the same margin used in Korea","Use the average LATAM price","Model import costs, taxes, local costs and channel margins"],correct:3,explanation:"Brazilian retail pricing needs a country-specific landed-cost and channel-margin model. Direct currency conversion overlooks major costs."},
  {question:"Brazil has a larger beauty market than Chile. Does that automatically make it the best first LATAM market for every Korean skincare brand?",answers:["Yes, because market size determines launch success","No, brand fit, competition, costs and execution matter","Yes, because smaller markets cannot support imported skincare","No, because Brazil has no established skincare retail channels"],correct:1,explanation:"Market size is only one variable. Competitive intensity, product fit, local pricing, channel access and execution capacity may change the best entry sequence."},
  {question:"A serum is a bestseller in Korea. What is the strongest starting point for positioning it in LATAM?",answers:["Reuse the Korean campaign without modification","Lead exclusively with its Korean sales ranking","Test local consumer needs while retaining relevant Korean strengths","Remove references to Korean origin"],correct:2,explanation:"Korean origin and reputation can help, but product benefits and messaging should be tested against local consumer needs and expectations."},
  {question:"Should a Korean skincare brand use the identical launch plan in Brazil, Argentina and Chile?",answers:["Yes, a single LATAM plan works for all three","Yes, after translating all materials into Spanish","No, each market requires its own channel, pricing and consumer assessment","No, because all skincare in these markets is pharmacy-only"],correct:2,explanation:"Brazil, Argentina and Chile differ in language, consumer behavior, regulation, pricing and retail structures. A shared strategy needs country-specific execution."}
];
const tiers = [
  {max:2,title:"You Could Use Some Local Guidance",body:"You have identified some of the market realities worth investigating before committing resources."},
  {max:4,title:"You're Getting There",body:"You have a useful foundation. Focus on the country-specific channels, consumers and launch requirements you missed."},
  {max:6,title:"You're Almost Ready",body:"You understand many essentials. Close the remaining knowledge gaps before committing to a launch plan."},
  {max:8,title:"You Know the Market. Let's Execute.",body:"Strong market knowledge is a start. The next step is validating a practical, country-by-country route to market."}
];
function track(name:string, data:Record<string,string|number>={}) {
  if (typeof window==="undefined") return;
  const w=window as Window & {umami?:{track:(event:string,properties?:Record<string,string|number>)=>void}};
  w.umami?.track(name,data);
}
export default function KBeautyLatamQuiz() {
  const [answers,setAnswers]=useState<Record<number,number>>({});
  const [finished,setFinished]=useState(false);
  const count=Object.keys(answers).length;
  const score=questions.reduce((total,q,i)=>total+(answers[i]===q.correct?1:0),0);
  const tier=tiers.find(t=>score<=t.max)!;
  function submit(){if(count!==questions.length)return;setFinished(true);track("kbeauty-latam-quiz-complete",{score});}
  return <main className="min-h-screen bg-[#fffaf2] text-[#142638]">
    <section className="mx-auto max-w-4xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
      <a href="#quiz-questions" aria-label="Start the K-Beauty LATAM quiz" className="mb-8 block overflow-hidden rounded-2xl bg-[#f9e5b6] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#e73581]"><img src="/images/k-beauty-latam-quiz.png" alt="K-beauty LATAM quiz campaign at Copacabana beach highlighting 141.3% year-on-year Korean SME cosmetics export growth in Q3 2026. Take the quiz." className="h-auto w-full cursor-pointer transition-transform duration-300 hover:scale-[1.01]" onError={(e)=>{e.currentTarget.style.display="none";}} /></a>\n      <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b42e68]">K-Beauty · Latin America</p>
      <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">Is Your K-Beauty Brand Ready for LATAM?</h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#4b5965]">Eight practical questions about selling skincare in Latin America. Discover what you know and what deserves a closer look.</p>
      <p className="mt-4 text-sm text-[#53616b]"><strong>+141.3% year-on-year</strong> — reported growth in Korean SME cosmetics exports to Latin America, Q3 2026. Source: South Korean Ministry of SMEs and Startups (MSS), Q3 2026 SME Export Trend (27 October 2026). <a href="https://lnkd.in/p/d47sJf2A" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn source post</a>.</p>
      <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold"><span className="rounded-full bg-[#ffe269] px-4 py-2">8 questions</span><span className="rounded-full bg-[#ffd7e7] px-4 py-2">Practical explanations</span><span className="rounded-full bg-white px-4 py-2">No pass or fail</span></div>
      <p className="mt-6 text-sm text-[#586471]">Progress: {count} of 8 answered</p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e9e0d9]"><div className="h-full bg-[#e73581] transition-all" style={{width:`${count/8*100}%`}}/></div>
    </section>
    <section id="quiz-questions" className="mx-auto max-w-4xl scroll-mt-6 space-y-6 px-5 pb-20 sm:px-8">
      {questions.map((q,i)=><fieldset key={i} className="rounded-2xl border border-[#e8e1db] bg-white p-5 shadow-sm sm:p-8" disabled={finished}>
        <legend className="sr-only">Question {i+1}</legend>
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#b42e68]">Question {i+1} / 8</p>
        <h2 className="mb-6 text-xl font-bold leading-snug sm:text-2xl">{q.question}</h2>
        <div className="grid gap-3">{q.answers.map((answer,j)=><label key={j} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm leading-relaxed transition-colors sm:text-base ${answers[i]===j?"border-[#e73581] bg-[#fff0f6]":"border-[#e8e1db] hover:border-[#e73581]"}`}>
          <input type="radio" name={`q-${i}`} className="mt-1 accent-[#e73581]" checked={answers[i]===j} onChange={()=>setAnswers(prev=>({...prev,[i]:j}))}/><span>{answer}</span>
        </label>)}</div>
        {finished&&<div className="mt-5 rounded-xl bg-[#f4f7f5] p-4 text-sm leading-relaxed"><p className="font-bold">{answers[i]===q.correct?"Good answer":"Best answer: "+q.answers[q.correct]}</p><p className="mt-2">{q.explanation}</p></div>}
      </fieldset>)}
      {!finished?<button type="button" onClick={submit} disabled={count!==8} className="w-full rounded-xl bg-[#e73581] px-6 py-4 text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-40">See my results</button>:<div aria-live="polite" className="rounded-2xl bg-[#142638] p-6 text-white sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#ffe269]">Your LATAM knowledge check</p>
        <p className="mt-4 text-5xl font-extrabold">{score}/8</p><h2 className="mt-3 text-2xl font-bold sm:text-3xl">{tier.title}</h2><p className="mt-3 leading-relaxed text-[#d9e0e7]">{tier.body}</p>
        <p className="mt-5 text-sm text-[#c4d0d9]">This score reflects selected market knowledge, not regulatory clearance or commercial launch readiness.</p>
        <a href="mailto:info@central-orbit.com?subject=K-Beauty%20LATAM%20Market%20Entry" onClick={()=>track("kbeauty-latam-contact-click",{score})} className="mt-7 inline-flex rounded-lg bg-[#ffe269] px-5 py-3 font-bold text-[#142638]">Discuss your LATAM plans</a>
        <button type="button" onClick={()=>{setAnswers({});setFinished(false);window.scrollTo({top:0,behavior:"smooth"});}} className="ml-4 mt-4 underline underline-offset-4">Retake quiz</button>
      </div>}
      <footer className="border-t border-[#e8e1db] pt-7 text-sm text-[#53616b]"><p className="font-bold">Central Orbit</p><p>Commercial market entry and execution across Latin America.</p><a href="mailto:info@central-orbit.com" className="mt-2 inline-block underline">info@central-orbit.com</a></footer>
    </section>
  </main>;
}
