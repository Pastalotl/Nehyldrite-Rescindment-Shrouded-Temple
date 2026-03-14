document.addEventListener('keydown',keyDown)
document.addEventListener('keyup',keyUp)
let startSelectMenu = false
let playerMovement = 0
let started = false
let newAreaName = ""
const playerChaNames = ["Nigelas","Kauplaire","Ifforrem","Calian","Ddwgyl","Vayens","Silaera"]
let playerSelections = []
//const movementKeys = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"]
let keysPressed = {ArrowUp:false,ArrowDown:false,ArrowLeft:false,ArrowRight:false}

function keyDown(event){
  
  //if(temple.getAreaType()=="start screen"){temple.playBGM()}
  

  //components = 0
  if(event.code == "KeyH"){
    menuOpen.currentTime = 0
    menuOpen.play()
    //temple.playBGM()
    helpMenu = !helpMenu
    //console.log(helpMenu)
  }
  /*game start*/
  if(temple.getAreaType() == "start screen" && !started){
  if(event.code == "Space"){
    if(! startSelectMenu){
      //castMana.currentTime = 0
      //castMana.play()
      //temple.stopBGM()
      temple.playBGM()
      setTimeout(() => { startSelectMenu = true}, 510)
      //startSelectMenu = true
      
    }
    else if(playerSelections.length == 3){
    started = true /*setting started to true outside of the timeout prevents spamming of the space button*/
    loadScreenIndex = Math.floor( Math.random() * loadScreenText.length )
    //console.log(temple)
    temple.stopBGM();
    spellPsychic.currentTime = 0
    spellPsychic.play()
    console.log(playerSelections)
    temple.addObject(charRecipes.createCharacter(playerSelections[0].name,-48,0),"vestibule")
    temple.addObject(charRecipes.createCharacter(playerSelections[1].name,-64,16),"vestibule")
    temple.addObject(charRecipes.createCharacter(playerSelections[2].name,-64,-16),"vestibule")
    setTimeout(() => {
      temple.stopBGM();
      temple.changeArea("vestibule");
      //temple.changeArea("nave")
     
      temple.playBGM();
      cam.x = temple.peek().getPosition().x; cam.y = temple.peek().getPositionCentre().y;
      //started = true
    }, 2718)
    }
  }
  if(event.code.slice(0,5) == "Digit"){
    let digitSelected = parseInt(event.code.slice(5,6))
    if(digitSelected>7) return false
    for(let M = 0; M < playerSelections.length; M++){
      if(playerSelections[M].id == digitSelected - 1) {
        noSting.currentTime = 0
        noSting.play()
        return false}
    }
    if(playerSelections.length > 2){
      playerSelections.shift()
    }
    yesSting.currentTime = 0
    yesSting.play()
    playerSelections.push({name:playerChaNames[digitSelected - 1], id:digitSelected - 1})
  }
  }

  /*gameplay actions*/
  if(helpMenu == false&&temple.getAreaType()!="start screen"){

    if(event.code.slice(0,5)=="Arrow"){
     keysPressed[event.code]=true
     if(playerMovement == 0){
      //console.log("trigger movement")
      playerMovement = setInterval(movePlayer,33)
     }
      }
    if(event.code.slice(0,3) == "Key") userAction(event)

    if(event.code.slice(0,5) == "Digit") chaAction(event)

    if(event.code.slice(0,6) == "Numpad") debug(event)
}
}
function keyUp(event){
    if(event.code.slice(0,5)=="Arrow"){
      //console.log("key withdrawn")
     keysPressed[event.code]=false
     //console.log(keysPressed)
  }
  if(! keysPressed["ArrowDown"] && ! keysPressed["ArrowUp"] && ! keysPressed["ArrowLeft"] && ! keysPressed["ArrowRight"]){
    //console.log("movement stopped")
    clearInterval(playerMovement)
    playerMovement = 0
  }
}
//addEventListener("mousemove", (event) => {temple.playBGM()})

function movePlayer(){
  if(temple.getAreaType()=="start screen") return
  let vector = {x:0,y:0}
  //console.log("moving player")
  let speed = 0
  if(targeting){
    speed = 2
  }
  else{
   speed = 4
  }
  let components = 0
  components = (keysPressed.ArrowRight || keysPressed.ArrowLeft) ? 1 : 0
  components += (keysPressed.ArrowUp || keysPressed.ArrowDown) ? 1 : 0
  if(components>0&&!targeting){
      temple.peek().animationChange("walk")
    }
  if(keysPressed.ArrowRight == true){
    vector.x += Math.round(components > 1 ? Math.round(Math.sqrt(2)/2 * speed) : speed)
  }
  if(keysPressed.ArrowLeft == true){
    vector.x -= components > 1 ? Math.round(Math.sqrt(2)/2 * speed) : speed
  }
  if(keysPressed.ArrowUp == true){
    vector.y += Math.round(0.5 * (components > 1 ? Math.round(Math.sqrt(2)/2 * speed) : speed)) // /2
  }
  if(keysPressed.ArrowDown == true){
    vector.y -= Math.round(0.5 * (components > 1 ? Math.round(Math.sqrt(2)/2 * speed) : speed)) // /2
  }
  
  if (temple.peek().getId()<7 &&
     !targeting &&
     temple.radiusUnobstructed(temple.peek().getPosition().x+vector.x, temple.peek().getPosition().y+vector.y, temple.peek().getRadius(), temple.peek().getKey()) ){

    temple.peek().updatePosition(temple.peek().getPosition().x+vector.x,temple.peek().getPosition().y+vector.y)

    temple.loadCheck(temple.peek().getPosition().x,temple.peek().getPosition().y,temple.peek().getId())

    loadScreenIndex = Math.floor( Math.random() * loadScreenText.length )
    //console.log(loadScreenText,loadScreenIndex)

    //cam.x = temple.peek().getPosition().x
    //cam.y = temple.peek().getPositionCentre().y
  }
  else if ((temple.peek().getId()>6||targeting)){
    if(temple.inBounds(cam.x+vector.x,cam.y+vector.y) === true){
    cam.x += vector.x
    cam.y += vector.y
    
    }
    else if(!temple.inBounds(cam.x,cam.y)){
      cam.x = temple.peek().getPosition().x
      cam.y = temple.peek().getPosition().y
    }
  }
    /*you can go really fast diagonally if you punch both arrow keys quickly, NO IDEA WHY*/
  //if(temple.peek().id<7){
    //temple.peek().updatePosition(cam.x,cam.y)
  //}


  /*Actions*/

  
}

function debug(event){
    if(event.code == "Numpad6"){
    temple.endTurn()
    alternate = (alternate+1)%2
    cam.x = temple.peek().getPosition().x
    cam.y = temple.peek().getPositionCentre().y
    if(temple.peek().getId()<7){
      demoAction = {name:"",desc:"",cost:0}
      actionNum = -1
    }
    targeting = false
    //menuOpen.play()
  }
  if(event.code == "Numpad8"){
    temple.peek().setMeter(temple.peek().getMeter()+1)
    temple.peek().changeHealth(1)
    //menuOpen.play()
  }
  if(event.code == "Numpad2"){
    temple.peek().setMeter(temple.peek().getMeter()-1)
    temple.peek().changeHealth(-1)
    //menuOpen.play()
  }
  if(event.code == "Numpad9"){
    temple.combatToggle()
    if(temple.isCombat()){
      temple.stopBGM()
      musicBattle.play()
    }
    else{
      musicBattle.pause()
      musicBattle.currentTime = 0
      temple.playBGM()

    }
  }
  if(event.code == "Numpad0"){
    temple.stopBGM();
    spellPsychic.currentTime = 0
    spellPsychic.play()
    targeting = true
    cam.x = 0
    cam.y = 0
    currentAreaType = temple.getAreaType()
    temple.changeArea("start screen")

    if(currentAreaType != "nave"){
      newAreaName = "floor -1: nave"
      setTimeout(() => {
      temple.stopBGM();
      temple.changeArea("nave")
      temple.playBGM();
      cam.x = temple.peek().getPosition().x; cam.y = temple.peek().getPositionCentre().y;
      targeting = false
    }, 1515)
    }
    else{
      newAreaName = "floor 0: vestibule"
    setTimeout(() => {
      temple.stopBGM();
      temple.changeArea("vestibule");
      temple.playBGM();
      cam.x = temple.peek().getPosition().x; cam.y = temple.peek().getPositionCentre().y;
      targeting = false
    }, 1515)
    }
    
  }
}

function chaAction(event){
    if(event.code == "Digit5"){
    menuOpen.currentTime = 0
    actionNum = 0
    menuOpen.play()
  }
  if(event.code == "Digit6"){
    menuOpen.currentTime = 0
    actionNum = 1
    menuOpen.play()
  }
  if(event.code == "Digit7"){
    menuOpen.currentTime = 0
    actionNum = 2
    menuOpen.play()
  }
  if(event.code == "Digit8"){
    menuOpen.currentTime = 0
    actionNum = 3
    menuOpen.play()
  }
  if(event.code == "Digit9"){
    menuOpen.currentTime = 0
    actionNum = 4
    menuOpen.play()
  }
  if(event.code == "Digit0"){
    menuOpen.currentTime = 0
    actionNum = 5
    menuOpen.play()
  }
  if(event.code == "Digit1"){
    menuOpen.currentTime = 0
    actionNum = 6
    menuOpen.play()
  }
  if(event.code == "Digit2"){
    menuOpen.currentTime = 0
    actionNum = 7
    menuOpen.play()
  }
}

function userAction(event){
  if(event.code == "KeyC"&&temple.peek().getId()<7){
    charSwap.currentTime = 0
    charSwap.play()
    temple.endTurn()
    cam.x = temple.peek().getPosition().x
    cam.y = temple.peek().getPositionCentre().y
    demoAction = {name:"",desc:"",cost:0}
    actionNum = -1
    targeting = false
  }
  if(event.code == "KeyZ"&&temple.peek().getId()<7&&actionNum>-1){
    if(actionNum==6){
      if(temple.isCombat()) return
      let level = temple.getCurrentLevel()
      N = level.getCount() - 1
      level.resetPointer()
      for(N;N>-1;N--){
        let currentCharacter = level.softDequeue()
        currentCharacter.changeHealth(99)
        currentCharacter.decreaseMeter(-5)
      }
      actionNum = -1
      return
    }
    if(targeting == true){
      if(temple.peek().getReticleFrame(actionNum,cam.x,cam.y,temple.getCurrentLevel()) != 4){
        noSting.currentTime = 0
        noSting.play()
      }
      else{
        temple.peek().doAction(actionNum,cam.x,cam.y,temple.getCurrentLevel())
        actionNum = -1
        targeting = false
      }
      /*action validation*/
    }
    else{
        targeting = true
        yesSting.currentTime = 0
        yesSting.play()
 
    }
    
  }
  if(event.code == "KeyX"){
    noSting.currentTime = 0
    noSting.play()
    targeting = false
    actionNum = -1
    cam.x = temple.peek().getPosition().x
    cam.y = temple.peek().getPositionCentre().y
  }
}