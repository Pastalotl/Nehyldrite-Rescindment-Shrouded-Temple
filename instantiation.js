/*OUTSIDE*/

startScreen = new Area("start screen","./Assets/Map/Loading Screen.png",
  [{xMin:-160,xMax:160,yMin:-90,yMax: 90}],
  "./Assets/Soundtrack/Press_Any_Key_(String_Ensemble).mp3",{room:"vestibule",x:0,y:0},{room:"vestibule",x:0,y:0})

/*FLOOR 0*/

vestibule = new Area("vestibule","./Assets/Map/floor0_vestibule.png",
  [{xMin:-96,xMax:-80,yMin:-8,yMax:8},
  {xMin:-80,xMax:80,yMin:-40,yMax:40},
  {xMin:80,xMax:90,yMin:-22,yMax:22},
  {xMin:90,xMax:100,yMin:-26,yMax:18},
  {xMin:100,xMax:117,yMin:-30,yMax:14}],
  "./Assets/Soundtrack/Shrouded Temple Entrance.mp3",
  [{room:"nave",xMin:100,xMax:110,yMin:-30,yMax:14}],
  [{room:"nave", x:64,y:16},{room:"nave", x:64, y:-16},{room:"nave", x:48, y:0}]

)

/*FLOOR -1*/

nave = new Area("nave","./Assets/Map/floor-1_nave.png",
  [{xMin:-213,xMax:-197,yMin:-16,yMax:32},
    {xMin:-196,xMax:186,yMin:-19,yMax:29},
    {xMin:-185,xMax:-174,yMin:-22,yMax:26},
    {xMin:-175,xMax:-80,yMin:-56,yMax:55},
    {xMin:-79,xMax:-16,yMin:-72,yMax:157},
    {xMin:-15,xMax:16,yMin:-57,yMax:157},
    {xMin:17,xMax:80,yMin:-72,yMax:157},
    {xMin:81,xMax:176,yMin:-57,yMax:55}
  ],
  "./Assets/Soundtrack/Shrouded Temple Upper.mp3",
  [{room:"vestibule",xMin:-207,xMax:-197,yMin:-16,yMax:32},
    {room:"annex",xMin:-79,xMax:-16,yMin:-72,yMax:-57},
    {room:"stairway",xMin:17,xMax:80,yMin:-72,yMax:-57}
  ],
  [{room:"vestibule",x:-160,y:16},{room:"vestibule",x:-160,y:-16},{room:"vestibule",x:-144,y:0},
    {room:"annex",x:-32,y:-49},{room:"annex",x:-64,y:-47},{room:"annex",x:-48,y:-32},
    {room:"stairway",x:32,y:-49},{room:"stairway",x:64,y:-47},{room:"stairway",x:48,y:-32}
  ]
)

annex = new Area("annex","./Assets/Map/floor-1_annex.png",
  [{xMin:-80,xMax:16,yMin:-40,yMax:24},
    {xMin:16,xMax:80,yMin:-40,yMax:36}],
  "./Assets/Soundtrack/Shrouded Temple Upper.mp3",
  [{room:"nave",xMin:16,xMax:96,yMin:24,yMax:36}],
  [{room:"nave",x:64,y:15},{room:"nave",x:32,y:17},{room:"nave",x:48,y:0}]
)

stairway = new Area("stairway","./Assets/Map/floor-1_stairway.png",
  [{xMin:-112,xMax:-48,yMin:-40,yMax:36},
    {xMin:-47,xMax:112,yMin:-40,yMax:24}
  ],
  "./Assets/Soundtrack/Shrouded Temple Upper.mp3",
  [{room:"nave",xMin:-112,xMax:48,yMin:24,yMax:36},
    {room:"guardroom",xMin:48,xMax:112,yMin:8,yMax:24},
    {room:"guardroom",xMin:48,xMax:112,yMin:-40,yMax:-24}
  ],
  [{room:"nave",x:-96,y:15},{room:"nave",x:-64,y:17},{room:"nave",x:-80,y:0},
    {room:"guardroom",x:32,y:16},{room:"guardroom",x:32,y:-32},{room:"guardroom",x:32,y:-8}
  ]
)

/*FLOOR -2*/

guardroom = new Area("guardroom","./Assets/Map/floor-2_guardroom.png",
  [{xMin:-68,xMax:-48,yMin:-24,yMax:8},
    {xMin:-47,xMax:48,yMin:-40,yMax:24},
    {xMin:49,xMax:98,yMin:-24,yMax:8}
  ],
  "./Assets/Soundtrack/Shrouded Temple Lower.ogg",
  [{room:"stairway",xMin:73,xMax:98,yMin:-24,yMax:8},
    {room:"hallway",xMin:-68,xMax:-50,yMin:-24,yMax:8}
  ],
  [{room:"stairway",x:72,y:0},{room:"stairway",x:72,y:-16},{room:"stairway",x:48,y:-8},
    {room:"hallway",x:-40,y:0},{room:"hallway",x:-40,y:-16},{room:"hallway",x:-16,y:-8}
  ]
)

hallway = new Area("hallway","./Assets/Map/floor-2_hallway.png",
  [{xMin:-98,xMax:-80,yMin:-8,yMax:8},
    {xMin:-79,xMax:80,yMin:-88,yMax:88},
    {xMin:81,xMax:98,yMin:40,yMax:72},
    {xMin:81,xMax:98,yMin:-24,yMax:-8}
  ],
  "./Assets/Soundtrack/Shrouded Temple Lower.ogg",
  [{room:"crypt",xMin:-98,xMax:-80,yMin:-8,yMax:8},
    {room:"guardroom",xMin:81,xMax:98,yMin:40,yMax:72}
  ],
  [{room:"guardroom",x:80,y:64},{room:"guardroom",x:80,y:48},{room:"guardroom",x:48,y:56},
    {room:"crypt",x:-64,y:-16},{room:"crypt",x:-64,y:16},{room:"crypt",x:-44, y:0}
  ]
)

crypt = new Area("crypt","./Assets/Map/floor-2_crypt.png",
  [{xMin:-144,xMax:112,yMin:-40,yMax:40},
    {xMin:113,xMax:130,yMin:-8,yMax:8},
  ],
  "./Assets/Soundtrack/Shrouded Temple Lower.ogg",
  [{room:"hallway",xMin:113,xMax:130,yMin:-8,yMax:8}
  ],
  [{room:"hallway",x:96,y:-16},{room:"hallway",x:96,y:16},{room:"hallway",x:64,y:0}]
)



temple = new Rooms()
temple.addArea(startScreen)
temple.addArea(vestibule)
temple.addArea(nave)
temple.addArea(annex)
temple.addArea(stairway)
temple.addArea(guardroom)
temple.addArea(hallway)
temple.addArea(crypt)
/*table creation*/


//Nigelas = charRecipes.createCharacter("Nigelas")
//Nigelas.updatePosition(-48,0)

//Kauplaire = charRecipes.createCharacter("Kauplaire")
//Kauplaire.updatePosition(-64,16)

//Ifforrem = charRecipes.createCharacter("Ifforrem")
//Ifforrem.updatePosition(32,32)

//Calian = charRecipes.createCharacter("Calian")
//Calian.updatePosition(32,-32)

//Ddwgyl = charRecipes.createCharacter("Ddwgyl")
//Ddwgyl.updatePosition(-64,-16)

//Vayens = charRecipes.createCharacter("Vayens")
//Vayens.updatePosition(64,32)

//Silaera = charRecipes.createCharacter("Silaera")
//Silaera.updatePosition(-64,32)
/*
Spectre = charRecipes.createCharacter("Spectre")
Spectre.updatePosition(32,0)

Husk = charRecipes.createCharacter("Husk")
Husk.updatePosition(-32,0)

Warden = charRecipes.createCharacter("Warden")
Warden.updatePosition(-64,-0)

Cultist = charRecipes.createCharacter("Cultist")
Cultist.updatePosition(64,-16)

Cultist_B = charRecipes.createCharacter("Cultist")
Cultist_B.updatePosition(64,16)

Cavro = charRecipes.createCharacter("Cavro")
Cavro.updatePosition(0,0)
*/
//console.log(charRecipes)


ctx.clearRect(0,0,canvas.width,canvas.height) /*clear the canvas*/

/*Icons*/
/*
portraits = new Icon("./Assets/Icons/portraits-combat-full.png",0,0,60,-60,32,32,[{animation:"Nigelas",frames:2},{animation:"Kauplaire",frames:2},{animation:"Ifforrem",frames:2},{animation:"Calian",frames:2},
  {animation:"Ddwgyl",frames:2},{animation:"Vayens",frames:2},{animation:"Silaera",frames:2},{animation:"Automata",frames:2},{animation:"Cavro",frames:2},{animation:"Husk",frames:2},{animation:"Spectre",frames:2},
  {animation:"Warden",frames:2},{animation:"Spectre",frames:2}])
*/
menu = new Icon("./Assets/Icons/player-actions-double.png",3,0,-60,-60,24,24,[{animation:"Nigelas-default",frames:6},{animation:"Nigelas-select",frames:6},{animation:"Kauplaire-default",frames:6},{animation:"Kauplaire-select",frames:6},
  {animation:"Ifforrem-default",frames:6},{animation:"Ifforrem-select",frames:6},{animation:"Calian-default",frames:6},{animation:"Calian-select",frames:6},
  {animation:"Ddwgyl-default",frames:6},{animation:"Ddwgyl-select",frames:6},{animation:"Vayens-default",frames:6},{animation:"Vayens-select",frames:6},
  {animation:"Silaera-default",frames:6},{animation:"Silaera-select",frames:6},{animation:"common-default",frames:2},{animation:"common-select",frames:2}])

lowerIcon = new Icon("./Assets/Icons/portraits-idle-full.png",0,1,-44,-70,32,32,[{animation:"Nigelas",frames:2},{animation:"Kauplaire",frames:2},{animation:"Ifforrem",frames:2},{animation:"Calian",frames:2},
  {animation:"Ddwgyl",frames:2},{animation:"Vayens",frames:2},{animation:"Silaera",frames:2}])

chaSelectMenu = new Icon("./Assets/Icons/portraits-idle-full.png",0,1,-44,-70,32,32,[{animation:"Nigelas",frames:2},{animation:"Kauplaire",frames:2},{animation:"Ifforrem",frames:2},{animation:"Calian",frames:2},
  {animation:"Ddwgyl",frames:2},{animation:"Vayens",frames:2},{animation:"Silaera",frames:2}])

reticle = new Icon("./Assets/Icons/reticle.png",0,0,0,0,16,16,[{animation:"reticle",frames:5}])
/*stat bars*/
healthBar = new StatBar("./Assets/Icons/meters-health.png",0,20,-78,-70,32,13,[21],[20])
skillBar = new StatBar("./Assets/Icons/meters-skill.png",0,20,-10,-70,32,13,[4,4,4,6,6,5,6],[3,3,3,5,5,4,5])
costBar = new StatBar("./Assets/Icons/meters-skill.png",0,20,142,-43,32,13,[4,4,4,6,6,5,6],[3,3,3,5,5,4,5])
moveBar = new StatBar("./Assets/Icons/meters-movement.png",0,20,-140,-70,24,24,[21],[20])

/*text boxes*/
turnOrderText = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:-160,xMax:100,yMin:-20,yMax:43})
menuHealthValue = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:-94,xMax:100,yMin:-90,yMax:-79})
actionName = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:-36,xMax:44,yMin:-51,yMax:-44})
actionDescription = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:-36,xMax:160,yMin:-67,yMax:-52})
textDamage = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:44,xMax:94,yMin:-51,yMax:-44})
textCost = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:94,xMax:160,yMin:-51,yMax:-44})
textHelp = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:-100,xMax:100,yMin:-80,yMax:80})
promptHelp = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:-160,xMax:-50,yMin:-67,yMax:-52})
textVersion = new  Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:-160,xMax:-50,yMin:50,yMax:85})
textStartPrompt = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:20,xMax:160,yMin:-95,yMax:-72})
loadScreenTextbox = new Textbox("./Assets/Icons/typeset-nehyld-monospace.png",0,0,0,0,5,7,[14,14,14,14,14,14,14,12],{xMin:-20,xMax:150,yMin:-72,yMax:-24})
/*currentLevel = new Level()
currentLevel.addObject(Nigelas)
currentLevel.addObject(Kauplaire)
currentLevel.addObject(Ifforrem)
currentLevel.addObject(Calian)
currentLevel.addObject(Ddwgyl)
currentLevel.addObject(Silaera)
currentLevel.addObject(Vayens)

currentLevel.addObject(Spectre)
currentLevel.addObject(Cavro)
currentLevel.addObject(Husk)
currentLevel.addObject(Warden)
currentLevel.addObject(Cultist)
currentLevel.addObject(Cultist_B)

currentLevel.addObject(new mapEntity("e67","pot","./Assets/Objects/Pot-small.png",0,0,-64,-16,32,32,[{animation:"a fucking pot",frames:1}],8, 8, 1))
currentLevel.addObject(new mapEntity("e68","pot","./Assets/Objects/Pot-large.png",0,0,-64,-32,32,32,[{animation:"a fucking pot",frames:1}],8, 8, 1))
currentLevel.addObject(new mapEntity("e69","pot","./Assets/Objects/Pot-small.png",0,0,64,-32,32,32,[{animation:"a fucking pot",frames:1}],8, 8, 1))
console.log(currentLevel)
*/
//temple.addObject(charRecipes.createCharacter("Automata"),"start screen")
/*
temple.addObject(Nigelas,"vestibule")
temple.addObject(Kauplaire,"vestibule")
temple.addObject(Ifforrem,"nave")
temple.addObject(Calian,"vestibule")
temple.addObject(Ddwgyl,"vestibule")
temple.addObject(Silaera,"nave")
temple.addObject(Vayens,"nave")
*/
/*
temple.addObject(Spectre,"vestibule")
temple.addObject(Cavro,"vestibule")
temple.addObject(Husk,"vestibule")
temple.addObject(Warden,"vestibule")
temple.addObject(Cultist,"nave")
temple.addObject(Cultist_B,"nave")
*/

//temple.addObject(charRecipes.createCharacter("Automata",152,16),"nave")






/*VESTIBULE*/
temple.addObject(entityRecipes.createEntity("pot small",-32,-32),"vestibule")
temple.addObject(entityRecipes.createEntity("pot large",-64,-32),"vestibule")
temple.addObject(entityRecipes.createEntity("pot small",64,-32),"vestibule")
temple.addObject(entityRecipes.createEntity("pot large",64,32),"vestibule")
temple.addObject(entityRecipes.createEntity("pot small",32,32),"vestibule")
temple.addObject(entityRecipes.createEntity("pot large",-32,32),"vestibule")
temple.addObject(entityRecipes.createEntity("pot small",-64,32),"vestibule")
//temple.addObject(entityRecipes.createEntity("pot small",-64,16),"vestibule")



/*NAVE*/
temple.addObject(charRecipes.createCharacter("Cavro",-32,96),"nave")
temple.addObject(charRecipes.createCharacter("Cavro",32,128),"nave")

temple.addObject(entityRecipes.createEntity("pillar round",-96,32),"nave")
temple.addObject(entityRecipes.createEntity("pillar round",-96,-32),"nave")
temple.addObject(entityRecipes.createEntity("pillar round",0,32),"nave")
temple.addObject(entityRecipes.createEntity("pillar round",0,-32),"nave")
temple.addObject(entityRecipes.createEntity("pillar round",96,32),"nave")
temple.addObject(entityRecipes.createEntity("pillar round",96,-32),"nave")
temple.addObject(entityRecipes.createEntity("pillar square",0,64),"nave")
temple.addObject(entityRecipes.createEntity("torch",128,76),"nave")
temple.addObject(entityRecipes.createEntity("torch",-128,76),"nave")
temple.addObject(entityRecipes.createEntity("pew",-72,24),"nave")
temple.addObject(entityRecipes.createEntity("pew",-72,-24),"nave")
temple.addObject(entityRecipes.createEntity("pew",-24,24),"nave")
temple.addObject(entityRecipes.createEntity("pew",-24,-24),"nave")
temple.addObject(entityRecipes.createEntity("pew",24,24),"nave")
temple.addObject(entityRecipes.createEntity("pew",24,-24),"nave")
temple.addObject(entityRecipes.createEntity("pew",72,24),"nave")
temple.addObject(entityRecipes.createEntity("pew",72,-24),"nave")
temple.addObject(entityRecipes.createEntity("pot large",-164,51),"nave")
temple.addObject(entityRecipes.createEntity("pot large",-164,-51),"nave")
temple.addObject(entityRecipes.createEntity("pot large",-48,-48),"nave")
temple.addObject(entityRecipes.createEntity("pot large",48,-48),"nave")



/*ANNEX*/
temple.addObject(charRecipes.createCharacter("Cavro",64,-16),"annex")
temple.addObject(charRecipes.createCharacter("Husk",-32,16),"annex")

temple.addObject(entityRecipes.createEntity("chest-right",-64,16),"annex")
temple.addObject(entityRecipes.createEntity("pot large",-64,-32),"annex")



/*STAIRWAY*/
temple.addObject(charRecipes.createCharacter("Warden",0,14),"stairway")
temple.addObject(charRecipes.createCharacter("Cultist",0,-32),"stairway")

temple.addObject(entityRecipes.createEntity("torch",32,40),"stairway")
temple.addObject(entityRecipes.createEntity("torch",-32,40),"stairway")
temple.addObject(entityRecipes.createEntity("torch",96,40),"stairway")
temple.addObject(entityRecipes.createEntity("pot small",96,0),"stairway")
temple.addObject(entityRecipes.createEntity("pot large",96,-16),"stairway")
temple.addObject(entityRecipes.createEntity("pot small",64,-16),"stairway")



/*GUARDROOM*/
temple.addObject(charRecipes.createCharacter("Warden",-48,-8),"guardroom")

temple.addObject(entityRecipes.createEntity("pot large",-32,16),"guardroom")
temple.addObject(entityRecipes.createEntity("pot small",-15,8),"guardroom")
temple.addObject(entityRecipes.createEntity("pot small",-0,16),"guardroom")
temple.addObject(entityRecipes.createEntity("pot small",18,9),"guardroom")
temple.addObject(entityRecipes.createEntity("pot large",32,16),"guardroom")
temple.addObject(entityRecipes.createEntity("pot small",-38,-28),"guardroom")
temple.addObject(entityRecipes.createEntity("pot small",-26,-36),"guardroom")
temple.addObject(entityRecipes.createEntity("pot small",-19,-26),"guardroom")
temple.addObject(entityRecipes.createEntity("pot large",-0,-32),"guardroom")
temple.addObject(entityRecipes.createEntity("pot small",32,-32),"guardroom")
temple.addObject(entityRecipes.createEntity("pot small",18,-37),"guardroom")
temple.addObject(entityRecipes.createEntity("torch",-32,46),"guardroom")
temple.addObject(entityRecipes.createEntity("torch",32,46),"guardroom")
temple.addObject(entityRecipes.createEntity("torch",72,30),"guardroom")
temple.addObject(entityRecipes.createEntity("torch",-56,30),"guardroom")



/*HALLWAY*/
temple.addObject(charRecipes.createCharacter("Spectre",-32,-64),"hallway")
temple.addObject(charRecipes.createCharacter("Spectre",48,16),"hallway")
temple.addObject(charRecipes.createCharacter("Cultist",-68,0),"hallway")

temple.addObject(entityRecipes.createEntity("pillar round",0,-32),"hallway")
temple.addObject(entityRecipes.createEntity("pillar round",0,32),"hallway")
temple.addObject(entityRecipes.createEntity("pot large",-69,80),"hallway")
temple.addObject(entityRecipes.createEntity("pot small",-49,83),"hallway")
temple.addObject(entityRecipes.createEntity("pot small",-57,68),"hallway")
temple.addObject(entityRecipes.createEntity("pot small",-71,63),"hallway")
temple.addObject(entityRecipes.createEntity("torch",32,111),"hallway")
temple.addObject(entityRecipes.createEntity("torch",-32,111),"hallway")



/*CRYPT*/
temple.addObject(charRecipes.createCharacter("Husk",-96,32),"crypt")
temple.addObject(charRecipes.createCharacter("Husk",-32,-24),"crypt")
temple.addObject(charRecipes.createCharacter("Husk",32,16),"crypt")

temple.addObject(entityRecipes.createEntity("chest-right",-128,32),"crypt")
temple.addObject(entityRecipes.createEntity("chest-right",-64,32),"crypt")
temple.addObject(entityRecipes.createEntity("chest-right",0,32),"crypt")
temple.addObject(entityRecipes.createEntity("chest-right",64,32),"crypt")
temple.addObject(entityRecipes.createEntity("chest-right",-128,-32),"crypt")
temple.addObject(entityRecipes.createEntity("chest-right",-64,-32),"crypt")
temple.addObject(entityRecipes.createEntity("chest-right",0,-32),"crypt")
temple.addObject(entityRecipes.createEntity("chest-right",64,-32),"crypt")
temple.addObject(entityRecipes.createEntity("torch",-16,60),"crypt")
temple.addObject(entityRecipes.createEntity("torch",48,60),"crypt")
temple.addObject(entityRecipes.createEntity("torch",-80,60),"crypt")




//console.log(temple)
/*
temple.addObject(new mapEntity("e67","pot","./Assets/Objects/Pot-small.png",0,0,-64,-16,32,32,
[{animation:"a fucking pot",frames:1}],8, 8, 1),"vestibule")
temple.addObject(new mapEntity("e68","pot","./Assets/Objects/Pot-large.png",0,0,-64,-32,32,32,
[{animation:"a fucking pot",frames:1}],8, 8, 1),"vestibule")
temple.addObject(new mapEntity("e69","pot","./Assets/Objects/Pot-small.png",0,0,64,-32,32,32,
[{animation:"a fucking pot",frames:1}],8, 8, 1),"vestibule")
*/
/*
turnOrder = new TurnQueue(20)
turnOrder.enqueue(Nigelas)
turnOrder.enqueue(Warden)
turnOrder.enqueue(Ddwgyl)
turnOrder.enqueue(Husk)
turnOrder.enqueue(Kauplaire)
turnOrder.enqueue(Spectre)
turnOrder.enqueue(Calian)
turnOrder.enqueue(Cavro)
turnOrder.enqueue(Vayens)
turnOrder.enqueue(Cultist)
turnOrder.enqueue(Ifforrem)
turnOrder.enqueue(Spectre)
turnOrder.enqueue(Silaera)
turnOrder.enqueue(Cultist_B)
*/

let loadScreenIndex = 0
let loadScreenText = [
  /*Nigelas*/
  "LORE: @Nigelas' fez travelled @through time and space! @Fun-er Fact! @Fezzes are cool!",
  "TRIVIA: @Nigelas is left-handed!",
  "LORE: @Nigelas is a viking warrior!",
  /*Kauplaire*/
  "TRIVIA: @Kauplaire is ambidexterous @and that's with 4 limbs!",
  "LORE: @Kauplaire used to be @an actor. They were @very popular back home.",
  "LORE: @Kauplaire is an Ulekiis - @they are an arachnid @species from Cielanorfe!",
  /*Ifforrem*/
  "TRIVIA: @Ifforrem's armour is @undented!",
  "Did you know? @Ifforrem is known to eat...@rocks! This is... @*concerning!*",
  "Fun Fact! @Ifforrem has many fun facts!@(Fun Fact provided by @Ifforrem)",
  "LORE: @Ifforrem is a Merrep - @they are a mammal @species from Deruya!",
  /*Calian*/
  "TRIVIA: @Calian's full name is @Dr. Calian Zariastas",
  "Fun Fact! @Calian is tired...",
  "LORE: @Calian used to be a human. @He now appears as an @Alinno - an avian species @from Deruya!",
  /*Ddwgyl*/
  "TRIVIA: @Ddwgyl's trident is called @'Kydlyfyad', which is @Llaryan for 'confluence'!",
  "TRIVIA: @Ddwgyl is pronounced: @THOO-gul",
  "Fun Fact! @Ddwgyl has fun rock facts!",
  "LORE: @Ddwgyl is a Llotelyon - @they are an amphibian @species from Deruya!",
  /*Vayens*/
  '"Gaslight, Gatekeep, @Girlboss" @- Vayens the Righteous @(probably)',
  "TRIVIA: @Vayens' blades are known as @'The Blades of Shalingaire'",
  "LORE: @Vayens used to be a military commander!",
  "LORE: @Vayens is a Raunaegis - @they are a archosaur @species from Cielanorfe!",
  /*Silaera*/
  "LORE: @Silaera mentally projects @herself into the temple! @She's actually very far away",
  "Silaera is a trans icon! @We  Silaera!",
  "LORE: @Silaera is a Tonlen - @they are a species @resembling snakes with @innate psychic powers.",
  /*Enemies*/
  "Did you know? @Cavroes have strong @maternal instincts.",
  "Fun Fact! @All husks in the Temple @were humans.",
  "Did you know? @Spectres are vengeful @spirits trapped by @their own rage.",
  "Fun Fact! @The temple's wardens are @known to hardly move when @standing guard!",
  "Fun Fact! @Cultists weave shadow into @their spells and rituals.",
  /*Clestuard*/
  "Are YOU getting Shrouded in the Temple?",
  "Fun Fact! @The Shrouded Temple is @situated high on Mount @Feshfen's north-east @flank.",
  '"You need a permit to be @here!" @- Cptn. Wenance "Gateface" @Galhar',
  /*Gameplay*/
  "Pressing [M] brings up @the controls!",
  "A grey targeting reticle @means that the action @cannot be used at all.",
  "A RED targeting reticle @means that the target is @out of range",
  "An ORANGE targeting reticle @means that the target is @the wrong type of target.",
  "A YELLOW targeting reticle @means that the target is @not in line of sight.",
  "A GREEN targeting reticle @means that an action can @be used on the target!",
  "Some actions have a cost @which is displayed above @their description.",
  "Actions have a speed value @which can affect when a @character gets their next @turn.",
  "Characters with a higher @agility stat, get their @next turn quicker!",
  "RED actions deal weapon @damage to a target.",
  "YELLOW actions apply @effects to a target.",
  "GREEN actions heal a @target.",
  "BLUE actions defend a @target.",
  "PURPLE actions are spells. @They often deal damage, @or have other effects.",
  "BROWN actions move the @user across the map.",
  "Some actions target an @area around a point.",
  "Some actions can only be @used once. These usually @use the [0] key.",
  "Many objects in the temple @can be destroyed by @attacks!",
  "Fun fact! @This loading screen is just @for vibes - it's unnecessary!",
  "Some actions target the user!",
  "You cannot move between @rooms whilst in combat!",
  "Pressing [J] does...@ @ nothing.@"
]
console.log(loadScreenText.length)

let framesPms = 33 /*frames per millisecond*/
let helpMenu = false
let musicBattle = new Audio("./Assets/Soundtrack/Clestuardian Clash (soundtrack version).mp3")
let musicIdleMedley = new Audio("./Assets/Soundtrack/Shrouded Temple (soundtrack version).mp3")
let musicBattleKauplaire = new Audio("./Assets/Soundtrack/Exeunt Adversary (soundtrack ver).mp3")
let musicIdleUpper = new Audio("./Assets/Soundtrack/Shrouded Temple Upper.mp3")
let musicIdleEntrance = new Audio("./Assets/Soundtrack/Shrouded Temple Entrance.mp3")
let menuOpen = new Audio("./Assets/Sound Effects/menu-open.wav")
let spellPsychic = new Audio("./Assets/Sound Effects/Psychic Spell.wav")
let castMana = new Audio("./Assets/Sound Effects/Spellcast Mana.wav")

let charSwap = new Audio("./Assets/Sound Effects/CharacterSwap.wav")
let yesSting = new Audio("./Assets/Sound Effects/YesSting.wav")
let noSting = new Audio("./Assets/Sound Effects/NoSting.wav")
musicBattle.loop = true
musicIdleMedley.loop = true
musicBattleKauplaire.loop = true
musicIdleUpper.loop = true
musicIdleEntrance.loop = true
//.pause to end it ; .currentTime = 0 to start from beginning
let actionNum = -1
let targeting = false