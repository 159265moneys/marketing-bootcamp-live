import {slides, chapters} from './slides.js?v=style-copy-20261124';

const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const br = value => esc(value).replaceAll('\n','<br>');
const items = (values, cls='') => `<ul class="${cls}">${values.map((v,i)=>`<li style="--i:${i}">${esc(v)}</li>`).join('')}</ul>`;
const title = s => `<h2 class="title reveal">${br(s.title)}</h2>`;
const sub = s => s.sub ? `<p class="takeaway reveal">${br(s.sub)}</p>` : '';
const groups = (s,cls='') => `<div class="groups ${cls}">${s.groups.map((g,i)=>`<section class="group reveal" style="--i:${i}"><h3>${esc(g[0])}</h3>${Array.isArray(g[1])?items(g[1]):`<p>${br(g[1])}</p>`}${g[2]?`<small>${esc(g[2])}</small>`:''}</section>`).join('')}</div>`;
const sequence = (values,cls='') => `<ol class="sequence ${cls}">${values.map((v,i)=>`<li class="reveal" style="--i:${i}"><span class="step-number">${String(i+1).padStart(2,'0')}</span><span>${esc(v)}</span></li>`).join('')}</ol>`;
const ticker = (values,cls='') => `<div class="ticker ${cls}" aria-hidden="true"><div>${[...values,...values].map(v=>`<span>${esc(v)}</span>`).join('')}</div></div>`;
const photoBackgrounds={brand:'flag',finish:'stairs'};
const photoBackground=s=>photoBackgrounds[s.kind]?`<div class="scene-photo" aria-hidden="true"><img src="./assets/${photoBackgrounds[s.kind]}.webp" alt="" width="512" height="512" loading="lazy" decoding="async"></div>`:'';
const coverCopy=slides.find(s=>s.id==='cover');
const headlineMarkup=lines=>lines.map((line,i)=>i===lines.length-1?`<em>${esc(line)}</em>`:esc(line)).join('<br>');

function content(s) {
 switch(s.kind){
 case 'hero':return `<div class="hero-copy"><p class="overline reveal">${esc(s.eyebrow)}</p><h1 class="hero-title">${s.headline.map((line,i)=>`<span class="reveal">${i===s.headline.length-1?`<em>${esc(line)}</em>`:esc(line)}</span>`).join('')}</h1><p class="hero-sub reveal">${esc(s.sub)}</p></div><div class="type-wheel" aria-hidden="true"><div class="type-rotor">${['認知','設計','思考','表現','実装','運用'].map((v,i)=>`<span style="--face:${i}">${v}</span>`).join('')}</div></div><div class="hero-baseline"><span>${esc(s.baseline)}</span><span class="scroll-cue">SCROLL</span></div>`;
 case 'goal':return `${title(s)}${sequence(s.items,'goal-steps')}`;
 case 'contents':return `${title(s)}<div class="chapter-links">${s.items.map((v,i)=>`<button data-go="${['channels','concept','numbers','web','before-after'][i]}"><span>${v}</span><span class="chapter-range">${['全体像 / 用語 / 上流設計','思考法 / ターゲット / 心理学','数字 / コピー / デザイン','技術 / Git / AI','訴求100本 / サービス立ち上げ'][i]}</span></button>`).join('')}</div>`;
 case 'channels':return `${title(s)}<div class="channel-constellation">${s.items.map((v,i)=>`<span class="channel-label" style="--i:${i}">${esc(v)}</span>`).join('')}</div>`;
 case 'organic':return `${title(s)}${groups(s,'organic-columns')}<div class="running-rule" aria-hidden="true"></div>`;
 case 'crm':return `<div class="big-acronym reveal">CRM</div>${title(s)}<div class="crm-loop" aria-hidden="true"><span>接点</span><span>会話</span><span>継続</span><i></i></div>${items(s.items,'inline-tools')}`;
 case 'advertising':return `${title(s)}${groups(s,'ad-columns')}${ticker(['Meta','TikTok','X','TVer','ディスプレイ','リスティング'],'ad-ticker')}`;
 case 'brand':return `${title(s)}${items(s.items,'brand-list')}`;
 case 'metrics':return `${title(s)}${groups(s,'metric-columns')}${sub(s)}`;
 case 'funnel':return `${title(s)}<div class="funnel">${s.items.map((v,i)=>`<div class="funnel-band" style="--i:${i};--band:${100-i*18}%"><span>${v}</span><i aria-hidden="true"></i></div>`).join('')}</div>${sub(s)}`;
 case 'economics':return `${title(s)}<div class="economic-terms">${s.groups.map((g,i)=>`<div class="reveal" style="--i:${i}"><strong>${esc(g[0])}</strong><span>${esc(g[1])}</span></div>`).join('')}</div>`;
 case 'planning':return `${title(s)}<dl class="planning-sheet">${s.groups.map((g,i)=>`<div class="reveal" style="--i:${i}"><dt>${esc(g[0])}</dt><dd>${esc(g[1])}</dd></div>`).join('')}</dl>`;
 case 'concept':return `<div class="concept-type" aria-hidden="true">概念</div>${title(s)}${items(s.items,'quiet-lines')}${sub(s)}`;
 case 'why':return `<div class="why-heading"><h2>${esc(s.title)}</h2><span>×3</span></div><div class="why-steps">${s.groups.map((g,i)=>`<div class="reveal" style="--i:${i}"><strong>${esc(g[0])}</strong><p>${esc(g[1])}</p></div>`).join('')}</div>${sub(s)}`;
 case 'curiosity':return `${title(s)}<div class="expanding-circle" aria-hidden="true"><i></i><i></i><i></i></div>${groups(s,'curiosity-columns')}${sub(s)}`;
 case 'thinking':return `${title(s)}${groups(s,'thinking-flow')}${sub(s)}`;
 case 'literacy':return `<div class="reading-number" aria-hidden="true">3</div><div class="reading-copy"><h2 class="title reveal"><span class="sr-only">3</span>${br(s.title.replace(/^3/,''))}</h2>${sub(s)}${items(s.items,'literacy-tools')}</div>`;
 case 'triggers':return `${title(s)}<p class="subline">${esc(s.sub)}</p>${groups(s,'trigger-pair')}`;
 case 'decisions':return `<h2 class="sr-only">${esc(s.title)}</h2><div class="decision-halves">${s.groups.map((g,i)=>`<section><span class="decision-label">${g[0]}</span><h3>${br(g[1])}</h3>${items(g[2])}<div class="decision-track" aria-hidden="true"><i></i></div></section>`).join('')}</div>`;
 case 'motivation':return `${title(s)}<div class="motive-lines">${s.groups.map((g,i)=>`<div><small>${esc(g[0])}</small><strong>${esc(g[1][0])}</strong><span class="motive-line" aria-hidden="true"></span><strong>${esc(g[1][1])}</strong></div>`).join('')}</div>`;
 case 'psychology':return `${title(s)}${groups(s,'psychology-columns')}`;
 case 'numbers':return `${title(s)}<div class="number-stage"><div><strong>95<span class="decimal">.1</span></strong><em>%</em><small>表現例：お客様満足度</small></div><aside><span><b>489</b>調査対象者数（人）</span><span><b>209%</b>増加率の表現例</span></aside></div>${sub(s)}`;
 case 'design':return `<div class="reading-order"><h2 class="reading-primary">あなたは<br><em>まずこれを読む</em></h2><p class="reading-secondary">そして次にこの行を読む</p><p class="reading-tertiary">そしておそらく<br>左の文章を読む前に<br><em>この文章を読む</em></p><p class="reading-detail">このあたりに文章を書いて、細かく説明をつけたとしてもおそらく大半の人は小さいフォントで長い文章が書かれていても読むことはなく、興味があるときにだけ読む。</p><p class="reading-last">最後にここを読む</p></div>`;
 case 'offer':return `<p class="lesson-label">${esc(s.topic)}</p>${title(s)}<div class="offer-type">${s.items.map((v,i)=>`<span style="--i:${i}">${v}</span>`).join('')}</div>`;
 case 'lp':return `${title(s)}${sequence(s.items,'lp-flow')}`;
 case 'video':return `${title(s)}<div class="video-strip">${s.items.map((v,i)=>`<div style="--i:${i}"><span class="film-index">0${i+1}</span><strong>${v}</strong><i></i></div>`).join('')}</div>`;
 case 'rules':return `${title(s)}${items(s.items,'rule-types')}`;
 case 'web':return `${title(s)}<div class="web-stack">${s.groups.map((g,i)=>`<div style="--i:${i}"><strong>${g[2]?g[2].map(part=>`<span class="web-term">${esc(part)}</span>`).join('<wbr>'):esc(g[0])}</strong><span>${esc(g[1])}</span><i aria-hidden="true"></i></div>`).join('')}</div>${sub(s)}`;
 case 'gitcompare':return `${title(s)}<div class="git-compare">${s.groups.map((g,i)=>`<section><strong>${g[0]}</strong><p>${esc(g[1])}</p><small>${esc(g[2])}</small></section>`).join('')}<span class="git-transfer" aria-hidden="true"></span></div>`;
 case 'repository':return `${title(s)}<div class="repository-stage"><div class="repo-files" aria-label="プロジェクトのファイル構成"><strong>project/</strong><span>index.html</span><span>styles.css</span><span>app.js</span><span class="git-folder">.git/ <small>変更履歴</small></span></div><div class="repo-history"><span>初版を作成</span><span>見出しを修正</span><span>機能を追加</span><i aria-hidden="true"></i></div></div>${sub(s)}`;
 case 'gitflow':return `${title(s)}<div class="git-demo" data-state="0"><div class="git-locations"><div class="git-local"><small>自分のPC</small><strong id="git-local-state">変更あり</strong><span class="git-file" aria-hidden="true">index.html</span></div><div class="git-road" aria-hidden="true"><i></i></div><div class="git-remote"><small>GitHub</small><strong id="git-remote-state">更新前</strong></div></div><div class="git-actions"><button data-git="add">git add<span>記録する変更を選ぶ</span></button><button data-git="commit" disabled>git commit<span>ローカルに記録</span></button><button data-git="push" disabled>git push<span>リモートへ送信</span></button><button data-git="reset" class="git-reset">やり直す</button></div><p class="demo-status" id="git-status" aria-live="polite">操作デモ</p></div>`;
 case 'commands':return `${title(s)}<div class="command-list">${[['git status','変更を確認'],['git add index.html styles.css app.js slides.js','記録対象を選ぶ'],['git commit -m "スライドを更新"','変更を記録'],['git push origin main','GitHubへ送信']].map((v,i)=>`<div class="reveal" style="--i:${i}"><code>${esc(v[0])}</code><span>${v[1]}</span></div>`).join('')}</div><p class="takeaway">${esc(s.sub)} <span>git addの前に、.envを.gitignoreの除外対象に指定する。</span></p>`;
 case 'pages':return `${title(s)}<div class="publish-flow"><div><strong>PC</strong><span>commit</span></div><i aria-hidden="true"></i><div><strong>GitHub</strong><span>push</span></div><i aria-hidden="true"></i><div><strong>Pages</strong><span>公開</span></div></div>${sub(s)}`;
 case 'security':return `${title(s)}${items(s.items,'security-terms')}<p class="subline">${esc(s.extra)}</p>${sub(s)}`;
 case 'prompt':return `${title(s)}${groups(s,'prompt-flow')}${sub(s)}`;
 case 'research':return `${title(s)}${sequence(s.items,'research-list')}${sub(s)}`;
 case 'ba':return `${title(s)}<div class="ba-comparison"><div class="ba-before"><small>BEFORE</small><strong>マーケ合宿</strong><span>基礎・思考法・実践</span><p>翌日から集客運用開始できるようにしたい</p></div><div class="ba-after"><small>AFTER</small><strong>${headlineMarkup(coverCopy.headline)}</strong><p class="ba-after-caption">${esc(coverCopy.sub)}</p></div><div class="ba-divider" aria-hidden="true"></div></div><label class="ba-control" for="ba-range"><span>Before</span><input id="ba-range" type="range" min="0" max="100" value="52" aria-label="BeforeとAfterの比較"><span>After</span></label>`;
 case 'hundred':return `${title(s)}<div class="hundred-layout"><strong class="hundred-number" data-counter="100">100</strong><ul>${s.items.map(v=>`<li><span>${esc(v)}</span><b>20</b></li>`).join('')}</ul></div>`;
 case 'testing':return `${title(s)}${sequence(s.items,'testing-flow')}${sub(s)}`;
 case 'service':return `${title(s)}<div class="service-route">${s.items.map((v,i)=>`<div style="--i:${i}"><span class="route-label"><span>${['市場','競合','サービス'][i]}</span><span>${i===2?'設計':'調査'}</span></span></div>`).join('')}<div class="service-progress" aria-hidden="true"><i></i></div></div>`;
 case 'making':return `${title(s)}<div class="making-network">${s.items.map((v,i)=>`<span style="--i:${i}">${esc(v)}</span>`).join('')}<div class="making-line" aria-hidden="true"></div></div>${sub(s)}`;
 case 'deployment':return `${title(s)}${groups(s,'deployment-pair')}`;
 case 'measurement':return `${title(s)}${groups(s,'measurement-pair')}`;
 case 'finish':return `<p class="lesson-label">${esc(s.eyebrow)}</p><h2 class="finish-title reveal">${headlineMarkup(s.title.split('\n'))}</h2>${items(s.items,'finish-points')}${sub(s)}<button class="back-start" data-go="cover">最初へ</button>`;
 default:return `${title(s)}${sub(s)}`;
 }
}

const deck=document.querySelector('#deck');
deck.innerHTML=slides.map((s,i)=>`<section class="slide s-${s.kind} theme-${s.theme}" id="${s.id}" aria-label="${i+1} / ${slides.length} ${esc(s.title.replaceAll('\n',''))}" data-index="${i}" data-theme="${s.theme}">${photoBackground(s)}<div class="canvas">${content(s)}</div></section>`).join('');
const sections=[...deck.querySelectorAll('.slide')];
const photoSections=sections.filter(section=>section.querySelector('.scene-photo'));
sections.forEach(section=>{section.inert=true;});
const dialog=document.querySelector('#index-dialog');
const chapterOrder=Object.keys(chapters);
document.querySelector('#index-list').innerHTML=chapterOrder.map(ch=>`<section><h3>${chapters[ch]}</h3>${slides.map((s,i)=>s.chapter===ch?`<button data-go="${s.id}"><span>${String(i+1).padStart(2,'0')}</span>${esc(s.title.replaceAll('\n',''))}</button>`:'').join('')}</section>`).join('');
document.querySelector('#total').textContent=String(slides.length);

let activeIndex=-1;
let targetIndex=0;
let pendingAnnouncement=null;
let lockedUntil=0;
let wheelSum=0;
let wheelLatch=false;
let wheelTimer;
let ticking=false;
let direction=1;
let motion=!matchMedia('(prefers-reduced-motion: reduce)').matches;
try{const saved=localStorage.getItem('mkc:motion');if(saved!==null)motion=saved==='on';}catch{}
const reduceQuery=matchMedia('(prefers-reduced-motion: reduce)');

function updateMotion(){
 document.documentElement.classList.toggle('motion-off',!motion);
 const button=document.querySelector('#motion-toggle');button.textContent=`動き ${motion?'ON':'OFF'}`;button.setAttribute('aria-pressed',String(motion));
 try{localStorage.setItem('mkc:motion',motion?'on':'off');}catch{}
}
updateMotion();
reduceQuery.addEventListener('change',event=>{motion=!event.matches;updateMotion();});
document.querySelector('#motion-toggle').addEventListener('click',()=>{motion=!motion;updateMotion();});

function countUp(el){
 const end=Number(el.dataset.counter),dec=Number(el.dataset.decimals||0);
 if(!motion){el.textContent=end.toFixed(dec);return;}
 const start=performance.now();const duration=1100;
 const step=now=>{if(!motion){el.textContent=end.toFixed(dec);return;}if(!el.closest('.slide').classList.contains('is-active'))return;const p=Math.min(1,(now-start)/duration),ease=1-Math.pow(1-p,4);el.textContent=(end*ease).toFixed(dec);if(p<1)requestAnimationFrame(step);};requestAnimationFrame(step);
}
function activate(index,announce=false){
 if(announce)document.querySelector('#announcement').textContent=`${index+1} / ${slides.length} ${slides[index].title.replaceAll('\n','')}`;
 if(index===activeIndex)return;
 const prev=activeIndex;activeIndex=index;targetIndex=index;
 if(prev>=0){
   if(sections[prev].contains(document.activeElement))deck.focus({preventScroll:true});
   sections[prev].classList.remove('is-active');sections[prev].inert=true;
 }
 const section=sections[index];section.inert=false;section.classList.add('is-active');
 document.body.dataset.theme=section.dataset.theme;
 document.querySelector('#current').textContent=String(index+1).padStart(2,'0');
 document.querySelector('#chapter-current').textContent=chapters[slides[index].chapter];
 document.querySelector('#progress').style.transform=`scaleX(${(index+1)/slides.length})`;
 document.querySelector('#previous').disabled=index===0;
 document.querySelector('#next').disabled=index===slides.length-1;
 history.replaceState(null,'',`#${slides[index].id}`);
 section.querySelectorAll('[data-counter]').forEach(countUp);
}

function goTo(value,{instant=false,announce=true}={}){
 let index=typeof value==='string'?slides.findIndex(s=>s.id===value):value;
 index=Math.max(0,Math.min(slides.length-1,index));
 direction=index>=activeIndex?1:-1;document.documentElement.style.setProperty('--direction',direction);
 const direct=instant||!motion||Math.abs(index-activeIndex)>2;
 targetIndex=index;pendingAnnouncement=announce?index:null;
 lockedUntil=performance.now()+(direct?120:820);
 deck.scrollTo({top:sections[index].offsetTop,behavior:direct?'instant':'smooth'});
 if(direct){activate(index,announce);pendingAnnouncement=null;}
}
function nearestIndex(){
 const anchor=deck.scrollTop+deck.clientHeight/2;
 let current=0;
 for(let i=0;i<sections.length;i++){if(sections[i].offsetTop<=anchor)current=i;else break;}
 return current;
}
deck.addEventListener('scroll',()=>{
 if(ticking)return;ticking=true;
 requestAnimationFrame(()=>{
   const index=nearestIndex();activate(index);
   for(const section of photoSections){
     const progress=Math.max(-1,Math.min(1,(deck.scrollTop-section.offsetTop)/section.offsetHeight));
     section.style.setProperty('--photo-shift',`${motion?progress*26:0}px`);
   }
   if(pendingAnnouncement!==null&&Math.abs(deck.scrollTop-sections[pendingAnnouncement].offsetTop)<2){
     activate(pendingAnnouncement,true);pendingAnnouncement=null;
   }
   ticking=false;
 });
},{passive:true});

deck.addEventListener('wheel',event=>{
 if(event.ctrlKey||dialog.open||event.target.closest('input,textarea,select,[data-native-scroll]'))return;
 if(Math.abs(event.deltaX)>Math.abs(event.deltaY))return;
 const current=sections[Math.max(0,activeIndex)];
 const oversized=current.offsetHeight>deck.clientHeight+8;
 if(oversized){
   const pos=deck.scrollTop-current.offsetTop;
   if((event.deltaY>0&&pos<current.offsetHeight-deck.clientHeight-2)||(event.deltaY<0&&pos>2))return;
 }
 event.preventDefault();
 clearTimeout(wheelTimer);wheelTimer=setTimeout(()=>{wheelLatch=false;wheelSum=0;},180);
 if(wheelLatch||performance.now()<lockedUntil)return;
 if(Math.sign(wheelSum)!==Math.sign(event.deltaY))wheelSum=0;
 wheelSum+=event.deltaY*(event.deltaMode===1?16:1);
 if(Math.abs(wheelSum)<28)return;
 wheelLatch=true;goTo(activeIndex+Math.sign(wheelSum));wheelSum=0;
},{passive:false});

document.querySelector('#previous').addEventListener('click',()=>goTo(activeIndex-1));
document.querySelector('#next').addEventListener('click',()=>goTo(activeIndex+1));
document.querySelector('#index-open').addEventListener('click',()=>dialog.showModal());
document.querySelector('#index-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
document.addEventListener('click',event=>{
 const link=event.target.closest('[data-go]');if(link){if(dialog.open)dialog.close();goTo(link.dataset.go);}
 const logo=event.target.closest('.wordmark');if(logo){event.preventDefault();goTo(0);}
});
document.querySelector('#fullscreen').addEventListener('click',async()=>{
 try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{}
});
document.addEventListener('fullscreenchange',()=>{document.querySelector('#fullscreen').textContent=document.fullscreenElement?'全画面を終了':'全画面';});
document.addEventListener('keydown',event=>{
 if(event.metaKey||event.ctrlKey||event.altKey)return;
 if(dialog.open||event.target.closest('input,textarea,select,[contenteditable="true"]'))return;
 const inButton=event.target.closest('button,a');
 if(inButton&&(event.key===' '||event.key==='Enter'))return;
 const forward=['ArrowDown','ArrowRight','PageDown',' '].includes(event.key);
 const back=['ArrowUp','ArrowLeft','PageUp'].includes(event.key);
 if(forward||back){event.preventDefault();goTo(activeIndex+(forward?1:-1));}
 else if(event.key==='Home'){event.preventDefault();goTo(0);}
 else if(event.key==='End'){event.preventDefault();goTo(slides.length-1);}
 else if(event.key.toLowerCase()==='i')dialog.showModal();
 else if(event.key.toLowerCase()==='f')document.querySelector('#fullscreen').click();
});
window.addEventListener('hashchange',()=>{const index=slides.findIndex(s=>s.id===location.hash.slice(1));if(index>=0&&index!==activeIndex)goTo(index);});
let resizeTimer;
window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>goTo(Math.max(activeIndex,0),{instant:true,announce:false}),120);});

document.querySelector('#ba-range').addEventListener('input',event=>{
 document.querySelector('.ba-comparison').style.setProperty('--reveal',`${event.target.value}%`);
});
const demo=document.querySelector('.git-demo');
let gitState=0;
document.querySelectorAll('[data-git]').forEach(button=>button.addEventListener('click',()=>{
 const action=button.dataset.git;
 if(action==='reset')gitState=0;
 else if(action==='add'&&gitState===0)gitState=1;
 else if(action==='commit'&&gitState===1)gitState=2;
 else if(action==='push'&&gitState===2)gitState=3;
 demo.dataset.state=gitState;
 document.querySelector('#git-local-state').textContent=['変更あり','ステージ済み','記録済み','記録済み'][gitState];
 document.querySelector('#git-remote-state').textContent=gitState===3?'同期済み':'更新前';
 document.querySelector('#git-status').textContent=['操作デモ','次のcommitに入れる変更を選択','commitでローカルの履歴に記録','pushでGitHubに送信'][gitState];
 document.querySelector('[data-git="add"]').disabled=gitState!==0;
 document.querySelector('[data-git="commit"]').disabled=gitState!==1;
 document.querySelector('[data-git="push"]').disabled=gitState!==2;
}));

const initial=slides.findIndex(s=>s.id===location.hash.slice(1));
requestAnimationFrame(()=>goTo(initial>=0?initial:0,{instant:true,announce:false}));
