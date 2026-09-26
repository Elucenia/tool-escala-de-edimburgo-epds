/* tool-escala-de-edimburgo-epds · ELUCENIA · https://github.com/Elucenia/tool-escala-de-edimburgo-epds
   Copyright (c) 2026 ELUCENIA · Felipe Guedes (fgxdev.com). Licensed under the Apache License 2.0: keep this notice and the NOTICE file, and mark your changes.
   Standalone integration. Package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"escala-de-edimburgo-epds","title":"Escala de Depressão Pós-Parto de Edimburgo (EPDS)","fields":[["q1","1. Eu tenho sido capaz de rir e achar graça das coisas","sel",{"opts":{"0":"Como eu sempre fiz","1":"Não tanto quanto antes","2":"Sem dúvida, menos que antes","3":"De jeito nenhum"}}],["q2","2. Eu tenho pensado no futuro com alegria","sel",{"opts":{"0":"Sim, como de costume","1":"Um pouco menos que de costume","2":"Muito menos que de costume","3":"Praticamente não"}}],["q3","3. Eu tenho me culpado sem razão quando as coisas dão errado","sel",{"opts":{"0":"Não, nenhuma vez","1":"Não muitas vezes","2":"Sim, algumas vezes","3":"Sim, na maioria das vezes"}}],["q4","4. Eu tenho ficado ansiosa ou preocupada sem uma boa razão","sel",{"opts":{"0":"Não, de maneira alguma","1":"Pouquíssimas vezes","2":"Sim, algumas vezes","3":"Sim, muitas vezes"}}],["q5","5. Eu tenho me sentido assustada ou em pânico sem um bom motivo","sel",{"opts":{"0":"Não, nenhuma vez","1":"Não muitas vezes","2":"Sim, algumas vezes","3":"Sim, muitas vezes"}}],["q6","6. Eu tenho me sentido esmagada pelas tarefas e acontecimentos do meu dia a dia","sel",{"opts":{"0":"Não, eu consigo lidar com eles tão bem quanto antes","1":"Não, na maioria das vezes consigo lidar bem com eles","2":"Sim, algumas vezes não consigo lidar bem como antes","3":"Sim, na maioria das vezes não consigo lidar bem com eles"}}],["q7","7. Eu tenho me sentido tão infeliz que tenho tido dificuldade para dormir","sel",{"opts":{"0":"Não, nenhuma vez","1":"Não muitas vezes","2":"Sim, algumas vezes","3":"Sim, na maioria das vezes"}}],["q8","8. Eu tenho me sentido triste ou arrasada","sel",{"opts":{"0":"Não, de jeito nenhum","1":"Não muitas vezes","2":"Sim, muitas vezes","3":"Sim, na maioria das vezes"}}],["q9","9. Eu tenho me sentido tão infeliz que tenho chorado","sel",{"opts":{"0":"Não, nenhuma vez","1":"De vez em quando","2":"Sim, muitas vezes","3":"Sim, quase todo o tempo"}}],["q10","10. A ideia de fazer mal a mim mesma passou por minha cabeça","sel",{"opts":{"0":"Nenhuma vez","1":"Pouquíssimas vezes, ultimamente","2":"Algumas vezes nos últimos dias","3":"Sim, muitas vezes, ultimamente"}}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';

a.def("escala-de-edimburgo-epds",function(a){for(var e=0,o=1;o<=10;o++)e+=parseFloat(a["q"+o])||0;var r=parseFloat(a.q10)||0,i=e>=13?"high":e>=10?"mid":"low",n=e>=13?"Provável depressão (≥ 13 pontos): avaliação clínica para diagnóstico":e>=10?"Rastreamento positivo (≥ 10 pontos): avaliar depressão":"Rastreamento negativo (menos de 10 pontos)",t="";return r>0&&(i="high",n="Pensamentos de autoagressão (item 10 positivo): avaliação imediata do risco de suicídio · "+n,t="Não deixe a paciente sozinha se houver plano ou intenção; acione a rede de saúde mental. CVV: ligue 188 (24 horas, gratuito). Em emergência, SAMU 192."),{main:[String(e),"de 30"],label:"EPDS",level:i,verdict:n,note:t,raw:{score:e,item10:r}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
