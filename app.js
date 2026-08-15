
(() => {
"use strict";
const BUILD_VERSION="v2.0.0";

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
const REM_TEXT={
rina:"①召喚・特殊召喚時：レムナリア1枚をサーチ。②フリーチェーン：自身＋お互いのフィールド・墓地のモンスターを除外して融合。③融合素材として除外された場合：デッキからレムナリアモンスターを特殊召喚。",
fia:"①召喚・特殊召喚時：レムナリア魔法・罠をサーチ。②フリーチェーン：自身＋お互いのフィールド・墓地のカードを除外して融合。③融合素材として除外された場合：墓地・除外のレムナリア魔法・罠を回収。",
ceres:"①召喚・特殊召喚時：デッキからレムナリアカードを墓地へ。②フリーチェーン：自身＋お互いの墓地のカードを除外して融合。③融合素材として除外された場合：墓地を任意で1枚除外し1ドロー。",
noel:"①相手がEXから特殊召喚した場合、手札から特殊召喚。②フリーチェーン：自身＋EXから特殊召喚されたモンスターを除外して融合。③融合素材として除外された場合：デッキ上3枚からレムナリアを1枚加え、残りを墓地へ。",
awake_rina:"②相手表側カードを除外し、自分のレムナリアモンスター1体と融合素材にして融合。③相手によって場を離れた場合は帰還＋回収。④相手カードを素材にしていれば素材と同じ種類の相手発動効果を受けない。",
awake_fia:"②相手の魔法・罠を無効・除外。③自身＋相手の除外カードで別名レムナリア融合へ。④相手魔法・罠を素材にしていれば相手の発動した魔法・罠効果を受けない。",
awake_ceres:"②相手の墓地効果を無効・除外。③除外レムナリアを帰還し墓地を1枚除外可能。④相手墓地カードを素材にしていれば相手は墓地カードを効果コストに使えない。",
awake_noel:"①継承したEX種類と同じ相手EXモンスターの効果を無効。②相手EX特殊召喚を妨害。③同じEX種類を相手EXから除外。④自身＋除外カードで別名レムナリア融合へ。",
alka:"①回収＋相手墓地・除外戻し。②召喚に使ったカード種類ごとに1ターン各1回その種類の発動を無効。③墓地から再融合。",
vares:"①戻したカード種類に応じた除外。②戦闘破壊耐性＋素材種類耐性＋ターン1なし発動無効。③戦闘破壊した相手を除外してATK半分上昇。④相手による離場でアルカへ。",
eterna:"①相手フィールド・墓地・除外を各1枚まで戻す。②相手発動効果を受けない。③ターン1なし発動無効＋種類別追加効果。④手札・EX除外。⑤相手による離場で融合体最大4体帰還。",
record:"①レムナリアモンスターをサーチ。②墓地にある状態でレムナリア融合召喚時、自身を除外しレムナリアを墓地へ。",
inherit:"①速攻融合。②相手がカードを墓地へ送った場合、墓地の自身を除外してレムナリアを帰還。",
world:"①発動時サーチ。②相手召喚・特殊召喚時に墓地送り。③相手魔法・罠発動時に回収。",
recall:"①墓地・除外から帰還＋融合。②融合体が相手によって離場した場合の帰還。",
chronicle:"①レムナリアが除外されるたび500LP。②最大3枚戻して枚数に応じた追加処理。",
reject:"相手の発動を無効・除外し、その後レムナリアモンスターを特殊召喚可能。",
resonance:"条件を満たせば手札から発動。デッキからレムナリアを特殊召喚し相手場カードと融合。"
};

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
function kindLabel(c){
  const k=C[c.id]?.kind;
  if(k==="monster")return "モンスター";
  if(k==="fusion")return "融合モンスター";
  if(k==="spell")return "魔法";
  if(k==="trap")return "罠";
  return "カード";
}
function atk(c){
  let value=(C[c.id]?.atk || 0)+(c?.metadata?.bonusAtk||0);
  if(game){
    if(c.controller==="cpu" && game.s.zones.cpu.field.some(x=>x.id==="perlereino") && (isTear(c)||isFusion(c))) value+=500;
    if(c.controller==="player" && game.s.turnMods.screamPlayerAtkMinus500) value-=500;
    if(c.metadata?.atkHalvedUntilTurn===game.s.turn)value=Math.floor(value/2);
  }
  return Math.max(0,value);
}
function isRem(c){ return REM.has(c.id); }
function isHero(c){ return HERO.includes(c.id); }
function isFusion(c){ return C[c.id]?.kind==="fusion"; }
function isTear(c){ return C[c.id]?.side==="tear"; }
function isMonsterCard(c){
  return ["monster","fusion","extra"].includes(C[c.id]?.kind);
}
function isSpellTrapCard(c){
  return ["spell","trap"].includes(C[c.id]?.kind);
}
function isFieldSpell(c){
  return ["world","perlereino"].includes(c.id);
}
function materialType(c){
  const k=C[c.id]?.kind;
  if(["monster","fusion","extra"].includes(k))return "monster";
  if(k==="trap")return "trap";
  return "spell";
}
function effectTypeFromMeta(meta={}){
  if(meta.monsterEffect)return "monster";
  if(meta.sourceId && C[meta.sourceId]?.kind==="trap")return "trap";
  if(meta.spellTrap)return "spell";
  return "monster";
}
function extraType(c){
  if(!c)return "";
  if(["kit","rulk","kaleido","dragostapelia","awake_rina","awake_fia","awake_ceres","awake_noel","alka","vares","eterna"].includes(c.id))return "fusion";
  if(["zeus","bagooska","redoer","dweller"].includes(c.id))return "xyz";
  if(["borreload","elf","sprind","dharc","aus"].includes(c.id))return "link";
  return "extra";
}

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
      chain:[], maxxC:{player:false,cpu:false},
      resolvingChain:false, postChainQueue:[],
      speed:1, turnFlags:{cpuMonsterEffect:false}, turnMods:{screamPlayerAtkMinus500:false},
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
    await sleep(Math.max(80,Math.round(ms/(this.s.speed||1))));
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

  fieldMonsters(side){
    return this.s.zones[side].field.filter(isMonsterCard);
  }
  fieldBackrow(side){
    return this.s.zones[side].field.filter(c=>isSpellTrapCard(c)&&!isFieldSpell(c));
  }
  fieldSpell(side){
    return this.s.zones[side].field.find(isFieldSpell)||null;
  }
  monsterZoneFree(side,n=1){
    return this.fieldMonsters(side).length+n<=5;
  }
  backrowZoneFree(side,n=1){
    return this.fieldBackrow(side).length+n<=5;
  }

  stateHealth(){
    const all=[];
    for(const side of ["player","cpu"])for(const zone of ["deck","hand","field","grave","banished","extra"])all.push(...this.s.zones[side][zone]);
    const uids=all.map(c=>c.uid), unique=new Set(uids);
    const pOwned=all.filter(c=>c.owner==="player").length, cOwned=all.filter(c=>c.owner==="cpu").length;
    const issues=[];
    if(unique.size!==uids.length)issues.push("UID重複");
    if(this.fieldMonsters("player").length>5||this.fieldMonsters("cpu").length>5)issues.push("MZ>5");
    if(this.fieldBackrow("player").length>5||this.fieldBackrow("cpu").length>5)issues.push("S/T>5");
    if(pOwned!==55)issues.push(`PLAYER総数${pOwned}/55`);
    if(cOwned!==56)issues.push(`CPU総数${cOwned}/56`);
    return {ok:issues.length===0,issues};
  }

  validateUniqueState(){
    const priority=["field","hand","grave","banished","extra","deck"];
    const seen=new Set();
    let repaired=0;
    for(const side of ["player","cpu"]){
      for(const zone of priority){
        const arr=this.s.zones[side][zone];
        for(let i=arr.length-1;i>=0;i--){
          const uid=arr[i]?.uid;
          if(uid==null || seen.has(uid)){
            arr.splice(i,1);
            repaired++;
          }else{
            seen.add(uid);
          }
        }
      }
    }
    if(repaired){
      this.log(`SYSTEM GUARD：重複カード${repaired}件を修復。`);
    }
    return repaired;
  }

  deferAfterChain(key,fn){
    if(!this.s.resolvingChain)return false;
    if(!this.s.postChainQueue.some(x=>x.key===key)){
      this.s.postChainQueue.push({key,fn});
    }
    return true;
  }

  async flushPostChain(){
    let guard=0;
    while(this.s.postChainQueue.length && guard++<20){
      const item=this.s.postChainQueue.shift();
      await item.fn();
    }
  }

  move(uid,toSide,toZone,opts={}){
    const l=this.zoneOf(uid); if(!l)return null;
    const c=this.s.zones[l.side][l.zone][l.index];
    if(c.metadata?.banishOnLeave && l.zone==="field" && toZone!=="banished"){
      toZone="banished";
      c.metadata.banishOnLeave=false;
      this.log(`${cardName(c)}は自己蘇生後に場を離れたため除外。`);
    }

    if(toZone==="field"){
      if(isMonsterCard(c)){
        const alreadySame = l.side===toSide && l.zone==="field" && isMonsterCard(c);
        if(!alreadySame && !this.monsterZoneFree(toSide,1)){
          this.log(`SYSTEM GUARD：${cardName(c)}はモンスターゾーンが5枠埋まっているため場に出せない。`);
          return null;
        }
      }else if(isFieldSpell(c)){
        const oldField=this.fieldSpell(toSide);
        if(oldField && oldField.uid!==uid){
          this.move(oldField.uid,toSide,"grave",{faceUp:true,set:false});
          this.log(`フィールド魔法を張り替え：${cardName(oldField)}を墓地へ。`);
        }
      }else if(isSpellTrapCard(c)){
        const alreadySame = l.side===toSide && l.zone==="field" && isSpellTrapCard(c) && !isFieldSpell(c);
        if(!alreadySame && !this.backrowZoneFree(toSide,1)){
          this.log(`SYSTEM GUARD：魔法・罠ゾーンが5枠埋まっているため${cardName(c)}を置けない。`);
          return null;
        }
      }
    }

    const [moved]=this.s.zones[l.side][l.zone].splice(l.index,1);
    moved.controller=toSide;
    if("faceUp" in opts)moved.faceUp=opts.faceUp;
    if("set" in opts)moved.set=opts.set;
    if("fromExtra" in opts)moved.fromExtra=opts.fromExtra;
    if("fusionSummoned" in opts)moved.fusionSummoned=opts.fusionSummoned;
    if(toZone!=="field")moved.set=false;
    if(opts.byEffect)moved.metadata.lastSentByEffectTurn=this.s.turn;
    this.s.zones[toSide][toZone].push(moved);
    if(toZone==="banished"&&moved.owner==="player"&&isRem(moved)){
      const ch=this.s.zones.player.field.find(c=>c.id==="chronicle");
      if(ch){this.s.lp.player+=500;this.log(`クロニクル①：500LP回復（${this.s.lp.player}）。`);}
    }
    this.validateUniqueState();
    return moved;
  }
  shuffleToDeck(uid, side=null){
    const l=this.zoneOf(uid); if(!l)return;
    const originalZone=l.zone;
    const before=this.get(uid);
    const target=side||l.side;
    const c=this.move(uid,target,"deck",{faceUp:false,set:false});
    this.shuffle(this.s.zones[target].deck);
    if(c && target==="cpu" && isTear(c) && ["field","grave"].includes(originalZone)){
      this.deferAfterChain("perlereino3",()=>this.cpuPerlereinoReturnTrigger());
    }
    return c;
  }
  draw(side,n=1,doLog=true){
    const z=this.s.zones[side];
    for(let i=0;i<n;i++){
      if(!z.deck.length){this.win(this.opp(side),"デッキ切れ");return;}
      z.hand.push(z.deck.shift());
    }
    this.validateUniqueState();
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

  effectProtected(card,sourceSide,meta={}){
    if(!card || card.controller===sourceSide || !card.fusionSummoned)return false;
    const t=effectTypeFromMeta(meta);
    if(card.id==="eterna")return true;
    if(AWAKE.includes(card.id) && card.metadata.opponentMaterial)return (card.metadata.materialTypes||[]).includes(t);
    if(card.id==="vares")return (card.metadata.materialTypes||[]).includes(t);
    return false;
  }

  banishActivatedSource(target){
    const uid=target?.meta?.sourceUid;if(!uid)return null;
    const loc=this.zoneOf(uid);if(!loc)return null;
    const c=this.get(uid);this.move(uid,loc.side,"banished");return c;
  }

  async applyEternaNegateBonus(target){
    const type=effectTypeFromMeta(target.meta);
    if(type==="monster"){
      const pool=this.fieldMonsters("cpu");
      if(pool.length){const t=await chooseCard("エテルナ③：相手モンスターをデッキへ戻す",pool,true);if(t)this.shuffleToDeck(t.uid,"cpu");}
    }else if(type==="spell"){
      this.draw("player",1);
    }else if(type==="trap" && this.s.zones.cpu.hand.length){
      const h=this.s.zones.cpu.hand;const t=h[Math.floor(Math.random()*h.length)];this.shuffleToDeck(t.uid,"cpu");
      this.log("エテルナ③：相手手札をランダムに1枚デッキへ戻した。");
    }
  }

  async resolveRemNegate(source,target,label){
    this.negateLink(target,label);
    this.banishActivatedSource(target);
    if(source?.id==="eterna")await this.applyEternaNegateBonus(target);
  }

  async afterRemFusion(ex){
    if(!ex||ex.controller!=="player")return;
    const rec=this.s.zones.player.grave.find(c=>c.id==="record");
    if(rec&&!this.used("player","record2")){
      this.mark("player","record2");this.move(rec.uid,"player","banished");
      const pool=this.s.zones.player.deck.filter(isRem);
      if(pool.length){const t=await chooseDistinctCard("レコード②：デッキから墓地へ送るレムナリア",pool);if(t){this.move(t.uid,"player","grave");this.log(`レコード②：${cardName(t)}を墓地へ。`);}}
    }
  }

  chainLink(side,label,meta,effect){
    if(side==="cpu" && meta?.monsterEffect)this.s.turnFlags.cpuMonsterEffect=true;
    return {
      id:`cl_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,
      side,label,meta:{...(meta||{})},effect,negated:false
    };
  }

  async activate(side,label,meta,effect){
    if(this.s.winner)return false;
    const link=this.chainLink(side,label,meta,effect);
    const result=await this.runChain(link);
    return result;
  }

  async runChain(initialLink){
    const parentChain=this.s.chain;
    const chain=[initialLink];
    this.s.chain=chain;

    this.log(`CHAIN 1：${initialLink.side==="player"?"自分":"CPU"}《${initialLink.label}》`);
    await this.step(`CHAIN 1：${initialLink.label}`,560);

    let priority=this.opp(initialLink.side);
    let consecutivePasses=0;
    let guard=0;

    while(consecutivePasses<2 && guard++<20){
      const latest=chain[chain.length-1];
      let response=null;

      if(priority==="player") response=await this.playerChainResponse(latest,chain);
      else response=await this.cpuChainResponse(latest,chain);

      if(response){
        chain.push(response);
        consecutivePasses=0;
        this.log(`CHAIN ${chain.length}：${response.side==="player"?"自分":"CPU"}《${response.label}》`);
        await this.step(`CHAIN ${chain.length}：${response.label}`,520);
        priority=this.opp(response.side);
      }else{
        consecutivePasses++;
        priority=this.opp(priority);
      }
    }

    await this.step(`CHAIN ${chain.length} → 逆順解決`,520);
    this.s.resolvingChain=true;

    for(let i=chain.length-1;i>=0;i--){
      const link=chain[i];
      if(link.negated){
        this.log(`CL${i+1}《${link.label}》は無効。`);
        await this.step(`CL${i+1}：${link.label} → 無効`,500);
        continue;
      }
      this.log(`CL${i+1}《${link.label}》を解決。`);
      await this.step(`CL${i+1}：${link.label} 解決`,500);
      await link.effect(link);
      if(link.side==="cpu" && link.meta.spellTrap){
        this.deferAfterChain("worldSpellReaction",()=>this.worldSpellReaction());
      }
    }

    this.s.resolvingChain=false;
    const initialResolved=!initialLink.negated;
    this.s.chain=parentChain||[];
    this.validateUniqueState();
    await this.flushPostChain();
    this.render();
    return initialResolved;
  }

  negateLink(target,label=""){
    if(!target)return;
    target.negated=true;
    if(label)this.log(`${label}：${target.label}を無効。`);
  }

  async afterSpecialSummon(side,count=1){
    const opp=this.opp(side);
    if(this.s.maxxC[opp]){
      this.draw(opp,count);
      this.log(`${opp==="player"?"自分":"CPU"}：《増殖するG》で${count}枚ドロー。`);
      await this.step(`増殖するG：${count}ドロー`,420);
    }
  }

  playerQuickUsable(card){
    const l=this.zoneOf(card.uid);
    if(!l)return false;
    if(l.zone==="field" && card.set)return true;
    if(l.zone!=="hand")return false;
    if(this.s.turnPlayer==="player")return true;
    if(card.id==="imperm" && this.s.zones.player.field.length===0)return true;
    return ["ash","maxx"].includes(card.id);
  }

  async playerChainResponse(target,chain){
    const z=this.s.zones.player;
    const pool=[...z.grave,...z.banished].filter(isRem);
    const opts=[];

    // Generic hand traps / quick-play cards.
    const ash=z.hand.find(c=>c.id==="ash");
    if(ash && (target.meta.searchesDeck||target.meta.sendsDeckToGY||target.meta.summonsFromDeck))
      opts.push({label:"灰流うらら",kind:"ash",card:ash});

    const maxx=z.hand.find(c=>c.id==="maxx");
    if(maxx && target.side==="cpu" && target.meta.specialSummonEffect && !this.s.maxxC.player)
      opts.push({label:"増殖するG",kind:"maxx",card:maxx});

    const imperm=[...z.hand,...z.field].find(c=>c.id==="imperm"&&this.playerQuickUsable(c));
    if(imperm && target.meta.monsterEffect)
      opts.push({label:"無限泡影",kind:"imperm",card:imperm});

    const droplet=[...z.hand,...z.field].find(c=>c.id==="droplet"&&this.playerQuickUsable(c));
    if(droplet && target.meta.monsterEffect && target.meta.sourceUid && this.zoneOf(target.meta.sourceUid)?.side==="cpu" && this.zoneOf(target.meta.sourceUid)?.zone==="field")
      opts.push({label:"禁じられた一滴",kind:"droplet",card:droplet});

    const called=[...z.hand,...z.field].find(c=>c.id==="called"&&this.playerQuickUsable(c));
    if(called && target.meta.sourceId && target.meta.monsterEffect){
      const gyTarget=z=>z.grave.find(c=>c.id===target.meta.sourceId);
      if(gyTarget(this.s.zones.cpu))opts.push({label:"墓穴の指名者",kind:"called",card:called});
    }

    const cross=[...z.hand,...z.field].find(c=>c.id==="crossout"&&this.playerQuickUsable(c));
    const mirrorId=target.meta.sourceId==="tear_maxx"?"maxx":target.meta.sourceId;
    if(cross && mirrorId && z.deck.some(c=>c.id===mirrorId))
      opts.push({label:"抹殺の指名者",kind:"crossout",card:cross,mirrorId});

    // Remnaria.
    const eterna=z.field.find(c=>c.id==="eterna");
    const vares=z.field.find(c=>c.id==="vares");
    const alka=z.field.find(c=>c.id==="alka");
    const fia=z.field.find(c=>c.id==="awake_fia");
    const ceres=z.field.find(c=>c.id==="awake_ceres");
    const noel=z.field.find(c=>c.id==="awake_noel");
    const reject=z.field.find(c=>c.id==="reject" && c.set);

    if(eterna && pool.length)opts.push({label:"エテルナ③：発動無効",kind:"remNegate",source:eterna});
    if(eterna && !this.used("player","eterna4"))opts.push({label:"エテルナ④：手札・EX除外",kind:"eterna4",source:eterna});
    if(vares && pool.length)opts.push({label:"ヴァレス②：発動無効",kind:"remNegate",source:vares});
    if(alka){
      const et=effectTypeFromMeta(target.meta), types=alka.metadata.materialTypes||[];
      if(types.includes(et)&&!this.used("player",`alkaNegate_${et}`)){
        const nm=et==="monster"?"モンスター":et==="spell"?"魔法":"罠";
        opts.push({label:`アルカ②：${nm}無効`,kind:"alkaNegate",source:alka,negateType:et});
      }
    }
    if(fia && target.meta.spellTrap && pool.length)opts.push({label:"アウェイク－フィア②",kind:"remNegate",source:fia});
    if(ceres && target.meta.graveEffect && pool.length)opts.push({label:"アウェイク－セレス②",kind:"remNegate",source:ceres});
    if(noel && target.meta.extraSummonEffect && pool.length)opts.push({label:"アウェイク－ノエル②",kind:"remNegate",source:noel});
    if(reject)opts.push({label:"レムナリア・リジェクト",kind:"reject",card:reject});

    for(const h of z.field.filter(isHero)){
      if(this.validHeroMaterial(h,"cpu"))
        opts.push({label:`${cardName(h)}②：継承融合`,kind:"heroFuse",hero:h});
    }

    if(!opts.length)return null;
    opts.push({label:"チェーンしない",kind:"pass"});

    const pick=await chooseOption(
      `CHAIN ${chain.length+1}？ 相手《${target.label}》`,
      opts.map(x=>x.label)
    );
    const o=opts[pick];
    if(!o||o.kind==="pass")return null;

    if(o.kind==="ash"){
      this.move(o.card.uid,"player","grave");
      return this.chainLink("player","灰流うらら",{monsterEffect:true,sourceId:"ash",sourceUid:o.card.uid,handOrGraveMonster:true},async(link)=>{
        this.negateLink(target,"灰流うらら");
      });
    }

    if(o.kind==="maxx"){
      this.move(o.card.uid,"player","grave");
      return this.chainLink("player","増殖するG",{monsterEffect:true,sourceId:"maxx",sourceUid:o.card.uid,handOrGraveMonster:true},async()=>{
        this.s.maxxC.player=true;
      });
    }

    if(o.kind==="imperm"){
      this.move(o.card.uid,"player","grave");
      return this.chainLink("player","無限泡影",{spellTrap:true,sourceId:"imperm"},async()=>{
        this.negateLink(target,"無限泡影");
      });
    }

    if(o.kind==="droplet"){
      const costs=[...z.hand,...z.field].filter(c=>c.uid!==o.card.uid);
      const cost=costs.length?await chooseCard("一滴：墓地へ送るコスト1枚",costs):null;
      if(!cost)return null;
      const cl=this.zoneOf(cost.uid);if(cl)this.move(cost.uid,cl.side,"grave",{byEffect:true});
      const dl=this.zoneOf(o.card.uid);if(dl)this.move(o.card.uid,dl.side,"grave");
      return this.chainLink("player","禁じられた一滴",{spellTrap:true,sourceId:"droplet"},async()=>{
        const src=this.get(target.meta.sourceUid);
        if(src){src.metadata.effectsNegatedUntilTurn=this.s.turn;src.metadata.atkHalvedUntilTurn=this.s.turn;}
        this.negateLink(target,"禁じられた一滴");
      });
    }

    if(o.kind==="called"){
      this.move(o.card.uid,"player","grave");
      return this.chainLink("player","墓穴の指名者",{spellTrap:true,sourceId:"called"},async()=>{
        const tg=this.s.zones.cpu.grave.find(c=>c.id===target.meta.sourceId);
        if(tg)this.move(tg.uid,"cpu","banished");
        this.negateLink(target,"墓穴の指名者");
      });
    }

    if(o.kind==="crossout"){
      this.move(o.card.uid,"player","grave");
      return this.chainLink("player","抹殺の指名者",{spellTrap:true,sourceId:"crossout"},async()=>{
        const declare=this.s.zones.player.deck.find(c=>c.id===o.mirrorId);
        if(declare)this.move(declare.uid,"player","banished");
        this.negateLink(target,"抹殺の指名者");
      });
    }

    if(o.kind==="remNegate"){
      const cost=await chooseCard("デッキへ戻すレムナリア",pool);
      if(!cost)return null;
      this.shuffleToDeck(cost.uid,"player");
      return this.chainLink("player",o.label,{monsterEffect:true,sourceId:o.source.id,sourceUid:o.source.uid},async()=>{
        await this.resolveRemNegate(o.source,target,o.label);
      });
    }

    if(o.kind==="alkaNegate"){
      this.mark("player",`alkaNegate_${o.negateType}`);
      return this.chainLink("player","アルカ②",{monsterEffect:true,sourceId:"alka",sourceUid:o.source.uid},async()=>{
        this.negateLink(target,"アルカ②");this.banishActivatedSource(target);
      });
    }

    if(o.kind==="reject"){
      this.move(o.card.uid,"player","grave");
      return this.chainLink("player","レムナリア・リジェクト",{spellTrap:true,sourceId:"reject"},async()=>{
        this.negateLink(target,"リジェクト");this.banishActivatedSource(target);
        const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(isHero);
        if(pool.length&&this.monsterZoneFree("player")){
          const h=await chooseCard("リジェクト：特殊召喚するレムナリア",pool);if(h){const l=this.zoneOf(h.uid);if(l){this.move(h.uid,"player","field",{faceUp:true});await this.afterSpecialSummon("player",1);}}
        }
      });
    }

    if(o.kind==="eterna4"){
      this.mark("player","eterna4");
      return this.chainLink("player","エテルナ④",{monsterEffect:true,sourceId:"eterna",sourceUid:o.source.uid},async()=>{
        const candidates=[...this.s.zones.cpu.hand,...this.s.zones.cpu.extra];
        if(candidates.length){
          const c=await chooseCard("エテルナ④：相手の手札・EXから除外",candidates,true);
          if(c){const l=this.zoneOf(c.uid);this.move(c.uid,l.side,"banished");}
        }
      });
    }

    if(o.kind==="heroFuse"){
      return this.chainLink("player",`${cardName(o.hero)}② 継承融合`,
        {monsterEffect:true,specialSummonEffect:true,sourceId:o.hero.id,sourceUid:o.hero.uid,highImpact:true},
        async()=>{await this.heroFusionResolve(o.hero,"player");}
      );
    }

    return null;
  }

  async cpuChainResponse(target,chain){
    const z=this.s.zones.cpu;

    // Rulkallos.
    const rulk=z.field.find(c=>c.id==="rulk");
    if(target.side==="player" && rulk && rulk.metadata.effectsNegatedUntilTurn!==this.s.turn && !this.used("cpu","rulk2") && target.meta.specialSummonEffect){
      this.mark("cpu","rulk2");
      return this.chainLink("cpu","ルルカロス②",{monsterEffect:true,sourceId:"rulk",sourceUid:rulk.uid},async()=>{
        this.negateLink(target,"ルルカロス");
        const tearCost=[...z.hand,...z.field].find(c=>isTear(c)&&c.uid!==rulk.uid);
        if(tearCost){const l=this.zoneOf(tearCost.uid);this.move(tearCost.uid,l.side,"grave");await this.onSentByEffect(tearCost,"cpu");}
      });
    }

    // Sulliek only targets a monster effect whose source is/was on field in this simulator.
    const sulliek=z.field.find(c=>c.id==="sulliek"&&c.set);
    const tear=z.field.find(c=>["reino","scheiren","havnis","merrli","kit","rulk"].includes(c.id));
    if(target.side==="player" && sulliek && tear && !this.used("cpu","sulliek1") && target.meta.monsterEffect && target.meta.sourceZone!=="hand"){
      this.mark("cpu","sulliek1");
      return this.chainLink("cpu","壱世壊に奏でる哀唱",{spellTrap:true,sourceId:"sulliek",sourceUid:sulliek.uid},async()=>{
        const src=target.meta.sourceUid?this.get(target.meta.sourceUid):null;
        if(src)src.metadata.effectsNegatedUntilTurn=this.s.turn;
        this.negateLink(target,"サリーク");
        const tl=this.zoneOf(tear.uid);if(tl){this.move(tear.uid,tl.side,"grave",{byEffect:true});await this.onSentByEffect(tear,"cpu");}
      });
    }

    // Dragostapelia: once per turn, place a Predator Counter and negate that monster's current effect.
    const drago=z.field.find(c=>c.id==="dragostapelia"&&!c.metadata.effectsNegatedUntilTurn);
    const src=target.meta.sourceUid?this.get(target.meta.sourceUid):null;
    if(target.side==="player" && drago && !this.used("cpu","drago1") && target.meta.monsterEffect && src && this.zoneOf(src.uid)?.zone==="field"){
      this.mark("cpu","drago1");
      return this.chainLink("cpu","ドラゴスタペリア①",{monsterEffect:true,sourceId:"dragostapelia",sourceUid:drago.uid,sourceZone:"field"},async()=>{
        src.metadata.predatorCounter=true;
        src.metadata.effectsNegatedUntilTurn=this.s.turn;
        this.negateLink(target,"ドラゴスタペリア");
      });
    }

    // Herald can answer monster effects including Ash / Maxx "C".
    const herald=z.hand.find(c=>c.id==="herald");
    const fairy=z.hand.find(c=>c.uid!==herald?.uid && FAIRIES.includes(c.id));
    if(target.side==="player" && herald&&fairy&&(target.meta.monsterEffect||target.meta.highImpact)){
      this.move(herald.uid,"cpu","grave");
      this.move(fairy.uid,"cpu","grave");
      return this.chainLink("cpu","朱光の宣告者",
        {monsterEffect:true,sourceId:"herald",sourceUid:herald.uid,sourceZone:"grave",handOrGraveMonster:true},
        async()=>{
          this.negateLink(target,"朱光の宣告者");
          await this.onSentByEffect(fairy,"cpu");
        }
      );
    }

    // CPU Maxx "C".
    const maxx=z.hand.find(c=>c.id==="tear_maxx");
    if(maxx && target.side==="player" && target.meta.specialSummonEffect && !this.s.maxxC.cpu){
      this.move(maxx.uid,"cpu","grave");
      return this.chainLink("cpu","増殖するG",
        {monsterEffect:true,sourceId:"tear_maxx",sourceUid:maxx.uid,sourceZone:"grave",handOrGraveMonster:true},
        async()=>{this.s.maxxC.cpu=true;}
      );
    }

    // Ishizu grave shuffler as a real chain link.
    if(target.side==="player" && target.meta.usesGrave){
      const sh=z.grave.find(c=>ISHIZU_SHUFFLERS.includes(c.id));
      if(sh){
        this.move(sh.uid,"cpu","banished");
        return this.chainLink("cpu",`${cardName(sh)}②`,
          {monsterEffect:true,graveEffect:true,sourceId:sh.id,sourceUid:sh.uid},
          async()=>{
            const targets=this.s.zones.player.grave.filter(isRem).sort((a,b)=>this.threat(b)-this.threat(a)).slice(0,3);
            for(const t of targets)this.shuffleToDeck(t.uid,"player");
            this.log(`CPU：${cardName(sh)}で墓地リソースを戻した。`);
          }
        );
      }
    }

    // Havnis: non-negating response.
    const hav=z.hand.find(c=>c.id==="havnis");
    if(hav && !this.used("cpu","havnis1") && target.side==="player" && target.meta.monsterEffect){
      this.mark("cpu","havnis1");
      return this.chainLink("cpu","ティアラメンツ・ハゥフニス①",
        {monsterEffect:true,specialSummonEffect:true,sendsDeckToGY:true,sourceId:"havnis",sourceUid:hav.uid,sourceZone:"hand",highImpact:true},
        async()=>{
          const l=this.zoneOf(hav.uid);
          if(l&&l.zone==="hand"){
            this.move(hav.uid,"cpu","field",{faceUp:true});
            await this.afterSpecialSummon("cpu",1);
            await this.worldSummonReaction();
            await this.cpuScreamTrigger();
            await this.mill("cpu",3);
          }
        }
      );
    }

    return null;
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
    if(REM_TEXT[c.id])out.push({label:"効果テキストを見る",go:async()=>showTextUI(cardName(c),REM_TEXT[c.id])});
    if(zone==="hand"){
      if(isHero(c)&&this.s.phase==="MAIN1"&&this.s.normal.player>0&&this.monsterZoneFree("player"))out.push({label:"通常召喚",go:()=>this.normalHero(c)});
      if(isHero(c)&&this.validHeroMaterial(c,"cpu"))out.push({label:"継承融合",go:()=>this.heroFusion(c,"player")});
      if(c.id==="record")out.push({label:"レコード① 発動",go:()=>this.record(c)});
      if(c.id==="world"&&!this.s.zones.player.field.some(x=>x.id==="world"))out.push({label:"継承世界 発動",go:()=>this.world(c)});
      if(c.id==="inherit")out.push({label:"インヘリット① 発動",go:()=>this.inherit(c)});
      if(c.id==="recall")out.push({label:"リコール① 発動",go:()=>this.recall(c)});
      if(c.id==="chronicle"&&!this.s.zones.player.field.some(x=>x.id==="chronicle"))out.push({label:"クロニクル 発動",go:()=>this.chronicle(c)});
      if(c.id==="reject")out.push({label:"セット",go:async()=>{this.move(c.uid,"player","field",{set:true});this.log("リジェクトをセット。");}});
      if(c.id==="resonance"&&this.s.zones.cpu.field.length&&!this.s.zones.player.field.length)out.push({label:"レゾナンスを手札発動",go:()=>this.resonance(c)});
      if(["imperm","called","crossout","droplet"].includes(c.id))out.push({label:"セット",go:async()=>{this.move(c.uid,"player","field",{set:true});this.log(`${cardName(c)}をセット。`);}});
      if(c.id==="talent" && this.s.phase==="MAIN1" && this.s.turnFlags.cpuMonsterEffect)out.push({label:"三戦の才 発動",go:()=>this.talent(c)});
      if(c.id==="droplet" && this.s.phase==="MAIN1")out.push({label:"禁じられた一滴 発動",go:()=>this.dropletMain(c)});
      out.push({label:"墓地へ送る",go:async()=>this.move(c.uid,"player","grave")});
    }
    if(zone==="field"){
      const negated=c.metadata.effectsNegatedUntilTurn===this.s.turn;
      if(isHero(c)&&!negated&&this.validHeroMaterial(c,"cpu"))out.push({label:"継承融合",go:()=>this.heroFusion(c,"player")});
      if(!negated&&c.id==="awake_rina"&&this.s.zones.cpu.field.length)out.push({label:"② 相手カードを継承して次の融合",go:()=>this.awakeRina(c)});
      if(!negated&&c.id==="awake_fia"&&this.s.zones.cpu.banished.length)out.push({label:"③ 除外カードと継承再融合",go:()=>this.awakeBanishedFusion(c)});
      if(!negated&&c.id==="awake_ceres"&&this.s.zones.player.banished.some(isHero))out.push({label:"③ 除外レムナリアを帰還",go:()=>this.awakeCeres(c)});
      if(!negated&&c.id==="awake_noel"&&this.s.zones.cpu.banished.length)out.push({label:"④ 除外カードと継承再融合",go:()=>this.awakeBanishedFusion(c)});
      if(!negated&&c.id==="alka")out.push({label:"① 継承回収",go:()=>this.alkaOne(c)});
      if(!negated&&c.id==="vares")out.push({label:"② 全体攻撃を解放",go:async()=>{c.metadata.attackAll=true;this.log("ヴァレス：全体攻撃を解放。");}});
      if(!negated&&c.id==="eterna")out.push({label:"① 三領域をデッキへ戻す",go:()=>this.eternaOne(c)});
      if(c.id==="chronicle"&&!this.used("player","chronicle2"))out.push({label:"② 墓地・除外を戻す",go:()=>this.chronicleEffect(c)});
      if(!negated&&AWAKE.includes(c.id)&&c.metadata.copiedCardId&&this.inheritedUsable(c))out.push({label:`継承効果：${cardName({id:c.metadata.copiedCardId})}`,go:()=>this.useInheritedEffect(c)});
      if(this.s.phase==="BATTLE" && this.canAttack(c))out.push({label:"攻撃",go:()=>this.playerAttack(c)});
      out.push({label:"墓地へ送る",go:async()=>this.move(c.uid,"player","grave")});
    }
    if(zone==="grave"&&c.id==="alka")out.push({label:"③ 墓地から再融合",go:()=>this.alkaRevive(c)});
    return out;
  }

  async normalHero(c){
    if(!this.monsterZoneFree("player")){this.log("モンスターゾーンが空いていない。");return;}
    const moved=this.move(c.uid,"player","field",{faceUp:true});
    if(!moved)return;
    this.s.normal.player--;
    this.log(`${cardName(c)}を通常召喚。`);
    await this.heroOnSummon(c);
  }

  async heroOnSummon(c){
    if(!isHero(c)||c.id==="noel")return;
    const key=c.id+"1"; if(this.used("player",key))return;
    await this.activate("player",`${cardName(c)}①`,{monsterEffect:true,highImpact:true,searchesDeck:c.id!=="ceres",sendsDeckToGY:c.id==="ceres",sourceId:c.id,sourceUid:c.uid,sourceZone:"field"},async()=>{
      this.mark("player",key);
      if(c.id==="ceres"){
        const targets=this.s.zones.player.deck.filter(isRem);
        const t=await chooseDistinctCard(
          "セレス①：デッキから墓地へ送る「レムナリア」カード",
          targets
        );
        if(t){
          this.move(t.uid,"player","grave");
          this.log(`セレス①：${cardName(t)}をデッキから墓地へ送った。`);
        }
      } else {
        const targets=c.id==="fia"
          ? this.s.zones.player.deck.filter(x=>["record","inherit","world","recall","chronicle","reject","resonance"].includes(x.id))
          : this.s.zones.player.deck.filter(isRem);
        const t=await chooseDistinctCard("手札に加えるカード",targets); if(t)this.move(t.uid,"player","hand");
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
    let pool;
    if(hero.id==="noel")pool=this.s.zones[opp].field.filter(c=>c.fromExtra);
    else if(hero.id==="ceres")pool=[...this.s.zones.player.grave,...this.s.zones.cpu.grave].filter(c=>c.uid!==hero.uid);
    else pool=[...this.s.zones[opp].field,...this.s.zones.player.grave,...this.s.zones.cpu.grave].filter(c=>c.uid!==hero.uid);
    if(!pool.length)return false;

    const meta={
      monsterEffect:true,specialSummonEffect:true,highImpact:true,
      sourceId:hero.id,sourceUid:hero.uid,sourceZone:this.zoneOf(hero.uid)?.zone||"field",
      usesGrave:pool.some(c=>this.zoneOf(c.uid)?.zone==="grave")
    };
    return this.activate(side,`${cardName(hero)}② 継承融合`,meta,async()=>{
      await this.heroFusionResolve(hero,side);
    });
  }

  async heroFusionResolve(hero,side){
    const opp=this.opp(side);
    let pool;
    if(hero.id==="noel")pool=this.s.zones[opp].field.filter(c=>c.fromExtra);
    else if(hero.id==="ceres")pool=[...this.s.zones.player.grave,...this.s.zones.cpu.grave].filter(c=>c.uid!==hero.uid);
    else pool=[...this.s.zones[opp].field,...this.s.zones.player.grave,...this.s.zones.cpu.grave].filter(c=>c.uid!==hero.uid);
    if(!pool.length)return;

    const mat=await chooseCard("継承する融合素材",pool,true);if(!mat)return;
    const ex=this.s.zones[side].extra.find(c=>c.id===FUSION_MAP[hero.id]);if(!ex)return;
    const hloc=this.zoneOf(hero.uid), mloc=this.zoneOf(mat.uid);if(!hloc||!mloc)return;

    this.move(hero.uid,hloc.side,"banished");
    this.move(mat.uid,mloc.side,"banished");
    ex.metadata.materialTypes=[materialType(hero),materialType(mat)];
    ex.metadata.opponentMaterial=mat.owner!==side;
    ex.metadata.copiedCardId=mat.owner!==side?mat.id:null;
    if(ex.id==="awake_noel")ex.metadata.inheritedExtraType=mat.fromExtra?extraType(mat):"";
    this.move(ex.uid,side,"field",{faceUp:true,fromExtra:true,fusionSummoned:true});
    this.log(`融合召喚：${cardName(ex)}`);
    await this.afterSpecialSummon(side,1);
    await this.onFusionSummoned(ex,side,hero,mat);
    if(side==="player")await this.resolveInheritedOnSummon(ex);
    await this.materialTrigger(hero,side);
    if(side==="player")await this.afterRemFusion(ex);
  }


  async materialTrigger(hero,side){
    const z=this.s.zones[side], key=hero.id+"3"; if(this.used(side,key))return;
    this.mark(side,key);
    if(hero.id==="rina"){
      const t=z.deck.find(c=>isHero(c)&&c.id!=="rina");
      if(t&&this.monsterZoneFree(side)){
        const moved=this.move(t.uid,side,"field",{faceUp:true});
        if(moved){await this.afterSpecialSummon(side,1);await this.heroOnSummon(t);}
      }
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
      if(mat?.owner==="cpu"){
        ex.metadata.copiedCardId=mat.id;
        if(ex.id==="awake_noel"&&mat.fromExtra)ex.metadata.inheritedExtraType=extraType(mat);
        this.log(`${cardName(ex)}：${cardName(mat)}の効果情報を継承。`);
      }
    }else{
      await this.checkPlayerTurnZero(ex);
    }
  }

  async onOpponentExtraSummoned(ex){
    if(!ex||ex.controller!=="cpu"||!ex.fromExtra)return;
    const noel=this.s.zones.player.field.find(c=>c.id==="awake_noel");if(!noel)return;
    const et=extraType(ex);
    if(noel.metadata.inheritedExtraType&&noel.metadata.inheritedExtraType===et){
      ex.metadata.effectsNegatedUntilTurn=this.s.turn;
      this.log(`アウェイク－ノエル①：${cardName(ex)}の効果を無効化。`);
    }
    const same=this.s.zones.cpu.extra.filter(c=>extraType(c)===et);
    if(same.length&&await confirmUI(`アウェイク－ノエル③：相手EXから${et}を1枚除外する？`)){
      const t=await chooseCard("アウェイク－ノエル③：除外するEXモンスター",same,true);if(t)this.move(t.uid,"cpu","banished");
    }
  }

  async remFusionLeavesByOpponent(card,destination="grave"){
    if(!card||card.controller!=="player"||!isFusion(card))return false;
    const loc=this.zoneOf(card.uid);if(!loc||loc.zone!=="field")return false;
    this.move(card.uid,"player",destination,{byEffect:true});
    if(destination==="deck")this.shuffle(this.s.zones.player.deck);

    if(card.id==="awake_rina"){
      const heroes=this.s.zones.player.banished.filter(isHero);
      if(heroes.length&&this.monsterZoneFree("player")){
        const h=await chooseCard("アウェイク－リナ③：帰還させるレムナリア",heroes);if(h){this.move(h.uid,"player","field",{faceUp:true});await this.afterSpecialSummon("player",1);}
      }
      const rec=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(x=>isRem(x)&&x.uid!==card.uid);
      if(rec.length&&await confirmUI("アウェイク－リナ③：さらにレムナリアを回収する？")){const r=await chooseCard("回収するレムナリア",rec);if(r)this.move(r.uid,"player","hand");}
    }
    if(card.id==="vares"){
      const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished];
      const rf=pool.find(x=>isFusion(x)&&x.uid!==card.uid), rm=pool.find(isHero);
      const alka=this.s.zones.player.extra.find(x=>x.id==="alka")||this.s.zones.player.grave.find(x=>x.id==="alka");
      if(rf&&rm&&alka&&this.monsterZoneFree("player")){
        this.move(rf.uid,"player","banished");this.move(rm.uid,"player","banished");
        this.move(alka.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});alka.metadata.materialTypes=["monster","monster"];
        await this.afterSpecialSummon("player",1);await this.alkaOne(alka);await this.afterRemFusion(alka);this.log("ヴァレス④：アルカへ継承。");
      }
    }
    if(card.id==="eterna"){
      const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(x=>isFusion(x)&&x.id!=="eterna");let n=0;
      for(const f of pool){if(n>=4||!this.monsterZoneFree("player"))break;this.move(f.uid,"player","field",{faceUp:true,fusionSummoned:true});await this.afterSpecialSummon("player",1);n++;}
      if(n)this.log(`エテルナ⑤：融合体${n}体が帰還。`);
    }
    const recall=this.s.zones.player.grave.find(x=>x.id==="recall");
    if(recall&&!this.used("player","recall2")&&this.monsterZoneFree("player")){
      const heroes=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(isHero);
      if(heroes.length){this.mark("player","recall2");this.move(recall.uid,"player","banished");const h=await chooseCard("リコール②：特殊召喚",heroes);if(h){const l=this.zoneOf(h.uid);if(l){this.move(h.uid,"player","field",{faceUp:true});await this.afterSpecialSummon("player",1);}}}
    }
    return true;
  }


  async record(c){
    await this.activate("player","レムナリア・レコード①",{spellTrap:true,highImpact:true,searchesDeck:true,sourceId:"record",sourceUid:c.uid,sourceZone:"hand"},async()=>{
      this.move(c.uid,"player","grave");
      const t=await chooseCard("サーチするレムナリアモンスター",this.s.zones.player.deck.filter(isHero));if(t)this.move(t.uid,"player","hand");
      if(this.s.zones.player.hand.length && await confirmUI("手札を1枚墓地へ送る？")){
        const d=await chooseCard("墓地へ送る手札",this.s.zones.player.hand);if(d)this.move(d.uid,"player","grave");
      }
    });
  }
  async world(c){
    await this.activate("player","レムナリア－継承世界",{spellTrap:true,highImpact:true,searchesDeck:true,sourceId:"world",sourceUid:c.uid,sourceZone:"hand"},async()=>{
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
    await this.activate("player","レムナリア・インヘリット①",{spellTrap:true,specialSummonEffect:true,highImpact:true,usesGrave:this.zoneOf(m.uid)?.zone==="grave",sourceId:"inherit",sourceUid:c.uid,sourceZone:"hand"},async()=>{
      this.move(c.uid,"player","grave");
      const ex=this.s.zones.player.extra.find(x=>x.id===FUSION_MAP[h.id]);if(!ex)return;
      const hl=this.zoneOf(h.uid),ml=this.zoneOf(m.uid);this.move(h.uid,hl.side,"banished");this.move(m.uid,ml.side,"banished");
      ex.metadata.materialTypes=[materialType(h),materialType(m)];ex.metadata.opponentMaterial=m.owner!=="player";ex.metadata.copiedCardId=m.owner!=="player"?m.id:null;
      if(ex.id==="awake_noel")ex.metadata.inheritedExtraType=m.fromExtra?extraType(m):"";
      this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      await this.afterSpecialSummon("player",1);
      await this.onFusionSummoned(ex,"player",h,m);await this.resolveInheritedOnSummon(ex);
      await this.materialTrigger(h,"player");await this.afterRemFusion(ex);
    });
  }
  async recall(c){
    if(!this.monsterZoneFree("player")){this.log("リコール：モンスターゾーンに空きがない。");return;}
    const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(isHero);if(!pool.length)return;
    const t=await chooseCard("特殊召喚するレムナリア",pool);if(!t)return;
    await this.activate("player","レムナリア・リコール①",{spellTrap:true,specialSummonEffect:true,fromDeckOrGraveSpecial:true,usesGrave:true,sourceId:"recall",sourceUid:c.uid,sourceZone:"hand"},async()=>{
      this.move(c.uid,"player","grave");
      const l=this.zoneOf(t.uid);this.move(t.uid,"player","field",{faceUp:true});
      await this.afterSpecialSummon("player",1);
      await this.heroOnSummon(t);
      if(this.validHeroMaterial(t,"cpu") && await confirmUI("リコール①：このモンスターを含めて融合する？"))await this.heroFusion(t,"player");
    });
  }
  async chronicle(c){
    await this.activate("player","レムナリア・クロニクル 発動",{spellTrap:true,sourceId:"chronicle",sourceUid:c.uid,sourceZone:"hand"},async()=>{
      this.move(c.uid,"player","field",{faceUp:true});
    });
  }
  async chronicleEffect(c){
    if(this.used("player","chronicle2"))return;
    const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(x=>isRem(x)&&x.uid!==c.uid);
    if(!pool.length)return;
    const picks=await chooseMany("クロニクル②：デッキへ戻す（最大3）",pool,3);if(!picks.length)return;
    this.mark("player","chronicle2");
    for(const p of picks)this.shuffleToDeck(p.uid,"player");
    this.draw("player",1);
    if(picks.length>=2){const t=this.s.zones.player.deck.find(isRem);if(t)this.move(t.uid,"player","grave",{byEffect:true});}
    if(picks.length>=3&&this.monsterZoneFree("player")){
      const heroes=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(isHero);
      if(heroes.length){const h=await chooseCard("クロニクル②：特殊召喚",heroes);if(h){const l=this.zoneOf(h.uid);this.move(h.uid,"player","field",{faceUp:true});await this.afterSpecialSummon("player",1);}}
    }
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
    await this.activate("player","レムナリア・レゾナンス",{spellTrap:true,specialSummonEffect:true,summonsFromDeck:true,highImpact:true,sourceId:"resonance",sourceUid:c.uid,sourceZone:"hand"},async()=>{
      this.move(c.uid,"player","grave");
      this.move(h.uid,"player","field",{faceUp:true});
      await this.afterSpecialSummon("player",1);
      const ex=this.s.zones.player.extra.find(x=>x.id===FUSION_MAP[h.id]);if(!ex)return;
      this.move(h.uid,"player","banished");this.move(m.uid,"cpu","banished");
      ex.metadata.materialTypes=[materialType(h),materialType(m)];ex.metadata.opponentMaterial=true;ex.metadata.copiedCardId=m.id;
      if(ex.id==="awake_noel")ex.metadata.inheritedExtraType=m.fromExtra?extraType(m):"";
      this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      await this.afterSpecialSummon("player",1);
      await this.onFusionSummoned(ex,"player",h,m);await this.resolveInheritedOnSummon(ex);
      await this.materialTrigger(h,"player");await this.afterRemFusion(ex);
    });
  }

  async talent(c){
    if(!this.s.turnFlags.cpuMonsterEffect)return;
    const option=await chooseOption("三戦の才",["2枚ドロー","相手手札を確認して1枚デッキへ戻す"]);
    if(option<0)return;
    await this.activate("player","三戦の才",{spellTrap:true,sourceId:"talent",sourceUid:c.uid,sourceZone:"hand"},async()=>{
      this.move(c.uid,"player","grave");
      if(option===0)this.draw("player",2);
      else if(this.s.zones.cpu.hand.length){const t=await chooseCard("相手手札から戻すカード",this.s.zones.cpu.hand,true);if(t)this.shuffleToDeck(t.uid,"cpu");}
    });
  }

  async dropletMain(c){
    const cpuMons=this.fieldMonsters("cpu");if(!cpuMons.length)return;
    const costPool=[...this.s.zones.player.hand,...this.s.zones.player.field].filter(x=>x.uid!==c.uid);
    if(!costPool.length)return;
    const cost=await chooseCard("一滴：墓地へ送るコスト",costPool);if(!cost)return;
    const target=await chooseCard("一滴：無効にする相手モンスター",cpuMons,true);if(!target)return;
    await this.activate("player","禁じられた一滴",{spellTrap:true,sourceId:"droplet",sourceUid:c.uid,sourceZone:"hand"},async()=>{
      const cl=this.zoneOf(cost.uid);if(cl)this.move(cost.uid,cl.side,"grave",{byEffect:true});
      this.move(c.uid,"player","grave");
      target.metadata.effectsNegatedUntilTurn=this.s.turn;
      target.metadata.atkHalvedUntilTurn=this.s.turn;
    });
  }

  inheritedUsable(c){
    const id=c.metadata?.copiedCardId;
    if(!id||c.metadata.inheritedUsedTurn===this.s.turn)return false;
    if(["dragostapelia","keldo","mudora","sulliek"].includes(id))return true;
    if(id==="tear_talent")return this.s.turnFlags.cpuMonsterEffect;
    return false;
  }

  async resolveInheritedOnSummon(c){
    const id=c.metadata?.copiedCardId;if(!id)return;
    if(id==="kaleido" && c.metadata.inheritedOnSummonTurn!==this.s.turn){
      c.metadata.inheritedOnSummonTurn=this.s.turn;
      const pool=this.s.zones.cpu.field.filter(x=>x.uid!==c.uid);
      if(pool.length&&await confirmUI(`継承した《${C[id].name}》の特殊召喚時効果を使う？`)){
        const t=await chooseCard("継承効果：デッキへ戻す相手カード",pool,true);if(t)this.shuffleToDeck(t.uid,"cpu");
      }
    }
    if(["kit","reino","scheiren","havnis","merrli","perlereino"].includes(id)){
      this.log(`継承：${C[id].name}は現在の自分デッキでは名称指定の合法対象がない効果を含む。`);
    }
  }

  async useInheritedEffect(c){
    const id=c.metadata?.copiedCardId;if(!this.inheritedUsable(c))return;
    c.metadata.inheritedUsedTurn=this.s.turn;
    if(id==="dragostapelia"){
      const pool=this.fieldMonsters("cpu");if(!pool.length)return;
      const t=await chooseCard("継承ドラゴスタペリア：対象",pool,true);if(!t)return;
      t.metadata.predatorCounter=true;t.metadata.effectsNegatedUntilTurn=this.s.turn;
      this.log(`継承効果：${cardName(t)}に捕食カウンター相当を置き効果無効。`);
      return;
    }
    if(["keldo","mudora"].includes(id)){
      const pool=[...this.s.zones.player.grave,...this.s.zones.cpu.grave];
      if(!pool.length)return;
      const picks=await chooseMany(`継承${C[id].name}：墓地を戻す`,pool,3);
      this.move(c.uid,"player","banished");
      for(const p of picks){const l=this.zoneOf(p.uid);if(l)this.shuffleToDeck(p.uid,l.side);}
      return;
    }
    if(id==="sulliek"){
      const pool=this.fieldMonsters("cpu");if(!pool.length)return;
      const t=await chooseCard("継承サリーク：無効にする相手モンスター",pool,true);if(!t)return;
      t.metadata.effectsNegatedUntilTurn=this.s.turn;
      const own=this.fieldMonsters("player").filter(x=>x.uid!==c.uid);
      if(own.length){const send=await chooseCard("継承サリーク：墓地へ送る自分モンスター",own);if(send)this.move(send.uid,"player","grave",{byEffect:true});}
      return;
    }
    if(id==="tear_talent")this.draw("player",2);
  }

  async awakeRina(c){
    const target=await chooseCard("アウェイク－リナ②：除外する相手表側カード",this.s.zones.cpu.field,true);if(!target)return;
    const own=this.s.zones.player.hand.concat(this.s.zones.player.field).filter(x=>isHero(x)&&x.uid!==c.uid);
    const hero=await chooseCard("融合素材にする自分のレムナリアモンスター",own);if(!hero)return;
    const ex=this.s.zones.player.extra.find(x=>x.id===FUSION_MAP[hero.id]);if(!ex)return;
    await this.activate("player","アウェイク－リナ②",{monsterEffect:true,specialSummonEffect:true,sourceId:"awake_rina",sourceUid:c.uid,sourceZone:"field",highImpact:true},async()=>{
      this.move(target.uid,"cpu","banished");const hl=this.zoneOf(hero.uid);if(!hl)return;this.move(hero.uid,hl.side,"banished");
      ex.metadata.materialTypes=[materialType(hero),materialType(target)];ex.metadata.opponentMaterial=true;ex.metadata.copiedCardId=target.id;
      this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});await this.afterSpecialSummon("player",1);
      await this.onFusionSummoned(ex,"player",hero,target);await this.resolveInheritedOnSummon(ex);await this.materialTrigger(hero,"player");await this.afterRemFusion(ex);
    });
  }

  async awakeCeres(c){
    const pool=this.s.zones.player.banished.filter(isHero);if(!pool.length||!this.monsterZoneFree("player"))return;
    const h=await chooseCard("アウェイク－セレス③：帰還させるレムナリア",pool);if(!h)return;
    this.move(h.uid,"player","field",{faceUp:true});await this.afterSpecialSummon("player",1);
    const gy=[...this.s.zones.player.grave,...this.s.zones.cpu.grave];
    if(gy.length&&await confirmUI("アウェイク－セレス③：墓地を1枚除外する？")){const t=await chooseCard("除外する墓地カード",gy,true);if(t){const l=this.zoneOf(t.uid);if(l)this.move(t.uid,l.side,"banished");}}
  }

  async awakeBanishedFusion(source){
    const pool=this.s.zones.cpu.banished;if(!pool.length)return;
    const mat=await chooseCard(`${cardName(source)}：相手の除外カードを素材に選択`,pool,true);if(!mat)return;
    const legal=this.s.zones.player.extra.filter(x=>isFusion(x)&&x.id!==source.id&&x.id!=="eterna");if(!legal.length)return;
    const ex=await chooseCard("融合召喚する別名のレムナリア融合体",legal);if(!ex)return;
    await this.activate("player",`${cardName(source)} 継承再融合`,{monsterEffect:true,specialSummonEffect:true,sourceId:source.id,sourceUid:source.uid,sourceZone:"field",highImpact:true},async()=>{
      this.move(source.uid,"player","banished");
      ex.metadata.materialTypes=["monster",materialType(mat)];ex.metadata.opponentMaterial=true;ex.metadata.copiedCardId=mat.id;
      this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});await this.afterSpecialSummon("player",1);await this.afterRemFusion(ex);
      if(ex.id==="alka")await this.alkaOne(ex);if(ex.id==="vares")await this.varesOne(ex);
    });
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
        const ex=z.extra.find(x=>x.id==="eterna");ex.metadata.materialTypes=["monster","monster"];
        this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});await this.afterSpecialSummon("player",1);
        await this.eternaOne(ex);await this.afterRemFusion(ex);
      });
    }else{
      const f=await chooseCard("アウェイク素材",z.field.filter(x=>AWAKE.includes(x.id)));if(!f)return;
      const h=await chooseCard("下級レムナリア",z.field.filter(isHero));if(!h)return;
      await this.activate("player",`${C[target].name} 融合召喚`,{specialSummonEffect:true,highImpact:true},async()=>{
        this.move(f.uid,"player","banished");this.move(h.uid,"player","banished");
        const ex=z.extra.find(x=>x.id===target);ex.metadata.materialTypes=["monster","monster"];
        this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});await this.afterSpecialSummon("player",1);
        if(target==="alka")await this.alkaOne(ex);
        if(target==="vares")await this.varesOne(ex);
        await this.afterRemFusion(ex);
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
    await this.activate("player","アルカ③ 再融合",{monsterEffect:true,specialSummonEffect:true,usesGrave:true,highImpact:true,sourceId:"alka",sourceUid:c.uid,sourceZone:"grave"},async()=>{
      const fl=this.zoneOf(f.uid),ml=this.zoneOf(m.uid);this.move(f.uid,fl.side,"banished");this.move(m.uid,ml.side,"banished");
      this.move(c.uid,"player","field",{faceUp:true,fusionSummoned:true});
      c.metadata.materialTypes=["monster",materialType(m)];
      await this.afterSpecialSummon("player",1);await this.alkaOne(c);await this.afterRemFusion(c);
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
    if(this.deferAfterChain(`turnzero_${cpuCard.uid}`,()=>this.checkPlayerTurnZero(cpuCard)))return;
    if(cpuCard.fromExtra){
      const noel=this.s.zones.player.hand.find(c=>c.id==="noel");
      if(noel&&this.monsterZoneFree("player")&&!this.used("player","noel1")&&await confirmUI("ノエル①を発動する？")){
        this.mark("player","noel1");
        const moved=this.move(noel.uid,"player","field",{faceUp:true});
        if(moved){await this.afterSpecialSummon("player",1);await this.heroFusion(noel,"player",true);}
      }
    }
    const res=this.s.zones.player.hand.find(c=>c.id==="resonance");
    if(res&&this.s.zones.cpu.field.length&&!this.s.zones.player.field.length&&await confirmUI("レゾナンスを手札から発動する？"))await this.resonance(res);
  }

  async inheritGraveTrigger(){
    if(this.deferAfterChain("inherit2",()=>this.inheritGraveTrigger()))return;
    const inh=this.s.zones.player.grave.find(c=>c.id==="inherit");
    if(!inh||this.used("player","inherit2")||!this.monsterZoneFree("player"))return;
    const pool=[...this.s.zones.player.grave,...this.s.zones.player.banished].filter(isHero);
    if(!pool.length)return;
    if(!(await confirmUI("インヘリット②を発動する？")))return;
    this.mark("player","inherit2");this.move(inh.uid,"player","banished");
    const h=await chooseCard("インヘリット②：特殊召喚するレムナリア",pool);if(h){const l=this.zoneOf(h.uid);if(l){this.move(h.uid,"player","field",{faceUp:true});await this.afterSpecialSummon("player",1);await this.heroOnSummon(h);}}
  }

  async worldSummonReaction(){
    if(this.deferAfterChain("worldSummonReaction",()=>this.worldSummonReaction()))return;
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


  async cpuScream(){
    const z=this.s.zones.cpu;
    const sc=z.hand.find(c=>c.id==="scream");
    if(!sc || z.field.some(c=>c.id==="scream") || !this.backrowZoneFree("cpu")) return false;
    await this.activate("cpu","壱世壊を劈く弦声 発動",{spellTrap:true},async()=>{
      this.move(sc.uid,"cpu","field",{faceUp:true});
      await this.step("CPU：スクリームを表側で発動",700);
    });
    return true;
  }

  async cpuScreamTrigger(){
    if(this.deferAfterChain("cpuScreamTrigger",()=>this.cpuScreamTrigger()))return false;
    const z=this.s.zones.cpu;
    const sc=z.field.find(c=>c.id==="scream");
    const tear=z.field.find(c=>["reino","scheiren","havnis","merrli","kit","rulk","kaleido"].includes(c.id));
    if(!sc || !tear || this.used("cpu","scream1")) return false;
    this.mark("cpu","scream1");
    await this.activate("cpu","壱世壊を劈く弦声①",{spellTrap:true,highImpact:true,sendsDeckToGY:true,sourceId:"scream",sourceZone:"field"},async()=>{
      await this.mill("cpu",3);
      this.s.turnMods.screamPlayerAtkMinus500=true;
      this.log("スクリーム①：このターン自分モンスターのATKが500ダウン。");
    });
    return true;
  }

  async cpuInstantFusion(){
    const z=this.s.zones.cpu;
    const inst=z.hand.find(c=>c.id==="instant");
    const kit=z.extra.find(c=>c.id==="kit");
    if(!inst || !kit || this.s.lp.cpu<=1000 || !this.monsterZoneFree("cpu")) return false;
    await this.activate("cpu","簡易融合",{spellTrap:true,specialSummonEffect:true,highImpact:true,sourceId:"instant",sourceUid:inst.uid,sourceZone:"hand"},async()=>{
      this.damage("cpu",1000);
      this.move(inst.uid,"cpu","grave");
      this.move(kit.uid,"cpu","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      await this.afterSpecialSummon("cpu",1);
      kit.metadata.instantFusion=true;
      this.log("CPU：簡易融合でキトカロスを融合召喚扱いで特殊召喚。");
      await this.step("CPU：簡易融合 → キトカロス",1050);
      await this.worldSummonReaction();
      await this.cpuScreamTrigger();
      await this.cpuFusionOnSummon(kit);
      await this.checkPlayerTurnZero(kit);await this.onOpponentExtraSummoned(kit);
    });
    return true;
  }

  async cpuIshizuHandStarter(){
    const z=this.s.zones.cpu;
    const sh=z.hand.find(c=>["keldo","mudora"].includes(c.id));
    if(!sh || !this.monsterZoneFree("cpu")) return false;
    const cost=z.hand.find(c=>c.uid!==sh.uid && FAIRIES.includes(c.id));
    if(!cost) return false;

    await this.activate("cpu",`${cardName(sh)}①`,{monsterEffect:true,specialSummonEffect:true,highImpact:true},async()=>{
      this.move(cost.uid,"cpu","grave");
      await this.onSentByEffect(cost,"cpu");
      this.move(sh.uid,"cpu","field",{faceUp:true});
      await this.afterSpecialSummon("cpu",1);
      this.log(`CPU：${cardName(sh)}を特殊召喚。`);
      await this.step(`CPU：${cardName(sh)} 特殊召喚`,900);

      if(sh.id==="mudora"){
        const gt=z.deck.find(c=>c.id==="gravekeeper");
        if(gt){
          this.move(gt.uid,"cpu","field",{faceUp:true});
          this.log("CPU：ムドラで《墓守の罠》を表側表示で置いた。");
          await this.step("ムドラ → 墓守の罠",750);
        }
      }else{
        const gt=z.deck.find(c=>c.id==="gravekeeper");
        if(gt){
          this.move(gt.uid,"cpu","hand");
          this.log("CPU：ケルドウで《墓守の罠》を手札に加えた。");
          await this.step("ケルドウ → 墓守の罠をサーチ",700);
        }
      }
    });
    return true;
  }

  async cpuMerrliNormal(){
    const z=this.s.zones.cpu;
    if(this.s.normal.cpu<=0 || !this.monsterZoneFree("cpu")) return false;
    const m=z.hand.find(c=>c.id==="merrli");
    if(!m) return false;

    this.s.normal.cpu--;
    this.move(m.uid,"cpu","field",{faceUp:true});
    this.log("CPU：ティアラメンツ・メイルゥを通常召喚。");
    await this.step("CPU：メイルゥ通常召喚",950);
    await this.worldSummonReaction();
    await this.checkPlayerTurnZero(m);
    await this.cpuScreamTrigger();

    if(!this.used("cpu","merrli1")){
      this.mark("cpu","merrli1");
      await this.activate("cpu","メイルゥ①",{monsterEffect:true,highImpact:true,sendsDeckToGY:true,sourceId:"merrli",sourceUid:m.uid,sourceZone:"field"},async()=>{
        await this.mill("cpu",3);
      });
    }
    return true;
  }

  async cpuFallbackNormal(){
    const z=this.s.zones.cpu;
    if(this.s.normal.cpu<=0 || !this.monsterZoneFree("cpu")) return false;
    // If Scream is face-up, any Tear normal summon can turn it into 3 mills.
    const c=z.hand.find(x=>["havnis","scheiren"].includes(x.id));
    if(!c) return false;

    this.s.normal.cpu--;
    this.move(c.uid,"cpu","field",{faceUp:true});
    this.log(`CPU：${cardName(c)}を通常召喚。`);
    await this.step(`CPU：${cardName(c)} 通常召喚`,850);
    await this.worldSummonReaction();
    await this.checkPlayerTurnZero(c);
    await this.cpuScreamTrigger();
    return true;
  }

  async cpuEndPhaseCleanup(){
    const z=this.s.zones.cpu;
    const instants=z.field.filter(c=>c.metadata.instantFusion);
    for(const c of instants){
      c.metadata.instantFusion=false;
      this.move(c.uid,"cpu","grave");
      this.log(`簡易融合のエンドフェイズ処理：${cardName(c)}を破壊。`);
      await this.step(`END：${cardName(c)}を破壊`,650);
      await this.onSentByEffect(c,"cpu");
    }
  }

  async cpuTurn(){
    if(this.s.winner||this.s.busy)return;
    this.s.busy=true;this.render();
    if(this.s.turnPlayer!=="cpu"){this.s.busy=false;this.render();return;}

    this.log("CPUターン開始。");
    await this.step("CPU TURN / MAIN PHASE",650);

    let acted=false;

    // Full-power Tear/Ishizu opening priorities.
    acted=(await this.cpuScream())||acted;
    acted=(await this.cpuIshizuHandStarter())||acted;
    acted=(await this.cpuPerlereino())||acted;
    acted=(await this.cpuInstantFusion())||acted;
    acted=(await this.cpuReino())||acted;
    acted=(await this.cpuScheiren())||acted;

    await this.cpuProcessTearTriggers();
    acted=(await this.cpuKitLine())||acted;
    await this.cpuProcessTearTriggers();

    // Backup normal summon. Merrli is a real 3-mill starter.
    acted=(await this.cpuMerrliNormal())||acted;
    await this.cpuProcessTearTriggers();

    // If Scream is already active, even Havnis/Scheiren normal gives Scream a trigger.
    acted=(await this.cpuFallbackNormal())||acted;
    await this.cpuProcessTearTriggers();

    await this.cpuIshizuShuffle();
    acted=(await this.cpuSetBackrow())||acted;

    if(!acted){
      this.log("CPU：この初手では実装済みの有効な初動なし。");
      await this.step("CPU：有効な初動なし → END",900);
    }

    if(this.s.turn===1){
      this.s.phase="END";
      this.log("先攻1ターン目：バトルフェイズをスキップ。");
      await this.step("先攻1ターン目：BATTLE PHASE SKIP",650);
    }else{
      this.s.phase="BATTLE";
      await this.step("CPU：BATTLE PHASE",650);
      await this.cpuBattle();
      this.s.phase="END";
    }

    await this.cpuEndPhaseCleanup();
    await this.cpuProcessTearTriggers();

    if(!this.s.winner){
      await sleep(300);
      this.nextTurn();
      if(this.s.turnPlayer==="player") await this.step("YOUR TURN",900);
    }

    this.s.busy=false;
    this.render();
  }

  async cpuPerlereinoReturnTrigger(){
    if(this.deferAfterChain("perlereino3",()=>this.cpuPerlereinoReturnTrigger()))return;
    const p=this.s.zones.cpu.field.find(c=>c.id==="perlereino");if(!p||this.used("cpu","perlereino3"))return;
    const candidates=[...this.s.zones.player.field,...this.s.zones.cpu.field].filter(c=>c.uid!==p.uid);
    if(!candidates.length)return;
    this.mark("cpu","perlereino3");
    const target=this.s.zones.player.field.length?this.s.zones.player.field.slice().sort((a,b)=>this.threat(b)-this.threat(a))[0]:candidates[0];
    await this.activate("cpu","ペルレイノ③",{spellTrap:true,sourceId:"perlereino",sourceUid:p.uid,sourceZone:"field",highImpact:true},async()=>{
      if(target.controller==="player"&&this.effectProtected(target,"cpu",{spellTrap:true,sourceId:"perlereino"}))this.log(`${cardName(target)}はペルレイノの効果を受けない。`);
      else {const l=this.zoneOf(target.uid);if(l)this.move(target.uid,l.side,"grave",{byEffect:true});}
    });
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
    if(!p||z.field.some(c=>c.id==="perlereino"))return false;
    await this.activate("cpu","壱世壊＝ペルレイノ",{spellTrap:true,highImpact:true,searchesDeck:true,sourceId:"perlereino",sourceUid:p.uid,sourceZone:"hand"},async()=>{
      this.move(p.uid,"cpu","field",{faceUp:true});
      const t=z.deck.find(c=>c.id==="reino")||z.deck.find(c=>TEAR_GIRLS.includes(c.id));
      if(t){this.move(t.uid,"cpu","hand");this.log(`ペルレイノ：${cardName(t)}をサーチ。`);}
    });
    return true;
  }

  async cpuReino(){
    const z=this.s.zones.cpu,r=z.hand.find(c=>c.id==="reino");if(!r||this.s.normal.cpu<=0||!this.monsterZoneFree("cpu"))return false;
    this.s.normal.cpu--;this.move(r.uid,"cpu","field",{faceUp:true});
    this.log("CPU：ティアラメンツ・レイノハートを通常召喚。");
    await this.step("CPU：レイノハート通常召喚",950);
    await this.worldSummonReaction(); await this.checkPlayerTurnZero(r);
    await this.cpuScreamTrigger();
    await this.activate("cpu","レイノハート①",{monsterEffect:true,highImpact:true,sendsDeckToGY:true,sourceId:"reino",sourceUid:r.uid,sourceZone:"field"},async()=>{
      const t=z.deck.find(c=>c.id==="merrli")||z.deck.find(c=>TEAR_GIRLS.includes(c.id));
      if(t){this.move(t.uid,"cpu","grave");this.log(`レイノハート：${cardName(t)}を墓地へ。`);await this.onSentByEffect(t,"cpu");}
    });
    return true;
  }

  async cpuScheiren(){
    const z=this.s.zones.cpu,s=z.hand.find(c=>c.id==="scheiren");if(!s||!this.monsterZoneFree("cpu"))return false;
    const d=z.hand.find(c=>c.uid!==s.uid && C[c.id]?.kind==="monster");if(!d)return false;
    await this.activate("cpu","シェイレーン①",{monsterEffect:true,specialSummonEffect:true,sendsDeckToGY:true,highImpact:true,sourceId:"scheiren",sourceUid:s.uid,sourceZone:"hand"},async()=>{
      this.move(s.uid,"cpu","field",{faceUp:true});
      this.move(d.uid,"cpu","grave");
      this.log(`シェイレーン：${cardName(d)}を手札から墓地へ。`);
      await this.onSentByEffect(d,"cpu");
      await this.step("CPU：シェイレーン特殊召喚",900);
      await this.worldSummonReaction(); await this.checkPlayerTurnZero(s);
      await this.cpuScreamTrigger();
      await this.mill("cpu",3);
    });
    return true;
  }

  async mill(side,n){
    const z=this.s.zones[side], moved=[];
    for(let i=0;i<n&&z.deck.length;i++){
      const c=z.deck.shift();z.grave.push(c);moved.push(c);
      this.log(`${cardName(c)}が墓地へ。`);
    }
    if(moved.length) await this.step(`${side==="cpu"?"CPU":"YOU"}：${moved.length}枚を墓地へ`,780);
    for(const c of moved)await this.onSentByEffect(c,side);
  }

  async onSentByEffect(c,side){
    if(side==="cpu")await this.inheritGraveTrigger();

    if(TEAR_GIRLS.includes(c.id)&&!this.used(side,c.id+"fusion"))c.metadata.pendingFusion=true;
    if(ISHIZU_MILLERS.includes(c.id)&&!this.used(side,c.id+"mill")){
      this.mark(side,c.id+"mill");await this.mill(side,5);await this.mill(this.opp(side),5);
    }
    if(c.id==="kit"&&!this.used(side,"kit3")){this.mark(side,"kit3");await this.mill(side,5);}

    if(side==="cpu" && c.id==="reino" && !this.used("cpu","reino2") && this.monsterZoneFree("cpu")){
      const cost=this.s.zones.cpu.hand.find(x=>isTear(x));
      if(cost){
        this.mark("cpu","reino2");
        this.move(c.uid,"cpu","field",{faceUp:true});c.metadata.banishOnLeave=true;await this.afterSpecialSummon("cpu",1);
        this.move(cost.uid,"cpu","grave",{byEffect:true});
        this.log("レイノハート②：自己蘇生しティアラメンツカードを墓地へ。");
        await this.onSentByEffect(cost,"cpu");
      }
    }

    if(side==="cpu" && c.id==="scream" && !this.used("cpu","scream2")){
      this.mark("cpu","scream2");
      const trap=this.s.zones.cpu.deck.find(x=>["sulliek"].includes(x.id));
      if(trap){this.move(trap.uid,"cpu","hand");this.log("スクリーム②：ティアラメンツ罠をサーチ。");}
    }
    if(side==="cpu" && c.id==="sulliek" && !this.used("cpu","sulliek2")){
      this.mark("cpu","sulliek2");
      const mon=this.s.zones.cpu.deck.find(x=>["reino",...TEAR_GIRLS].includes(x.id));
      if(mon){this.move(mon.uid,"cpu","hand");this.log(`サリーク②：${cardName(mon)}をサーチ。`);}
    }
    if(side==="cpu" && c.id==="rulk" && c.fusionSummoned && !this.used("cpu","rulk3") && this.monsterZoneFree("cpu")){
      this.mark("cpu","rulk3");this.move(c.uid,"cpu","field",{faceUp:true});await this.afterSpecialSummon("cpu",1);this.log("ルルカロス③：自己蘇生。");
    }
    if(side==="cpu" && c.id==="kaleido" && !this.used("cpu","kaleido2") && this.monsterZoneFree("cpu")){
      this.mark("cpu","kaleido2");this.move(c.uid,"cpu","field",{faceUp:true});await this.afterSpecialSummon("cpu",1);
      const send=this.s.zones.cpu.deck.find(x=>isTear(x));if(send){this.move(send.uid,"cpu","grave",{byEffect:true});await this.onSentByEffect(send,"cpu");}
      this.log("カレイドハート②：自己蘇生＋ティアラメンツを墓地へ。");
    }
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
    await this.activate("cpu",`${cardName(source)} 墓地融合`,{monsterEffect:true,graveEffect:true,specialSummonEffect:true,highImpact:true,usesGrave:true,sourceId:source.id,sourceUid:source.uid,sourceZone:"grave"},async()=>{
      this.shuffleToDeck(source.uid,"cpu");this.shuffleToDeck(second.uid,"cpu");
      this.move(ex.uid,"cpu","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      await this.afterSpecialSummon("cpu",1);
      this.log(`CPU融合召喚：${cardName(ex)}`);
      await this.step(`CPU融合召喚：${cardName(ex)}`,1050);
      await this.worldSummonReaction();
      await this.cpuScreamTrigger();
      await this.cpuFusionOnSummon(ex);
      await this.checkPlayerTurnZero(ex);await this.onOpponentExtraSummoned(ex);
    });
  }

  async cpuFusionOnSummon(ex){
    const z=this.s.zones.cpu;
    if(ex.metadata.effectsNegatedUntilTurn===this.s.turn){this.log(`${cardName(ex)}は効果無効中。`);return;}
    if(ex.id==="kit"&&!this.used("cpu","kit1")){
      this.mark("cpu","kit1");
      const fusionSource=z.deck.find(c=>TEAR_GIRLS.includes(c.id)&&!this.used("cpu",c.id+"fusion"));
      if(fusionSource){this.move(fusionSource.uid,"cpu","grave",{byEffect:true});this.log(`キトカロス①：${cardName(fusionSource)}を墓地へ。`);await this.onSentByEffect(fusionSource,"cpu");}
      else {const t=z.deck.find(c=>TEAR_GIRLS.includes(c.id))||z.deck.find(c=>c.id==="reino");if(t){this.move(t.uid,"cpu","hand");this.log(`キトカロス①：${cardName(t)}を手札へ。`);}}
    }
    if(ex.id==="kaleido"&&!this.used("cpu","kaleido1")){
      this.mark("cpu","kaleido1");
      const candidates=this.s.zones.player.field.filter(c=>!["eterna","vares"].includes(c.id));
      if(candidates.length){
        const t=candidates.sort((a,b)=>this.threat(b)-this.threat(a))[0];
        await this.activate("cpu","カレイドハート①",{monsterEffect:true,highImpact:true,sourceId:"kaleido",sourceUid:ex.uid,sourceZone:"field"},async()=>{
          if(this.effectProtected(t,"cpu",{monsterEffect:true,sourceId:"kaleido"})){this.log(`${cardName(t)}はカレイドハートの効果を受けない。`);return;}
          if(isFusion(t))await this.remFusionLeavesByOpponent(t,"deck");else this.shuffleToDeck(t.uid,"player");
        });
      }
    }
  }

  async cpuKitLine(){
    const z=this.s.zones.cpu,kit=z.field.find(c=>c.id==="kit");if(!kit||this.used("cpu","kit2"))return false;
    const t=[...z.hand,...z.grave].find(c=>TEAR_GIRLS.includes(c.id));if(!t)return false;
    this.mark("cpu","kit2");
    await this.activate("cpu","キトカロス②",{monsterEffect:true,specialSummonEffect:true,highImpact:true,sourceId:"kit",sourceUid:kit.uid,sourceZone:"field"},async()=>{
      this.move(t.uid,"cpu","field",{faceUp:true});
      await this.afterSpecialSummon("cpu",1);
      await this.step(`キトカロス②：${cardName(t)}を特殊召喚`,850);
      await this.worldSummonReaction(); await this.checkPlayerTurnZero(t);
      await this.cpuScreamTrigger();
      this.move(kit.uid,"cpu","grave");
      await this.onSentByEffect(kit,"cpu");
    });
    return true;
  }

  async cpuIshizuShuffle(){
    const z=this.s.zones.cpu,sh=z.grave.find(c=>ISHIZU_SHUFFLERS.includes(c.id));if(!sh)return;
    const targets=this.s.zones.player.grave.filter(isRem).sort((a,b)=>this.threat(b)-this.threat(a)).slice(0,3);if(!targets.length)return;
    this.move(sh.uid,"cpu","banished");for(const t of targets)this.shuffleToDeck(t.uid,"player");
    this.log(`CPU：${cardName(sh)}で墓地3枚までをデッキへ戻した。`);
  }

  async cpuSetBackrow(){
    const z=this.s.zones.cpu;
    let acted=false;
    const s=z.hand.find(c=>c.id==="sulliek");
    if(s){
      this.move(s.uid,"cpu","field",{set:true});
      this.log("CPU：サリークをセット。");
      await this.step("CPU：カードを1枚セット",600);
      acted=true;
    }
    const g=z.hand.find(c=>c.id==="gravekeeper");
    if(g){
      this.move(g.uid,"cpu","field",{set:true});
      this.log("CPU：《墓守の罠》をセット。");
      await this.step("CPU：カードを1枚セット",600);
      acted=true;
    }
    return acted;
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
      if(!this.fieldMonsters("player").length){
        this.damage("player",atk(a));this.log(`${cardName(a)}が直接攻撃。`);
        await this.step(`${cardName(a)}：直接攻撃`,620);
        continue;
      }
      const targets=this.fieldMonsters("player").slice().sort((x,y)=>atk(x)-atk(y));
      const t=targets.find(x=>x.id!=="eterna")||targets[0];
      const A=atk(a),D=atk(t);
      if(A>D){
        this.damage("player",A-D);
        if(t.id==="vares")this.log("ヴァレス②：戦闘では破壊されない。");
        else if(isFusion(t))await this.remFusionLeavesByOpponent(t,"grave");
        else this.move(t.uid,"player","grave");
        this.log(`${cardName(a)}が${cardName(t)}を攻撃。`);
        await this.step(`${cardName(a)} → ${cardName(t)}`,620);
      }else if(A<D){
        this.damage("cpu",D-A);this.move(a.uid,"cpu","grave");
      }else{this.move(a.uid,"cpu","grave");if(t.id==="vares")this.log("ヴァレス②：戦闘では破壊されない。");else if(isFusion(t))await this.remFusionLeavesByOpponent(t,"grave");else this.move(t.uid,"player","grave");}
    }
  }

  canAttack(c){return this.s.turnPlayer==="player"&&this.s.phase==="BATTLE"&&!this.s.attacked.player[c.uid]&&atk(c)>0;}
  async playerAttack(c){
    this.s.attacked.player[c.uid]=true;const p=this.fieldMonsters("cpu");
    if(!p.length){this.damage("cpu",atk(c));this.log(`${cardName(c)}が直接攻撃。`);return;}
    const t=await chooseCard("攻撃対象",p,true);if(!t)return;const A=atk(c),D=atk(t);
    if(A>D){
      this.damage("cpu",A-D);
      if(c.id==="vares"){this.move(t.uid,"cpu","banished");const gain=Math.floor((C[t.id]?.atk||0)/2);c.metadata.bonusAtk=(c.metadata.bonusAtk||0)+gain;this.log(`ヴァレス③：${cardName(t)}を除外、ATK+${gain}。`);}
      else {
        const rulk=this.s.zones.cpu.field.find(x=>x.id==="rulk");
        const protectedByRulk=rulk&&t.uid!==rulk.uid&&["scheiren","havnis","merrli","kit"].includes(t.id);
        if(protectedByRulk)this.log("ルルカロス①：他の水族モンスターは戦闘破壊されない。");
        else this.move(t.uid,"cpu","grave");
      }
    }else if(A<D){
      this.damage("player",D-A);if(c.id!=="vares")this.move(c.uid,"player","grave");else this.log("ヴァレス②：戦闘では破壊されない。");
    }else{
      this.move(t.uid,"cpu","grave");if(c.id!=="vares")this.move(c.uid,"player","grave");else this.log("ヴァレス②：戦闘では破壊されない。");
    }
  }

  nextTurn(){
    if(this.s.winner)return;
    this.s.turn++;this.s.turnPlayer=this.opp(this.s.turnPlayer);this.s.phase="MAIN1";
    this.s.normal[this.s.turnPlayer]=1;this.s.once[this.s.turnPlayer]={};this.s.attacked[this.s.turnPlayer]={};
    this.s.maxxC.player=false;this.s.maxxC.cpu=false;
    this.s.turnFlags.cpuMonsterEffect=false;this.s.turnMods.screamPlayerAtkMinus500=false;
    for(const side of ["player","cpu"])for(const c of this.s.zones[side].field){
      if(c.metadata.effectsNegatedUntilTurn && c.metadata.effectsNegatedUntilTurn<this.s.turn)delete c.metadata.effectsNegatedUntilTurn;
      if(c.metadata.atkHalvedUntilTurn && c.metadata.atkHalvedUntilTurn<this.s.turn)delete c.metadata.atkHalvedUntilTurn;
    }
    this.draw(this.s.turnPlayer,1);
    this.log(`${this.s.turnPlayer==="player"?"自分":"CPU"}ターン開始。`);
    this.render();
    if(this.s.turnPlayer==="cpu")setTimeout(()=>this.cpuTurn(),400);
  }

  async endPlayerTurn(){
    if(this.s.turnPlayer!=="player"||this.s.busy)return;
    this.s.phase="END";this.nextTurn();
  }

  cycleSpeed(){
    const vals=[0.65,1,1.75,3];const i=vals.indexOf(this.s.speed);this.s.speed=vals[(i+1)%vals.length];this.log(`表示速度 x${this.s.speed}`);this.render();
  }
  async copyLog(){
    const text=[`REMNARIA vs TEAR ${BUILD_VERSION}`,`TURN ${this.s.turn} ${this.s.turnPlayer} ${this.s.phase}`,...this.s.logs.slice().reverse()].join("\n");
    try{await navigator.clipboard.writeText(text);this.log("デュエルログをコピーした。");}catch(e){this.log("ログコピーに失敗。ブラウザ権限を確認してね。");}
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
      b.innerHTML=`<b>${escapeHtml(cardName(c))}</b><small>${escapeHtml(kindLabel(c))} / ${escapeHtml(C[c.id]?.role||"")}</small>`;
      b.onclick=()=>{ $("#choiceOverlay").classList.remove("show");const r=choiceResolver;choiceResolver=null;r(i); };
      box.appendChild(b);
    });
    $("#choiceOverlay").classList.add("show");
  });
}
async function chooseDistinctCard(title,cards){
  if(!cards.length)return null;
  const groups=[];
  const seen=new Set();
  for(const c of cards){
    if(seen.has(c.id))continue;
    seen.add(c.id);
    groups.push(c);
  }
  const labels=groups.map(c=>`${cardName(c)}　[${kindLabel(c)}]`);
  const i=await chooseOption(title,labels);
  if(i<0)return null;
  const selectedId=groups[i].id;
  return cards.find(c=>c.id===selectedId)||null;
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
function showTextUI(title,text){
  return new Promise(resolve=>{window.__textResolve=resolve;$("#textTitle").textContent=title;$("#textBody").textContent=text;$("#textOverlay").classList.add("show");});
}
function closeTextUI(){$("#textOverlay").classList.remove("show");const r=window.__textResolve;window.__textResolve=null;if(r)r();}

function confirmUI(text){
  return new Promise(resolve=>{
    confirmResolver=resolve;$("#confirmText").textContent=text;$("#confirmOverlay").classList.add("show");
  });
}
function closeConfirm(v){$("#confirmOverlay").classList.remove("show");const r=confirmResolver;confirmResolver=null;if(r)r(v);}

function renderCard(c,zone,side){
  const d=C[c.id]||{};
  const div=document.createElement("button");div.className=`card ${d.side||""} ${c.set?"set":""} ${c.metadata?.effectsNegatedUntilTurn===game?.s.turn?"effectsNegated":""}`;
  if(d.img && side==="player"){
    const inherited=c.metadata?.copiedCardId?`<small class="inheritTag">継承:${escapeHtml(C[c.metadata.copiedCardId]?.name||c.metadata.copiedCardId)}</small>`:"";
    div.innerHTML=`<img src="assets/${d.img}" alt=""><span>${escapeHtml(d.name)}</span>${inherited}`;
  }
  else div.innerHTML=`<div class="textCard"><b>${escapeHtml(d.name||c.id)}</b><small>${d.atk!=null?`ATK ${d.atk}`:""} ${escapeHtml(d.role||"")}</small></div>`;
  if(side==="player")div.onclick=()=>game.startPlayerCard(c.uid);
  return div;
}
function renderZone(id,cards,zone,side){
  const el=$(id);if(!el)return;el.innerHTML="";cards.forEach(c=>el.appendChild(renderCard(c,zone,side)));
}
function renderFixedSlots(id,cards,side,count=5){
  const el=$(id);if(!el)return;
  el.innerHTML="";
  const shown=cards.slice(0,count);
  for(let i=0;i<count;i++){
    const slot=document.createElement("div");
    slot.className="duelSlot";
    slot.dataset.slot=i+1;
    if(shown[i])slot.appendChild(renderCard(shown[i],"field",side));
    else slot.innerHTML=`<span>${i+1}</span>`;
    el.appendChild(slot);
  }
}
function renderFieldSpell(id,card,side){
  const el=$(id);if(!el)return;
  el.innerHTML="";
  const slot=document.createElement("div");
  slot.className="duelSlot fieldSpellSlot";
  if(card)slot.appendChild(renderCard(card,"field",side));
  else slot.innerHTML="<span>FIELD</span>";
  el.appendChild(slot);
}
function renderAll(){
  if(!game)return;const s=game.s;
  game.validateUniqueState();

  const cpuMon=s.zones.cpu.field.filter(isMonsterCard);
  const cpuBack=s.zones.cpu.field.filter(c=>isSpellTrapCard(c)&&!isFieldSpell(c));
  const cpuFs=s.zones.cpu.field.find(isFieldSpell)||null;
  const pMon=s.zones.player.field.filter(isMonsterCard);
  const pBack=s.zones.player.field.filter(c=>isSpellTrapCard(c)&&!isFieldSpell(c));
  const pFs=s.zones.player.field.find(isFieldSpell)||null;

  renderFixedSlots("#cpuField",cpuMon,"cpu",5);
  renderFixedSlots("#cpuBackrow",cpuBack,"cpu",5);
  renderFieldSpell("#cpuFieldSpell",cpuFs,"cpu");
  renderFixedSlots("#playerField",pMon,"player",5);
  renderFixedSlots("#playerBackrow",pBack,"player",5);
  renderFieldSpell("#playerFieldSpell",pFs,"player");
  renderZone("#hand",s.zones.player.hand,"hand","player");
  const tab=$("#resourceTabs").dataset.tab||"grave";
  renderZone("#resourceCards",s.zones.player[tab],tab,"player");
  $("#cpuLP").textContent=s.lp.cpu;$("#playerLP").textContent=s.lp.player;
  const pm=document.querySelector("#playerMZCount");if(pm)pm.textContent=`${pMon.length}/5`;
  const pb=document.querySelector("#playerSTCount");if(pb)pb.textContent=`${pBack.length}/5`;
  const cm=document.querySelector("#cpuMZCount");if(cm)cm.textContent=`${cpuMon.length}/5`;
  const cb=document.querySelector("#cpuSTCount");if(cb)cb.textContent=`${cpuBack.length}/5`;
  $("#turnText").textContent=`TURN ${s.turn} / ${s.turnPlayer==="player"?"YOU":"CPU"} / ${s.phase}`;
  const cs=document.querySelector("#chainStrip");
  if(cs){
    cs.innerHTML=s.chain.length
      ? s.chain.map((x,i)=>`<span>CL${i+1} ${escapeHtml(x.label)}${x.negated?" ×":""}</span>`).join("")
      : "";
    cs.classList.toggle("show",s.chain.length>0);
  }
  const ver=document.querySelector("#buildVersion");
  if(ver)ver.textContent=BUILD_VERSION;
  const sp=document.querySelector("#speedText");if(sp)sp.textContent=`x${s.speed}`;
  const health=game.stateHealth(), hb=document.querySelector("#healthBadge");
  if(hb){hb.textContent=health.ok?"STATE OK":`STATE ERR ${health.issues.join(" / ")}`;hb.classList.toggle("bad",!health.ok);}
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
window.cycleSpeed=()=>game?.cycleSpeed();
window.copyDuelLog=()=>game?.copyLog();
window.closeChoice=closeChoice;
window.closeConfirm=closeConfirm;
window.closeTextUI=closeTextUI;

document.addEventListener("DOMContentLoaded",()=>{
  $("#startOverlay").classList.add("show");
});
})();
