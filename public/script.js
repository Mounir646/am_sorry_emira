const $=id=>document.getElementById(id);
const show=n=>{document.querySelectorAll('.screen').forEach(s=>s.classList.remove('on'));$('s'+n).classList.add('on');window.scrollTo(0,0)};

const flower=(petal,center,n=8)=>{let p='';for(let i=0;i<n;i++)p+=`<ellipse cx="50" cy="22" rx="11" ry="21" fill="${petal}" stroke="rgba(217,70,119,.25)" stroke-width="1" transform="rotate(${i*360/n} 50 50)"/>`;
return `<svg viewBox="0 0 100 100" aria-hidden="true">${p}<circle cx="50" cy="50" r="13" fill="${center}"/><circle cx="46" cy="46" r="3" fill="#fff" opacity=".5"/></svg>`};

const cat=(body,ear)=>`<svg viewBox="0 0 120 120" class="cat" aria-hidden="true"><ellipse cx="60" cy="98" rx="38" ry="22" fill="${body}"/><path d="M26 52 L30 14 L52 36Z" fill="${body}"/><path d="M94 52 L90 14 L68 36Z" fill="${body}"/><path d="M31 40 L33 24 L44 35Z" fill="${ear}"/><path d="M89 40 L87 24 L76 35Z" fill="${ear}"/><circle cx="60" cy="62" r="36" fill="${body}"/><ellipse cx="46" cy="60" rx="4.5" ry="6" fill="#4a2434"/><ellipse cx="74" cy="60" rx="4.5" ry="6" fill="#4a2434"/><circle cx="47.5" cy="58" r="1.6" fill="#fff"/><circle cx="75.5" cy="58" r="1.6" fill="#fff"/><path d="M56 70 L64 70 L60 75Z" fill="#f06292"/><path d="M60 75 Q55 82 49 78 M60 75 Q65 82 71 78" stroke="#4a2434" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="38" cy="72" r="6" fill="#ffb3c8" opacity=".6"/><circle cx="82" cy="72" r="6" fill="#ffb3c8" opacity=".6"/><path d="M18 66h16M18 76l16-4M102 66H86M102 76l-16-4" stroke="#4a2434" stroke-width="1.5" opacity=".5" stroke-linecap="round"/></svg>`;

const catM=(body,ear,mood)=>{
  const faces={
   sad:`<path d="M38 53 L52 48 M82 53 L68 48" stroke="#4a2434" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="46" cy="62" rx="6" ry="7.5" fill="#4a2434"/><ellipse cx="74" cy="62" rx="6" ry="7.5" fill="#4a2434"/><circle cx="48" cy="59" r="2.6" fill="#fff"/><circle cx="76" cy="59" r="2.6" fill="#fff"/><path d="M38 70 q-4 8 0 11 q4-3 0-11z" fill="#8fd3ff"/><path d="M56 70 L64 70 L60 75Z" fill="#f06292"/><path d="M52 84 Q60 77 68 84" stroke="#4a2434" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="82" cy="74" r="6" fill="#ffb3c8" opacity=".7"/>`,
   angry:`<path d="M38 45 L54 54 M82 45 L66 54" stroke="#4a2434" stroke-width="3" stroke-linecap="round"/><path d="M40 62 h16 v2 a8 5 0 0 1 -16 0z M68 62 h16 v2 a8 5 0 0 1 -16 0z" fill="#4a2434"/><circle cx="51" cy="63" r="2.2" fill="#fff"/><circle cx="79" cy="63" r="2.2" fill="#fff"/><path d="M56 71 L64 71 L60 76Z" fill="#f06292"/><path d="M53 84 Q60 79 67 84" stroke="#4a2434" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="36" cy="74" r="8" fill="#ff7a9c" opacity=".6"/><circle cx="84" cy="74" r="8" fill="#ff7a9c" opacity=".6"/><path d="M96 8 q6 4 12 0 M96 20 q6-4 12 0 M98 6 q-4 6 0 12 M108 6 q4 6 0 12" stroke="#e63f74" stroke-width="3" fill="none" stroke-linecap="round"/>`,
   happy:`<path d="M40 63 q6-9 12 0 M68 63 q6-9 12 0" stroke="#4a2434" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M56 70 L64 70 L60 75Z" fill="#f06292"/><path d="M50 76 Q60 88 70 76" stroke="#4a2434" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="38" cy="72" r="6" fill="#ff8aa8" opacity=".7"/><circle cx="82" cy="72" r="6" fill="#ff8aa8" opacity=".7"/>`};
  return `<svg viewBox="0 0 120 120" class="cat" aria-hidden="true"><ellipse cx="60" cy="98" rx="38" ry="22" fill="${body}"/><path d="M26 52 L30 14 L52 36Z" fill="${body}"/><path d="M94 52 L90 14 L68 36Z" fill="${body}"/><path d="M31 40 L33 24 L44 35Z" fill="${ear}"/><path d="M89 40 L87 24 L76 35Z" fill="${ear}"/><circle cx="60" cy="62" r="36" fill="${body}"/>${faces[mood]}<path d="M18 66h16M18 76l16-4M102 66H86M102 76l-16-4" stroke="#4a2434" stroke-width="1.5" opacity=".5" stroke-linecap="round"/></svg>`};

const WHITE='#fffdfd',CREAM='#ffe9ee',EAR='#ffb3c8';
const fl=()=>`<div class="fl">${flower('#ff9fc0','#ffd54f',6)}</div>`;
$('hero1').innerHTML=cat(WHITE,EAR)+fl();
$('duo').innerHTML=`<div class="pal beg"><span class="bub">Sorry…</span>${catM(CREAM,EAR,'sad')}</div><div class="pal mad"><span class="bub" id="madb">Hmph!</span>${catM(WHITE,EAR,'angry')}</div>`;

/* 1. messages */
const msgs=[
 "Hey. First, thank you for being honest with me.",
 "You made time to keep me company, and I ended the call without a word.",
 "That wasn’t fair to you, and I’m so so so so so so sorry.",
 "I should have told you why before I left.",
 "I never meant to make you feel unimportant.",
 "Next time I’ll say goodbye properly. Promise.",
 "Actually, you mean a lot to me You become part of my routine now. I don't know if you feel the same.",
 "I'm so happy I met a person like u ",
 "So, one last question…"
];
let mi=-1;
$('next').onclick=()=>{
  if(mi===msgs.length-1){show(2);return}
  mi++;
  const m=$('msg');m.textContent=msgs[mi];m.classList.remove('pop');void m.offsetWidth;m.classList.add('pop');
  $('count').textContent=(mi+1)+' / '+msgs.length;
  if(mi===msgs.length-1)$('next').textContent='Ask me';
};

/* 2. yes / no */
const noTxt=["No","Are you sure?","Think again","Pretty please","Really?","Even a little?","Last chance"];
let dodges=0,scale=1;
const no=$('no'),yes=$('yes');
function dodge(e){
  if(e)e.preventDefault();
  dodges++;
  const mb=$('madb');if(mb)mb.textContent=['Hmph!','Hmph!!','Try harder.','Still mad.','Hmmmph.'][dodges%5];
  no.textContent=noTxt[Math.min(dodges,noTxt.length-1)];
  scale=Math.min(scale+.12,1.9);yes.style.transform=`scale(${scale})`;
  no.classList.add('run');
  const w=no.offsetWidth,h=no.offsetHeight;
  no.style.left=Math.random()*(innerWidth-w-24)+12+'px';
  no.style.top=Math.random()*(innerHeight-h-24)+12+'px';
}
no.addEventListener('pointerenter',dodge);
no.addEventListener('pointerdown',dodge);
no.addEventListener('click',dodge);
yes.onclick=()=>{
  if(yes.dataset.d)return;yes.dataset.d=1;
  const m=document.querySelector('.mad');m.classList.remove('mad');m.classList.add('beg');
  m.innerHTML=`<span class="bub">Okay, fine!</span>`+catM(WHITE,EAR,'happy');
  setTimeout(()=>show(3),1300);
};

/* 3. game */
const stage=$('stage');
const cl=document.createElement('div');cl.innerHTML=cat(WHITE,EAR);const catL=cl.firstChild;catL.classList.add('l');
const cr=document.createElement('div');cr.innerHTML=cat(CREAM,EAR);const catR=cr.firstChild;catR.classList.add('r');
stage.append(catL,catR);
const heart=$('heart');let side=0,passes=0,busy=false;
const place=()=>{const w=stage.clientWidth;return [100,w-100-56]};
heart.style.left=place()[0]+'px';
heart.onclick=()=>{
  if(busy)return;busy=true;heart.classList.remove('idle');
  side=1-side;
  heart.classList.remove('toss');void heart.offsetWidth;heart.classList.add('toss');
  heart.style.left=place()[side]+'px';
  setTimeout(()=>{
    (side?catR:catL).classList.add('catch');
    setTimeout(()=>(side?catR:catL).classList.remove('catch'),220);
    passes++;$('passes').textContent='Passes: '+passes+' / 7';
    heart.classList.add('idle');busy=false;
    if(passes>=7)setTimeout(()=>{show(4);startGarden()},500);
  },600);
};

/* background: roses and flowers drifting randomly */
const rose=(c1,c2)=>{let b='';for(let i=0;i<7;i++){const a=i*360/7;b+=`<circle cx="50" cy="15" r="15" fill="${c1}" stroke="rgba(120,20,60,.25)" stroke-width="1.5" transform="rotate(${a} 50 50)"/>`}
return `<svg viewBox="0 0 100 100">${b}<circle cx="50" cy="50" r="33" fill="${c2}" stroke="rgba(120,20,60,.25)" stroke-width="1.5"/><path d="M50 28 a22 22 0 1 1 -22 22 a16 16 0 0 1 16 -16 a10 10 0 1 1 -10 10 a5 5 0 0 1 5 -5" fill="none" stroke="rgba(120,20,60,.45)" stroke-width="2.5" stroke-linecap="round"/></svg>`};
const rnd=(a,b)=>a+Math.random()*(b-a);
const dr=$('drift');
const pk=a=>a[Math.floor(Math.random()*a.length)];
for(let i=0;i<34;i++){
  const e=document.createElement('div');e.className='dr';
  const isRose=Math.random()<.45;
  e.innerHTML=isRose?rose(pk(['#ff6f9f','#f0527f','#ff8db3','#e63f74']),pk(['#ff4d86','#d93a6c','#ff7aa5'])):flower(pk(['#ffffff','#fff0f5','#ffe3ee','#ffc2d6']),pk(['#ffd54f','#ffb300']),pk([5,6,8]));
  const s=rnd(34,96);
  e.style.width=s+'px';e.style.left=rnd(-3,97)+'%';e.style.top=rnd(-3,95)+'%';e.style.opacity=rnd(.55,.95);
  const v=(n)=>Math.round(rnd(-n,n))+'px';
  e.style.setProperty('--t',rnd(9,22).toFixed(1)+'s');
  e.style.setProperty('--d',(-rnd(0,20)).toFixed(1)+'s');
  for(const k of [1,2,3]){e.style.setProperty('--x'+k,v(140));e.style.setProperty('--y'+k,v(140));e.style.setProperty('--r'+k,Math.round(rnd(-180,180))+'deg')}
  dr.appendChild(e);
}

$('van').innerHTML=`<div class="vb"><svg viewBox="0 0 300 160"><rect x="10" y="26" width="280" height="96" rx="24" fill="#fffdfd" stroke="#f06292" stroke-width="4"/><rect x="12" y="90" width="276" height="14" fill="#ff8db6"/><rect x="28" y="42" width="156" height="42" rx="12" fill="#ffd1e0" stroke="#f06292" stroke-width="3"/><path d="M200 42 h44 q14 0 22 20 l6 22 h-72z" fill="#ffd1e0" stroke="#f06292" stroke-width="3" stroke-linejoin="round"/><rect x="278" y="100" width="10" height="10" rx="3" fill="#ffb300"/><path d="M150 112 c-10-7-12-12-12-15 a6 6 0 0 1 12-2 a6 6 0 0 1 12 2 c0 3-2 8-12 15z" fill="#ff5c8a" transform="translate(-8 0)"/><g class="wh"><circle cx="70" cy="124" r="22" fill="#4a2434"/><circle cx="70" cy="124" r="10" fill="#ffd1e0"/><path d="M70 114v20M60 124h20" stroke="#4a2434" stroke-width="3"/></g><g class="wh"><circle cx="232" cy="124" r="22" fill="#4a2434"/><circle cx="232" cy="124" r="10" fill="#ffd1e0"/><path d="M232 114v20M222 124h20" stroke="#4a2434" stroke-width="3"/></g></svg><div class="win"><div class="vc">${catM(CREAM,EAR,'happy')}</div><div class="vc">${catM(WHITE,EAR,'happy')}</div></div><span class="ha h1">Hahaha!emira</span><span class="ha h2">wkwkwwk mounir!</span></div>`;

/* 4. flower garden loop */
const petals=['#ffd1e0','#ff9fc0','#ffffff','#ffb3cc','#f78fb3','#fff0f5'];
const centers=['#ffd54f','#ffb300','#ffe082'];
const pick=a=>a[Math.floor(Math.random()*a.length)];
let started=false;
function startGarden(){
  if(started)return;started=true;
  $('bloom').innerHTML=flower('#ffc2d6','#ffd54f',12);
  const g=$('garden');
  const plant=()=>{
    if(g.querySelectorAll('.sp').length>34)return;
    const d=document.createElement('div');d.className='sp';
    const s=36+Math.random()*60,h=90+Math.random()*(innerHeight*.5);
    d.style.left=Math.random()*96+'%';d.style.height=h+'px';
    d.innerHTML=flower(pick(petals),pick(centers),Math.random()<.5?6:8)+'<i></i>';
    d.firstChild.style.width=s+'px';
    g.insertBefore(d,g.firstChild.nextSibling);
    setTimeout(()=>d.remove(),14000);
  };
  for(let i=0;i<14;i++)setTimeout(plant,i*160);
  setInterval(plant,420);
}
const music = document.getElementById("myMusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", async () => {

    if (music.paused) {
        try {
            await music.play();
            btn.innerHTML = "🔇 Music: off";
        } catch (error) {
            console.log("Music error:", error);
        }

    } else {
        music.pause();
        btn.innerHTML = "🎵 Music: off";
    }

});
