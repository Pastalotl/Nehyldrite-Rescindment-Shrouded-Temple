class Level{
  constructor(){
    this.objects = []
    this.renderStack = new Stack(64) /*maybe make the stack dynamic?
    current fixed stack forces a limit on how many entities can be
    in one level.*/
    this.turnQueue = new PriorityTurnQueue(new Icon("./Assets/Icons/portraits-combat-full.png",0,0,60,-60,32,32,[{animation:"Nigelas",frames:2},{animation:"Kauplaire",frames:2},{animation:"Ifforrem",frames:2},{animation:"Calian",frames:2},
                                                    {animation:"Ddwgyl",frames:2},{animation:"Vayens",frames:2},{animation:"Silaera",frames:2},{animation:"Automata",frames:2},{animation:"Cavro",frames:2},{animation:"Husk",frames:2},{animation:"Spectre",frames:2},
                                                    {animation:"Warden",frames:2},{animation:"Spectre",frames:2}]),new Icon("./Assets/Icons/portraits-idle-full.png",0,1,-44,-70,32,32,[{animation:"Nigelas",frames:2},{animation:"Kauplaire",frames:2},{animation:"Ifforrem",frames:2},{animation:"Calian",frames:2},
  {animation:"Ddwgyl",frames:2},{animation:"Vayens",frames:2},{animation:"Silaera",frames:2}]))
    this.combat = false
  }

  /*General Methods*/
  addObject(object){
    this.objects.push(object)
    if(object.getKey().slice(0,3)=="cha"){
      if(object.getId()<7||this.combat){
        this.turnQueue.enqueueCharacter(object)
      }
    }
  }
  getObjects(){
    return this.objects
  }
  getObjectIndex(key){
    for(let n = this.objects.length-1;n>-1;n--){
      if(this.objects[n].keyMatch(key)){return n}
    }
    return null
  }
  removeObject(key){
    let request = this.getObjectIndex(key)
    console.log("REQUEST",key)
    console.log(request)
    if(request==null){return}
    this.objects.splice(request,1)
    if(key.slice(0,3) == "cha"){
      console.log(this.turnQueue)
      this.turnQueue.removeCharacter(key)
    }
  }
  combatSet(combatStatus){
    if(this.combat == combatStatus){return}
    this.combat = combatStatus
    this.turnQueue.updateCombat(this.combat)
    this.formQueue()
  }
  combatToggle(){
    this.combat = !this.combat
    this.turnQueue.updateCombat(this.combat)
    this.formQueue()
  }
  isCombat(){
    return this.combat
  }
  getObjectCount(){
    return this.objects.length
  }

  /*Stack Methods*/
  renderObjects(frame){
    if(! this.renderStack.isEmpty()){
      while (! this.renderStack.isEmpty()){
        this.renderStack.pop()
      }
    }
    /*Sort the objects by their Y coordinates*/
    for(let n=this.objects.length-1;n>-1;n--){
      //console.log(this.objects[n])
      if(this.objects[n].getKey().slice(0,3)!="obj"){
        if(this.objects[n].isDestroyed()){
        this.removeObject(this.objects[n].getKey())
      }}
    }
    this.objects = this.mergeSort(this.objects)
    //console.log(this.objects)

    /*push objects into a stack to render then*/
    if(frame == 0){
      for(var n=this.objects.length-1;n>-1;n--){
        this.objects[n].frameIncrement(1)
        this.renderStack.push(this.objects[n])
      }
    }
    else{
      for(var n=this.objects.length-1;n>-1;n--){
        this.renderStack.push(this.objects[n])
      }
  }
    //console.log(this.objects,this.renderStack.data)
    /*render each object in the stack*/
    while(! this.renderStack.isEmpty()){
      this.renderStack.pop().render()
    }
    
    //console.log(this.renderStack.pointer)
  }
  mergeSort(data){
    if (data.length<=1) {return data}
    const centre = Math.floor(data.length/2)
    const left = this.mergeSort(data.slice(0,centre))
    const right = this.mergeSort(data.slice(centre))
    return this.merge(left,right)
  }
  merge(leftData,rightData){
    var result = []
    var leftIndex = 0
    var rightIndex = 0
    while (leftIndex < leftData.length && rightIndex < rightData.length){
      if(leftData[leftIndex].getPosition().y > rightData[rightIndex].getPosition().y){
        result.push(leftData[leftIndex])
        leftIndex ++
      }
      else{
        result.push(rightData[rightIndex])
        rightIndex++
      }
    }
    //console.log(result.concat(leftData.slice(leftIndex),rightData.slice(rightIndex)))
    return result.concat(leftData.slice(leftIndex),rightData.slice(rightIndex))
  }

  /*Queue Methods*/
  dequeue(){
    let out = this.turnQueue.dequeue()
    return out.data
  }
  endTurn(){
    this.turnQueue.endTurn()
  }
  peek(){
    return this.turnQueue.frontPeek().data
  }
  getCount(){
    return this.turnQueue.getCount()
  }
  formQueue(){
    this.turnQueue.clearQueue()
    if(! this.combat){
      for(let n = this.objects.length - 1; n>-1; n--){

        if(this.objects[n].getKey().slice(0,3)=="cha"){

          if(this.objects[n].getId()<7){

            this.turnQueue.enqueueCharacter(this.objects[n])
          }
        }
      }

    }
    else{
      for(let n = this.objects.length - 1; n>-1; n--){

        if(this.objects[n].getKey().slice(0,3)=="cha"){

          this.turnQueue.enqueueCharacter(this.objects[n])
        }
      }
    }
    console.log(this.turnQueue.queue)
  }
  renderTurnOrder(){
    this.turnQueue.renderTurnOrder()
  }
  getPriority(){
    return this.turnQueue.frontPeek().priority
  }
  softDequeue(){
    return this.turnQueue.softDequeue()
  }
  resetPointer(){
    this.turnQueue.resetPointer()
  }
}

class Area extends Level{
  constructor(type,spritesheet,boundaries, bgm, loadZones, spawnPoints){
    super()
    this.type = type
    this.sheet = new Image()
    this.sheet.src = spritesheet
    this.boundaries = boundaries
    this.bgm = new Audio(bgm)
    this.bgm.loop = true
    this.loadZones = loadZones
    this.spawnPoints = spawnPoints
  }
  render(){
    ctx.drawImage(
      this.sheet,
      this.renderX(0,this.sheet.width), 
      this.renderY(0,this.sheet.height),
      scale * this.sheet.width, 
      scale * this.sheet.height)
  }
  inBounds(xCheck,yCheck){
    
    //if in bounds
    var region=this.boundaries.length-1
    for(region;region>-1;region--){
      //console.log(region,xCheck,yCheck,this.boundaries[region],(this.boundaries[region].xMin<=xCheck<=this.boundaries[region].xMax),(this.boundaries[region].yMin<=yCheck<=this.boundaries[region].yMax))
      if(
        (this.boundaries[region].xMin<=xCheck&& xCheck<=this.boundaries[region].xMax)
        && (this.boundaries[region].yMin<=yCheck&& yCheck<=this.boundaries[region].yMax)
      ){
        return true}
    }
    //if out of bounds
    return false
  }
  radiusInBounds(xCheck,yCheck,radius){

    var region=this.boundaries.length-1
    let centre = false
    let xMin = false
    let xMax = false
    let yMin = false
    let yMax = false
    for(region;region>-1;region--){
      //console.log(region,xCheck,yCheck,this.boundaries[region],(this.boundaries[region].xMin<=xCheck<=this.boundaries[region].xMax),(this.boundaries[region].yMin<=yCheck<=this.boundaries[region].yMax))
      if((this.boundaries[region].xMin<=xCheck&& xCheck<=this.boundaries[region].xMax)&& (this.boundaries[region].yMin<=yCheck&& yCheck<=this.boundaries[region].yMax)){
        centre = true}
      //else{return false}
      if((this.boundaries[region].xMin<=xCheck-radius&& xCheck-radius<=this.boundaries[region].xMax)&& (this.boundaries[region].yMin<=yCheck&& yCheck<=this.boundaries[region].yMax)){
        xMin = true
      }
      if((this.boundaries[region].xMin<=xCheck+radius&& xCheck+radius<=this.boundaries[region].xMax)&& (this.boundaries[region].yMin<=yCheck&& yCheck<=this.boundaries[region].yMax)){
        xMax = true
      }
      if((this.boundaries[region].xMin<=xCheck&& xCheck<=this.boundaries[region].xMax)&& (this.boundaries[region].yMin<=yCheck-0.5*radius&& yCheck-0.5*radius<=this.boundaries[region].yMax)){
        yMin = true
      }
      if((this.boundaries[region].xMin<=xCheck&& xCheck<=this.boundaries[region].xMax)&& (this.boundaries[region].yMin<=yCheck+0.5*radius&& yCheck+0.5*radius<=this.boundaries[region].yMax)){
        yMax = true
      }
      
    }
    if(centre && xMin && xMax && yMin && yMax){return true}
    //if out of bounds
    else{return false}
  }
  radiusUnobstructed(xCheck,yCheck,radius,originKey){
    if(! this.radiusInBounds(xCheck,yCheck,radius)) return false
    let n = this.objects.length - 1
    for(n; n>-1; n--){
      let entity = this.objects[n]
      let entityPos = entity.getPosition()
      let entityRad = entity.getRadius()
      let fails = 0
      //console.log(`-New Entity: ${entity.getType()}-`)
      //console.log(originKey, entity.getKey())
      if(originKey != entity.getKey()){
        if(xCheck < entityPos.x){
          if(xCheck + radius >= entityPos.x - entityRad) {
            //console.log(`x1 > x2 : ${xCheck + radius} > ${entityPos.x - entityRad}`)
            fails ++}
        }
        else if(xCheck > entityPos.x){ /*check < entityPos.x*/
          if(xCheck - radius <= entityPos.x + entityRad) {
            //console.log(`x1 < x2 : ${xCheck - radius} < ${entityPos.x + entityRad}`)
            fails ++}
        }
        else{
          //console.log('x1 = x2')
          fails ++
        }
        
        if(yCheck < entityPos.y){
          if(yCheck + 0.5 * radius >= entityPos.y - 0.5 * entityRad) {
            //console.log(`y1 < y2 : ${yCheck + 0.5 * radius} > ${entityPos.y - 0.5 * entityRad}`)
            fails ++}
        }
        else if(yCheck > entityPos.y){
          if(yCheck - 0.5 * radius <= entityPos.y + 0.5 * entityRad) {
            //console.log(`y1 > y2 : ${yCheck - 0.5 * radius} > ${entityPos.x + 0.5 * entityRad}`)
            fails ++}
          }
        else{
          //console.log('y1 = y2')
          fails ++
        }
            
        }
        else{
          //console.log("skip")
        }
      if(fails > 1) {
        //console.log(`Fail due to: ${entity.getType()}`)
        return false}
    }
    return true
  }
  playBGM(){
    this.bgm.play()
  }
  stopBGM(){
    this.bgm.currentTime = 0
    this.bgm.pause()
  }
  getType(){
    return this.type
  }
  renderX(x,width){ /*takes a cartesian x coordinate and the width of the image and returns the x centre of the image for canvas*/
  //console.log("X:",centre.x,cam.x)
    return (x*scale + centre.x - cam.x*scale) - scale*Math.floor(width/2)
  }
  renderY(y,height){ /*takes a cartesian y coordinate and the height of the image and returns the y centre of the image for canvas*/
  //console.log("Y:",centre.y,cam.y)
    return (-1 * y*scale + centre.y + cam.y*scale) - scale*Math.floor(height/2)
  }
  inLoadZone(xCheck,yCheck,id){
    if(id > 6) {console.log(false);return false}
    let n = this.loadZones.length-1
    for(n;n>-1;n--){
      if(
        (this.loadZones[n].xMin<=xCheck&& xCheck<=this.loadZones[n].xMax)
        && (this.loadZones[n].yMin<=yCheck&& yCheck<=this.loadZones[n].yMax)
      ){
        console.log(true)
        return this.loadZones[n].room}
    }
    //console.log(false)
    return undefined
  }
  prepRoom(){
    let u = this.getCount() - 1
    let playerCharacters = []
    this.resetPointer()
    for(u;u>-1;u--){
      let character = this.softDequeue()
      console.log(character.getKey().slice(0,3),character.getId())
      if(character.getKey().slice(0,3)=="cha"){
        if(character.getId() < 7){
          playerCharacters.push(character)
        }
      }
    }
    u = playerCharacters.length - 1
    for(u;u>-1;u--){
      console.log(playerCharacters[u].getKey(),u)
      this.removeObject(playerCharacters[u].getKey())
    }
    console.log("Objects remaining in room", this.objects)
    console.log("Objects remaining in queue", this.queue)
    console.log("Characters moving rooms", playerCharacters)
    this.resetPointer()
    return playerCharacters
  }
  spawnCharacters(previousRoom,playerCharacters){
    let startCharacter = playerCharacters[0].getKey()
    let n = this.spawnPoints.length - 1
    let m = 0
    let charcount = playerCharacters.length - 1
    for(n;n>-1;n--){
      if(this.spawnPoints[n].room == previousRoom){
        playerCharacters[m].updatePosition(this.spawnPoints[n].x,this.spawnPoints[n].y)
        this.addObject(playerCharacters[m])
        console.log(`spawn point: ${playerCharacters[m].getType()} m:${m}`)
        m++
        if(m > charcount){
          this.formQueue()
          console.log("new queue:", this.turnQueue.queue)
          let attempts = 0
          while(this.peek().getKey() != startCharacter || attempts == 32){
            this.endTurn()
            attempts++
          }
    console.log("shuffled queue:", this.turnQueue.queue)
          return
        }
      }
    }
    console.log(playerCharacters.length - 1, m)
    //if(playerCharacters.length - 1 > m){
      for(m;m<charcount+1;m++){
        console.log(`fuck it, we ball: ${playerCharacters[m].getType() }  m:${m}`)
        playerCharacters[m].updatePosition(0,0)
        this.addObject(playerCharacters[m])
      }
   // }
    this.formQueue()
    console.log("new queue:", this.turnQueue.queue)
    let attempts = 0
    while(this.peek().getKey() != startCharacter || attempts == 32){
      this.endTurn()
      attempts++
    }
    console.log("shuffled queue:", this.turnQueue.queue)
  }

}

class Rooms{
  constructor(){
    this.areas = []
    this.currentArea = 0
  }
  addArea(area){
    this.areas.push(area)
  }
  changeAreaIndex(index){
    this.stopBGM()
    this.currentArea = index
    this.playBGM()
  }
  locateAreaIndex(type){
    let n = this.areas.length-1
    for(n;n>-1;n--){
      if(this.areas[n].getType() == type){
        return n
      }
    }
    console.log(`${type} not found in areas \n returning current area`)
    return this.currentArea
  }
  changeArea(type){
    this.currentArea = this.locateAreaIndex(type)
  }
  getAreaType(){
    return(this.areas[this.currentArea].getType())
  }
  inBounds(xCheck,yCheck){
    return(this.areas[this.currentArea].inBounds(xCheck,yCheck))
  }
  render(){
    this.areas[this.currentArea].render()
  }
  playBGM(){
    this.areas[this.currentArea].playBGM()
  }
  stopBGM(){
    //let n = this.areas.length-1
    //for(n;n>-1;n--){
      //this.areas[n].stopBGM()
    this.areas[this.currentArea].stopBGM()
  //}
  }
  stopAllBGM(){
    let n = this.areas.length - 1
    for(n;n>-1;n--){
      this.areas[n].stopBGM()
    }
  }
  inBounds(xCheck,yCheck){
    return this.areas[this.currentArea].inBounds(xCheck,yCheck)
  }
  radiusInBounds(xCheck,yCheck,radius){
    return this.areas[this.currentArea].radiusInBounds(xCheck,yCheck,radius)
  }
  radiusUnobstructed(xCheck,yCheck,radius,originKey){
    return this.areas[this.currentArea].radiusUnobstructed(xCheck,yCheck,radius,originKey)
  }
    /*General Methods*/
  addObject(object,areaType){
    if (areaType != undefined){
      this.areas[this.locateAreaIndex(areaType)].addObject(object)
    }
    else{
      this.areas[this.currentArea].addObject(object)
    }
    return object.getKey()
  }
  getObjects(type){
    if (type != undefined){
      return this.areas[this.locateAreaIndex(type)].getObjects()
    }
    return this.areas[this.currentArea].getObjects()
  }
  getObjectIndex(key,areaType){
    if (areaType != undefined){
      return this.areas[this.locateAreaIndex(areaType)].getObjectIndex(key)
    }
    else{
      return this.areas[this.currentArea].getObjectIndex(key)
    }
  }
  removeObject(key,areaType){
    if (areaType != undefined){
      this.areas[this.locateAreaIndex(areaType)].removeObject(key)
    }
    else{
      this.areas[this.currentArea].removeObject(key)
    }
  }
  combatSet(combatStatus){
    this.areas[this.currentArea].combatSet(combatStatus)
  }
  combatToggle(){
    this.areas[this.currentArea].combatToggle()
  }
  isCombat(){
    return this.areas[this.currentArea].isCombat()
  }
  getObjectCount(){
    return this.areas[this.currentArea].getObjectCount()
  }
  loadCheck(xCheck,yCheck,id){
    if(this.isCombat()){return false}
    let newRoom = this.areas[this.currentArea].inLoadZone(xCheck,yCheck,id)
    if(newRoom == undefined){return false}
    let playerCharacters = this.areas[this.currentArea].prepRoom()
    let previousRoom = this.getAreaType()
    let previousRoomIndex = this.currentArea
    let nextRoomIndex = this.locateAreaIndex(newRoom)
    this.currentArea = 0
    if(this.areas[previousRoomIndex].bgm.src == this.areas[nextRoomIndex].bgm.src){
      this.areas[nextRoomIndex].bgm.currentTime = this.areas[previousRoomIndex].bgm.currentTime
      this.areas[previousRoomIndex].stopBGM()
      this.areas[nextRoomIndex].bgm.volume = 0.3
      this.areas[nextRoomIndex].playBGM()
      setTimeout(()=> {
        this.changeArea(newRoom);
        this.areas[this.currentArea].spawnCharacters(previousRoom,playerCharacters);
        this.areas[nextRoomIndex].bgm.volume = 1
        },
      2718)
    }
    else{
      this.areas[previousRoomIndex].bgm.volume = 0.3
      setTimeout(()=> {
        this.changeArea(newRoom);
        this.areas[this.currentArea].spawnCharacters(previousRoom,playerCharacters);
        this.areas[previousRoomIndex].stopBGM()
        this.areas[previousRoomIndex].bgm.volume = 1
        this.playBGM();},
      2718)
    }
  }

  /*Stack Methods*/
  renderObjects(frame){
    this.areas[this.currentArea].renderObjects(frame)
  }

  /*Queue Methods*/
  dequeue(){
    return this.areas[this.currentArea].dequeue()
  }
  endTurn(){
    this.areas[this.currentArea].endTurn()
  }
  peek(){
    return this.areas[this.currentArea].peek()
  }
  getCount(){
    return this.areas[this.currentArea].getCount()
  }
  formQueue(){
    this.areas[this.currentArea].formQueue()
  }
  renderTurnOrder(){
    this.areas[this.currentArea].renderTurnOrder()
  }
  getPriority(){
    return this.areas[this.currentArea].getPriority()
  }

  getCurrentLevel(){
    return this.areas[this.currentArea]
  }
}
