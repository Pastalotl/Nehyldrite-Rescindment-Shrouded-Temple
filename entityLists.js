charRecipes = new CharacterTable(45) /*use a size of 45<size<=50 for chaining; use size of 45 for none (efficient!)*/
/*Playable Characters:*/
charRecipes.set("Nigel@s",{id:0,imagePath:"./Assets/Characters/Nigelas.png",width:64,height:64,stats:[8,8,10,7,5],sheetInfo:[{animation:"idle",frames:6}],meterMax:3,yOffset:15,
    actions: [ actionList.createAction("Slash"), actionList.createAction("Shield Bash"), actionList.createAction("Brace"),
          actionList.createAction("Cleave"), actionList.createAction("Axe-Throw"), actionList.createAction("Infuse")  ],
        radius:10, resistances:[]   , allegiance:"party"} )

charRecipes.set("Kauplaire",{id:1,imagePath:"./Assets/Characters/Kauplaire.png",width:64,height:64,stats:[7,10,5,8,8],sheetInfo:[{animation:"idle",frames:6}],meterMax:3,yOffset:15,
    actions: [ actionList.createAction("Longbow"), actionList.createAction("Quick-Bolt"), actionList.createAction("Lock-On"),
          actionList.createAction("Pin Shot"), actionList.createAction("Withdraw"), actionList.createAction("Assess")  ],
        radius:10, resistances: [], allegiance:"party"})

charRecipes.set("Ifforrem",{id:2,imagePath:"./Assets/Characters/Ifforrem.png",width:64,height:64,stats:[11,8,8,5,6],sheetInfo:[{animation:"idle",frames:1}],meterMax:3,yOffset:15,
   actions: [ actionList.createAction("Crush"), actionList.createAction("Concuss"), actionList.createAction("Endure"),
          actionList.createAction("Disarm"), actionList.createAction("Sweep"), actionList.createAction("Propel")  ],
        radius:10, resistances:[{type:"sharp",mult:0.5}], allegiance:"party"}   )

charRecipes.set("Calian",{id:3,imagePath:"./Assets/Characters/Calian.png",width:64,height:64,stats:[5,9,7,11,6],sheetInfo:[{animation:"idle",frames:6}],meterMax:5,yOffset:15,
    actions: [ actionList.createAction("SmartStrike"), actionList.createAction("Automata"), actionList.createAction("Mend"),
          actionList.createAction("Stun"), actionList.createAction("Detect"), actionList.createAction("Shield")  ],
          /*actions: [actionList.createAction("ShadeSlash"), actionList.createAction("Shadeflame"), actionList.createAction("Darkmend"), actionList.createAction("Cloak"),
            actionList.createAction("Voidcall"), actionList.createAction("Haunt")],*/
        radius:10, resistances:[], allegiance:"party"})

charRecipes.set("Ddwgyl",{id:4,imagePath:"./Assets/Characters/Ddwgyl.png",width:64,height:64,stats:[7,8,5,8,10],sheetInfo:[{animation:"idle",frames:8}],meterMax:5,yOffset:15,
    actions: [ actionList.createAction("Thrust"), actionList.createAction("Hydrodash"), actionList.createAction("Fountain"),
          actionList.createAction("Heal Mist"), actionList.createAction("Wave"), actionList.createAction("Blast")  ],
        radius:10, resistances:[{type:"hydro",mult:0.5}], allegiance:"party"})

charRecipes.set("Vayens",{id:5,imagePath:"./Assets/Characters/Vayens.png",width:64,height:64,stats:[7,9,7,7,8],sheetInfo:[{animation:"idle",frames:1}],meterMax:4,yOffset:15,
    actions: [ actionList.createAction("Slice"), actionList.createAction("X-Slice"), actionList.createAction("Smite"),
          actionList.createAction("Heartbless"), actionList.createAction("Inspire"), actionList.createAction("Shield")  ],
        radius:8, resistances:[], allegiance:"party"})

charRecipes.set("Silaera",{id:6,imagePath:"./Assets/Characters/Silaera.png",width:64,height:64,stats:[4,6,7,10,11],sheetInfo:[{animation:"idle",frames:1}],meterMax:5,yOffset:15,
    actions: [ actionList.createAction("Tail Whap"), actionList.createAction("Mindshock"), actionList.createAction("Heartbless"),
          actionList.createAction("Soulshine"), actionList.createAction("StellarCrash"), actionList.createAction("Dreamscape")  ],
        radius:7, resistances:[{type:"psych",mult:0.5}], allegiance:"party"})


/*NPCs*/
charRecipes.set("Automata",{id:7,imagePath:"./Assets/Characters/Automata.png",width:36,height:36,stats:[8,6,7,8,4],sheetInfo:[{animation:"idle",frames:1}],meterMax:2,yOffset:13,
    actions: [ actionList.createAction("Dual Chop"), actionList.createAction("Stun"), actionList.createAction("Detect") ],
        radius:10, resistances:[{type:"bio",mult:0}]   , allegiance:"allies"})

charRecipes.set("Cavro",{id:8,imagePath:"./Assets/Characters/Cavro.png",width:64,height:64,stats:[7,9,6,8,4],sheetInfo:[{animation:"idle",frames:1}],meterMax:1,yOffset:15,
    actions: [ actionList.createAction("Slice"), actionList.createAction("Pounce"), actionList.createAction("Rally") ],
        radius:10, resistances:[]   , allegiance:"cavros"})

charRecipes.set("Husk",{id:9,imagePath:"./Assets/Characters/Husk.png",width:64,height:64,stats:[11,4,11,4,4],sheetInfo:[{animation:"idle",frames:6}],meterMax:1,yOffset:15,
    actions: [ actionList.createAction("Slam"), actionList.createAction("Tackle"), actionList.createAction("Rot Bite") ],
        radius:10, resistances:[{type:"lumi",mult:1.5}]   , allegiance:"cult"})

charRecipes.set("Spectre",{id:10,imagePath:"./Assets/Characters/Spectre.png",width:64,height:64,stats:[7,9,6,7,9],sheetInfo:[{animation:"idle",frames:6}],meterMax:3,yOffset:15,
    actions: [ actionList.createAction("ShadeSlash"), actionList.createAction("Cloak"), actionList.createAction("Haunt") ],
        radius:10, resistances:[{type:"lumi",mult:1.5}]  , allegiance:"cult"})

charRecipes.set("Warden",{id:11,imagePath:"./Assets/Characters/Warden.png",width:64,height:64,stats:[9,7,9,8,5],sheetInfo:[{animation:"idle",frames:1}],meterMax:2,yOffset:15,
    actions: [ actionList.createAction("Slash"), actionList.createAction("Thrust"), actionList.createAction("Brace") ],
        radius:13, resistances:[{type:"sharp",mult:0.5}]   , allegiance:"cult"})

charRecipes.set("Cultist",{id:12,imagePath:"./Assets/Characters/Cultist.png",width:64,height:64,stats:[5,7,6,9,9],sheetInfo:[{animation:"idle",frames:6}],meterMax:5,yOffset:15,
    actions: [ actionList.createAction("Shadeflame"), actionList.createAction("Darkmend"), actionList.createAction("Voidcall") ],
        radius:10, resistances:[], allegiance:"cult"})
    
console.log(charRecipes)

entityRecipes = new EntityTable(100)

entityRecipes.set("pot small",{imagePath:"./Assets/Objects/Pot-small.png",width:32,height:32,sheetInfo:[{animation:"intact",frames:1}],yOffset:8,radius:6,health:1})
entityRecipes.set("pot large",{imagePath:"./Assets/Objects/Pot-large.png",width:32,height:32,sheetInfo:[{animation:"intact",frames:1},{animation:"destroy",frames:4}],yOffset:8,radius:11,health:2})
entityRecipes.set("pillar round",{imagePath:"./Assets/Objects/pillar.png",width:32,height:64,sheetInfo:[{animation:"intact",frames:1}],yOffset:23,radius:16,health:574})
entityRecipes.set("pillar square",{imagePath:"./Assets/Objects/pillar-wall.png",width:34,height:52,sheetInfo:[{animation:"intact",frames:1}],yOffset:17,radius:16,health:574})
entityRecipes.set("chest-right",{imagePath:"./Assets/Objects/chest.png",width:32,height:32,sheetInfo:[{animation:"closed",frames:1},{animation:"open",frames:1}],yOffset:9,radius:11,health:1})
entityRecipes.set("torch",{imagePath:"./Assets/Objects/torch.png",width:16,height:16,sheetInfo:[{animation:"burning",frames:3}],yOffset:0})
entityRecipes.set("pew",{imagePath:"./Assets/Objects/pew.png",width:14,height:40,sheetInfo:[{animation:"intact",frames:1}],yOffset:4,radius:7,health:7})
entityRecipes.set("shield",{imagePath:"./Assets/Objects/shield.png",width:32,height:64,sheetInfo:[{animation:"intact",frames:6}],yOffset:20,radius:16,health:10})