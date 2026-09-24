(function(){
"use strict";

/* ---------- icons ---------- */
const ICON = {
  plus:'<path d="M12 5v14M5 12h14"/>',
  trash:'<path d="M4 7h16"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/><path d="M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/><path d="M10 11v6M14 11v6"/>',
  copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  chevronDown:'<path d="M6 9l6 6 6-6"/>',
  gear:'<path d="M5 7h14M5 12h14M5 17h14"/><circle cx="9" cy="7" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="11" cy="17" r="1.6"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  warning:'<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17.5v.1"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.2c2.7.4 4.5 2.4 4.5 5.8"/>',
  coins:'<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/><path d="M3 12v5c0 1.7 2.7 3 6 3 2 0 3.8-.4 5-1.1"/><ellipse cx="17" cy="13.5" rx="4.2" ry="2.2"/><path d="M12.8 13.5v4c0 1.2 1.9 2.2 4.2 2.2s4.2-1 4.2-2.2v-4"/>',
  court:'<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M12 5v14M3 12h18"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  remove:'<path d="M18 6L6 18M6 6l12 12"/>',
  check:'<path d="M5 12l4 4L19 6"/>',
  switchToCounter:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 5v14M16 5v14M4 12h16"/>',
  switchToSplit:'<path d="M5 8h14M5 16h14M8 5v14M16 5v14"/>',
  undo:'<path d="M9 5L4 10l5 5"/><path d="M4 10h9a6 6 0 1 1 0 12h-2"/>'
};
function ic(name, cls){ return `<svg class="ic ${cls||''}" viewBox="0 0 24 24">${ICON[name]||''}</svg>`; }

/* ---------- i18n ---------- */
const STR = {
  th:{
    dup:'ทำสำเนา', del:'ลบ', pickTime:'เลือกเวลา',
    addCourt:'เพิ่มคอร์ด', courts:'คอร์ด', players:'ผู้เล่น', total:'ยอดรวม',
    booking:'เวลาที่จอง', addPlayer:'เพิ่มผู้เล่น', playerName:'ชื่อผู้เล่น', courtNameDefault:n=>`คอร์ด ${n}`,
    copySuffix:' (สำเนา)', results:'สรุปผล', perPerson:'ยอดต่อคน', person:'ผู้เล่น', share:'ยอดที่ต้องจ่าย',
    breakdownFor:'รายละเอียด', collapse:'ย่อ', expand:'ดูรายละเอียด',
    noCourts:'ยังไม่มีคอร์ด — กดปุ่ม "เพิ่มคอร์ด" เพื่อเริ่มต้น',
    noPlayers:'ยังไม่มีผู้เล่นในคอร์ดนี้',
    noResults:'เพิ่มคอร์ดและผู้เล่นเพื่อดูยอดที่ต้องจ่าย',
    courtPayers:'ยอดที่แต่ละคนจ่ายในคอร์ดนี้', paysLabel:'จ่าย:', noPayers:'ยังไม่มีผู้เล่นที่คำนวณยอดได้',
    playersLabel:n=>`${n} คน`,
    settings:'ตั้งค่า',
    autoSave:'บันทึกเซสชันอัตโนมัติ', autoSaveDesc:'บันทึกคอร์ด ผู้เล่น และการตั้งค่าโดยอัตโนมัติ',
    copyCompact:'คัดลอกสรุปย่อ', copied:'คัดลอกแล้ว', copyFailed:'คัดลอกไม่สำเร็จ', baht:'บาท', grandTotalCompact:'รวม',
    language:'ภาษา', languageDesc:'ภาษาที่ใช้ในแอป',
    theme:'ธีม', themeDesc:'โทนสีของแอป',
    themeWhite:'สว่าง', themeDark:'มืด (ทั้งหมด)', themeMinimalDark:'มินิมอล-มืด',
    timeFormat:'รูปแบบเวลา', timeFormatDesc:'วิธีแสดงเวลาในแอป',
    pricing:'ราคาคอร์ด', pricingDesc:'ราคาจะเริ่มใช้ตั้งแต่เวลาที่กำหนดจนถึงราคาถัดไป',
    addRate:'เพิ่มช่วงราคา',
    dangerZone:'จัดการข้อมูล',
    resetSettings:'คืนค่าตั้งต้น', resetSettingsDesc:'คืนค่าภาษา ธีม และราคาคอร์ดเป็นค่าเริ่มต้น',
    clearAll:'ล้างข้อมูลทั้งหมด', clearAllDesc:'ลบคอร์ดและผู้เล่นทั้งหมด',
    confirmReset:'ต้องการคืนค่าตั้งต้นใช่หรือไม่?',
    confirmClear:'ต้องการลบข้อมูลคอร์ดและผู้เล่นทั้งหมดใช่หรือไม่? ไม่สามารถย้อนกลับได้',
    cancel:'ยกเลิก', confirm:'ยืนยัน',
    confirmResetTitle:'คืนค่าตั้งต้น', confirmClearTitle:'ล้างข้อมูลทั้งหมด',
    unassignedWarn:(range,mins)=>`ช่วงเวลา ${range} (${mins} นาที) ไม่มีผู้เล่นและจะไม่ถูกเรียกเก็บจากใครเลย`,
    noPriceWarn:(range)=>`ช่วงเวลา ${range} ยังไม่ได้ตั้งราคาคอร์ด กรุณาตั้งค่าในเมนูตั้งค่า`,
    endBeforeStart:'เวลาสิ้นสุดต้องอยู่หลังเวลาเริ่ม',
    emptyName:'กรุณาใส่ชื่อผู้เล่น',
    duplicateName:n=>`มีผู้เล่นชื่อ "${n}" ซ้ำในคอร์ดนี้ ยอดจะถูกรวมเข้าด้วยกัน`,
    outsideBooking:'เวลาของผู้เล่นอยู่นอกช่วงเวลาที่จองคอร์ด',
    invalidTime:'รูปแบบเวลาไม่ถูกต้อง', mixedRates:'หลายอัตรา',
    unassignedNote:amt=>`มี ${amt} ที่ไม่ถูกเรียกเก็บจากใครเลย เนื่องจากไม่มีผู้เล่นในบางช่วงเวลา`,
    start:'เริ่ม', end:'สิ้นสุด',
    scoreCounter:'นับคะแนน', badmintonSplit:'แบ่งค่าใช้จ่าย', scoreCounterTitle:'นับคะแนนแบดมินตัน', rotateLandscape:'กรุณาหมุนอุปกรณ์เป็นแนวนอน', rotateLandscapeDesc:'โหมดนับคะแนนรองรับการใช้งานแนวนอนเท่านั้น', playerLeft:'ผู้เล่น 1', playerRight:'ผู้เล่น 2', decrement:'ลดคะแนน', increment:'เพิ่มคะแนน', resetScore:'รีเซ็ตคะแนน', undo:'ย้อนกลับ', confirmResetScoreTitle:'รีเซ็ตคะแนน', confirmResetScore:'ต้องการรีเซ็ตคะแนนของผู้เล่นทั้งสองคนใช่หรือไม่?', scoreVs:'VS'
  },
  en:{
    dup:'Duplicate', del:'Delete', pickTime:'Pick time',
    addCourt:'Add court', courts:'Courts', players:'Players', total:'Total',
    booking:'Booking time', addPlayer:'Add player', playerName:'Player name', courtNameDefault:n=>`Court ${n}`,
    copySuffix:' (copy)', results:'Results', perPerson:'Per person', person:'Player', share:'Share',
    breakdownFor:'Breakdown', collapse:'Collapse', expand:'Expand',
    noCourts:'No courts yet — tap "Add court" to start',
    noPlayers:'No players on this court yet',
    noResults:'Add a court and players to see the split',
    courtPayers:'What each person pays on this court', paysLabel:'pays:', noPayers:'No payer total is available yet',
    playersLabel:n=>`${n} players`,
    settings:'Settings',
    autoSave:'Auto-save session', autoSaveDesc:'Automatically save courts, players, and settings',
    copyCompact:'Copy compact result', copied:'Copied', copyFailed:'Copy failed', baht:'baht', grandTotalCompact:'Total',
    language:'Language', languageDesc:'App interface language',
    theme:'Theme', themeDesc:'Color scheme of the app',
    themeWhite:'White', themeDark:'Dark (Completely)', themeMinimalDark:'Minimal Dark',
    timeFormat:'Time format', timeFormatDesc:'How times are displayed',
    pricing:'Court pricing', pricingDesc:'Each rate applies from its start time until the next one begins.',
    addRate:'Add rate',
    dangerZone:'Data',
    resetSettings:'Reset settings', resetSettingsDesc:'Restore language, theme and pricing to defaults',
    clearAll:'Clear all data', clearAllDesc:'Remove every court and player',
    confirmReset:'Reset all settings to default?',
    confirmClear:'Delete all courts and players? This cannot be undone.',
    cancel:'Cancel', confirm:'Confirm',
    confirmResetTitle:'Reset settings', confirmClearTitle:'Clear all data',
    unassignedWarn:(range,mins)=>`${range} (${mins} min) has no player assigned and will not be charged to anyone.`,
    noPriceWarn:(range)=>`${range} has no configured court price. Set one in Settings.`,
    endBeforeStart:'End time must be after start time',
    emptyName:'Enter a player name',
    duplicateName:n=>`"${n}" appears more than once on this court — shares will be combined.`,
    outsideBooking:"Player time falls outside the court's booking time",
    invalidTime:'Invalid time', mixedRates:'Mixed rates',
    unassignedNote:amt=>`${amt} is unassigned because no player was active during part of the booking.`,
    start:'Start', end:'End',
    scoreCounter:'Score counter', badmintonSplit:'Badminton split', scoreCounterTitle:'Badminton Score Counter', rotateLandscape:'Please rotate your device', rotateLandscapeDesc:'Score counter works in landscape orientation only', playerLeft:'Player 1', playerRight:'Player 2', decrement:'Decrease score', increment:'Increase score', resetScore:'Reset score', undo:'Undo', confirmResetScoreTitle:'Reset score', confirmResetScore:'Reset both players’ scores to zero?', scoreVs:'VS'
  }
};
function t(key, ...args){
  const v = STR[state.settings.language][key];
  return typeof v==='function' ? v(...args) : v;
}

/* ---------- time helpers ---------- */
function parseTimeStr(str){
  if(str==null) return null;
  let s = String(str).trim().toLowerCase();
  if(!s) return null;
  let ap = null;
  const m = s.match(/(a\.?m\.?|p\.?m\.?)$/);
  if(m){ ap = m[1][0]; s = s.slice(0, m.index).trim(); }
  s = s.replace(/\s+/g,'');
  let h=null, mm=0;
  if(/^\d{1,2}[:.\-]\d{1,2}$/.test(s)){
    const parts = s.split(/[:.\-]/);
    h = parseInt(parts[0],10); mm = parseInt(parts[1],10);
  } else if(/^\d{3,4}$/.test(s)){
    if(s.length===3){ h = parseInt(s.slice(0,1),10); mm = parseInt(s.slice(1),10); }
    else { h = parseInt(s.slice(0,2),10); mm = parseInt(s.slice(2),10); }
  } else if(/^\d{1,2}$/.test(s)){
    h = parseInt(s,10); mm = 0;
  } else return null;
  if(isNaN(h)||isNaN(mm)) return null;
  if(ap){
    if(h<1||h>12) return null;
    if(ap==='p' && h!==12) h+=12;
    if(ap==='a' && h===12) h=0;
  }
  if(h<0||h>23||mm<0||mm>59) return null;
  return h*60+mm;
}
function pad2(n){ return n<10?'0'+n:''+n; }
function fmtTime(mins, fmt){
  fmt = fmt || state.settings.timeFormat;
  mins = ((mins%1440)+1440)%1440;
  const h = Math.floor(mins/60), m = mins%60;
  if(fmt===24) return pad2(h)+':'+pad2(m);
  let hh = h%12; if(hh===0) hh=12;
  return hh+':'+pad2(m)+' '+(h<12?'AM':'PM');
}
function nativeTimeVal(mins){ return pad2(Math.floor(mins/60))+':'+pad2(mins%60); }

/* ---------- money ---------- */
function fmtMoney(amount){
  const a = Number.isFinite(Number(amount)) ? Number(amount) : 0;
  return '\u0E3F' + a.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2});
}

/* ---------- state ---------- */
const STORE_KEY = 'badmintonSplit.v1';
let idc = 1;
function uid(){ return 'id'+(idc++)+Math.random().toString(36).slice(2,7); }

function defaultState(){
  return {
    activeMode:'split',
    scoreCounter:{leftName:'', rightName:'', leftScore:0, rightScore:0},
    settings:{
      language:'th', theme:'white', timeFormat:24, autoSave:true,
      pricingRules:[ {id:uid(), start:660, price:120}, {id:uid(), start:960, price:160} ]
    },
    courts:[]
  };
}
let state = loadState();
let expanded = new Set();
let scoreUndo = [];

function scoreSnapshot(){ return {leftScore:state.scoreCounter.leftScore, rightScore:state.scoreCounter.rightScore}; }
function rememberScore(){ scoreUndo.push(scoreSnapshot()); if(scoreUndo.length>50) scoreUndo.shift(); }
function undoScore(){
  const previous = scoreUndo.pop();
  if(!previous) return;
  state.scoreCounter.leftScore = previous.leftScore;
  state.scoreCounter.rightScore = previous.rightScore;
  persist(); renderCounter();
}

function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    if(!parsed || !parsed.settings || !parsed.courts) return defaultState();
    let migrated = false;
    if(!['split','counter'].includes(parsed.activeMode)){ parsed.activeMode = 'split'; migrated = true; }
    if(!parsed.scoreCounter || typeof parsed.scoreCounter !== 'object'){ parsed.scoreCounter = {leftName:'', rightName:'', leftScore:0, rightScore:0}; migrated = true; }
    const sc = parsed.scoreCounter;
    if(typeof sc.leftName !== 'string'){ sc.leftName = ''; migrated = true; }
    if(typeof sc.rightName !== 'string'){ sc.rightName = ''; migrated = true; }
    ['leftScore','rightScore'].forEach(k=>{ const n = Number(sc[k]); if(!Number.isFinite(n)){ sc[k] = 0; migrated = true; } else if(sc[k] !== n){ sc[k] = n; migrated = true; } });
    if(typeof parsed.settings.autoSave!=='boolean'){ parsed.settings.autoSave = true; migrated = true; }
    if(Object.prototype.hasOwnProperty.call(parsed.settings, 'accuratePrice')){ delete parsed.settings.accuratePrice; migrated = true; }
    if(!['white','dark','minimal-dark'].includes(parsed.settings.theme)){
      parsed.settings.theme = parsed.settings.theme==='system' ? 'white' : 'dark';
      migrated = true;
    }
    if(migrated) localStorage.setItem(STORE_KEY, JSON.stringify(parsed));
    return parsed;
  }catch(e){ return defaultState(); }
}
let saveTimer = null;
function persist(force=false){
  if(!force && state.settings.autoSave===false) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=>{ try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){} }, 150);
}

/* ---------- theme ---------- */
function applyTheme(){
  const mode = state.settings.theme;
  const resolved = mode==='white' ? 'light' : mode;
  document.documentElement.setAttribute('data-theme', resolved);
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if(themeMeta) themeMeta.setAttribute('content', getComputedStyle(document.body).backgroundColor);
}

/* ---------- calculation engine ---------- */
function sortedRules(){ return [...state.settings.pricingRules].sort((a,b)=>a.start-b.start); }
function rateAt(minute, rules){
  let applicable = null;
  for(const r of rules){ if(r.start<=minute) applicable = r; else break; }
  return applicable;
}
/* round shares to the satang; leftover satang go to the largest remainders so shares add up to the target */
function roundShares(totals, target){
  const names = Object.keys(totals); if(!names.length) return;
  const cents = Math.round(target*100);
  const fl = names.map(n=>Math.floor(totals[n]*100+1e-6));
  const rem = Math.max(0, cents - fl.reduce((a,b)=>a+b,0));
  names.map((n,i)=>({i, f:totals[n]*100-fl[i]})).sort((a,b)=>b.f-a.f)
    .forEach((o,k)=>{ if(k<rem) fl[o.i]+=1; });
  names.forEach((n,i)=>{ totals[n]=fl[i]/100; });
}
function computeCourt(court){
  const warnings = [];
  const result = { id:court.id, name:court.name, start:court.start, end:court.end, total:0, allocated:0, unassigned:0, segments:[], playerTotals:{}, payerIntervals:[], invalid:false };
  if(court.end<=court.start){
    result.invalid = true;
    warnings.push({type:'err', msg:t('endBeforeStart')});
    result.warnings = warnings;
    return result;
  }
  const rules = sortedRules();
  const seenNames = new Set(); const dupNames = new Set(); const firstName = {};
  const activePlayers = [];
  for(const p of court.players){
    const nameTrim = (p.name||'').trim();
    if(!nameTrim){ warnings.push({type:'warn', msg:t('emptyName'), playerId:p.id}); continue; }
    if(p.end<=p.start){ warnings.push({type:'warn', msg:t('endBeforeStart'), playerId:p.id}); continue; }
    const cs = Math.max(p.start, court.start), ce = Math.min(p.end, court.end);
    if(ce<=cs){ warnings.push({type:'warn', msg:t('outsideBooking'), playerId:p.id}); continue; }
    const key = nameTrim.toLowerCase();
    if(seenNames.has(key)) dupNames.add(firstName[key]); else { seenNames.add(key); firstName[key] = nameTrim; }
    activePlayers.push({ id:p.id, name:firstName[key], start:cs, end:ce });
  }
  dupNames.forEach(n=> warnings.push({type:'warn', msg:t('duplicateName', n)}) );

  const breakpoints = new Set([court.start, court.end]);
  rules.forEach(r=>{ if(r.start>court.start && r.start<court.end) breakpoints.add(r.start); });
  activePlayers.forEach(p=>{ breakpoints.add(p.start); breakpoints.add(p.end); });
  const pts = [...breakpoints].sort((a,b)=>a-b);

  for(let i=0;i<pts.length-1;i++){
    const segStart = pts[i], segEnd = pts[i+1];
    if(segEnd<=segStart) continue;
    const durMin = segEnd-segStart;
    const rate = rateAt(segStart, rules);
    const active = activePlayers.filter(p=> p.start<=segStart && p.end>=segEnd );
    let cost = 0, priced = true;
    if(!rate){ priced = false; warnings.push({type:'warn', msg:t('noPriceWarn', fmtTime(segStart)+'\u2013'+fmtTime(segEnd))}); }
    else cost = rate.price * (durMin/60);
    result.total += cost;
    if(active.length===0){
      if(priced && cost>0) warnings.push({type:'warn', msg:t('unassignedWarn', fmtTime(segStart)+'\u2013'+fmtTime(segEnd), durMin)});
      result.unassigned += cost;
    } else {
      const share = cost/active.length;
      active.forEach(p=>{ result.playerTotals[p.name] = (result.playerTotals[p.name]||0) + share; });
      result.allocated += cost;
    }
    result.segments.push({ start:segStart, end:segEnd, rate: rate?rate.price:null, rateId: rate?rate.id:null, players: active.map(p=>p.name), share: active.length? cost/active.length : 0, cost, priced });
  }
  roundShares(result.playerTotals, result.allocated);
  result.payerIntervals = buildPayerIntervals(activePlayers, result.segments, rules);
  result.warnings = warnings;
  return result;
}

function intervalRateText(start, end, rules){
  const points = [start, end, ...rules.filter(r=>r.start>start && r.start<end).map(r=>r.start)].sort((a,b)=>a-b);
  const prices = [];
  for(let i=0;i<points.length-1;i++){
    const rate = rateAt(points[i], rules);
    const value = rate ? rate.price : null;
    if(!prices.includes(value)) prices.push(value);
  }
  if(prices.length===1 && prices[0]!==null) return '฿'+prices[0]+'/hr';
  return prices.length>1 ? t('mixedRates') : t('invalidTime');
}
function buildPayerIntervals(activePlayers, segments, rules){
  const byInterval = new Map();
  activePlayers.forEach(p=>{
    const key = p.start+'|'+p.end;
    if(!byInterval.has(key)) byInterval.set(key, {start:p.start, end:p.end, names:[]});
    const group = byInterval.get(key);
    if(!group.names.some(n=>n.toLowerCase()===p.name.toLowerCase())) group.names.push(p.name);
  });
  return [...byInterval.values()]
    .map(group=>({...group,
      amount:segments.filter(s=>s.start>=group.start && s.end<=group.end).reduce((a,s)=>a+s.players.filter(n=>n===group.names[0]).length*s.share,0),
      rateText:intervalRateText(group.start, group.end, rules)}))
    .sort((a,b)=>a.start-b.start || b.end-a.end || a.names[0].localeCompare(b.names[0]));
}

function compactAmount(amount){ return Number(amount||0).toLocaleString('en-US', {minimumFractionDigits:0, maximumFractionDigits:2}); }
function compactTime(minutes){ return fmtTime(minutes, 24).replace(':','.'); }
function compactCourtText(cr){
  const lines = [`- ${cr.name}: ${compactTime(cr.start)}-${compactTime(cr.end)}`];
  Object.entries(cr.playerTotals).forEach(([name, amount])=>lines.push(`${name}: ${compactAmount(amount)} ${t('baht')}`));
  lines.push('', `  ${t('grandTotalCompact')} ${compactAmount(cr.total)} ${t('baht')}`);
  return lines.join('\n');
}
async function copyText(text){
  if(navigator.clipboard && window.isSecureContext){ await navigator.clipboard.writeText(text); return; }
  const area = document.createElement('textarea');
  area.value = text; area.setAttribute('readonly','');
  area.style.position = 'fixed'; area.style.opacity = '0';
  document.body.appendChild(area); area.select();
  const copied = document.execCommand('copy');
  area.remove();
  if(!copied) throw new Error('copy failed');
}

function computeAll(){
  const courtsResult = state.courts.map(computeCourt);
  const perPerson = {}, disp = {};
  let grandTotal = 0, grandAllocated = 0;
  const uniquePlayers = new Set();
  courtsResult.forEach(cr=>{
    if(cr.invalid) return;
    grandTotal += cr.total;
    grandAllocated += cr.allocated;
    Object.keys(cr.playerTotals).forEach(name=>{
      const k = name.toLowerCase(); disp[k] = disp[k] || name;
      uniquePlayers.add(disp[k]);
      perPerson[disp[k]] = (perPerson[disp[k]]||0) + cr.playerTotals[name];
    });
  });
  return { courtsResult, perPerson, grandTotal, grandAllocated, playersCount: uniquePlayers.size, courtsCount: state.courts.length };
}

/* ---------- rendering ---------- */
const $ = sel => document.querySelector(sel);
function tierClass(rateId, rules){
  const idx = rules.findIndex(r=>r.id===rateId);
  return idx>=0 ? 'tier-'+(idx%3) : 'noprice';
}
const renderResultsSoon = (()=>{ let h; return ()=>{ clearTimeout(h); h=setTimeout(renderResults,120); }; })();

function renderAll(){
  document.documentElement.lang = state.settings.language;
  const counter = state.activeMode === 'counter';
  document.documentElement.dataset.mode = counter ? 'counter' : 'split';
  applyCounterZoomLock(counter);
  document.title = counter ? t('scoreCounterTitle') : 'Badminton Split';
  $('#splitView').hidden = counter;
  $('#counterView').hidden = !counter;
  $('#modeBtn').innerHTML = ic(counter ? 'switchToSplit' : 'switchToCounter');
  $('#modeBtn').setAttribute('aria-label', counter ? t('badmintonSplit') : t('scoreCounter'));
  $('#modeBtn').setAttribute('title', counter ? t('badmintonSplit') : t('scoreCounter'));
  $('#settingsBtn').innerHTML = ic('gear');
  $('#closeDrawer').innerHTML = ic('close');
  $('#drawerTitle').textContent = t('settings');
  if(counter) renderCounter();
  else {
    $('#courtsTitle').textContent = t('courts');
    $('#addCourtBtn').innerHTML = ic('plus')+`<span>${t('addCourt')}</span>`;
    $('#resultsTitle').textContent = t('results');
    renderCourts();
    renderResults();
  }
}

function applyCounterZoomLock(counter){
  const viewport = document.querySelector('meta[name="viewport"]');
  if(viewport){
    viewport.setAttribute('content', counter
      ? 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover'
      : 'width=device-width, initial-scale=1.0, maximum-scale=5, minimum-scale=1.0, user-scalable=yes, viewport-fit=cover');
  }
}

function renderCounter(){
  const sc = state.scoreCounter;
  $('#counterView').innerHTML = `
    <div class="counter-portrait">
      <div class="portrait-icon">↔</div>
      <strong>${t('rotateLandscape')}</strong>
      <span>${t('rotateLandscapeDesc')}</span>
    </div>
    <div class="scoreboard" aria-label="${t('scoreCounterTitle')}">
      ${scoreSideTemplate('left', sc.leftName, sc.leftScore, t('playerLeft'))}
      <div class="score-divider" aria-hidden="true">${t('scoreVs')}</div>
      ${scoreSideTemplate('right', sc.rightName, sc.rightScore, t('playerRight'))}
    </div>
    <div class="score-reset"><button class="btn" id="resetScoreBtn">${ic('remove')}<span>${t('resetScore')}</span></button></div>
    <div class="score-utilities">
      <button class="btn sm" id="undoScoreBtn" ${scoreUndo.length?'':'disabled'}>${ic('undo')}<span>${t('undo')}</span></button>
    </div>`;
  $('#counterView').querySelectorAll('[data-score-name]').forEach(input=>{
    input.addEventListener('input', e=>{ state.scoreCounter[e.target.dataset.scoreName+'Name'] = e.target.value; persist(); });
  });
  $('#counterView').querySelectorAll('[data-score-input]').forEach(input=>{
    input.addEventListener('focus', ()=>{ if(!input.dataset.historyStarted){ rememberScore(); input.dataset.historyStarted = '1'; } });
    input.addEventListener('input', e=>{
      const cleaned = e.target.value.replace(/[^0-9-]/g,'').replace(/(?!^)-/g,'');
      if(e.target.value !== cleaned) e.target.value = cleaned;
      e.target.dataset.digits = Math.min(6, cleaned.replace('-', '').length || 1);
      if(/^-?\d+$/.test(cleaned)){
        state.scoreCounter[e.target.dataset.scoreInput] = Number(cleaned);
        persist();
      }
    });
    input.addEventListener('blur', e=>{
      if(!/^-?\d+$/.test(e.target.value)) renderCounter();
      else delete e.target.dataset.historyStarted;
    });
  });
  $('#counterView').querySelectorAll('[data-score-change]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const key = btn.dataset.scoreChange+'Score';
      rememberScore();
      state.scoreCounter[key] = Number(state.scoreCounter[key] || 0) + Number(btn.dataset.delta);
      persist(); renderCounter();
    });
  });
  $('#undoScoreBtn').addEventListener('click', undoScore);
  $('#resetScoreBtn').addEventListener('click', async ()=>{
    const ok = await showConfirm({title:t('confirmResetScoreTitle'), message:t('confirmResetScore'), confirmLabel:t('confirm'), danger:false});
    if(ok){ rememberScore(); state.scoreCounter.leftScore = 0; state.scoreCounter.rightScore = 0; persist(); renderCounter(); }
  });
}
function scoreSideTemplate(side, name, score, placeholder){
  const scoreText = String(Number(score) || 0);
  const digits = Math.min(6, scoreText.replace('-', '').length);
  return `<section class="score-side" data-score-side="${side}">
    <input class="score-name" data-score-name="${side}" value="${escapeAttr(name)}" placeholder="${escapeAttr(placeholder)}" aria-label="${escapeAttr(placeholder)}">
    <input class="score-value num" data-digits="${digits}" data-score-input="${side}Score" type="number" step="1" value="${escapeAttr(scoreText)}" inputmode="numeric" aria-label="${escapeAttr(placeholder)} score">
    <div class="score-actions">
      <button class="btn" data-score-change="${side}" data-delta="-1" aria-label="${t('decrement')}">−</button>
      <button class="btn primary" data-score-change="${side}" data-delta="1" aria-label="${t('increment')}">+</button>
    </div>
  </section>`;
}

function renderCourts(){
  const listEl = $('#courtsList');
  if(state.courts.length===0){
    listEl.innerHTML = `<div class="empty-state">${ic('court')}<div>${t('noCourts')}</div></div>`;
    renderSummary({courtsResult:[], perPerson:{}, grandTotal:0, playersCount:0, courtsCount:0});
    return;
  }
  listEl.innerHTML = state.courts.map(courtTemplate).join('');
  bindCourtEvents();
}

function courtTemplate(court){
  const invalid = court.end<=court.start;
  return `
  <div class="court" data-court="${court.id}">
    <div class="court-head">
      <input class="court-name" data-role="court-name" value="${escapeAttr(court.name)}" aria-label="${t('courts')}">
      <div class="court-actions">
        <button class="icon-btn" data-role="dup-court" aria-label="${t('dup')}">${ic('copy')}</button>
        <button class="icon-btn" data-role="del-court" aria-label="${t('del')}">${ic('trash')}</button>
      </div>
    </div>
    <div class="court-time-row">
      <span class="field-label">${t('booking')}</span>
      ${timeFieldHtml('court-start', court.start)}
      <span class="time-sep">\u2013</span>
      ${timeFieldHtml('court-end', court.end)}
    </div>
    ${invalid? `<div class="warn-banner err">${ic('warning')}<span>${t('endBeforeStart')}</span></div>`:''}
    <div class="players">
      ${court.players.map(p=>playerTemplate(court, p)).join('')}
      <div class="add-player-row">
        <button class="btn sm" data-role="add-player">${ic('plus')}<span>${t('addPlayer')}</span></button>
      </div>
      ${court.players.length===0? `<div style="padding:0 12px 12px;color:var(--text-faint);font-size:13px;">${t('noPlayers')}</div>`:''}
    </div>
  </div>`;
}
function playerTemplate(court, p){
  return `
  <div class="player-row" data-player="${p.id}">
    <input class="player-name" data-role="player-name" placeholder="${t('playerName')}" value="${escapeAttr(p.name)}">
    ${timeFieldHtml('player-start', p.start)}
    <span class="time-sep">\u2013</span>
    ${timeFieldHtml('player-end', p.end)}
    <button class="player-remove" data-role="del-player" aria-label="${t('del')}">${ic('remove')}</button>
  </div>`;
}
function timeFieldHtml(role, minutes){
  return `<span class="time-field" data-role="${role}">
    <input type="text" class="time-text" data-part="text" value="${fmtTime(minutes)}" inputmode="numeric">
    <button type="button" class="pick-btn" data-part="pickbtn" aria-label="${t('pickTime')}">${ic('clock')}</button>
    <input type="time" class="time-native" data-part="native" tabindex="-1" value="${nativeTimeVal(minutes)}">
  </span>`;
}
function escapeAttr(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

function findCourt(id){ return state.courts.find(c=>c.id===id); }
function findPlayer(court, id){ return court.players.find(p=>p.id===id); }

function bindCourtEvents(){
  document.querySelectorAll('.court').forEach(el=>{
    const courtId = el.getAttribute('data-court');
    const court = findCourt(courtId);

    el.querySelector('[data-role="court-name"]').addEventListener('input', e=>{
      court.name = e.target.value; persist(); renderResultsSoon();
    });
    el.querySelector('[data-role="dup-court"]').addEventListener('click', ()=>{
      const copy = JSON.parse(JSON.stringify(court));
      copy.id = uid(); copy.name = court.name + t('copySuffix');
      copy.players = copy.players.map(p=>({...p, id:uid()}));
      state.courts.splice(state.courts.indexOf(court)+1,0,copy);
      persist(); renderCourts(); renderResults();
    });
    el.querySelector('[data-role="del-court"]').addEventListener('click', ()=>{
      state.courts = state.courts.filter(c=>c.id!==courtId); expanded.delete(courtId);
      persist(); renderCourts(); renderResults();
    });
    bindTimeField(el.querySelector('[data-role="court-start"]'), court.start, m=>{ court.start=m; persist(); renderResults(); });
    bindTimeField(el.querySelector('[data-role="court-end"]'), court.end, m=>{ court.end=m; persist(); renderResults(); });

    el.querySelector('[data-role="add-player"]').addEventListener('click', ()=>{
      court.players.push({ id:uid(), name:'', start:court.start, end:court.end });
      persist(); renderCourts(); renderResults();
    });
    el.querySelectorAll('.player-row').forEach(prow=>{
      const pid = prow.getAttribute('data-player');
      const player = findPlayer(court, pid);
      prow.querySelector('[data-role="player-name"]').addEventListener('input', e=>{
        player.name = e.target.value; persist(); renderResultsSoon();
      });
      prow.querySelector('[data-role="del-player"]').addEventListener('click', ()=>{
        court.players = court.players.filter(p=>p.id!==pid);
        persist(); renderCourts(); renderResults();
      });
      bindTimeField(prow.querySelector('[data-role="player-start"]'), player.start, m=>{ player.start=m; persist(); renderResults(); });
      bindTimeField(prow.querySelector('[data-role="player-end"]'), player.end, m=>{ player.end=m; persist(); renderResults(); });
    });
  });
}

function bindTimeField(fieldEl, currentMinutes, onCommit){
  const textInp = fieldEl.querySelector('[data-part="text"]');
  const nativeInp = fieldEl.querySelector('[data-part="native"]');
  const pickBtn = fieldEl.querySelector('[data-part="pickbtn"]');
  function commit(minutes){
    textInp.classList.remove('err');
    textInp.value = fmtTime(minutes);
    nativeInp.value = nativeTimeVal(minutes);
    onCommit(minutes);
  }
  textInp.addEventListener('change', ()=>{
    const parsed = parseTimeStr(textInp.value);
    if(parsed==null){ textInp.classList.add('err'); textInp.value = fmtTime(currentMinutes); return; }
    commit(parsed);
  });
  textInp.addEventListener('keydown', e=>{ if(e.key==='Enter') textInp.blur(); });
  pickBtn.addEventListener('click', ()=>{
    if(typeof nativeInp.showPicker==='function'){ try{ nativeInp.showPicker(); }catch(e){ nativeInp.focus(); } }
    else nativeInp.focus();
  });
  nativeInp.addEventListener('change', ()=>{
    const [h,m] = nativeInp.value.split(':').map(Number);
    if(!isNaN(h)) commit(h*60+(m||0));
  });
}

/* ---------- summary + results ---------- */
function renderSummary(data){
  $('#summary').innerHTML = `
    <div class="stat total">
      <div class="stat-top">${ic('coins')}<span>${t('total')}</span></div>
      <div class="stat-val money">${fmtMoney(data.grandTotal)}</div>
    </div>
    <div class="stat">
      <div class="stat-top">${ic('users')}<span>${t('players')}</span></div>
      <div class="stat-val num">${data.playersCount}</div>
    </div>
    <div class="stat">
      <div class="stat-top">${ic('court')}<span>${t('courts')}</span></div>
      <div class="stat-val num">${data.courtsCount}</div>
    </div>`;
}

function renderResults(){
  const data = computeAll();
  renderSummary(data);
  const el = $('#results');
  if(state.courts.length===0){
    el.innerHTML = `<div class="empty-state">${t('noResults')}</div>`;
    return;
  }
  const names = Object.keys(data.perPerson).sort((a,b)=>data.perPerson[b]-data.perPerson[a]);
  const totalUnassigned = data.courtsResult.reduce((s,c)=>s+(c.unassigned||0),0);
  let html = `<div class="result-top">
    <div class="grand-label">${t('total')}</div>
    <div class="grand money">${fmtMoney(data.grandTotal)}</div>
    ${totalUnassigned>0.001? `<div class="reconcile-note">${t('unassignedNote', fmtMoney(totalUnassigned))}</div>`:''}
  </div>`;

  if(names.length){
    html += `<table class="people"><thead><tr><th>${t('person')}</th><th style="text-align:right">${t('share')}</th></tr></thead><tbody>`;
    names.forEach(n=>{ html += `<tr><td>${escapeAttr(n)}</td><td class="amt money">${fmtMoney(data.perPerson[n])}</td></tr>`; });
    html += `</tbody></table>`;
  }

  html += `<div class="breakdown">`;
  const rules = sortedRules();
  data.courtsResult.forEach(cr=>{
    const isOpen = expanded.has(cr.id);
    html += `<div class="court-bd" data-bd="${cr.id}">
      <div class="court-bd-head" data-role="toggle-bd">
        <span class="name">${escapeAttr(cr.name)}</span>
        <span class="court-bd-head-actions">
          <button class="btn sm copy-court" data-role="copy-court" aria-label="${t('copyCompact')}" title="${t('copyCompact')}">${ic('copy')}</button>
          <span class="total money">${cr.invalid? '\u2014' : fmtMoney(cr.total)}</span>
          ${ic('chevronDown', isOpen? 'chev-open':'')}
        </span>
      </div>
      <div class="court-bd-body" style="display:${isOpen?'block':'none'}">
        ${(cr.warnings||[]).map(w=>`<div class="warn-banner ${w.type==='err'?'err':''}" style="border-top:none;border-radius:6px;margin-bottom:8px;">${ic('warning')}<span>${w.msg}</span></div>`).join('')}
        ${cr.invalid? '' : `
        <div class="court-payers">
          <div class="court-payers-head">${t('courtPayers')}</div>
          ${Object.keys(cr.playerTotals).length ? `<div class="court-payer-list">
            ${Object.entries(cr.playerTotals).sort((a,b)=>b[1]-a[1] || a[0].localeCompare(b[0])).map(([name, amount])=>`
              <div class="court-payer"><span class="name">${escapeAttr(name)} <span class="pays-label">${t('paysLabel')}</span></span><span class="amt money">${fmtMoney(amount)}</span></div>
            `).join('')}
          </div>` : `<div class="court-payers-empty">${t('noPayers')}</div>`}
        </div>
        <div class="timeline">
          ${cr.segments.map(s=>{
            const width = ((s.end-s.start)/(cr.segments[cr.segments.length-1].end-cr.segments[0].start))*100;
            const cls = !s.priced ? 'noprice' : s.players.length===0 ? 'empty' : tierClass(s.rateId, rules);
            return `<div class="tl-seg ${cls}" style="flex:0 0 ${width}%"></div>`;
          }).join('')}
        </div>
        <div class="payer-seg-list">
          ${cr.payerIntervals.map(interval=>`
            <div class="payer-seg-item">
              <div class="payer-seg-meta">${fmtTime(interval.start)}–${fmtTime(interval.end)} · ${interval.rateText} (${fmtMoney(interval.amount)})</div>
              <div class="payer-seg-names">${interval.names.map(escapeAttr).join(', ')}</div>
            </div>
          `).join('')}
        </div>`}
      </div>
    </div>`;
  });
  html += `</div>`;
  el.innerHTML = html;

  el.querySelectorAll('[data-role="copy-court"]').forEach(btn=>{
    btn.addEventListener('click', async e=>{
      e.stopPropagation();
      const id = btn.closest('.court-bd').getAttribute('data-bd');
      const courtResult = data.courtsResult.find(cr=>cr.id===id);
      try{
        await copyText(compactCourtText(courtResult));
        btn.innerHTML = ic('check');
        btn.classList.add('copied');
        btn.setAttribute('aria-label', t('copied'));
        btn.setAttribute('title', t('copied'));
        setTimeout(()=>{
          if(!btn.isConnected) return;
          btn.innerHTML = ic('copy');
          btn.classList.remove('copied');
          btn.setAttribute('aria-label', t('copyCompact'));
          btn.setAttribute('title', t('copyCompact'));
        }, 1400);
      }catch(err){
        btn.setAttribute('aria-label', t('copyFailed'));
        btn.setAttribute('title', t('copyFailed'));
      }
    });
  });
  el.querySelectorAll('[data-role="toggle-bd"]').forEach(h=>{
    h.addEventListener('click', e=>{
      if(e.target.closest('[data-role="copy-court"]')) return;
      const id = h.closest('.court-bd').getAttribute('data-bd');
      if(expanded.has(id)) expanded.delete(id); else expanded.add(id);
      renderResults();
    });
  });
}

/* ---------- settings drawer ---------- */
function openDrawer(){ $('#overlay').classList.add('open'); $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden','false'); renderDrawer(); }
function closeDrawerFn(){ $('#overlay').classList.remove('open'); $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden','true'); }

/* ---------- in-page confirm dialog ---------- */
let confirmResolve = null;
function showConfirm({title, message, confirmLabel, danger}){
  $('#confirmTitle').textContent = title;
  $('#confirmMsg').textContent = message;
  const okBtn = $('#confirmOkBtn');
  okBtn.textContent = confirmLabel;
  okBtn.className = 'btn ' + (danger ? 'danger' : 'primary');
  $('#confirmCancelBtn').textContent = t('cancel');
  $('#confirmOverlay').classList.add('open');
  $('#confirmModal').classList.add('open');
  return new Promise(resolve=>{ confirmResolve = resolve; });
}
function closeConfirm(result){
  $('#confirmOverlay').classList.remove('open');
  $('#confirmModal').classList.remove('open');
  if(confirmResolve){ const r = confirmResolve; confirmResolve = null; r(result); }
}
$('#confirmOkBtn').addEventListener('click', ()=>closeConfirm(true));
$('#confirmCancelBtn').addEventListener('click', ()=>closeConfirm(false));
$('#confirmOverlay').addEventListener('click', ()=>closeConfirm(false));
document.addEventListener('keydown', e=>{
  if(e.key==='Escape' && $('#confirmModal').classList.contains('open')) closeConfirm(false);
});
window.addEventListener('orientationchange', ()=>{
  if(confirmResolve) requestAnimationFrame(()=>{
    $('#confirmOverlay').classList.add('open');
    $('#confirmModal').classList.add('open');
  });
});

function renderDrawer(){
  const s = state.settings;
  const body = $('#drawerBody');
  body.innerHTML = `
    <div class="set-group">
      <div class="set-row">
        <div class="set-label"><span class="set-title">${t('language')}</span><span class="set-desc">${t('languageDesc')}</span></div>
        <div class="set-control"><select class="dd" id="langSel">
          <option value="th" ${s.language==='th'?'selected':''}>\u0E44\u0E17\u0E22</option>
          <option value="en" ${s.language==='en'?'selected':''}>English</option>
        </select></div>
      </div>
      <div class="set-row">
        <div class="set-label"><span class="set-title">${t('theme')}</span><span class="set-desc">${t('themeDesc')}</span></div>
        <div class="set-control"><select class="dd" id="themeSel">
          <option value="white" ${s.theme==='white'?'selected':''}>${t('themeWhite')}</option>
          <option value="dark" ${s.theme==='dark'?'selected':''}>${t('themeDark')}</option>
          <option value="minimal-dark" ${s.theme==='minimal-dark'?'selected':''}>${t('themeMinimalDark')}</option>
        </select></div>
      </div>
      <div class="set-row">
        <div class="set-label"><span class="set-title">${t('timeFormat')}</span><span class="set-desc">${t('timeFormatDesc')}</span></div>
        <div class="set-control">
          <div class="segctl" id="fmtCtl">
            <button data-v="24" class="${s.timeFormat===24?'active':''}">24h</button>
            <button data-v="12" class="${s.timeFormat===12?'active':''}">12h</button>
          </div>
        </div>
      </div>
      <div class="set-row">
        <div class="set-label"><span class="set-title">${t('autoSave')}</span><span class="set-desc">${t('autoSaveDesc')}</span></div>
        <div class="set-control"><label class="switch"><input type="checkbox" id="autoSaveChk" ${s.autoSave!==false?'checked':''}><span class="slider"></span></label></div>
      </div>
    </div>
    <div class="set-group">
      <div class="set-group-title">${t('pricing')}</div>
      <div class="pricing-help">${t('pricingDesc')}</div>
      <div id="rulesList">${sortedRules().map(r=>ruleRowHtml(r)).join('')}</div>
      <button class="btn sm" id="addRuleBtn" style="margin-top:6px;">${ic('plus')}<span>${t('addRate')}</span></button>
    </div>
    <div class="set-group danger-zone">
      <div class="set-group-title">${t('dangerZone')}</div>
      <div class="set-row"><div class="set-label"><span class="set-title">${t('resetSettings')}</span><span class="set-desc">${t('resetSettingsDesc')}</span></div></div>
      <button class="btn" id="resetBtn">${t('resetSettings')}</button>
      <div class="set-row"><div class="set-label"><span class="set-title">${t('clearAll')}</span><span class="set-desc">${t('clearAllDesc')}</span></div></div>
      <button class="btn danger-txt" id="clearBtn">${t('clearAll')}</button>
    </div>
    <div class="credit">Made by @krakra_v</div>
  `;

  $('#langSel').addEventListener('change', e=>{ state.settings.language=e.target.value; persist(); renderDrawer(); renderAll(); });
  $('#themeSel').addEventListener('change', e=>{ state.settings.theme=e.target.value; persist(); applyTheme(); renderAll(); renderDrawer(); });
  $('#fmtCtl').querySelectorAll('button').forEach(b=>{
    b.addEventListener('click', ()=>{ state.settings.timeFormat = Number(b.getAttribute('data-v')); persist(); renderDrawer(); renderAll(); });
  });
  $('#autoSaveChk').addEventListener('change', e=>{ state.settings.autoSave = e.target.checked; persist(true); renderDrawer(); });
  $('#addRuleBtn').addEventListener('click', ()=>{
    state.settings.pricingRules.push({id:uid(), start:0, price:0});
    persist(); renderDrawer(); renderResults();
  });
  $('#resetBtn').addEventListener('click', async ()=>{
    const ok = await showConfirm({ title:t('confirmResetTitle'), message:t('confirmReset'), confirmLabel:t('confirm'), danger:false });
    if(ok){
      state.settings = defaultState().settings;
      persist(); applyTheme(); renderDrawer(); renderAll();
    }
  });
  $('#clearBtn').addEventListener('click', async ()=>{
    const ok = await showConfirm({ title:t('confirmClearTitle'), message:t('confirmClear'), confirmLabel:t('clearAll'), danger:true });
    if(ok){
      state.courts = [];
      expanded.clear();
      persist(); renderCourts(); renderResults();
    }
  });
  bindRuleRows();
}
function ruleRowHtml(r){
  return `<div class="rule-row" data-rule="${r.id}">
    ${timeFieldHtml('rule-start', r.start)}
    <input type="number" class="price-input" data-part="price" value="${r.price}" step="0.01" min="0">
    <button class="rule-del" data-role="del-rule" aria-label="${t('del')}">${ic('trash')}</button>
  </div>`;
}
function bindRuleRows(){
  document.querySelectorAll('.rule-row').forEach(row=>{
    const id = row.getAttribute('data-rule');
    const rule = state.settings.pricingRules.find(r=>r.id===id);
    bindTimeField(row.querySelector('[data-role="rule-start"]'), rule.start, m=>{
      rule.start = m; persist(); renderResults();
    });
    row.querySelector('[data-part="price"]').addEventListener('change', e=>{
      const v = parseFloat(e.target.value); rule.price = isNaN(v)?0:v; persist(); renderResults();
    });
    row.querySelector('[data-role="del-rule"]').addEventListener('click', ()=>{
      state.settings.pricingRules = state.settings.pricingRules.filter(r=>r.id!==id);
      persist(); renderDrawer(); renderResults();
    });
  });
}

/* ---------- init ---------- */
function addCourt(){
  const n = state.courts.length+1;
  state.courts.push({ id:uid(), name:t('courtNameDefault', n), start:1080, end:1140, players:[] });
  persist(); renderCourts(); renderResults();
}

$('#addCourtBtn').addEventListener('click', addCourt);
$('#modeBtn').addEventListener('click', ()=>{ state.activeMode = state.activeMode==='counter' ? 'split' : 'counter'; persist(); renderAll(); });
$('#settingsBtn').addEventListener('click', ()=>{ if($('#drawer').classList.contains('open')) closeDrawerFn(); else openDrawer(); });
$('#closeDrawer').addEventListener('click', closeDrawerFn);
$('#overlay').addEventListener('click', closeDrawerFn);

closeDrawerFn();
applyTheme();
renderAll();
})();
