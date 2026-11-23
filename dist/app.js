const icon = (name, cls = '') => `<svg${cls ? ` class="${cls}"` : ''} aria-hidden="true"><use href="#i-${name}"/></svg>`;
const repo = name => `https://github.com/ninolisjak/${name}`;
const projects = [
  { id:'klubis', name:'Klubis', repo:'eClanarina', category:'web', status:'Live product', role:'Product builder', tags:['Club management','Web product'], tools:['supabase'], live:'https://klubis.si', private:true, summary:'Less club admin. More time for the game. A live club management product at klubis.si.', detail:'Klubis grew out of eClanarina into a live club management product at klubis.si, built to simplify administration for sports clubs.', contribution:'Built the product from an early idea into a live club management platform.', symbol:'globe' },
  { id:'gameon', name:'GameOn', repo:'GameOn-', category:'mobile', status:'Independent project', role:'Solo developer', tags:['Flutter','Firebase'], tools:['flutter','firebase'], summary:'Find your people. Find your game. A pickup sports app, built from scratch in Flutter.', detail:'GameOn connects people through pickup sports. Players can discover nearby matches on a map, organise games, join a queue, chat with participants, and follow match scores and history.', contribution:'Designed and developed the main Flutter version independently, from the core idea to the mobile experience.', symbol:'ball' },
  { id:'aftrhours', name:'AFTRHOURS', repo:'AFTRHOURS', category:'web', status:'Live website', role:'Web developer', tags:['HTML / CSS','JavaScript'], tools:['javascript'], live:'https://aftrhours-nino.cuddlygate.chatgpt.site/en/', summary:'The underground never sleeps. A bilingual event website with bold visuals and a soundtrack of its own.', detail:'A live English and Slovenian website for AFTRHOURS, with event pages, artist showcases, a countdown, and an integrated SoundCloud player. Built with HTML, CSS, and JavaScript, with scroll interactions and reduced-motion support.', contribution:'Developed the event website and its interactive music and event experiences.', symbol:'globe' },
  { id:'osiris', name:'Osiris', repo:'osiris_landingpage', category:'web', status:'Live landing page', role:'Web developer', tags:['HTML / CSS','JavaScript'], tools:['javascript'], live:'https://osiris-landingpage.vercel.app/', summary:'A digital stage for ØSIRIS. An artist landing page bringing music, shows, and booking into one place.', detail:'A live landing page for techno artist ØSIRIS. The page brings together an atmospheric opening, an artist introduction, show listings, music transmissions, and booking contact in a focused visual experience.', contribution:'Built the artist landing page and its music, live, and contact sections.', symbol:'globe' },
  { id:'tempo', name:'Tempo', repo:'tempo', category:'mobile', status:'Prototype', role:'Personal project', tags:['Flutter','Music + social'], tools:['flutter','supabase'], summary:'A little like BeReal, with a soundtrack. Share the music and photo behind a moment.', detail:'Tempo is an experimental social app that brings music and photos into the same moment. Think of the spontaneity of BeReal, with music as part of the story. The Flutter prototype is not in production.', contribution:'Exploring a personal product idea through a Flutter mobile prototype.', symbol:'music' },
  { id:'chef', name:'SmartChef', repo:'smartchef-parser', category:'experiments', status:'Academic project', role:'Developer', tags:['Node.js','Scraping','gRPC'], tools:['javascript','node'], summary:'From supermarket products to dinner ideas. Grocery scraping meets the AI recipe concept.', detail:'The SmartChef idea connects supermarket product data with AI-assisted recipe planning. This repository contains the Node.js product parser: Puppeteer-based scraping for Lidl and Mercator, an Express interface, and a gRPC product service.', contribution:'Worked on the product-data and scraping side of SmartChef, turning supermarket information into data that a recipe workflow can use.', symbol:'chef' },
  { id:'planify', name:'Planify', repo:'Planify', category:'mobile', status:'Pair project', role:'Team lead · pair', tags:['Flutter','Firebase','SQLite'], tools:['flutter','firebase'], summary:'Make room for focused studying. A study planning app, created as a two-person practicum project.', detail:'Planify brings study planning and focused work into a Flutter application. Its codebase includes a dashboard, focus timer, Firebase integration, local SQLite storage, and Google Calendar integration.', contribution:'Led a two-person team for the practicum project and helped turn the study planning idea into a working app.', symbol:'calendar' },
  { id:'team', name:'GameOn / React Native', repo:'gameon_projekt', category:'mobile', status:'Thesis team project', role:'Team lead', tags:['React Native','TypeScript'], tools:['react','typescript','firebase','node','javascript'], summary:'The team-built chapter of GameOn. I led the group and orchestrated the project.', detail:'A team version of GameOn, developed for thesis work. It combines a React Native / Expo app for players, a React web console for venue owners, and Firebase services. The project covers match discovery, player coordination, and venue management.', contribution:'Led the group and orchestrated the work across the mobile app, web application, and supporting services.', symbol:'people' },
  { id:'butterflaw', name:'Butterflaw', repo:'butterflawpage', category:'web', status:'Landing page', role:'Personal project', tags:['React','TypeScript','Vite'], tools:['react','typescript','javascript'], summary:'Small habits, room to grow. A landing page for a habit app that’s still an idea.', detail:'Butterflaw is a landing page for a planned habit app. The page is built with React, TypeScript, and Vite; the habit application itself has not yet been developed.', contribution:'Built the landing page to give the habit app concept a visual starting point.', symbol:'butterfly' },
  { id:'rebuttal', name:'Rebuttal', repo:'rebuttal', category:'experiments', status:'Private · in progress', role:'Personal project', tags:['Private project','In development'], tools:[], private:true, summary:'An idea still under wraps. A private project with more to share in a conversation.', detail:'Rebuttal is a private project. The repository and project details are not publicly available right now. Get in touch if you’d like to hear more about it.', contribution:'Developing a personal project privately.', symbol:'chat' },
  { id:'kebab', name:'No Onion: Late Night Kebab', repo:'latenightkebab', category:'experiments', status:'Early prototype', role:'Game experiment', tags:['C#','Networking','Co-op'], tools:['csharp'], summary:'A little late-night chaos. A friendslop game prototype with a platform and two networked characters.', detail:'No Onion: Late Night Kebab is an early friendslop game experiment. The current prototype has a rendered platform and two controllable characters connected through networking. It is still a work in progress.', contribution:'Building the initial multiplayer playground and testing character control and networking.', symbol:'game' },
  {
    id:'cryptoclicker', name:'CryptoClicker', repo:'CryptoClicker', category:'mobile',
    status:'My first project', role:'Developer', tags:['Flutter','Dart','Game'], tools:['flutter'],
    summary:'My first project started with a tap. Collect virtual coins, buy upgrades, and climb the leaderboard.',
    detail:'CryptoClicker is a Flutter game with collectible coins, upgrades, achievements, and market events. The stats screen tracks progress as players build a virtual portfolio.',
    contribution:'I built this game in Dart and Flutter. It was my first software project.',
    symbol:'game'
  }
];

function artwork(p) {
  const status = `<span class="project-status ${p.live ? 'live' : ''}">${p.private && !p.live ? icon('lock') : ''}${p.status}</span>`;
  const note = '<span class="visual-note">A VISUAL TAKE ON THE PROJECT</span>';
  const art = {
    cryptoclicker: `<span class="crypto-display"><small>CryptoClicker</small><b>+1</b><span class="crypto-chart"></span></span><span class="crypto-coin">₿</span>`,
    klubis:`<span class="visual-word">klubis.</span><div class="browser-mock"><div class="browser-bar"><i></i><i></i><i></i></div><div class="mock-body"><div class="mock-sidebar"><strong>klubis.</strong><span></span><span></span><span></span><span></span></div><div class="mock-main"><strong>More club. Less admin.</strong><div class="mock-stats"><span>YOUR CLUB<b>✳</b></span><span>MEMBERS<b>☻</b></span><span>ALL IN ONE<b>✓</b></span></div><div class="mock-table"></div></div></div></div>`,
    gameon:`<div class="court-lines"></div><div class="phone-mock"><div class="phone-island"></div><div class="phone-content"><strong>Game on.</strong><p>Your next match is out there.</p><div class="map-mock"><span class="map-pin">⚽</span><span class="map-pin">🏀</span></div><div class="match-mock">${icon('ball')}<div><b>Find a game</b><small>Discover nearby matches</small></div></div><div class="match-mock">${icon('people')}<div><b>Meet your team</b><small>Organise. Join. Play.</small></div></div></div></div><div class="floating-ball">${icon('ball')}</div>`,
    aftrhours:`<span class="night-spark">✳</span><div class="night-poster"><span class="poster-kicker">THE UNDERGROUND NEVER SLEEPS</span><strong>AFTR<br>HOURS<span>✳</span></strong><div class="poster-wave">${'<i></i>'.repeat(15)}</div><span class="poster-footer">EVENTS · MUSIC · AFTER DARK</span></div><div class="night-ticket"><span class="ticket-kicker">YOUR WAY IN</span><strong>AFTER<br>DARK.</strong><span class="ticket-perforation"></span><span class="ticket-barcode"></span></div>`,
    osiris:`<div class="osiris-disc"><span>Ø</span></div><div class="osiris-sleeve"><span class="sleeve-kicker">TECHNO / SCHRANZ</span><svg class="osiris-orbit" viewBox="0 0 140 140"><ellipse cx="70" cy="70" rx="57" ry="23" transform="rotate(-35 70 70)"/><ellipse cx="70" cy="70" rx="57" ry="23" transform="rotate(35 70 70)"/><circle cx="70" cy="70" r="37"/><path d="M43 70Q70 40 97 70Q70 100 43 70Z"/><circle cx="70" cy="70" r="9"/></svg><strong>ØSIRIS</strong><span class="sleeve-footer">SOUND IN ORBIT</span></div><span class="osiris-sticker">LONG<br>FORM<span>✧</span></span>`,
    tempo:`<div class="vinyl"></div><div class="tempo-photo"><span class="wave-bars"><i></i><i></i><i></i><i></i><i></i></span></div>`,
    chef:`<span class="chef-word">what’s<br>cooking?</span><div class="recipe-card">${icon('chef')}<h4>A little inspiration.<br>A great dinner.</h4><p>Ingredients, meet possibilities.</p><div class="ingredient"></div><div class="ingredient"></div><div class="ingredient"></div></div><div class="chef-tomato"></div>`,
    planify:`<div class="planner-sheet"><h4>A little more focused.</h4><div class="planner-grid">${'<i></i>'.repeat(20)}</div></div><span class="focus-sticker">TIME TO FOCUS<strong>25:00</strong></span>`,
    team:`<div class="team-cards"><div class="team-player">${icon('ball')}<strong>THE PLAYERS</strong><span>Find your game</span><span class="player-number">PLAY.</span></div><div class="team-player">${icon('people')}<strong>THE TEAM</strong><span>Build it together</span><span class="player-number">BUILD.</span></div><div class="team-player">${icon('globe')}<strong>THE PLATFORM</strong><span>Bring it to life</span><span class="player-number">GO.</span></div></div>`,
    butterflaw:`${icon('butterfly','butterfly-art')}<span class="butterflaw-word">butterflaw.</span>`,
    rebuttal:`<div class="chat-bubble"><i></i><i></i><i></i></div><div class="chat-bubble second">${icon('lock')}</div>`,
    kebab:`<span class="kebab-title">NO ONION.<br>LATE NIGHT KEBAB.</span><span class="pixel-stars">✧ · ✦</span><div class="pixel-floor"></div><div class="pixel-person"></div><div class="pixel-person second"></div>`
  };
  return status + art[p.id] + note;
}

const external = (url, label, symbol) => `<a href="${url}" target="_blank" rel="noopener">${icon(symbol)}${label}</a>`;
const grid = document.querySelector('#project-grid');
grid.innerHTML = projects.map(p => `<article class="project-card reveal" data-category="${p.category}" id="project-${p.id}"><button class="project-visual visual-${p.id}" data-project="${p.id}" aria-label="Read about ${p.name}"><span aria-hidden="true">${artwork(p)}</span></button><div class="project-info"><div class="project-title-row"><h3>${p.name}</h3><span class="project-role">${p.role}</span></div><p>${p.summary}</p><div class="project-bottom"><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="project-links">${p.live ? external(p.live,'Visit site','globe') : ''}${!p.private ? external(repo(p.repo),'Code','github') : `<button data-project="${p.id}">${icon(p.live?'file':'lock')}${p.live?'Details':'About it'}</button>`}</div></div></div></article>`).join('');
document.querySelectorAll('[data-project-total]').forEach(el=>{el.textContent=String(projects.length);});
document.querySelector('.project-count').textContent=`${projects.length} projects to explore`;

const dialog = document.querySelector('#project-dialog');
let dialogOpener;
function openProject(id, opener) {
  const p = projects.find(item=>item.id===id);
  if (!p) return;
  dialogOpener = opener;
  document.querySelector('#dialog-content').innerHTML = `<div class="dialog-art visual-${p.id}" aria-hidden="true">${artwork(p)}</div><div class="dialog-illustration-note">${p.preview?'Screenshot of the live website':'Concept illustration · not a product screenshot'}</div><h3 id="dialog-title">${p.name}</h3><div class="dialog-meta"><span>${p.status}</span><span>${p.role}</span>${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><p>${p.detail}</p><p><strong>My part.</strong> ${p.contribution}</p>${p.private&&!p.live?`<div class="private-note">${icon('lock')}The repository is private. I’m happy to talk about the project.</div>`:''}<div class="dialog-actions">${p.live?`<a class="button button-dark" href="${p.live}" target="_blank" rel="noopener">Visit ${p.name} ${icon('globe')}</a>`:''}${!p.private?`<a class="button ${p.live?'button-outline':'button-dark'}" href="${repo(p.repo)}" target="_blank" rel="noopener">View repository ${icon('github')}</a>`:`<a class="button button-outline" href="mailto:nino.lisjak@hotmail.com?subject=${encodeURIComponent(`Let’s talk about ${p.name}`)}">Ask me about it ${icon('mail')}</a>`}</div>`;
  document.body.classList.add('dialog-open');
  dialog.showModal();
  dialog.scrollTop=0;
}
document.addEventListener('click',e=>{
  const trigger=e.target.closest('[data-project]');
  if(trigger)openProject(trigger.dataset.project,trigger);
});
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');dialogOpener?.focus({preventScroll:true});});

document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('.project-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter;});
  grid.classList.toggle('is-filtered',filter!=='all');
  const count=projects.filter(p=>filter==='all'||p.category===filter).length;
  document.querySelector('.project-count').textContent=`${count} project${count===1?'':'s'} to explore`;
}));

const tools = [
  {id:'flutter',label:'Flutter',icon:'flutter',caption:'Mobile',color:'#4e9abd'},
  {id:'react',label:'React / Native',icon:'react',caption:'Web + mobile',color:'#4d98a8'},
  {id:'typescript',label:'TypeScript',icon:'typescript',caption:'Typed interfaces',color:'#5a84b2'},
  {id:'firebase',label:'Firebase',icon:'firebase',caption:'Backend',color:'#bf8f3e'},
  {id:'javascript',label:'JavaScript',icon:'js',caption:'Web + services',color:'#9c922d'},
  {id:'node',label:'Node.js',icon:'node',caption:'Server side',color:'#6e9358'},
  {id:'csharp',label:'C#',icon:'csharp',caption:'Game development',color:'#9272b5'},
  {id:'java',label:'Java',icon:'java',caption:'Language',color:'#bf7950',detail:'A statically typed language for building applications on the JVM.'},
  {id:'springboot',label:'Spring Boot',icon:'springboot',caption:'Backend',color:'#639549',detail:'A Java framework for building standalone services and REST APIs.'},
  {id:'angular',label:'Angular',icon:'angular',caption:'Frontend',color:'#c35b72',detail:'A TypeScript framework for building web apps with components, forms, and routing.'},
  {id:'supabase',label:'Supabase',icon:'supabase',caption:'Backend',color:'#329a74'}
];
document.querySelector('#stack-grid').innerHTML=tools.map(t=>`<button class="stack-button" data-tool="${t.id}" aria-pressed="false" aria-controls="stack-result"><svg style="color:${t.color}" aria-hidden="true"><use href="#i-${t.icon}"/></svg><span>${t.label}</span><small>${t.caption}</small></button>`).join('');
document.querySelectorAll('[data-tool]').forEach(button=>button.addEventListener('click',()=>{
  const tool=tools.find(t=>t.id===button.dataset.tool);
  document.querySelectorAll('[data-tool]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  const matches=projects.filter(p=>p.tools.includes(tool.id));
  document.querySelector('#stack-result').innerHTML=matches.length
    ? `<strong>${tool.label}, in action</strong>${matches.map(p=>`<button class="stack-project-link" data-project="${p.id}">${p.name}${icon(p.symbol==='music'?'spark':p.symbol)}</button>`).join('')}`
    : `<strong>${tool.label}</strong><span>${tool.detail}</span>`;
}));

const menuToggle=document.querySelector('.menu-toggle');
const mobileNav=document.querySelector('.mobile-nav');
function closeMenu(){menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation');mobileNav.hidden=true;}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');mobileNav.hidden=!open;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.mobile-nav,.menu-toggle'))closeMenu();});
const navMedia=matchMedia('(min-width:821px)');navMedia.addEventListener('change',e=>{if(e.matches)closeMenu();});

const copyButton=document.querySelector('.copy-email');
let copyTimer;
copyButton.addEventListener('click',async()=>{
  try {
    await navigator.clipboard.writeText('nino.lisjak@hotmail.com');
    copyButton.querySelector('span').textContent='Copied!';
    document.querySelector('#copy-status').textContent='Email address copied to clipboard.';
  } catch {
    const selection=getSelection();const range=document.createRange();range.selectNodeContents(document.querySelector('.email-link'));selection.removeAllRanges();selection.addRange(range);
    copyButton.querySelector('span').textContent='Select & copy';
    document.querySelector('#copy-status').textContent='Email selected. Use your device’s copy command.';
  }
  clearTimeout(copyTimer);copyTimer=setTimeout(()=>{copyButton.querySelector('span').textContent='Copy email';document.querySelector('#copy-status').textContent='';},3000);
});
document.querySelector('#year').textContent=new Date().getFullYear();

const root=document.documentElement;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const finePointer=matchMedia('(pointer: fine)');
let motionPreference;
try{motionPreference=localStorage.getItem('nino-motion');}catch{}
let motionOn=motionPreference?motionPreference==='on':!reducedMotion.matches;
const motionToggle=document.querySelector('.motion-toggle');
function applyMotion(){
  root.classList.toggle('motion-off',!motionOn);
  root.classList.toggle('js-motion',motionOn);
  motionToggle.setAttribute('aria-pressed',String(!motionOn));
  motionToggle.setAttribute('aria-label',motionOn?'Turn motion off':'Turn motion on');
  motionToggle.querySelector('span').textContent=motionOn?'Motion on':'Motion off';
  scheduleFrame();
}
motionToggle.addEventListener('click',()=>{motionOn=!motionOn;try{localStorage.setItem('nino-motion',motionOn?'on':'off');}catch{}applyMotion();});
reducedMotion.addEventListener('change',e=>{motionOn=!e.matches;applyMotion();});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.06,rootMargin:'0px 0px 10px 0px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

let scheduled=false,pointerX=0,pointerY=0,currentX=0,currentY=0;
const playground=document.querySelector('.playground');
const floating=[...document.querySelectorAll('[data-depth]')];
const aboutArt=document.querySelector('.about-art');
function scheduleFrame(){if(!scheduled){scheduled=true;requestAnimationFrame(frame);}}
function frame(){
  scheduled=false;
  const scroll=window.scrollY;
  const max=document.documentElement.scrollHeight-window.innerHeight;
  document.querySelector('.scroll-progress').style.transform=`scaleX(${max>0?scroll/max:0})`;
  if(!motionOn||reducedMotion.matches)return;
  currentX+=(pointerX-currentX)*.09;currentY+=(pointerY-currentY)*.09;
  if(scroll<1100)floating.forEach(el=>{const depth=Number(el.dataset.depth);el.style.setProperty('--px',`${(currentX*depth).toFixed(2)}px`);el.style.setProperty('--py',`${(currentY*depth+scroll*depth*.8).toFixed(2)}px`);});
  const bounds=aboutArt.getBoundingClientRect();
  if(bounds.top<innerHeight&&bounds.bottom>0)aboutArt.style.translate=`0 ${((bounds.top+bounds.height/2-innerHeight/2)*-.04).toFixed(1)}px`;
  if(Math.abs(pointerX-currentX)>.2||Math.abs(pointerY-currentY)>.2)scheduleFrame();
}
playground.addEventListener('pointermove',e=>{if(!finePointer.matches)return;const b=playground.getBoundingClientRect();pointerX=e.clientX-b.left-b.width/2;pointerY=e.clientY-b.top-b.height/2;scheduleFrame();});
playground.addEventListener('pointerleave',()=>{pointerX=0;pointerY=0;scheduleFrame();});
addEventListener('scroll',scheduleFrame,{passive:true});
addEventListener('resize',scheduleFrame,{passive:true});
applyMotion();

const themeButton = document.querySelector('.theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#171b19' : '#f6f6f2';
}
setTheme(root.dataset.theme);
systemTheme.addEventListener('change', event => {
  try { if (localStorage.getItem('nino-theme')) return; } catch {}
  setTheme(event.matches ? 'dark' : 'light');
});
let themeTransition;
themeButton.addEventListener('click', () => {
  if (themeTransition) return;
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  const change = () => {
    setTheme(theme);
    try { localStorage.setItem('nino-theme', theme); } catch {}
  };
  if (!motionOn || reducedMotion.matches || !document.startViewTransition) {
    change();
    return;
  }
  const button = themeButton.getBoundingClientRect();
  const x = button.left + button.width / 2;
  const y = button.top + button.height / 2;
  const radius = Math.ceil(Math.hypot(Math.max(x, innerWidth-x), Math.max(y, innerHeight-y)));
  root.style.setProperty('--theme-origin', x + 'px ' + y + 'px');
  root.style.setProperty('--theme-radius', radius + 'px');
  themeTransition = document.startViewTransition(change);
  themeTransition.finished.finally(() => { themeTransition = null; });
});
