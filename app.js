
(() => {
"use strict";
const BUILD_VERSION="v1.5.0";

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
function kindLabel(c){
  const k=C[c.id]?.kind;
  if(k==="monster")return "モンスター";
  if(k==="fusion")return "融合モンスター";
  if(k==="spell")return "魔法";
  if(k==="trap")return "罠";
  return "カード";
}
function atk(c){ return C[c.id]?.atk || 0; }
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
    this.s.zones[toSide][toZone].push(moved);
    this.validateUniqueState();
    return moved;
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

  chainLink(side,label,meta,effect){
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
    if(alka && !this.used("player","alkaNegate") && target.meta.monsterEffect && (alka.metadata.materialTypes||[]).includes("monster"))
      opts.push({label:"アルカ②：モンスター効果無効",kind:"alkaNegate",source:alka});
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
        this.negateLink(target,o.label);
      });
    }

    if(o.kind==="alkaNegate"){
      this.mark("player","alkaNegate");
      return this.chainLink("player","アルカ②",{monsterEffect:true,sourceId:"alka",sourceUid:o.source.uid},async()=>{
        this.negateLink(target,"アルカ②");
      });
    }

    if(o.kind==="reject"){
      this.move(o.card.uid,"player","grave");
      return this.chainLink("player","レムナリア・リジェクト",{spellTrap:true,sourceId:"reject"},async()=>{
        this.negateLink(target,"リジェクト");
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
    if(target.side==="player" && rulk && !this.used("cpu","rulk2") && target.meta.specialSummonEffect){
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
        const tl=this.zoneOf(tear.uid);if(tl){this.move(tear.uid,tl.side,"grave");await this.onSentByEffect(tear,"cpu");}
        this.negateLink(target,"サリーク");
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
      if(["imperm","called","crossout"].includes(c.id))out.push({label:"セット",go:async()=>{this.move(c.uid,"player","field",{set:true});this.log(`${cardName(c)}をセット。`);}});
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
    ex.metadata.materialTypes=[C[hero.id].kind,C[mat.id]?.kind||"monster"];
    ex.metadata.opponentMaterial=mat.owner!==side;
    this.move(ex.uid,side,"field",{faceUp:true,fromExtra:true,fusionSummoned:true});
    this.log(`融合召喚：${cardName(ex)}`);
    await this.afterSpecialSummon(side,1);
    await this.onFusionSummoned(ex,side,hero,mat);
    await this.materialTrigger(hero,side);
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
      this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      await this.afterSpecialSummon("player",1);
      await this.materialTrigger(h,"player");
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
    await this.activate("player","レムナリア・レゾナンス",{spellTrap:true,specialSummonEffect:true,summonsFromDeck:true,highImpact:true,sourceId:"resonance",sourceUid:c.uid,sourceZone:"hand"},async()=>{
      this.move(c.uid,"player","grave");
      this.move(h.uid,"player","field",{faceUp:true});
      await this.afterSpecialSummon("player",1);
      const ex=this.s.zones.player.extra.find(x=>x.id===FUSION_MAP[h.id]);if(!ex)return;
      this.move(h.uid,"player","banished");this.move(m.uid,"cpu","banished");
      this.move(ex.uid,"player","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      await this.afterSpecialSummon("player",1);
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
    await this.activate("player","アルカ③ 再融合",{monsterEffect:true,specialSummonEffect:true,usesGrave:true,highImpact:true,sourceId:"alka",sourceUid:c.uid,sourceZone:"grave"},async()=>{
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
      await this.checkPlayerTurnZero(kit);
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
    await this.activate("cpu",`${cardName(source)} 墓地融合`,{monsterEffect:true,graveEffect:true,specialSummonEffect:true,highImpact:true,usesGrave:true,sourceId:source.id,sourceUid:source.uid,sourceZone:"grave"},async()=>{
      this.shuffleToDeck(source.uid,"cpu");this.shuffleToDeck(second.uid,"cpu");
      this.move(ex.uid,"cpu","field",{faceUp:true,fromExtra:true,fusionSummoned:true});
      await this.afterSpecialSummon("cpu",1);
      this.log(`CPU融合召喚：${cardName(ex)}`);
      await this.step(`CPU融合召喚：${cardName(ex)}`,1050);
      await this.worldSummonReaction();
      await this.cpuScreamTrigger();
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
        await this.activate("cpu","カレイドハート①",{monsterEffect:true,highImpact:true,sourceId:"kaleido",sourceUid:ex.uid,sourceZone:"field"},async()=>this.shuffleToDeck(t.uid,"player"));
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
    this.s.maxxC.player=false;this.s.maxxC.cpu=false;
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
