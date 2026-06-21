/* ============================================================
   APP LOGIC
   ============================================================ */

var ICONS = {
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 4.5C4 3.7 4.7 3 5.5 3H12v17H5.5C4.7 20 4 19.3 4 18.5z"/><path d="M20 4.5C20 3.7 19.3 3 18.5 3H12v17h6.5c.8 0 1.5-.7 1.5-1.5z"/></svg>',
  ball: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/></svg>',
  clap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9h18v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M3 9l1.5-4.5L9 6 7.5 9zM9 9l1-4.5 4.5 1L13.5 9zM15 9l1-4.5L20 6l-1.5 3z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z"/></svg>',
  note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
  scroll: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 4h12v13a3 3 0 0 1-3 3H6"/><path d="M6 20a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3"/><path d="M9 9h6M9 13h6"/></svg>',
  flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 2h6M10 2v7L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V2"/><path d="M7.5 15h9"/></svg>',
  pad: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2.5" y="8" width="19" height="10" rx="4"/><path d="M7 11v4M5 13h4"/><circle cx="16" cy="12" r=".8" fill="currentColor"/><circle cx="18.5" cy="14.5" r=".8" fill="currentColor"/></svg>',
  tv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 21h8M9 6l3-3 3 3"/></svg>',
  paw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="7" cy="9" r="2"/><circle cx="12" cy="6.5" r="2"/><circle cx="17" cy="9" r="2"/><path d="M12 12c-3.5 0-6 2-6 4.5S8 20 12 20s6-1 6-3.5S15.5 12 12 12z"/></svg>'
};

var STATE = {
  lang: 'fr',
  activeQuiz: null,     // { id, title, qty, lang }
  pool: [],              // questions piochées pour la partie en cours
  current: 0,
  score: 0,
  wrong: 0,
  skipped: 0,
  totalTime: 0,
  timerInt: null,
  timeLeft: 20,
  qStart: 0,
  setupQty: 10
};

var leaderboard = [
  { name: "Alexandre M.", initials: "AM", quiz: "culture", score: 100, time: "8.2s", pct: 100 },
  { name: "Sophie K.", initials: "SK", quiz: "cinema", score: 90, time: "11.4s", pct: 90 },
  { name: "Thomas R.", initials: "TR", quiz: "sport", score: 90, time: "13.1s", pct: 90 },
  { name: "Lucie D.", initials: "LD", quiz: "geo", score: 80, time: "9.8s", pct: 80 },
  { name: "Marc B.", initials: "MB", quiz: "culture", score: 80, time: "14.2s", pct: 80 },
  { name: "Emma V.", initials: "EV", quiz: "cinema", score: 70, time: "12.0s", pct: 70 },
  { name: "Hugo F.", initials: "HF", quiz: "music", score: 70, time: "15.5s", pct: 70 },
  { name: "Léa P.", initials: "LP", quiz: "history", score: 70, time: "10.1s", pct: 70 },
  { name: "Nathan G.", initials: "NG", quiz: "science", score: 60, time: "16.3s", pct: 60 },
  { name: "Inès T.", initials: "IT", quiz: "animals", score: 60, time: "9.4s", pct: 60 }
];

function t(key) { return I18N[STATE.lang][key]; }

/* ───────────── LANGUE ───────────── */
function setLang(lang) {
  STATE.lang = lang;
  document.getElementById('html-root').lang = lang;
  document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  renderStaticText();
  buildQuizGrid();
  buildHowItWorks();
  buildLeaderboardTabs();
  buildLeaderboard('all');
}

function renderStaticText() {
  var d = I18N[STATE.lang];
  document.getElementById('t-logo').textContent = d.logo;
  document.getElementById('t-nav-home').textContent = d.navHome;
  document.getElementById('t-nav-quiz').textContent = d.navQuiz;
  document.getElementById('t-nav-rank').textContent = d.navRank;
  document.getElementById('t-tag').textContent = d.tag;
  document.getElementById('t-hero-title').innerHTML = d.heroTitle;
  document.getElementById('t-hero-sub').textContent = d.heroSub;
  document.getElementById('t-hero-cta').textContent = d.heroCta;
  document.getElementById('t-hcs-1').textContent = d.hcs1;
  document.getElementById('t-hcs-2').textContent = d.hcs2;
  document.getElementById('t-hcs-3').textContent = d.hcs3;
  document.getElementById('t-hcs-4').textContent = d.hcs4;
  document.getElementById('t-ad1').textContent = d.ad;
  document.getElementById('t-ad2').textContent = d.ad;
  document.getElementById('t-ad3').textContent = d.ad;
  document.getElementById('t-sec1-eyebrow').textContent = d.sec1Eyebrow;
  document.getElementById('t-sec1-title').textContent = d.sec1Title;
  document.getElementById('t-sec1-sub').textContent = d.sec1Sub;
  document.getElementById('t-sec2-eyebrow').textContent = d.sec2Eyebrow;
  document.getElementById('t-sec2-title').textContent = d.sec2Title;
  document.getElementById('t-lb-title').textContent = d.lbTitle;
  document.getElementById('t-footer-tag').textContent = d.footerTag;
  document.getElementById('t-foot-home').textContent = d.footHome;
  document.getElementById('t-foot-quiz').textContent = d.footQuiz;
  document.getElementById('t-foot-privacy').textContent = d.footPrivacy;
  document.getElementById('t-foot-legal').textContent = d.footLegal;
  document.title = d.logo + " — " + d.heroSub.slice(0, 60);
}

/* ───────────── GRID DE QUIZ ───────────── */
function buildQuizGrid() {
  var g = document.getElementById('quiz-grid');
  var d = I18N[STATE.lang];
  g.innerHTML = '';
  THEMES.forEach(function(th) {
    var name = d.themeNames[th.id];
    var desc = d.themeDesc[th.id];
    var poolSize = QUESTIONS[STATE.lang][th.id].length;
    g.innerHTML += '<div class="quiz-card" onclick="openSetup(\'' + th.id + '\')">' +
      '<div class="quiz-card-top" style="background:' + th.color + '22; color:' + th.color + '">' +
        ICONS[th.icon] +
        '<span class="quiz-card-pin" style="background:' + th.color + '"></span>' +
      '</div>' +
      '<div class="quiz-card-body">' +
        '<div class="quiz-card-title">' + name + '</div>' +
        '<div class="quiz-card-meta">' + desc + '</div>' +
        '<button class="quiz-card-btn">' + d.play + '</button>' +
      '</div></div>';
  });
}

/* ───────────── HOW IT WORKS ───────────── */
function buildHowItWorks() {
  var d = I18N[STATE.lang];
  var wrap = document.getElementById('how-strip');
  wrap.innerHTML = '';
  d.howItems.forEach(function(item) {
    wrap.innerHTML += '<div class="how-item">' +
      '<div class="how-num">' + item.num + '</div>' +
      '<div class="how-title">' + item.title + '</div>' +
      '<div class="how-desc">' + item.desc + '</div>' +
    '</div>';
  });
}

/* ───────────── LEADERBOARD ───────────── */
function buildLeaderboardTabs() {
  var d = I18N[STATE.lang];
  var tabs = document.getElementById('lb-tabs');
  var html = '<button class="lb-tab active" onclick="filterLB(\'all\', this)">' + d.lbAll + '</button>';
  THEMES.forEach(function(th) {
    html += '<button class="lb-tab" onclick="filterLB(\'' + th.id + '\', this)">' + d.themeNames[th.id] + '</button>';
  });
  tabs.innerHTML = html;
}

function buildLeaderboard(filter) {
  var d = I18N[STATE.lang];
  var list = document.getElementById('lb-list');
  var data = filter === 'all' ? leaderboard : leaderboard.filter(function(r){ return r.quiz === filter; });
  data = data.slice().sort(function(a,b){ return b.score - a.score; }).slice(0, 10);
  list.innerHTML = '';
  data.forEach(function(r, i) {
    var rankClass = i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : 'rank-other';
    var themeName = d.themeNames[r.quiz] || r.quiz;
    list.innerHTML += '<div class="lb-row">' +
      '<div class="lb-rank ' + rankClass + '">' + (i+1) + '</div>' +
      '<div class="lb-avatar">' + r.initials + '</div>' +
      '<div class="lb-info"><div class="lb-name">' + escapeHtml(r.name) + '</div><div class="lb-quiz">' + themeName + '</div></div>' +
      '<div class="lb-bar-wrap"><div class="lb-bar-bg"><div class="lb-bar-fill" style="width:' + r.pct + '%"></div></div></div>' +
      '<div class="lb-right"><div class="lb-score">' + r.score + '%</div><div class="lb-time">' + r.time + '</div></div>' +
    '</div>';
  });
  if (data.length === 0) {
    list.innerHTML = '<div style="padding:2rem; text-align:center; color:var(--ink-faint); font-size:13px;">—</div>';
  }
}

function filterLB(filter, btn) {
  document.querySelectorAll('.lb-tab').forEach(function(t){ t.classList.remove('active'); });
  btn.classList.add('active');
  buildLeaderboard(filter);
}

function escapeHtml(str) {
  var div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/* ───────────── COMPTEURS ANIMÉS ───────────── */
function animateCounter(id, target, suffix) {
  var el = document.getElementById(id);
  var startTime = null; var dur = 1100;
  function step(ts) {
    if (!startTime) startTime = ts;
    var prog = Math.min((ts - startTime) / dur, 1);
    el.textContent = Math.round(prog * target) + (suffix || '');
    if (prog < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ───────────── SETUP MODAL (choix nb questions) ───────────── */
function openSetup(themeId) {
  var d = I18N[STATE.lang];
  var theme = THEMES.find(function(th){ return th.id === themeId; });
  var name = d.themeNames[themeId];
  STATE.setupQty = 10;

  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-body').innerHTML =
    '<div class="setup-row">' +
      '<span class="setup-label">' + d.setupLabel + '</span>' +
      '<div class="setup-options" id="setup-options">' +
        [10,20,50,100].map(function(n) {
          return '<button class="setup-opt' + (n===10?' active':'') + '" data-n="' + n + '" onclick="selectQty(' + n + ', this)">' + n + '</button>';
        }).join('') +
      '</div>' +
    '</div>' +
    '<div class="quiz-action-row">' +
      '<button class="btn-primary" onclick="startQuiz(\'' + themeId + '\')">' + d.setupStart + '</button>' +
    '</div>';

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectQty(n, btn) {
  STATE.setupQty = n;
  document.querySelectorAll('#setup-options .setup-opt').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

/* ───────────── PIOCHE DE QUESTIONS ───────────── */
function buildPool(themeId, qty, lang) {
  var bank = QUESTIONS[lang][themeId].slice();
  // shuffle (Fisher-Yates)
  for (var i = bank.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = bank[i]; bank[i] = bank[j]; bank[j] = tmp;
  }
  var pool = [];
  var idx = 0;
  while (pool.length < qty) {
    pool.push(bank[idx % bank.length]);
    idx++;
  }
  return pool;
}

/* ───────────── DÉMARRER LE QUIZ ───────────── */
function startQuiz(themeId) {
  var d = I18N[STATE.lang];
  var theme = THEMES.find(function(th){ return th.id === themeId; });
  STATE.activeQuiz = { id: themeId, title: d.themeNames[themeId], qty: STATE.setupQty, lang: STATE.lang };
  STATE.pool = buildPool(themeId, STATE.setupQty, STATE.lang);
  STATE.current = 0; STATE.score = 0; STATE.wrong = 0; STATE.skipped = 0; STATE.totalTime = 0;
  document.getElementById('modal-title').textContent = STATE.activeQuiz.title;
  renderQuestion();
}

function renderQuestion() {
  var d = I18N[STATE.lang];
  var q = STATE.pool[STATE.current];
  var pct = (STATE.current / STATE.pool.length) * 100;

  document.getElementById('modal-body').innerHTML =
    '<div class="progress-bg"><div class="progress-fill" id="pf" style="width:' + pct + '%"></div></div>' +
    '<div class="q-meta">' +
      '<span class="q-counter">' + d.question + ' ' + (STATE.current+1) + ' / ' + STATE.pool.length + '</span>' +
      '<div class="timer-wrap">' +
        '<svg class="timer-svg" viewBox="0 0 34 34" aria-hidden="true">' +
          '<circle cx="17" cy="17" r="14" fill="none" stroke="rgba(0,0,0,.12)" stroke-width="2.5"/>' +
          '<circle id="tarc" cx="17" cy="17" r="14" fill="none" stroke="#D9622B" stroke-width="2.5" stroke-dasharray="88" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 17 17)" style="transition:stroke-dashoffset 1s linear,stroke .3s"/>' +
        '</svg>' +
        '<span id="ttxt">20</span>' +
      '</div>' +
    '</div>' +
    '<div class="q-text">' + q.q + '</div>' +
    '<div class="answers-grid" id="ag"></div>' +
    '<div class="feedback-box" id="fb"></div>' +
    '<div class="ad-ingame-wrap" id="adwrap"><div class="ad-ingame-inner">' + d.ad + '</div></div>' +
    '<div class="quiz-action-row" id="action-row">' +
      '<button class="btn-skip" id="skipbtn" onclick="skipQuestion()">' + d.skip + '</button>' +
    '</div>';

  var ag = document.getElementById('ag');
  q.a.forEach(function(ans, i) {
    var b = document.createElement('button');
    b.className = 'answer-btn';
    b.textContent = ans;
    b.addEventListener('click', function(){ selectAns(i); });
    ag.appendChild(b);
  });

  STATE.qStart = Date.now();
  startTimer();
}

function startTimer() {
  clearInterval(STATE.timerInt);
  STATE.timeLeft = 20;
  updateTimer();
  STATE.timerInt = setInterval(function(){
    STATE.timeLeft--;
    updateTimer();
    if (STATE.timeLeft <= 0) { clearInterval(STATE.timerInt); timeUp(); }
  }, 1000);
}

function updateTimer() {
  var txt = document.getElementById('ttxt');
  var arc = document.getElementById('tarc');
  if (!txt || !arc) return;
  txt.textContent = STATE.timeLeft;
  arc.setAttribute('stroke-dashoffset', (88*(1-STATE.timeLeft/20)).toFixed(1));
  arc.setAttribute('stroke', STATE.timeLeft <= 5 ? '#A33B3B' : '#D9622B');
}

function timeUp() {
  var d = I18N[STATE.lang];
  STATE.wrong++;
  revealAnswers(STATE.pool[STATE.current].c, -1);
  showFeedback(false, d.timeUp + ' ' + STATE.pool[STATE.current].info);
}

function selectAns(idx) {
  clearInterval(STATE.timerInt);
  var d = I18N[STATE.lang];
  STATE.totalTime += Math.min((Date.now() - STATE.qStart)/1000, 20);
  var q = STATE.pool[STATE.current];
  var ok = idx === q.c;
  if (ok) STATE.score++; else STATE.wrong++;
  revealAnswers(q.c, idx);
  showFeedback(ok, (ok ? d.correct : d.incorrect) + ' ' + q.info);
}

function skipQuestion() {
  clearInterval(STATE.timerInt);
  STATE.skipped++;
  goToNext();
}

function revealAnswers(correct, chosen) {
  document.querySelectorAll('.answer-btn').forEach(function(b, i){
    b.disabled = true;
    if (i === correct) b.classList.add(chosen === -1 ? 'reveal' : 'correct');
    else if (i === chosen) b.classList.add('wrong');
  });
}

function showFeedback(ok, text) {
  var d = I18N[STATE.lang];
  var fb = document.getElementById('fb');
  fb.textContent = (ok ? '✓ ' : '✗ ') + text;
  fb.className = 'feedback-box ' + (ok ? 'correct' : 'wrong');
  fb.style.display = 'block';

  var isLast = STATE.current >= STATE.pool.length - 1;
  document.getElementById('action-row').innerHTML =
    '<button class="btn-primary" onclick="goToNext()">' + (isLast ? d.seeResults : d.next) + '</button>';

  if (!ok) document.getElementById('adwrap').style.display = 'block';
}

function goToNext() {
  STATE.current++;
  if (STATE.current >= STATE.pool.length) showResults();
  else renderQuestion();
}

/* ───────────── RÉSULTATS ───────────── */
function showResults() {
  clearInterval(STATE.timerInt);
  var d = I18N[STATE.lang];
  var answered = STATE.pool.length - STATE.skipped;
  var pct = answered > 0 ? Math.round((STATE.score / STATE.pool.length) * 100) : 0;
  var emojis = ['😅','🤔','🙂','🎉','🏆'];
  var tier = Math.min(4, Math.floor(pct/21));
  var avg = STATE.totalTime > 0 ? (STATE.totalTime/Math.max(1, STATE.pool.length - STATE.skipped)).toFixed(1) + 's' : '—';

  document.getElementById('modal-body').innerHTML =
    '<div class="progress-bg"><div class="progress-fill" style="width:100%"></div></div>' +
    '<div class="result-hero">' +
      '<span class="result-emoji">' + emojis[tier] + '</span>' +
      '<div style="font-size:13px;color:var(--ink-soft);margin-bottom:4px">' + d.yourScore + '</div>' +
      '<div class="result-pct">' + pct + '%</div>' +
      '<div class="result-sub">' + STATE.score + ' / ' + STATE.pool.length + ' ' + d.goodAnswers + '</div>' +
      '<div class="result-msg">' + d.resultMsgs[tier] + '</div>' +
    '</div>' +
    '<div class="result-stats">' +
      '<div class="rs-card"><div class="rs-val" style="color:#1F3D26">' + STATE.score + '</div><div class="rs-lbl">' + d.good + '</div></div>' +
      '<div class="rs-card"><div class="rs-val" style="color:#5C1F1F">' + STATE.wrong + '</div><div class="rs-lbl">' + d.bad + '</div></div>' +
      '<div class="rs-card"><div class="rs-val">' + STATE.skipped + '</div><div class="rs-lbl">' + d.skipped + '</div></div>' +
      '<div class="rs-card"><div class="rs-val" style="font-size:15px">' + avg + '</div><div class="rs-lbl">' + d.avgTime + '</div></div>' +
    '</div>' +
    '<div class="name-input-wrap">' +
      '<label for="pseudo-input">' + d.pseudoLabel + '</label>' +
      '<input id="pseudo-input" class="name-input" type="text" placeholder="' + d.pseudoPlaceholder + '" maxlength="20" />' +
    '</div>' +
    '<div class="ad-slot" style="margin:0 0 1rem;border-radius:6px;overflow:hidden;border:none;">' +
      '<div class="ad-inner" style="min-height:90px">' + d.ad + '</div>' +
    '</div>' +
    '<button class="btn-secondary" onclick="saveAndShare(' + pct + ')">' + d.shareBtn + '</button>' +
    '<button class="btn-primary" style="width:100%" onclick="restartQuiz()">' + d.replayBtn + '</button>';
}

function saveAndShare(pct) {
  var d = I18N[STATE.lang];
  var pseudo = (document.getElementById('pseudo-input').value || '—').trim();
  if (!pseudo || pseudo === '—') pseudo = STATE.lang === 'fr' ? 'Anonyme' : 'Anonymous';
  var initials = pseudo.split(' ').map(function(w){ return w[0]; }).join('').toUpperCase().slice(0,2) || '??';
  var avgT = STATE.totalTime > 0 ? (STATE.totalTime/Math.max(1, STATE.pool.length - STATE.skipped)).toFixed(1)+'s' : '—';

  leaderboard.push({ name: pseudo, initials: initials, quiz: STATE.activeQuiz.id, score: pct, time: avgT, pct: pct });
  leaderboard.sort(function(a,b){ return b.score - a.score; });
  leaderboard = leaderboard.slice(0, 30);

  var text = d.shareText(pct, STATE.score, STATE.pool.length, STATE.activeQuiz.title) + ' → zazazarzouz.github.io/QuizCulture';
  if (navigator.share) {
    navigator.share({ text: text, url: 'https://zazazarzouz.github.io/QuizCulture' }).catch(function(){});
  } else {
    navigator.clipboard.writeText(text).then(function(){ alert(d.shareCopied); }).catch(function(){ prompt('', text); });
  }
}

function restartQuiz() {
  STATE.pool = buildPool(STATE.activeQuiz.id, STATE.activeQuiz.qty, STATE.lang);
  STATE.current = 0; STATE.score = 0; STATE.wrong = 0; STATE.skipped = 0; STATE.totalTime = 0;
  renderQuestion();
}

/* ───────────── MODAL ───────────── */
function closeModal() {
  clearInterval(STATE.timerInt);
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('modal-overlay').addEventListener('click', function(e){
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeModal(); });

  renderStaticText();
  buildQuizGrid();
  buildHowItWorks();
  buildLeaderboardTabs();
  buildLeaderboard('all');

  var totalQ = THEMES.length * 15;
  animateCounter('count-themes', THEMES.length, '');
  animateCounter('count-questions', totalQ, '+');
  animateCounter('count-players', 1247, '');
});
