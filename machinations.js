
var initialPortrait = 0
var alternate = 0
var frame = 0
function renderLoop(){
    frame = (frame+1)%5
    ctx.clearRect(0,0,canvas.width,canvas.height) /*clear the canvas*/
    if(helpMenu){
      textHelp.writeText(`KEYBOARD CONTROLS @ @Z - Confirm / Targeting @X - Back @C - Switch Character / End Turn @1 - REST [non-combat] 
@2 - MOVE [combat] @5 - ${menuCharacter.getActionName(0).toUpperCase()} (action 1) @6 - ${menuCharacter.getActionName(1).toUpperCase()} (action 2) 
@7 - ${menuCharacter.getActionName(2).toUpperCase()} (action 3) @8 - ${menuCharacter.getActionName(3).toUpperCase()} (action 4) @9 - ${menuCharacter.getActionName(4).toUpperCase()} (action 5) 
@0 - ${menuCharacter.getActionName(5).toUpperCase()} (action 6) @M - Toggle Help Menu @Arrow Keys - Movement 
@ @Nehyldrite: Rescindment - @Shrouded Temple @Made by Pastalotl @Music by Rufus Renty`)
    }
    
    else{
    backgroundRendering()
    //console.log(!(temple.getAreaType()=="start screen"))
    if(!(temple.getAreaType()=="start screen")){
      //console.log("start objects")
      objectRendering()
      //console.log("start interface")
      interfaceRendering()
      //console.log("end interface")
    }
    else{
      startScreenRendering()
    }
    }
}

function backgroundRendering(){ /*draws the basic floors and layers all characters are in front of*/
  if(temple.getAreaType()=="start screen"){
    cam.x = 0
    cam.y = 0
  }
  else if(! targeting){
    cam = this.temple.peek().getPositionCentre()
  }
  temple.render()
}
function objectRendering(){ /*draws the layers and objects that may overlap each other in the correct order*/
  temple.renderObjects(frame)
}
let defaultPortrait = 0
let menuCharacter = null

function interfaceRendering(){ /*draws all the non-world elements such as menus and icons*/
  /*TEMPORARY:*/
  //const menuChangesPerFrame = 0.125
  //let portraitCount = temple.getCount()
  //const portraitStartX = -160 + 4 + 13
  //const portraitDefaultY = 90-16
  //const portraitTesselationWidth = 26
  //const portraitTesselationHeight = 14

  const rightActionCount = 6
  const leftActionCount = 2
  const actionWidth = 25
  const rightActionStart = 170
  const actionBarY = -70
  const leftActionStart = -140

  /*Turn Order:*/
  //console.log(temple)
    temple.renderTurnOrder()
    
    turnOrderText.writeText(`${temple.peek().getType()} @(${temple.peek().getKey()}) @#${temple.getPriority()}`)

    /*Menu (left):*/
    menu.animationChange("common-default")
    menu.frameSet(0)
    for(x=0;x<leftActionCount;x++){
      //console.log(n)
      if(actionNum==x+6){
        menu.animationChange("common-select")
        
      }
      else{
        menu.animationChange("common-default")
      }
      //console.log(x,menu.frame.col)
      menu.frameIncrement(1)
      menu.updatePosition(leftActionStart+x*actionWidth,actionBarY)
      if(actionNum==7&&x==0&&targeting){
        moveBar.render()
      }
      else{
        menu.render()
      }

    }
    menuCharacter = temple.peek().getId()<7?temple.peek():menuCharacter
    let lowerPortrait = temple.peek().getId()<7?temple.peek().getId():defaultPortrait
    defaultPortrait = lowerPortrait
    //console.log(defaultPortrait)

    menu.frameIncrement(1)
    menu.rowChange(lowerPortrait*2)
    menu.frameIncrement(-1)


    /*Menu (portrait):*/
    lowerIcon.rowChange(lowerPortrait) /*(temp version) check if starting portrait is in party and change if true*/
    lowerIcon.frameSet(temple.peek().getId()==lowerPortrait?1:0)
    lowerIcon.render()

   

    //console.log((5-frame)/5)
    healthBar.setPercentage(menuCharacter.getHealthPercent())
    healthBar.render()
    menuHealthValue.writeText(String(menuCharacter.getCurrentHealth())+"/"+String(menuCharacter.getMaxHealth()))

    skillBar.rowChange(lowerPortrait)
    skillBar.setFrame(menuCharacter.getMeter())
    skillBar.render()
    
    //healthBar.frameIncrement(1)

    /*Menu (Player actions)*/
    menu.frameSet(5)
    for(n=rightActionCount-1;n>-1;n--){
      if(n==actionNum){
        //console.log(n)
        menu.rowChange(2*lowerPortrait+1)
      }
      else{
        menu.rowChange(2*lowerPortrait)
      }
      menu.updatePosition(rightActionStart+(n-rightActionCount)*actionWidth, actionBarY)
      //console.log(n, 140+(n-6)*25)
      menu.render()
      menu.frameIncrement(-1)
    }
    if(actionNum!=-1){
    actionName.writeText(menuCharacter.getActionName(actionNum).toUpperCase())
    actionDescription.writeText(menuCharacter.getActionDescription(actionNum))
    if(menuCharacter.getActionDamage(actionNum)>0){
      textDamage.writeText(`DMG:${menuCharacter.getActionDamage(actionNum)}`)
    }
    else if(menuCharacter.getActionDamage(actionNum)<0){
      textDamage.writeText(`HEAL:${-1 * menuCharacter.getActionDamage(actionNum)}`)
    }
    if(menuCharacter.getActionCost(actionNum)>0){
    textCost.writeText("Cost:")
    costBar.rowChange(lowerPortrait)
    costBar.setFrame(menuCharacter.getActionCost(actionNum))
    costBar.render()
    }
    }
    //console.log(templeText)
    //templeText.render()
    if(targeting){
      
      if(actionNum>=0){
        //console.log(menuCharacter.getReticleFrame(actionNum,cam.x,cam.y))
        reticle.frameSet(menuCharacter.getReticleFrame(actionNum,cam.x,cam.y,temple))
        reticle.render()
      }
      else{
        //reticle.frameSet(0)
      }
      //reticle.render()
    }
    promptHelp.writeText("press H for help")
}
let displayText = 0
function startScreenRendering(){
  textVersion.writeText("v0.3.8c (14/03/26)")
  

  if(frame == 0){displayText = (displayText+1) % 7}
  if(displayText > 1){
  if(! startSelectMenu){
    textStartPrompt.writeText("Press [SPACE]")
  }
  else if (! started && playerSelections.length == 3){
    textStartPrompt.writeText("[SPACE] to DESCEND")
  }
  else if(! started){
    textStartPrompt.writeText("SELECT x3 with @number keys")
  }
  else{
    textStartPrompt.writeText(`LOADING... @${newAreaName}`)
  }
  }
  if(started){
    loadScreenTextbox.writeText(loadScreenText[loadScreenIndex])
  }
  if(startSelectMenu && !started){
    let portraitCount = 7
    const portraitStartX = 44
    const portraitDefaultY = 56
    const portraitTesselationWidth = 28
    const portraitTesselationHeight = 15
    /*Turn Order:*/
    for(let n=0;n<portraitCount;n++){
      /*this makes a tesselated row of hexagons!*/
      
      chaSelectMenu.rowChange(n)
      chaSelectMenu.frameSet(0)
      for(let M=0;M<playerSelections.length;M++){
        if(playerSelections[M].id == n){
          chaSelectMenu.frameSet(1)
          break
        }
      }
      chaSelectMenu.updatePosition(portraitStartX + (n%2) * portraitTesselationWidth,portraitDefaultY - n*portraitTesselationHeight)
      //chaSelectMenu.updatePosition(portraitStartX+portraitTesselationWidth*n,portraitDefaultY-portraitTesselationHeight*((n+Math.floor(this.alternate))%2))
      chaSelectMenu.render()
    }
  }
}
//templeText.writeText("Sapphic")

//var countdown = 200

setInterval(renderLoop, framesPms)

/*TO DO: 
- radii for entities
- main menu
- load zones and spawn zones
*/

/*KEYBOARD CONTROLS
Movement: Arrow Keys
Rest: 1 (available out of combat)
Move: 2 (allows for click-to-move or arrow key movement)
Action1: 5 (brings target/confirm menu)
Action2: 6 " "
Action3: 7 " "
Action4: 8 " "
Action5: 9 " "
Action6: 0 " "
Confirm: Z / enter
Back: X / backspace
End Turn: C*/