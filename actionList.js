/*ActionTable methods:
actionList.get(location)
actionList.set(location,data)
actionList.createAction(location)

Actions are added in the form:
type,{imagePath,width,height,sheetInfo,
      cost,stat,multiplier,constant,damageType,targetType,range,
    effectRadius,selfEffect,targetEffect,movement,speed,travel,animationType,
  description}
*/

actionList = new ActionTable(172)

/*Nigelas*/
actionList.set("Slash",{imagePath:"./Assets/Effects/sharp-melee.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},
    {animation:"impact",frames:4},{animation:"self",frames:4}]
  ,cost:0,stat:"str",
  multiplier:1,constant:8,damageType:"sharp",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"melee",
  description:"Slash a target with a blade"})

actionList.set("Shield Bash",{imagePath:"./Assets/Effects/blunt.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"self",frames:4}],cost:0,stat:"str",
  multiplier:1,constant:4,damageType:"blunt",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:"stagger",movement:0,speed:0,travel:null,animationType:"melee",
  description:"Strike a target with a shield"})

actionList.set("Brace",{imagePath:"./Assets/Effects/blunt-special.png",width:32,height:32,
  sheetInfo:[{animation:"self",frames:8}],cost:1,stat:"const",
  multiplier:0,constant:0,damageType:"blunt",targetType:"self",range:0,effectRadius:0,
  selfEffect:"braced",targetEffect:null,movement:0,speed:0,travel:null,animationType:"self",
  description:"Reduce damage from next hit"})

actionList.set("Cleave",{imagePath:"./Assets/Effects/sharp-melee.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},
    {animation:"impact",frames:4},{animation:"self",frames:4}]
  ,cost:0,stat:"str",
  multiplier:1,constant:6,damageType:"sharp",targetType:"area",range:0,effectRadius:32,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"self",
  description:"Attack in an arc with a blade"})

actionList.set("Axe-Throw",{imagePath:"./Assets/Effects/sharp-melee.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},
    {animation:"impact",frames:4},{animation:"self",frames:4}]
  ,cost:0,stat:"str",
  multiplier:1,constant:4,damageType:"sharp",targetType:"single",range:96,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:-1,travel:"parabolic",animationType:"proj",
  description:"Throw an axe at a target"})

actionList.set("Infuse",{imagePath:"./Assets/Effects/nehyldrite.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},
    {animation:"proj-r",frames:4},{animation:"proj-l",frames:4},{animation:"impact",frames:4}],cost:0,stat:"str",
  multiplier:2,constant:14,damageType:"sharp",targetType:"single",range:32,effectRadius:0,
  selfEffect:"nehyldUsed",targetEffect:null,movement:0,speed:2,travel:null,animationType:"melee",
  description:"Slash with sharpened blade; 1x"})


/*Kauplaire*/
actionList.set("Longbow",{imagePath:"./Assets/Effects/sharp-ranged.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:4},{animation:"swing-l",frames:4},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},
    {animation:"impact",frames:4}],cost:0,stat:"int",
  multiplier:1,constant:9,damageType:"sharp",targetType:"single",range:2880,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:"linear",animationType:"proj",
  description:"Launch an arrow from a longbow"})

actionList.set("Quick-Bolt",{imagePath:"./Assets/Effects/sharp-ranged.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:4},{animation:"swing-l",frames:4},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},
    {animation:"impact",frames:4}],cost:0,stat:"int",
  multiplier:1,constant:5,damageType:"sharp",targetType:"single",range:160,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:-3,travel:"parabolic",animationType:"proj",
  description:"Fire a small crossbow's bolt"})

actionList.set("Lock-On",{imagePath:"./Assets/Effects/unity.png",width:32,height:32,
  sheetInfo:[{animation:"target",frames:4},{animation:"swing-l",frames:3},{animation:"swing-r",frames:3},{animation:"self",frames:4}],cost:1,stat:"const",
  multiplier:0,constant:0,damageType:"unity",targetType:"single",range:160,effectRadius:0,
  selfEffect:"targeting",targetEffect:"target",movement:0,speed:-1,travel:null,animationType:"target",
  description:"Lock in on a target"})

actionList.set("Pin Shot",{imagePath:"./Assets/Effects/sharp-ranged.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:4},{animation:"swing-l",frames:4},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},{animation:"impact",frames:4}],cost:0,stat:"int",
  multiplier:1,constant:7,damageType:"sharp",targetType:"single",range:256,effectRadius:0,
  selfEffect:null,targetEffect:"pin",movement:0,speed:1,travel:"parabolic",animationType:"proj",
  description:"Hinder a target's movement"})

actionList.set("Withdraw",{imagePath:"./Assets/Effects/unity.png",width:32,height:32,
  sheetInfo:[{animation:"target",frames:4},{animation:"swing-l",frames:3},{animation:"swing-r",frames:3},{animation:"self",frames:4}],cost:1,stat:"const",
  multiplier:0,constant:0,damageType:"unity",targetType:"point",range:48,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:48,speed:-2,travel:"linear",animationType:"path",
  description:"Safely disengage melee combat"})

actionList.set("Assess",{imagePath:"./Assets/Effects/nehyldrite.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},{animation:"impact",frames:4},{animation:"self",frames:4},{animation:"target",frames:4}],cost:0,stat:"const",
  multiplier:0,constant:0,damageType:"unity",targetType:"area",range:0,effectRadius:96,
  selfEffect:"nehyldUsed",targetEffect:"assess",movement:0,speed:2,travel:null,animationType:"self",
  description:"Find weaknesses in an area; 1x"})


/*Ifforrem*/
actionList.set("Crush",{imagePath:"./Assets/Effects/blunt.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"self",frames:4}],cost:0,stat:"str",
  multiplier:1,constant:8,damageType:"blunt",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:2,travel:null,animationType:"melee",
  description:"Strike a target with a hammer"})

actionList.set("Concuss",{imagePath:"./Assets/Effects/blunt.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"self",frames:4}],cost:0,stat:"str",
  multiplier:1,constant:4,damageType:"blunt",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:"concuss",movement:0,speed:1,travel:null,animationType:"melee",
  description:"Daze a target using a hammer"})

actionList.set("Endure",{imagePath:"./Assets/Effects/unity.png",width:32,height:32,
  sheetInfo:[{animation:"target",frames:4},{animation:"swing-l",frames:3},{animation:"swing-r",frames:3},{animation:"self",frames:4}],cost:1,stat:"vit",
  multiplier:-1,constant:-5,damageType:"unity",targetType:"self",range:0,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"self",
  description:"Strengthen resolve to fight"})

actionList.set("Disarm",{imagePath:"./Assets/Effects/blunt.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"self",frames:4}],cost:0,stat:"str",
  multiplier:1,constant:4,damageType:"blunt",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:"disarm",movement:0,speed:1,travel:null,animationType:"melee",
  description:"Prevent a target's next action"})

actionList.set("Sweep",{imagePath:"./Assets/Effects/blunt.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"self",frames:4}],cost:0,stat:"str",
  multiplier:1,constant:6,damageType:"blunt",targetType:"area",range:0,effectRadius:32,
  selfEffect:null,targetEffect:null,movement:0,speed:1,travel:null,animationType:"self",
  description:"Attack in an arc using a hammer"})

actionList.set("Propel",{imagePath:"./Assets/Effects/propel.png",width:32,height:32,
  sheetInfo:[{animation:"swing-l",frames:3},{animation:"swing-r",frames:3},{animation:"impact",frames:4}],cost:0,stat:"const",
  multiplier:0,constant:0,damageType:"blunt",targetType:"point",range:96,effectRadius:0,
  selfEffect:"nehyldUsed",targetEffect:null,movement:96,speed:-1,travel:"parabolic",animationType:"path",
  description:"Leap across a great length; 1x"})


/*Calian*/
actionList.set("SmartStrike",{imagePath:"./Assets/Effects/lumi-melee.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"target",frames:5}],cost:0,stat:"int",
  multiplier:1,constant:6,damageType:"lumi",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"melee",
  description:"Strike a target using tech"})

actionList.set("Automata",{imagePath:"./Assets/Effects/spawn.png",width:32,height:32,
  sheetInfo:[{animation:"target",frames:5}],cost:3,stat:"const",
  multiplier:0,constant:0,damageType:"lumi",targetType:"point",range:64,effectRadius:0,
  selfEffect:null,targetEffect:"spawnAutomata",movement:0,speed:0,travel:null,animationType:"target",
  description:"Deploy a mechanical ally"})

actionList.set("Mend",{imagePath:"./Assets/Effects/electro.png",width:32,height:32,
  sheetInfo:[{animation:"proj-l",frames:3},{animation:"proj-r",frames:3},{animation:"impact",frames:4},{animation:"self",frames:4}],cost:1,stat:"int",
  multiplier:-1,constant:-6,damageType:"electro",targetType:"area",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"target",
  description:"Repair a mechanical ally"})

actionList.set("Stun",{imagePath:"./Assets/Effects/electro.png",width:32,height:32,
  sheetInfo:[{animation:"proj-l",frames:3},{animation:"proj-r",frames:3},{animation:"impact",frames:4},{animation:"self",frames:4}],cost:1,stat:"const",
  multiplier:0,constant:2,damageType:"electro",targetType:"single",range:48,effectRadius:0,
  selfEffect:null,targetEffect:"stun",movement:0,speed:0,travel:"linear",animationType:"proj",
  description:"Stun an enemy with a jolt"})

actionList.set("Detect",{imagePath:"./Assets/Effects/electro.png",width:32,height:32,
  sheetInfo:[{animation:"proj-l",frames:3},{animation:"proj-r",frames:3},{animation:"impact",frames:4},{animation:"self",frames:4}],cost:1,stat:"const",
  multiplier:0,constant:0,damageType:"electro",targetType:"area",range:0,effectRadius:80,
  selfEffect:"detecting",targetEffect:"reveal",movement:0,speed:-1,travel:null,animationType:"self",
  description:"Reveal everything in an area"})

actionList.set("Shield",{imagePath:"./Assets/Effects/spawn.png",width:32,height:32,
  sheetInfo:[{animation:"target",frames:5}],cost:0,stat:"const",
  multiplier:0,constant:0,damageType:"blunt",targetType:"point",range:64,effectRadius:0,
  selfEffect:"nehyldUsed",targetEffect:"spawnShield",movement:0,speed:0,travel:null,animationType:"target",
  description:"Conjure a defensive barrier; 1x"})


  /*Ddwgyl*/
actionList.set("Thrust",{imagePath:"./Assets/Effects/sharp-ranged.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:4},{animation:"swing-l",frames:4},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},{animation:"impact",frames:4}],cost:0,stat:"str",
  multiplier:1,constant:6,damageType:"sharp",targetType:"single",range:48,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"melee",
  description:"Lunge at an enemy with a polearm"})

actionList.set("Hydrodash",{imagePath:"./Assets/Effects/hydro.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:4},{animation:"swing-l",frames:4},{animation:"impact",frames:4},
  {animation:"target",frames:4},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},{animation:"rain",frames:4}],
  cost:1,stat:"spt",
  multiplier:1,constant:6,damageType:"hydro",targetType:"area",range:96,effectRadius:32,
  selfEffect:null,targetEffect:null,movement:96,speed:1,travel:"linear",animationType:"path",
  description:"Charge forwards cloaked in water"})

actionList.set("Fountain",{imagePath:"./Assets/Effects/hydro.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:4},{animation:"swing-l",frames:4},{animation:"impact",frames:4},
  {animation:"target",frames:4},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},{animation:"rain",frames:4}],cost:2,stat:"spt",
  multiplier:-1,constant:-4,damageType:"hydro",targetType:"area",range:0,effectRadius:80,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"rain",
  description:"Cast an area of healing rain"})

actionList.set("Heal Mist",{imagePath:"./Assets/Effects/hydro.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:4},{animation:"swing-l",frames:4},{animation:"impact",frames:4},
  {animation:"target",frames:4},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},{animation:"rain",frames:4}],cost:1,stat:"spt",
  multiplier:-1,constant:-8,damageType:"hydro",targetType:"single",range:72,effectRadius:16,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"target",
  description:"Shroud a target in mist"})

actionList.set("Wave",{imagePath:"./Assets/Effects/hydro.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:4},{animation:"swing-l",frames:4},{animation:"impact",frames:4},
  {animation:"target",frames:4},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},{animation:"rain",frames:4}],cost:2,stat:"spt",
  multiplier:1,constant:8,damageType:"hydro",targetType:"single",range:96,effectRadius:16,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:"linear",animationType:"proj",
  description:"Project a wave of water"})

actionList.set("Blast",{imagePath:"./Assets/Effects/nehyldrite.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},{animation:"impact",frames:4},{animation:"self",frames:4},{animation:"target",frames:4}],cost:0,stat:"spt",
  multiplier:2,constant:12,damageType:"lumi",targetType:"area",range:128,effectRadius:16,
  selfEffect:"nehyldUsed",targetEffect:null,movement:0,speed:1,travel:"linear",animationType:"proj",
  description:"Unleash an orb of energy; 1x"})


  /*Vayens*/
actionList.set("Slice",{imagePath:"./Assets/Effects/sharp-melee.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4},
    {animation:"impact",frames:4},{animation:"self",frames:4}]
  ,cost:0,stat:"str",
  multiplier:1,constant:6,damageType:"sharp",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:-2,travel:null,animationType:"melee",
  description:"Swiftly slice a target"})

actionList.set("X-Slice",{imagePath:"./Assets/Effects/x-slice.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4}]
  ,cost:0,stat:"str",
  multiplier:2,constant:10,damageType:"sharp",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:+2,travel:null,animationType:"melee",
  description:"Slice a target twice"})

actionList.set("Smite",{imagePath:"./Assets/Effects/smite.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:8}]
  ,cost:2,stat:"spt",
  multiplier:2,constant:10,damageType:"lumi",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:+3,travel:null,animationType:"melee",
  description:"Smite a with radiant fury"})

actionList.set("Heartbless",{imagePath:"./Assets/Effects/heartbless.png",width:32,height:32,
  sheetInfo:[{animation:"target",frames:10}]
  ,cost:1,stat:"spt",
  multiplier:-2,constant:-2,damageType:"lumi",targetType:"single",range:96,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"target",
  description:"Restore an ally's HP"})

actionList.set("Inspire",{imagePath:"./Assets/Effects/lumi-melee.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"target",frames:5}]
  ,cost:1,stat:"const",
  multiplier:0,constant:0,damageType:"lumi",targetType:"single",range:96,effectRadius:0,
  selfEffect:null,targetEffect:"inspire",movement:0,speed:-1,travel:null,animationType:"target",
  description:"Enhance ally combat skill"})


  /*Silaera*/
actionList.set("Tail Whap",{imagePath:"./Assets/Effects/blunt.png",width:64,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"self",frames:4}],cost:0,stat:"const",
  multiplier:0,constant:1,damageType:"blunt",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"melee",
  description:"Tap a target with your tail"})

actionList.set("Mindshock",{imagePath:"./Assets/Effects/psych.png",width:32,height:32,
  sheetInfo:[{animation:"proj-r",frames:5},{animation:"proj-l",frames:5},{animation:"impact",frames:5},{animation:"target",frames:4}],cost:1,stat:"int",
  multiplier:2,constant:2,damageType:"psych",targetType:"single",range:128,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:"linear",animationType:"proj",
  description:"Fire a psychic jolt at a target"})

actionList.set("Soulshine",{imagePath:"./Assets/Effects/lumi-melee.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"target",frames:5}],cost:2,stat:"const",
  multiplier:0,constant:0,damageType:"lumi",targetType:"single",range:96,effectRadius:0,
  selfEffect:null,targetEffect:"soulglow",movement:0,speed:0,travel:null,animationType:"target",
  description:"Buff a target with light"})

actionList.set("StellarCrash",{imagePath:"./Assets/Effects/stellarcrash.png",width:32,height:32,
  sheetInfo:[{animation:"rain",frames:9},{animation:"impact",frames:5}],cost:3,stat:"spt",
  multiplier:2,constant:5,damageType:"lumi",targetType:"area",range:128,effectRadius:48,
  selfEffect:null,targetEffect:null,movement:0,speed:3,travel:null,animationType:"rain",
  description:"Call down an area of stars"})

actionList.set("Dreamscape",{imagePath:"./Assets/Effects/psych.png",width:32,height:32,
  sheetInfo:[{animation:"proj-r",frames:5},{animation:"proj-l",frames:5},{animation:"impact",frames:5},{animation:"target",frames:4}],cost:0,stat:0,
  multiplier:0,constant:0,damageType:"psych",targetType:"single",range:96,effectRadius:0,
  selfEffect:null,targetEffect:"coma",movement:0,speed:0,travel:null,animationType:"target",
  description:"Induce a target into a coma"}) /*add mind control?*/


/*Cavro*/
actionList.set("Pounce",{imagePath:"./Assets/Effects/sharp-ranged.png",width:0,height:0,
 sheetInfo:[{animation:"",frames:0}],cost:0,stat:"str",
  multiplier:1,constant:6,damageType:"sharp",targetType:"point",range:96,effectRadius:32,
  selfEffect:null,targetEffect:null,movement:80,speed:1,travel:"parabolic",animationType:"path",
  description:"Leap forwards and slice"})

actionList.set("Rally",{imagePath:"./Assets/Effects/unity.png",width:0,height:0,
 sheetInfo:[{animation:"",frames:0}],cost:1,stat:"const",
  multiplier:1,constant:6,damageType:"unity",targetType:"single",range:69,effectRadius:32,
  selfEffect:null,targetEffect:"Raly",movement:0,speed:0,travel:null,animationType:"target",
  description:"Raise ally strength"})


/*Husk*/
actionList.set("Slam",{imagePath:"./Assets/Effects/blunt-ranged.png",width:0,height:0, /*make it like a punch - more rounded version of Thrust*/
 sheetInfo:[{animation:"",frames:0}],cost:0,stat:"str",
  multiplier:1,constant:6,damageType:"blunt",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"melee",
  description:"Perform an unarmed slam"})
  
actionList.set("Tackle",{imagePath:"./Assets/Effects/blunt-ranged.png",width:0,height:0,
 sheetInfo:[{animation:"",frames:0}],cost:0,stat:"str",
  multiplier:1,constant:6,damageType:"blunt",targetType:"point",range:96,effectRadius:32,
  selfEffect:null,targetEffect:null,movement:80,speed:1,travel:"parabolic",animationType:"path",
  description:"Leap forwards and slam"})

actionList.set("Rot Bite",{imagePath:"./Assets/Effects/bio.png",width:0,height:0,
 sheetInfo:[{animation:"",frames:0}],cost:0,stat:"str",
  multiplier:1,constant:8,damageType:"bio",targetType:"point",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:2,travel:null,animationType:"melee",
  description:"Exercise poor hygeine..."})


/*Spectre*/
actionList.set("ShadeSlash",{imagePath:"./Assets/Effects/noct.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4}
  ,{animation:"self",frames:4}, {animation:"target",frames:4}, {animation:"impact",frames:4}
 ],cost:0,stat:"str",
  multiplier:1,constant:8,damageType:"noct",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"melee",
  description:"Slash a target with shadows"})

actionList.set("Cloak",{imagePath:"./Assets/Effects/noct.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4}
  ,{animation:"self",frames:4}, {animation:"target",frames:4}, {animation:"impact",frames:4}
 ],cost:1,stat:"const",
  multiplier:0,constant:0,damageType:"noct",targetType:"self",range:0,effectRadius:0,
  selfEffect:"Hide",targetEffect:null,movement:0,speed:-1,travel:null,animationType:"self",
  description:"Increase your evasion"})

actionList.set("Haunt",{imagePath:"./Assets/Effects/noct.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4}
  ,{animation:"self",frames:4}, {animation:"target",frames:4}, {animation:"impact",frames:4}
 ],cost:1,stat:"const",
  multiplier:0,constant:0,damageType:"noct",targetType:"target",range:0,effectRadius:0,
  selfEffect:"haunt",targetEffect:"scare",movement:0,speed:0,travel:null,animationType:"target",
  description:"Unsettle a target's mind"})

/*Warden - all duplicates*.

/*Cultist*/
actionList.set("Shadeflame",{imagePath:"./Assets/Effects/noct.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4}
  ,{animation:"self",frames:4}, {animation:"target",frames:4}, {animation:"impact",frames:4}
 ],cost:1,stat:"spt",
  multiplier:2,constant:2,damageType:"noct",targetType:"single",range:128,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:"parabola",animationType:"proj",
  description:"Fire a projectile of dark"})

actionList.set("Darkmend",{imagePath:"./Assets/Effects/noct.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4}
  ,{animation:"self",frames:4}, {animation:"target",frames:4}, {animation:"impact",frames:4}
 ],cost:1,stat:"spt",
  multiplier:-2,constant:-2,damageType:"noct",targetType:"target",range:96,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"target",
  description:"Hide a target's wounds"})

actionList.set("Voidcall",{imagePath:"./Assets/Effects/noct.png",width:32,height:32,
 sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"proj-r",frames:4},{animation:"proj-l",frames:4}
  ,{animation:"self",frames:4}, {animation:"target",frames:4}, {animation:"impact",frames:4}
 ],cost:1,stat:"const",
  multiplier:0,constant:0,damageType:"noct",targetType:"target",range:96,effectRadius:0,
  selfEffect:null,targetEffect:"haste",movement:0,speed:0,travel:null,animationType:"target",
  description:"Strengthen a target"})


/*Automata*/ /*7^3 = 343*/
actionList.set("MechaChop",{imagePath:"./Assets/Effects/lumi-melee.png",width:32,height:32,
  sheetInfo:[{animation:"swing-r",frames:3},{animation:"swing-l",frames:3},{animation:"impact",frames:4},{animation:"target",frames:5}],cost:1,stat:"str",
  multiplier:2,constant:4,damageType:"lumi",targetType:"single",range:32,effectRadius:0,
  selfEffect:null,targetEffect:null,movement:0,speed:0,travel:null,animationType:"melee",
  description:"Unleash luminous blades"})

//console.log(actionList)