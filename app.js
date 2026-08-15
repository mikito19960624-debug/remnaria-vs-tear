
(() => {
"use strict";

const C = {"rina":{"name":"レムナリア－リナ","side":"rem","kind":"monster","atk":1700,"def":1200,"img":"rina.jpg","role":"初動・突破"},"fia":{"name":"レムナリア－フィア","side":"rem","kind":"monster","atk":1400,"def":1800,"img":"fia.jpg","role":"魔法罠"},"ceres":{"name":"レムナリア－セレス","side":"rem","kind":"monster","atk":1200,"def":2000,"img":"ceres.jpg","role":"墓地"},"noel":{"name":"レムナリア－ノエル","side":"rem","kind":"monster","atk":1000,"def":1500,"img":"noel.jpg","role":"ターン0"},"record":{"name":"レムナリア・レコード","side":"rem","kind":"spell","img":"record.jpg","role":"初動"},"inherit":{"name":"レムナリア・インヘリット","side":"rem","kind":"spell","img":"inherit.jpg","role":"速攻融合"},"world":{"name":"レムナリア－継承世界","side":"rem","kind":"spell","img":"world.jpg","role":"フィールド"},"recall":{"name":"レムナリア・リコール","side":"rem","kind":"spell","img":"recall.jpg","role":"蘇生"},"chronicle":{"name":"レムナリア・クロニクル","side":"rem","kind":"spell","img":"chronicle.jpg","role":"長期戦"},"reject":{"name":"レムナリア・リジェクト","side":"rem","kind":"trap","img":"reject.jpg","role":"カウンター"},"resonance":{"name":"レムナリア・レゾナンス","side":"rem","kind":"trap","img":"resonance.jpg","role":"ターン0融合"},"awake_rina":{"name":"レムナリア・アウェイク－リナ","side":"rem","kind":"fusion","atk":2800,"def":2200,"img":"awake_rina.jpg","role":"突破"},"awake_fia":{"name":"レムナリア・アウェイク－フィア","side":"rem","kind":"fusion","atk":2500,"def":2800,"img":"awake_fia.jpg","role":"魔法罠制圧"},"awake_ceres":{"name":"レムナリア・アウェイク－セレス","side":"rem","kind":"fusion","atk":2400,"def":3000,"img":"awake_ceres.jpg","role":"墓地制圧"},"awake_noel":{"name":"レムナリア・アウェイク－ノエル","side":"rem","kind":"fusion","atk":2600,"def":2000,"img":"awake_noel.jpg","role":"EX制圧"},"alka":{"name":"レムナリア・アルカ","side":"rem","kind":"fusion","atk":3200,"def":3000,"img":"alka.jpg","role":"再融合"},"vares":{"name":"レムナリア・ヴァレス","side":"rem","kind":"fusion","atk":3500,"def":2500,"img":"vares.jpg","role":"攻撃・制圧"},"eterna":{"name":"レムナリア・エテルナ","side":"rem","kind":"fusion","atk":4000,"def":4000,"img":"eterna.jpg","role":"最終融合"},"ash":{"name":"灰流うらら","side":"generic","kind":"monster","atk":0,"def":1800,"role":"誘発"},"maxx":{"name":"増殖するG","side":"generic","kind":"monster","atk":500,"def":200,"role":"誘発"},"imperm":{"name":"無限泡影","side":"generic","kind":"trap","role":"誘発"},"called":{"name":"墓穴の指名者","side":"generic","kind":"spell","role":"汎用"},"crossout":{"name":"抹殺の指名者","side":"generic","kind":"spell","role":"汎用"},"talent":{"name":"三戦の才","side":"generic","kind":"spell","role":"汎用"},"droplet":{"name":"禁じられた一滴","side":"generic","kind":"spell","role":"汎用"},"reino":{"name":"ティアラメンツ・レイノハート","side":"tear","kind":"monster","atk":1500,"def":2100,"role":"初動"},"scheiren":{"name":"ティアラメンツ・シェイレーン","side":"tear","kind":"monster","atk":1800,"def":1300,"role":"展開・墓地融合"},"havnis":{"name":"ティアラメンツ・ハゥフニス","side":"tear","kind":"monster","atk":1600,"def":1000,"role":"ターン0"},"merrli":{"name":"ティアラメンツ・メイルゥ","side":"tear","kind":"monster","atk":800,"def":2000,"role":"墓地融合"},"kelbek":{"name":"古尖兵ケルベク","side":"tear","kind":"monster","atk":1500,"def":1800,"role":"5枚墓地肥やし"},"agido":{"name":"古衛兵アギド","side":"tear","kind":"monster","atk":1500,"def":1300,"role":"5枚墓地肥やし"},"keldo":{"name":"宿神像ケルドウ","side":"tear","kind":"monster","atk":1200,"def":1600,"role":"墓地戻し"},"mudora":{"name":"剣神官ムドラ","side":"tear","kind":"monster","atk":1500,"def":1800,"role":"墓地戻し"},"herald":{"name":"朱光の宣告者","side":"tear","kind":"monster","atk":300,"def":500,"role":"手札誘発"},"tear_maxx":{"name":"増殖するG","side":"tear","kind":"monster","atk":500,"def":200,"role":"手札誘発"},"perlereino":{"name":"壱世壊＝ペルレイノ","side":"tear","kind":"spell","role":"フィールド"},"scream":{"name":"壱世壊を劈く弦声","side":"tear","kind":"spell","role":"永続"},"tear_talent":{"name":"三戦の才","side":"tear","kind":"spell","role":"汎用"},"instant":{"name":"簡易融合","side":"tear","kind":"spell","role":"融合"},"terraforming":{"name":"テラ・フォーミング","side":"tear","kind":"spell","role":"サーチ"},"sulliek":{"name":"壱世壊に奏でる哀唱","side":"tear","kind":"trap","role":"無効"},"gravekeeper":{"name":"墓守の罠","side":"tear","kind":"trap","role":"永続"},"kit":{"name":"ティアラメンツ・キトカロス","side":"tear","kind":"fusion","atk":2300,"def":1200,"role":"エンジン"},"rulk":{"name":"ティアラメンツ・ルルカロス","side":"tear","kind":"fusion","atk":3000,"def":2500,"role":"妨害"},"kaleido":{"name":"ティアラメンツ・カレイドハート","side":"tear","kind":"fusion","atk":3000,"def":3000,"role":"除去"},"dragostapelia":{"name":"捕食植物ドラゴスタペリア","side":"tear","kind":"fusion","atk":2700,"def":1900,"role":"妨害"},"zeus":{"name":"天霆號アーゼウス","side":"tear","kind":"extra","atk":3000,"def":3000,"role":"EX"},"bagooska":{"name":"No.41 泥睡魔獣バグースカ","side":"tear","kind":"extra","atk":2100,"def":2000,"role":"EX"},"redoer":{"name":"クロノダイバー・リダン","side":"tear","kind":"extra","atk":2400,"def":2000,"role":"EX"},"dweller":{"name":"深淵に潜む者","side":"tear","kind":"extra","atk":1700,"def":1400,"role":"EX"},"borreload":{"name":"ヴァレルロード・ドラゴン","side":"tear","kind":"extra","atk":3000,"def":0,"role":"EX"},"elf":{"name":"スプライト・エルフ","side":"tear","kind":"extra","atk":1400,"def":0,"role":"EX"},"sprind":{"name":"スプライト・スプリンド","side":"tear","kind":"extra","atk":1400,"def":0,"role":"EX"},"dharc":{"name":"暗影の闇霊使いダルク","side":"tear","kind":"extra","atk":1850,"def":0,"role":"EX"},"aus":{"name":"崔嵬の地霊使いアウス","side":"tear","kind":"extra","atk":1850,"def":0,"role":"EX"},"free_ex1":{"name":"自由EX枠 1","side":"generic","kind":"extra","atk":0,"def":0,"role":"自由枠"},"free_ex2":{"name":"自由EX枠 2","side":"generic","kind":"extra","atk":0,"def":0,"role":"自由枠"},"free_ex3":{"name":"自由EX枠 3","side":"generic","kind":"extra","atk":0,"def":0,"role":"自由枠"}};
const DECKS = {"player":{"main":[["rina",3],["fia",3],["ceres",2],["noel",3],["record",3],["inherit",3],["world",3],["recall",1],["chronicle",1],["reject",1],["resonance",3],["ash",3],["maxx",3],["imperm",3],["called",2],["crossout",1],["talent",1],["droplet",1]],"extra":[["awake_rina",2],["awake_fia",2],["awake_ceres",2],["awake_noel",2],["alka",2],["vares",1],["eterna",1],["free_ex1",1],["free_ex2",1],["free_ex3",1]]},"cpu":{"main":[["reino",3],["scheiren",3],["havnis",3],["merrli",3],["kelbek",3],["agido",3],["keldo",3],["mudora",3],["herald",3],["tear_maxx",3],["perlereino",3],["scream",2],["tear_talent",2],["instant",1],["terraforming",1],["sulliek",1],["gravekeeper",1]],"extra":[["kit",2],["rulk",1],["kaleido",1],["dragostapelia",2],["zeus",1],["bagooska",1],["redoer",1],["dweller",1],["borreload",1],["elf",1],["sprind",1],["dharc",1],["aus",1]]}};

const HERO = ["rina","fia","ceres","noel"];
const AWAKE = ["awake_rina","awake_fia","awake_ceres","awake_noel"];
const REM = new Set([...HERO,...AWAKE,"record","inherit","world","recall","chronicle","reject","resonance","alka","vares","eterna"]);
const TEAR_GIRLS = ["scheiren","havnis","merrli"];
const ISHIZU_SHUFFLERS = ["keldo","mudora"];
const ISHIZU_MILLERS = ["kelbek","agido"];
const FAIRIES = ["kelbek","agido","keldo","mudora"];
const FUSION_MAP = {rina:"awake_rina",fia:"awake_fia",ceres:"awake_ceres",noel:"awake_noel"};

let uidSeq=1;
let game=null;
let choiceResolver=null;
let confirmResolver=null;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function makeCard(id, owner){
  return {uid:uidSeq++, id, owner, controller:owner, faceUp:false, set:false, fromExtra:false, fusionSummoned:false, metadata:{}};
}
function cardName(c){ return C[c.id]?.name || c.id; }
function atk(c){ return C[c.id]?.atk || 0; }
function isRem(c){ return REM.has(c.id); }
function isHero(c){ return HERO.includes(c.id); }
function isFusion(c){ return C[c.id]?.kind==="fusion"; }
function isTear(c){ return C[c.id]?.side==="tear"; }

class Duel {
  constructor(playerFirst=true){
    this.s = {
      turn:1, turnPlayer:playerFirst?"player":"cpu", phase:"MAIN1",
      lp:{player:8000,cpu:8000}, normal:{player:1,cpu:1},
      zones:{
        player:{deck:[],hand:[],field:[],grave:[],banished:[],extra:[]},
        cpu:{deck:[],hand:[],field:[],grave:[],banished:[],extra:[]},
      },
      once:{player:{},cpu:{}}, attacked:{player:{},cpu:{}},
      logs:[], winner:null, busy:false, playerFirst,
      stats:{playerWins:0,cpuWins:0},
    };
    this.build("player",DECKS.player);
    this.build("cpu",DECKS.cpu);
    this.draw("player",5,false);
    this.draw("cpu",5,false);
    this.log(playerFirst?"自分の先攻でデュエル開始。":"CPUの先攻でデュエル開始。");
    this.render();
    if(!playerFirst) setTimeout(()=>this.cpuTurn(),450);
  }

  build(side,deck){
    const z=this.s.zones[side];
    for(const [id,n] of deck.main) for(let i=0;i<n;i++) z.deck.push(makeCard(id,side));
    for(const [id,n] of deck.extra) for(let i=0;i<n;i++) z.extra.push(makeCard(id,side));
    this.shuffle(z.deck);
  }
  shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} }
  opp(side){return side==="player"?"cpu":"player";}
  log(t){
    this.s.logs.unshift(t);
    if(this.s.logs.length>180)this.s.logs.pop();
    this.renderLog();
  }
  async step(text="",ms=650){
    if(text){
      const el=document.querySelector("#actionBanner");
      if(el){el.textContent=text;el.classList.add("show");}
    }
    this.render();
    await sleep(ms);
    if(text){
      const el=document.querySelector("#actionBanner");
      if(el)el.classList.remove("show");
    }
  }
  zoneOf(uid){
    for(const side of ["player","cpu"]) for(const zone of ["deck","hand","field","grave","banished","extra"]){
      const i=this.s.zones[side][zone].findIndex(c=>c.uid===uid);
      if(i>=0)return {side,zone,index:i};
    }
    return null;
  }
  get(uid){const l=this.zoneOf(uid);return l?this.s.zones[l.side][l.zone][l.index]:null;}
  move(uid,toSide,toZone,opts={}){
    const l=this.zoneOf(uid); if(!l)return null;
    const [c]=this.s.zones[l.side][l.zone].splice(l.index,1);
    c.controller=toSide;
    if("faceUp" in opts)c.faceUp=opts.faceUp;
    if("set" in opts)c.set=opts.set;
    if("fromExtra" in opts)c.fromExtra=opts.fromExtra;
    if("fusionSummoned" in opts)c.fusionSummoned=opts.fusionSummoned;
    this.s.zones[toSide][toZone].push(c);
    return c;
  }
  shuffleToDeck(uid, side=null){
    const l=this.zoneOf(uid); if(!l)return;
    const target=side||l.side;
    const c=this.move(uid,target,"deck",{faceUp:false,set:false});
    this.shuffle(this.s.zones[target].deck);
    return c;
  }
  draw(side,n=1,doLog=true){
    const z=this.s.zones[side];
    for(let i=0;i<n;i++){
      if(!z.deck.length){this.win(this.opp(side),"デッキ切れ");return;}
      z.hand.push(z.deck.shift());
    }
    if(doLog)this.log(`${side==="player"?"自分":"CPU"}が${n}枚ドロー。`);
  }
  used(side,key){return !!this.s.once[side][key];}
  mark(side,key){this.s.once[side][key]=true;}
  win(side,reason){
    if(this.s.winner)return;
    this.s.winner=side;
    this.log(`${side==="player"?"自分":"CPU"}の勝利：${reason}`);
    this.render();
  }
  damage(side,n){
    this.s.lp[side]=Math.max(0,this.s.lp[side]-n);
    if(this.s.lp[side]<=0)this.win(this.opp(side),"LP 0");
  }

  async activate(side,label,meta,effect){
    if(this.s.winner)return false;
    this.log(`${side==="player"?"自分":"CPU"}：${label} 発動`);
    let negated=false;
    if(side==="player") negated=await this.cpuRespond({label,meta});
    else negated=await this.playerRespond({label,meta});
    if(negated){this.log(`${label} は無効。`);this.render();return false;}
    await effect();
    if(side==="cpu" && meta.spellTrap) await this.worldSpellReaction();
    this.log(`${label} 解決。`);
    this.render();
    return true;
  }

  async playerRespond(link){
    const side="player", z=this.s.zones.player;
    const pool=[...z.grave,...z.banished].filter(isRem);
    const opts=[];
    const eterna=z.field.find(c=>c.id==="eterna");
    const vares=z.field.find(c=>c.id==="vares");
    const alka=z.field.find(c=>c.id==="alka");
    const fia=z.field.find(c=>c.id==="awake_fia");
    const ceres=z.field.find(c=>c.id==="awake_ceres");
    const noel=z.field.find(c=>c.id==="awake_noel");
    const reject=z.field.find(c=>c.id==="reject" && c.set);

    if(eterna && pool.length) opts.push({label:"エテルナ③：無効＋除外",kind:"negate",cost:true});
    if(eterna && !this.used(side,"eterna4")) opts.push({label:"エテルナ④：手札・EXから1枚除外",kind:"eterna4"});
    if(vares && pool.length) opts.push({label:"ヴァレス②：無効＋除外",kind:"negate",cost:true});
    if(alka && pool.length && !this.used(side,"alkaNegate") && link.meta.monsterEffect && (alka.metadata.materialTypes||[]).includes("monster"))
      opts.push({label:"アルカ②：モンスター効果を無効",kind:"alkaNegate",cost:false});
    if(fia && link.meta.spellTrap && pool.length) opts.push({label:"アウェイク－フィア②：無効＋除外",kind:"negate",cost:true});
    if(ceres && link.meta.graveEffect && pool.length) opts.push({label:"アウェイク－セレス②：無効＋除外",kind:"negate",cost:true});
    if(noel && link.meta.extraSummonEffect && pool.length) opts.push({label:"アウェイク－ノエル②：無効",kind:"negate",cost:true});
    if(reject) opts.push({label:"レムナリア・リジェクト：無効＋除外",kind:"reject"});
    for(const h of z.field.filter(isHero)){
      if(this.validHeroMaterial(h,"cpu")) opts.push({label:`${cardName(h)}②：継承融合`,kind:"heroFuse",uid:h.uid});
    }
    if(!opts.length)return false;
    opts.push({label:"何も発動しない",kind:"pass"});
    const pick=await chooseOption(`相手：${link.label}`,opts.map(x=>x.label));
    const o=opts[pick];
    if(!o || o.kind==="pass")return false;
    if(o.kind==="negate"){
      const c=await chooseCard("デッキへ戻すレムナリア",pool);
      if(c)this.shuffleToDeck(c.uid,"player");
      return true;
    }
    if(o.kind==="alkaNegate"){ this.mark("player","alkaNegate"); return true; }
    if(o.kind==="reject"){
      this.move(reject.uid,"player","grave");
      return true;
    }
    if(o.kind==="eterna4"){
      this.mark("player","eterna4");
      const candidates=[...this.s.zones.cpu.hand,...this.s.zones.cpu.extra];
      if(candidates.length){
        const c=await chooseCard("エテルナ④：相手の手札・EXから除外",candidates,true);
        if(c)this.move(c.uid,"cpu","banished");
      }
      return false;
    }
    if(o.kind==="heroFuse"){
      await this.heroFusion(this.get(o.uid),"player",true);
      return false;
    }
    return false;
  }

  async cpuRespond(link){
    const z=this.s.zones.cpu;
    // Rulkallos first.
    const rulk=z.field.find(c=>c.id==="rulk");
    if(rulk && !this.used("cpu","rulk2") && link.meta.specialSummonEffect){
      this.mark("cpu","rulk2");
      const tearCost=[...z.hand,...z.field].find(c=>isTear(c)&&c.uid!==rulk.uid);
      if(tearCost)this.move(tearCost.uid,"cpu","grave");
      this.log("CPU：ルルカロス②で無効。");
      return true;
    }
    // Sulliek.
    const sulliek=z.field.find(c=>c.id==="sulliek"&&c.set);
    const tear=z.field.find(c=>["reino","scheiren","havnis","merrli","kit","rulk"].includes(c.id));
    if(sulliek && tear && !this.used("cpu","sulliek1") && link.meta.monsterEffect){
      this.mark("cpu","sulliek1");
      this.move(tear.uid,"cpu","grave");
      this.log("CPU：サリークでモンスター効果を無効。");
      return true;
    }
    // Herald.
    const herald=z.hand.find(c=>c.id==="herald");
    const fairy=z.hand.find(c=>c.uid!==herald?.uid && FAIRIES.includes(c.id));
    if(herald&&fairy&&!this.used("cpu","herald")&&(link.meta.monsterEffect||link.meta.highImpact)){
      this.mark("cpu","herald");
      this.move(herald.uid,"cpu","grave");this.move(fairy.uid,"cpu","grave");
      this.log("CPU：朱光の宣告者で無効。");
      await this.onSentByEffect(fairy,"cpu");
      return true;
    }
    // Ishizu shuffler against grave-based effects.
    if(link.meta.usesGrave){
      const sh=z.grave.find(c=>ISHIZU_SHUFFLERS.includes(c.id));
      if(sh){
        this.move(sh.uid,"cpu","banished");
        const targets=this.s.zones.player.grave.filter(isRem).slice(0,3);
        for(const t of targets)this.shuffleToDeck(t.uid,"player");
        this.log(`CPU：${cardName(sh)}で墓地リソースを戻した。`);
      }
    }
    // Havnis chains but does not negate.
    const hav=z.hand.find(c=>c.id==="havnis");
    if(hav&&!this.used("cpu","havnis1")&&link.meta.monsterEffect){
      this.mark("cpu","havnis1");
      this.move(hav.uid,"cpu","field",{faceUp:true});
      this.log("CPU：ハゥフニスをチェーンして特殊召喚。");
      await this.mill("cpu",3);
    }
    return false;
  }

  async startPlayerCard(uid){
    if(this.s.busy||this.s.turnPlayer!=="player")return;
    const c=this.get(uid), l=this.zoneOf(uid);if(!c||!l)return;
    const actions=this.playerActions(c,l.zone);
    if(!actions.length)return;
    const idx=await chooseOption(cardName(c),actions.map(a=>a.label));
    if(idx<0)return;
    await actions[idx].go();
    this.render();
  }

  playerActions(c,zone){
    const out=[];
    if(zone==="hand"){
      if(isHero(c)&&this.s.phase==="MAIN1"&&this.s.normal.player>0)out.push({label:"通常召喚",go:()=>this.normalHero(c)});
      if(isHero(c)&&this.validHeroMaterial(c,"cpu"))out.push({label:"継承融合",go:()=>this.heroFusion(c,"player")});
      if(c.id==="record")out.push({label:"レコード① 発動",go:()=>this.record(c)});
      if(c.id==="world"&&!this.s.zones.player.field.some(x=>x.id==="world"))out.push({label:"継承世界 発動",go:()=>this.world(c)});
      if(c.id==="inherit")out.push({label:"インヘリット① 発動",go:()=>this.inherit(c)});
      if(c.id==="recall")out.push({label:"リコール① 発動",go:()=>this.recall(c)});
      if(c.id==="chronicle"&&!this.s.zones.player.field.some(x=>x.id==="chronicle"))out.push({label:"クロニクル 発動",go:()=>this.chronicle(c)});
      if(c.id==="reject")out.push({label:"セット",go:async()=>{this.move(c.uid,"player","field",{set:true});this.log("リジェクトをセット。");}});
      if(c.id==="resonance"&&this.s.zones.cpu.field.length&&!this.s.zones.player.field.length)out.push({label:"レゾナンスを手札発動",go:()=>this.resonance(c)});
      out.push({label:"墓地へ送る",go:async()=>this.move(c.uid,"player","grave")});
    }
    if(zone==="field"){
      if(isHero(c)&&this.validHeroMaterial(c,"cpu"))out.push({label:"継承融合",go:()=>this.heroFusion(c,"player")});
      if(c.id==="awake_rina"&&this.s.zones.cpu.field.length)out.push({label:"② 相手カードを継承して次の融合",go:()=>this.awakeRina(c)});
      if(c.id==="awake_ceres"&&this.s.zones.player.banished.some(isHero))out.push({label:"③ 除外レムナリアを帰還",go:()=>this.awakeCeres(c)});
      if(c.id==="alka")out.push({label:"① 継承回収",go:()=>this.alkaOne(c)});
      if(c.id==="vares")out.push({label:"② 全体攻撃を解放",go:async()=>{c.metadata.attackAll=true;this.log("ヴァレス：全体攻撃を解放。");}});
      if(c.id==="eterna")out.push({label:"① 三領域をデッキへ戻す",go:()=>this.eternaOne(c)});
      if(this.s.phase==="BATTLE" && this.canAttack(c))out.push({label:"攻撃",go:()=>this.playerAttack(c)});
      out.push({label:"墓地へ送る",go:async()=>this.move(c.uid,"player","grave")});
    }
    if(zone==="grave"&&c.id==="alka")out.push({label:"③ 墓地から再融合",go:()=>this.alkaRevive(c)});
    return out;
  }

  async normalHero(c){
    this.s.normal.player--;
    this.move(c.uid,"player","field",{faceUp:true});
    this.log(`${cardName(c)}を通常召喚。`);
    await this.heroOnSummon(c);
  }

  async heroOnSummon(c){
    if(!isHero(c)||c.id==="noel")return;
    const key=c.id+"1"; if(this.used("player",key))return;
    await this.activate("player",`${cardName(c)}①`,{monsterEffect:true,highImpact:true},async()=>{
      this.mark("player",key);
      if(c.id==="ceres"){
        const targets=this.s.zones.player.deck.filter(isRem);
        const t=await chooseCard("墓地へ送るレムナリア",targets); if(t)this.move(t.uid,"player","grave");
      } else {
        const targets=c.id==="fia"
          ? this.s.zones.player.deck.filter(x=>["record","inherit","world","recall","chronicle","reject","resonance"].includes(x.id))
          : this.s.zones.player.deck.filter(isRem);
        const t=await chooseCard("手札に加えるカード",targets); if(t)this.move(t.uid,"player","hand");
      }
    });
  }

  secondMaterialPool(hero,side){
    const opp=this.opp(side);
    const bothGraves=[...this.s.zones.player.grave,...this.s.zones.cpu.grave];
    if(hero.id==="noel")return this.s.zones[opp].field.filter(c=>c.fromExtra);
    if(hero.id==="ceres")return bothGraves.filter(c=>c.uid!==hero.uid);
    if(hero.id==="rina")return [...this.s.zones[opp].field,...bothGraves].filter(c=>c.uid!==hero.uid && ["monster","fusion","extra"].includes(C[c.id]?.kind));
    return [...this.s.zones[opp].field,...bothGraves].filter(c=>c.uid!==hero.uid);
  }
  validHeroMaterial(hero,oppSide){ return this.secondMaterialPool(hero,hero.controller||"player").length>0; }

  async heroFusion(hero,side,asResponse=false){
    const opp=this.opp(side);
    let pool=this.secondMaterialPool(hero,side);
    if(!pool.length)return;
    const mat=await chooseCard("継承する融合素材",pool,true);if(!mat)return;
    const ex=this.s.zones[side].extra.find(c=>c.id===FUSION_MAP[hero.id]);if(!ex)return;
    const hloc=this.zoneOf(hero.uid), mloc=this.zoneOf(mat.uid);if(!hloc||!mloc)return;
    const meta={monsterEffect:true,specialSummonEffect:true,highImpact:true,usesGrave:mloc.zone==="grave"};
    await this.activate(side,`${cardName(hero)}② 継承融合`,meta,async()=>{
      this.move(hero.uid,hloc.side,"banished");
      this.move(mat.uid,mloc.side,"banished");
      ex.metadata.materialTypes=[C[hero.id].kind,C[mat.id]?.kind||"monster"];
      ex.metadata.opponentMaterial=mat.owner!==side;
      this.move(ex.uid,side,"field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      this.log(`融合召喚：${cardName(ex)}`);
      await this.onFusionSummoned(ex,side,hero,mat);
      await this.materialTrigger(hero,side);
    });
  }

  async materialTrigger(hero,side){
    const z=this.s.zones[side], key=hero.id+"3"; if(this.used(side,key))return;
    this.mark(side,key);
    if(hero.id==="rina"){
      const t=z.deck.find(c=>isHero(c)&&c.id!=="rina");if(t){this.move(t.uid,side,"field",{faceUp:true});await this.heroOnSummon(t);}
    } else if(hero.id==="fia"){
      const p=[...z.grave,...z.banished].find(c=>["record","inherit","world","recall","chronicle","reject","resonance"].includes(c.id));if(p)this.move(p.uid,side,"hand");
    } else if(hero.id==="ceres"){
      const all=[...this.s.zones.player.grave,...this.s.zones.cpu.grave];
      if(all.length){const t=await chooseCard("セレス③：除外する墓地カード",all,true);if(t){const l=this.zoneOf(t.uid);this.move(t.uid,l.side,"banished");}}
      this.draw(side,1);
    } else if(hero.id==="noel"){
      const top=z.deck.splice(0,3), rems=top.filter(isRem);
      if(rems.length){const t=await chooseCard("ノエル③：手札に加えるカード",rems);z.hand.push(t);top.splice(top.findIndex(x=>x.uid===t.uid),1);}
      z.grave.push(...top);
    }
  }

  async onFusionSummoned(ex,side,hero,mat){
    if(side==="player"){
      if(ex.id==="awake_noel" && mat.owner==="cpu"){
        const options=this.s.zones.cpu.extra.filter(c=>["fusion","extra"].includes(C[c.id]?.kind));
        if(options.length){
          const t=await chooseCard("アウェイク－ノエル③：相手EXから除外",options,true);
          if(t)this.move(t.uid,"cpu","banished");
        }
      }
    } else {
      await this.checkPlayerTurnZero(ex);
    }
  }

  async record(c){
    await this.activate("player","レムナリア・レコード①",{spellTrap:true,highImpact:true},async()=>{
      this.move(c.uid,"player","grave");
      const t=await chooseCard("サーチするレムナリアモンスター",this.s.zones.player.deck.filter(isHero));if(t)this.move(t.uid,"player","hand");
      if(this.s.zones.player.hand.length && await confirmUI("手札を1枚墓地へ送る？")){
        const d=await chooseCard("墓地へ送る手札",this.s.zones.player.hand);if(d)this.move(d.uid,"player","grave");
      }
    });
  }
  async world(c){
    await this.activate("player","レムナリア－継承世界",{spellTrap:true,highImpact:true},async()=>{
      this.move(c.uid,"player","field",{faceUp:true});
      const t=await chooseCard("発動時サーチ",this.s.zones.player.deck.filter(isRem));if(t)this.move(t.uid,"player","hand");
    });
  }
  async inherit(c){
    const heroes=[...this.s.zones.player.hand,...this.s.zones.player.field].filter(isHero);
    if(!heroes.length)return;
    const h=await chooseCard("自分のレムナリア素材",heroes);if(!h)return;
    let pool=this.secondMaterialPool(h,"player").filter(x=>x.uid!==h.uid);
    if(!pool.length)return;
    const m=await chooseCard("継承するカード",pool,true);if(!m)return;
    await this.activate("player","レムナリア・インヘリット①",{spellTrap:true,specialSummonEffect:true,highImpact:true,usesGrave:this.zoneOf(m.uid)?.zone==="grave"},async()=>{
      this.move(c.uid,"player","grave");
      const ex=this.s.zones.player.extra.find(x=>x.id===FUSION_MAP[h.id]);if(!ex)return;
      const hl=this.zoneOf(h.uid),ml=this.zoneOf(m.uid);this.move(h.uid,hl.side,"banished");this.move(m.uid,ml.side,"banished");
      this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      await this.materialTrigger(h,"player");
    });
  }
  async recall(c){
    const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(isHero);if(!pool.length)return;
    const t=await chooseCard("特殊召喚するレムナリア",pool);if(!t)return;
    await this.activate("player","レムナリア・リコール①",{spellTrap:true,specialSummonEffect:true,fromDeckOrGraveSpecial:true,usesGrave:true},async()=>{
      this.move(c.uid,"player","grave");
      const l=this.zoneOf(t.uid);this.move(t.uid,"player","field",{faceUp:true});
      await this.heroOnSummon(t);
    });
  }
  async chronicle(c){
    this.move(c.uid,"player","field",{faceUp:true});
    const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(isRem);
    const picks=await chooseMany("クロニクル：デッキへ戻す（最大3）",pool,3);if(!picks.length)return;
    for(const p of picks)this.shuffleToDeck(p.uid,"player");
    this.draw("player",1);
    if(picks.length>=2){const t=this.s.zones.player.deck.find(isRem);if(t)this.move(t.uid,"player","grave");}
    if(picks.length>=3){const h=[...this.s.zones.player.grave,...this.s.zones.player.banished].find(isHero);if(h){const l=this.zoneOf(h.uid);this.move(h.uid,"player","field",{faceUp:true});}}
  }
  async resonance(c){
    const validHeroes=this.s.zones.player.deck.filter(h=>{
      if(h.id==="rina")return this.s.zones.cpu.field.some(x=>["monster","fusion","extra"].includes(C[x.id]?.kind));
      if(h.id==="noel")return this.s.zones.cpu.field.some(x=>x.fromExtra);
      return this.s.zones.cpu.field.length>0;
    });
    const h=await chooseCard("デッキから特殊召喚",validHeroes);if(!h)return;
    let matPool=this.s.zones.cpu.field;
    if(h.id==="rina")matPool=matPool.filter(x=>["monster","fusion","extra"].includes(C[x.id]?.kind));
    if(h.id==="noel")matPool=matPool.filter(x=>x.fromExtra);
    const m=await chooseCard("相手フィールドの素材",matPool,true);if(!m)return;
    await this.activate("player","レムナリア・レゾナンス",{spellTrap:true,specialSummonEffect:true,highImpact:true},async()=>{
      this.move(c.uid,"player","grave");
      this.move(h.uid,"player","field",{faceUp:true});
      const ex=this.s.zones.player.extra.find(x=>x.id===FUSION_MAP[h.id]);if(!ex)return;
      this.move(h.uid,"player","banished");this.move(m.uid,"cpu","banished");
      this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      await this.materialTrigger(h,"player");
    });
  }

  async awakeRina(c){
    const target=await chooseCard("除外する相手表側カード",this.s.zones.cpu.field,true);if(!target)return;
    const hero=await chooseCard("追加素材のレムナリア",this.s.zones.player.hand.concat(this.s.zones.player.field).filter(x=>isHero(x)&&x.uid!==c.uid));if(!hero)return;
    this.move(target.uid,"cpu","banished");const hl=this.zoneOf(hero.uid);this.move(hero.uid,hl.side,"banished");
    const choices=this.s.zones.player.extra.filter(x=>AWAKE.includes(x.id)&&x.id!==c.id);
    if(choices.length){const ex=await chooseCard("次の融合体",choices);if(ex){this.move(c.uid,"player","banished");this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});}}
  }
  async awakeCeres(c){
    const h=await chooseCard("帰還させるレムナリア",this.s.zones.player.banished.filter(isHero));if(h)this.move(h.uid,"player","field",{faceUp:true});
  }

  async canUpper(target){
    const z=this.s.zones.player;
    if(target==="eterna")return z.field.filter(isFusion).length>=2&&z.field.some(isHero)&&z.extra.some(c=>c.id==="eterna");
    return z.field.some(c=>AWAKE.includes(c.id))&&z.field.some(isHero)&&z.extra.some(c=>c.id===target);
  }
  async upper(target){
    const z=this.s.zones.player;if(!(await this.canUpper(target)))return;
    if(target==="eterna"){
      const fs=z.field.filter(isFusion);const f1=await chooseCard("融合体1体目",fs);if(!f1)return;
      const f2=await chooseCard("融合体2体目",fs.filter(x=>x.uid!==f1.uid));if(!f2)return;
      const h=await chooseCard("レムナリアモンスター",z.field.filter(isHero));if(!h)return;
      await this.activate("player","レムナリア・エテルナ 融合召喚",{specialSummonEffect:true,highImpact:true},async()=>{
        [f1,f2,h].forEach(x=>this.move(x.uid,"player","banished"));
        const ex=z.extra.find(x=>x.id==="eterna");this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
        await this.eternaOne(ex);
      });
    }else{
      const f=await chooseCard("アウェイク素材",z.field.filter(x=>AWAKE.includes(x.id)));if(!f)return;
      const h=await chooseCard("下級レムナリア",z.field.filter(isHero));if(!h)return;
      await this.activate("player",`${C[target].name} 融合召喚`,{specialSummonEffect:true,highImpact:true},async()=>{
        this.move(f.uid,"player","banished");this.move(h.uid,"player","banished");
        const ex=z.extra.find(x=>x.id===target);ex.metadata.materialTypes=["monster","monster"];
        this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
        if(target==="alka")await this.alkaOne(ex);
        if(target==="vares")await this.varesOne(ex);
      });
    }
  }

  async alkaOne(c){
    const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(x=>isRem(x)&&x.uid!==c.uid);
    if(pool.length){const p=await chooseCard("アルカ①：回収",pool);if(p)this.move(p.uid,"player","hand");}
    const op=[...this.s.zones.cpu.grave,...this.s.zones.cpu.banished];
    if(op.length&&await confirmUI("相手の墓地・除外を1枚デッキへ戻す？")){const p=await chooseCard("戻すカード",op,true);if(p)this.shuffleToDeck(p.uid,"cpu");}
  }
  async alkaRevive(c){
    const fus=[...this.s.zones.player.field,...this.s.zones.player.grave].filter(x=>isFusion(x)&&x.uid!==c.uid);
    if(!fus.length)return;const f=await chooseCard("レムナリア融合体",fus);if(!f)return;
    const pool=[...this.s.zones.player.field,...this.s.zones.player.grave,...this.s.zones.cpu.field,...this.s.zones.cpu.grave].filter(x=>x.uid!==c.uid&&x.uid!==f.uid);
    if(!pool.length)return;const m=await chooseCard("もう1枚の素材",pool,true);if(!m)return;
    await this.activate("player","アルカ③ 再融合",{monsterEffect:true,specialSummonEffect:true,usesGrave:true,highImpact:true},async()=>{
      const fl=this.zoneOf(f.uid),ml=this.zoneOf(m.uid);this.move(f.uid,fl.side,"banished");this.move(m.uid,ml.side,"banished");
      this.move(c.uid,"player","field",{faceUp:true,fusionSummoned:true});
      c.metadata.materialTypes=["monster",C[m.id]?.kind||"monster"];
      await this.alkaOne(c);
    });
  }
  async varesOne(c){
    const all=[...this.s.zones.player.grave,...this.s.zones.player.banished,...this.s.zones.cpu.grave,...this.s.zones.cpu.banished];
    const picks=await chooseMany("ヴァレス①：デッキへ戻す（最大3）",all,3);
    const types=new Set();
    for(const p of picks){types.add(C[p.id]?.kind||"monster");const l=this.zoneOf(p.uid);this.shuffleToDeck(p.uid,l.side);}
    if(types.has("monster")&&this.s.zones.cpu.field.length){const t=await chooseCard("相手モンスターを除外",this.s.zones.cpu.field.filter(x=>C[x.id]?.kind==="monster"||C[x.id]?.kind==="fusion"),true);if(t)this.move(t.uid,"cpu","banished");}
    if(types.has("spell")&&this.s.zones.cpu.field.some(x=>C[x.id]?.kind==="spell"||C[x.id]?.kind==="trap")){const t=await chooseCard("相手魔法・罠を除外",this.s.zones.cpu.field.filter(x=>["spell","trap"].includes(C[x.id]?.kind)),true);if(t)this.move(t.uid,"cpu","banished");}
    if(types.has("trap")&&this.s.zones.cpu.hand.length){const t=this.s.zones.cpu.hand[Math.floor(Math.random()*this.s.zones.cpu.hand.length)];this.move(t.uid,"cpu","banished");}
  }
  async eternaOne(c){
    for(const zone of ["field","grave","banished"]){
      const pool=this.s.zones.cpu[zone];if(pool.length){const t=await chooseCard(`エテルナ①：相手${zone}から戻す`,pool,true);if(t)this.shuffleToDeck(t.uid,"cpu");}
    }
  }

  async checkPlayerTurnZero(cpuCard){
    if(cpuCard.fromExtra){
      const noel=this.s.zones.player.hand.find(c=>c.id==="noel");
      if(noel&&!this.used("player","noel1")&&await confirmUI("ノエル①を発動する？")){
        this.mark("player","noel1");this.move(noel.uid,"player","field",{faceUp:true});
        await this.heroFusion(noel,"player",true);
      }
    }
    const res=this.s.zones.player.hand.find(c=>c.id==="resonance");
    if(res&&this.s.zones.cpu.field.length&&!this.s.zones.player.field.length&&await confirmUI("レゾナンスを手札から発動する？"))await this.resonance(res);
  }

  async worldSummonReaction(){
    const w=this.s.zones.player.field.find(c=>c.id==="world");
    if(!w||this.used("player","world2"))return;
    this.mark("player","world2");
    const targets=this.s.zones.player.deck.filter(isRem);
    if(targets.length){
      const t=await chooseCard("継承世界②：墓地へ送るレムナリア",targets);
      if(t)this.move(t.uid,"player","grave");
    }
  }
  async worldSpellReaction(){
    const w=this.s.zones.player.field.find(c=>c.id==="world");
    if(!w||this.used("player","world3"))return;
    const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(isRem);
    if(!pool.length)return;
    this.mark("player","world3");
    const t=await chooseCard("継承世界③：回収するレムナリア",pool);
    if(t)this.move(t.uid,"player","hand");
  }

  async cpuTurn(){
    if(this.s.winner||this.s.busy)return;
    this.s.busy=true;this.render();
    if(this.s.turnPlayer!=="cpu"){this.s.busy=false;return;}
    this.log("CPUターン開始。");
    await sleep(300);
    await this.cpuIshizuShuffle();
    await this.cpuPerlereino();
    await this.cpuReino();
    await this.cpuScheiren();
    await this.cpuProcessTearTriggers();
    await this.cpuKitLine();
    await this.cpuProcessTearTriggers();
    await this.cpuIshizuShuffle();
    await this.cpuSetBackrow();
    this.s.phase="BATTLE";this.render();
    await sleep(250);
    await this.cpuBattle();
    if(!this.s.winner){
      this.s.phase="END";await sleep(200);this.nextTurn();
    }
    this.s.busy=false;this.render();
  }

  async cpuPerlereino(){
    const z=this.s.zones.cpu;
    let p=z.hand.find(c=>c.id==="perlereino");
    if(!p){
      const terra=z.hand.find(c=>c.id==="terraforming");
      if(terra){
        this.move(terra.uid,"cpu","grave");
        p=z.deck.find(c=>c.id==="perlereino");if(p)this.move(p.uid,"cpu","hand");
      }
    }
    if(!p||z.field.some(c=>c.id==="perlereino"))return;
    await this.activate("cpu","壱世壊＝ペルレイノ",{spellTrap:true,highImpact:true},async()=>{
      this.move(p.uid,"cpu","field",{faceUp:true});
      const t=z.deck.find(c=>c.id==="reino")||z.deck.find(c=>TEAR_GIRLS.includes(c.id));if(t)this.move(t.uid,"cpu","hand");
    });
  }

  async cpuReino(){
    const z=this.s.zones.cpu,r=z.hand.find(c=>c.id==="reino");if(!r||this.s.normal.cpu<=0)return;
    this.s.normal.cpu--;this.move(r.uid,"cpu","field",{faceUp:true});
    await this.worldSummonReaction(); await this.checkPlayerTurnZero(r);
    await this.activate("cpu","レイノハート①",{monsterEffect:true,highImpact:true},async()=>{
      const t=z.deck.find(c=>c.id==="merrli")||z.deck.find(c=>TEAR_GIRLS.includes(c.id));if(t){this.move(t.uid,"cpu","grave");await this.onSentByEffect(t,"cpu");}
    });
  }

  async cpuScheiren(){
    const z=this.s.zones.cpu,s=z.hand.find(c=>c.id==="scheiren");if(!s)return;
    const d=z.hand.find(c=>c.uid!==s.uid&&c.id!=="perlereino");if(!d)return;
    this.move(d.uid,"cpu","grave");await this.onSentByEffect(d,"cpu");
    this.move(s.uid,"cpu","field",{faceUp:true});
    await this.worldSummonReaction(); await this.checkPlayerTurnZero(s);
    await this.mill("cpu",3);
  }

  async mill(side,n){
    const z=this.s.zones[side], moved=[];
    for(let i=0;i<n&&z.deck.length;i++){const c=z.deck.shift();z.grave.push(c);moved.push(c);this.log(`${cardName(c)}が墓地へ。`);}
    for(const c of moved)await this.onSentByEffect(c,side);
  }

  async onSentByEffect(c,side){
    if(TEAR_GIRLS.includes(c.id)&&!this.used(side,c.id+"fusion"))c.metadata.pendingFusion=true;
    if(ISHIZU_MILLERS.includes(c.id)&&!this.used(side,c.id+"mill")){
      this.mark(side,c.id+"mill");await this.mill(side,5);await this.mill(this.opp(side),5);
    }
    if(c.id==="kit"&&!this.used(side,"kit3")){this.mark(side,"kit3");await this.mill(side,5);}
  }

  async cpuProcessTearTriggers(){
    const z=this.s.zones.cpu;
    let pending=z.grave.find(c=>TEAR_GIRLS.includes(c.id)&&c.metadata.pendingFusion);
    let guard=0;
    while(pending&&guard++<4){
      pending.metadata.pendingFusion=false;this.mark("cpu",pending.id+"fusion");
      await this.cpuTearFusion(pending);
      pending=z.grave.find(c=>TEAR_GIRLS.includes(c.id)&&c.metadata.pendingFusion);
    }
  }

  async cpuTearFusion(source){
    const z=this.s.zones.cpu, pz=this.s.zones.player;
    const kitGrave=z.grave.find(c=>c.id==="kit");
    let target=null;
    if(kitGrave && pz.field.some(c=>["alka","vares"].includes(c.id)) && z.extra.some(c=>c.id==="kaleido"))target="kaleido";
    else if(kitGrave&&z.extra.some(c=>c.id==="rulk"))target="rulk";
    else if(z.extra.some(c=>c.id==="kit"))target="kit";
    else if(z.extra.some(c=>c.id==="dragostapelia"))target="dragostapelia";
    if(!target)return;

    let second=null;
    if(target==="kit")second=z.grave.find(c=>c.uid!==source.uid&&["reino",...TEAR_GIRLS].includes(c.id));
    else if(["rulk","kaleido"].includes(target))second=kitGrave;
    else second=z.grave.find(c=>c.uid!==source.uid&&isTear(c));
    if(!second)return;
    const ex=z.extra.find(c=>c.id===target);if(!ex)return;
    await this.activate("cpu",`${cardName(source)} 墓地融合`,{graveEffect:true,specialSummonEffect:true,highImpact:true},async()=>{
      this.shuffleToDeck(source.uid,"cpu");this.shuffleToDeck(second.uid,"cpu");
      this.move(ex.uid,"cpu","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      this.log(`CPU融合召喚：${cardName(ex)}`);
      await this.worldSummonReaction();
      await this.cpuFusionOnSummon(ex);
      await this.checkPlayerTurnZero(ex);
    });
  }

  async cpuFusionOnSummon(ex){
    const z=this.s.zones.cpu;
    if(ex.id==="kit"&&!this.used("cpu","kit1")){
      this.mark("cpu","kit1");
      const t=z.deck.find(c=>TEAR_GIRLS.includes(c.id))||z.deck.find(c=>c.id==="reino");if(t)this.move(t.uid,"cpu","hand");
    }
    if(ex.id==="kaleido"&&!this.used("cpu","kaleido1")){
      this.mark("cpu","kaleido1");
      const candidates=this.s.zones.player.field.filter(c=>!["eterna","vares"].includes(c.id));
      if(candidates.length){
        const t=candidates.sort((a,b)=>this.threat(b)-this.threat(a))[0];
        await this.activate("cpu","カレイドハート①",{monsterEffect:true,highImpact:true},async()=>this.shuffleToDeck(t.uid,"player"));
      }
    }
  }

  async cpuKitLine(){
    const z=this.s.zones.cpu,kit=z.field.find(c=>c.id==="kit");if(!kit||this.used("cpu","kit2"))return;
    const t=[...z.hand,...z.grave].find(c=>TEAR_GIRLS.includes(c.id));if(!t)return;
    this.mark("cpu","kit2");
    await this.activate("cpu","キトカロス②",{monsterEffect:true,specialSummonEffect:true,highImpact:true},async()=>{
      this.move(t.uid,"cpu","field",{faceUp:true});
      await this.worldSummonReaction(); await this.checkPlayerTurnZero(t);
      this.move(kit.uid,"cpu","grave");
      await this.onSentByEffect(kit,"cpu");
    });
  }

  async cpuIshizuShuffle(){
    const z=this.s.zones.cpu,sh=z.grave.find(c=>ISHIZU_SHUFFLERS.includes(c.id));if(!sh)return;
    const targets=this.s.zones.player.grave.filter(isRem).sort((a,b)=>this.threat(b)-this.threat(a)).slice(0,3);if(!targets.length)return;
    this.move(sh.uid,"cpu","banished");for(const t of targets)this.shuffleToDeck(t.uid,"player");
    this.log(`CPU：${cardName(sh)}で墓地3枚までをデッキへ戻した。`);
  }

  async cpuSetBackrow(){
    const z=this.s.zones.cpu;
    const s=z.hand.find(c=>c.id==="sulliek");if(s){this.move(s.uid,"cpu","field",{set:true});this.log("CPU：サリークをセット。");}
  }

  threat(c){
    const m={eterna:100,vares:90,alka:80,awake_noel:75,awake_fia:72,awake_ceres:70,awake_rina:68,rina:35,fia:35,ceres:35,noel:35};
    return m[c.id]||20;
  }

  async cpuBattle(){
    if(this.s.turn===1){
      this.log("先攻1ターン目のためバトルフェイズは行えない。");
      await this.step("先攻1ターン目：BATTLE SKIP",700);
      return;
    }
    const z=this.s.zones.cpu,p=this.s.zones.player;
    const attackers=z.field.filter(c=>atk(c)>0).sort((a,b)=>atk(b)-atk(a));
    for(const a of attackers){
      if(this.s.winner)break;
      if(!p.field.length){
        this.damage("player",atk(a));this.log(`${cardName(a)}が直接攻撃。`);
        await this.step(`${cardName(a)}：直接攻撃`,620);
        continue;
      }
      const targets=p.field.slice().sort((x,y)=>atk(x)-atk(y));
      const t=targets.find(x=>x.id!=="eterna")||targets[0];
      const A=atk(a),D=atk(t);
      if(A>D){
        this.damage("player",A-D);
        if(!["vares","eterna"].includes(t.id))this.move(t.uid,"player","grave");
        this.log(`${cardName(a)}が${cardName(t)}を攻撃。`);
        await this.step(`${cardName(a)} → ${cardName(t)}`,620);
      }else if(A<D){
        this.damage("cpu",D-A);this.move(a.uid,"cpu","grave");
      }else{this.move(a.uid,"cpu","grave");if(!["vares","eterna"].includes(t.id))this.move(t.uid,"player","grave");}
    }
  }

  canAttack(c){return this.s.turnPlayer==="player"&&this.s.phase==="BATTLE"&&!this.s.attacked.player[c.uid]&&atk(c)>0;}
  async playerAttack(c){
    this.s.attacked.player[c.uid]=true;
    const p=this.s.zones.cpu.field;
    if(!p.length){this.damage("cpu",atk(c));this.log(`${cardName(c)}が直接攻撃。`);return;}
    const t=await chooseCard("攻撃対象",p,true);if(!t)return;
    const A=atk(c),D=atk(t);
    if(A>D){this.damage("cpu",A-D);this.move(t.uid,"cpu","grave");}
    else if(A<D){this.damage("player",D-A);if(c.id!=="vares"&&c.id!=="eterna")this.move(c.uid,"player","grave");}
    else {this.move(t.uid,"cpu","grave");if(c.id!=="vares"&&c.id!=="eterna")this.move(c.uid,"player","grave");}
  }

  nextTurn(){
    if(this.s.winner)return;
    this.s.turn++;this.s.turnPlayer=this.opp(this.s.turnPlayer);this.s.phase="MAIN1";
    this.s.normal[this.s.turnPlayer]=1;this.s.once[this.s.turnPlayer]={};this.s.attacked[this.s.turnPlayer]={};
    this.draw(this.s.turnPlayer,1);
    this.log(`${this.s.turnPlayer==="player"?"自分":"CPU"}ターン開始。`);
    this.render();
    if(this.s.turnPlayer==="cpu")setTimeout(()=>this.cpuTurn(),400);
  }

  async endPlayerTurn(){
    if(this.s.turnPlayer!=="player"||this.s.busy)return;
    this.s.phase="END";this.nextTurn();
  }

  renderLog(){const el=$("#log");if(el)el.innerHTML=this.s.logs.map(x=>`<div>• ${escapeHtml(x)}</div>`).join("");}
  render(){
    renderAll();
  }
}

function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}

function chooseOption(title,labels){
  return new Promise(resolve=>{
    choiceResolver=resolve;
    $("#choiceTitle").textContent=title;
    const box=$("#choiceList");box.innerHTML="";
    labels.forEach((l,i)=>{const b=document.createElement("button");b.textContent=l;b.onclick=()=>closeChoice(i);box.appendChild(b);});
    $("#choiceOverlay").classList.add("show");
  });
}
function closeChoice(v=-1){$("#choiceOverlay").classList.remove("show");const r=choiceResolver;choiceResolver=null;if(r)r(v);}
function chooseCard(title,cards,reveal=false){
  if(!cards.length)return Promise.resolve(null);
  return new Promise(resolve=>{
    choiceResolver=idx=>resolve(idx<0?null:cards[idx]);
    $("#choiceTitle").textContent=title;
    const box=$("#choiceList");box.innerHTML="";
    cards.forEach((c,i)=>{
      const b=document.createElement("button");b.className="choiceCard";
      b.innerHTML=`<b>${escapeHtml(cardName(c))}</b><small>${escapeHtml(C[c.id]?.role||"")}</small>`;
      b.onclick=()=>{ $("#choiceOverlay").classList.remove("show");const r=choiceResolver;choiceResolver=null;r(i); };
      box.appendChild(b);
    });
    $("#choiceOverlay").classList.add("show");
  });
}
async function chooseMany(title,cards,max){
  const pool=[...cards],out=[];
  while(pool.length&&out.length<max){
    const opts=pool.map(cardName).concat(["ここで終了"]);
    const i=await chooseOption(`${title} ${out.length+1}/${max}`,opts);
    if(i<0||i===pool.length)break;
    out.push(pool.splice(i,1)[0]);
  }
  return out;
}
function confirmUI(text){
  return new Promise(resolve=>{
    confirmResolver=resolve;$("#confirmText").textContent=text;$("#confirmOverlay").classList.add("show");
  });
}
function closeConfirm(v){$("#confirmOverlay").classList.remove("show");const r=confirmResolver;confirmResolver=null;if(r)r(v);}

function renderCard(c,zone,side){
  const d=C[c.id]||{};
  const div=document.createElement("button");div.className=`card ${d.side||""} ${c.set?"set":""}`;
  if(d.img && side==="player")div.innerHTML=`<img src="assets/${d.img}" alt=""><span>${escapeHtml(d.name)}</span>`;
  else div.innerHTML=`<div class="textCard"><b>${escapeHtml(d.name||c.id)}</b><small>${d.atk!=null?`ATK ${d.atk}`:""} ${escapeHtml(d.role||"")}</small></div>`;
  if(side==="player")div.onclick=()=>game.startPlayerCard(c.uid);
  return div;
}
function renderZone(id,cards,zone,side){
  const el=$(id);if(!el)return;el.innerHTML="";cards.forEach(c=>el.appendChild(renderCard(c,zone,side)));
}
function renderAll(){
  if(!game)return;const s=game.s;
  renderZone("#cpuField",s.zones.cpu.field,"field","cpu");
  renderZone("#playerField",s.zones.player.field,"field","player");
  renderZone("#hand",s.zones.player.hand,"hand","player");
  const tab=$("#resourceTabs").dataset.tab||"grave";
  renderZone("#resourceCards",s.zones.player[tab],tab,"player");
  $("#cpuLP").textContent=s.lp.cpu;$("#playerLP").textContent=s.lp.player;
  $("#turnText").textContent=`TURN ${s.turn} / ${s.turnPlayer==="player"?"YOU":"CPU"} / ${s.phase}`;
  $("#deckCount").textContent=s.zones.player.deck.length;
  $("#cpuDeckCount").textContent=s.zones.cpu.deck.length;
  $("#alkaBtn").disabled=!(s.zones.player.field.some(c=>AWAKE.includes(c.id))&&s.zones.player.field.some(isHero)&&s.zones.player.extra.some(c=>c.id==="alka"));
  $("#varesBtn").disabled=!(s.zones.player.field.some(c=>AWAKE.includes(c.id))&&s.zones.player.field.some(isHero)&&s.zones.player.extra.some(c=>c.id==="vares"));
  $("#eternaBtn").disabled=!(s.zones.player.field.filter(isFusion).length>=2&&s.zones.player.field.some(isHero)&&s.zones.player.extra.some(c=>c.id==="eterna"));
  $("#battleBtn").disabled=!(s.turnPlayer==="player"&&s.phase==="MAIN1"&&s.turn>1);
  $("#endBtn").disabled=s.turnPlayer!=="player"||s.busy;
  $("#busy").classList.toggle("show",s.busy);
  game.renderLog();
  if(s.winner){$("#winText").textContent=s.winner==="player"?"YOU WIN":"CPU WIN";$("#winOverlay").classList.add("show");}
}
function setTab(tab){
  $("#resourceTabs").dataset.tab=tab;
  $$("#resourceTabs button").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  renderAll();
}
async function begin(){
  $("#startOverlay").classList.remove("show");
  const first=await chooseOption("先攻・後攻を選択",["先攻","後攻"]);
  if(first<0){ $("#startOverlay").classList.add("show"); return; }
  uidSeq=1;game=new Duel(first!==1);
}
window.begin=begin;
window.newMatch=()=>{location.reload();};
window.setTab=setTab;
window.upper=async t=>{if(game&&!game.s.busy)await game.upper(t);game.render();};
window.startBattle=()=>{
  if(!game||game.s.turnPlayer!=="player")return;
  if(game.s.turn===1){game.log("先攻1ターン目はバトルフェイズを行えない。");return;}
  game.s.phase="BATTLE";game.render();
};
window.endTurn=()=>game?.endPlayerTurn();
window.closeChoice=closeChoice;
window.closeConfirm=closeConfirm;

document.addEventListener("DOMContentLoaded",()=>{
  $("#startOverlay").classList.add("show");
});
})();
