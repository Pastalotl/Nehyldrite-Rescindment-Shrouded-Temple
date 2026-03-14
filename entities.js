class Entity{
  constructor(key,type,imagePath,width,height,sheetInfo,yOffset,x,y){
    this.key = key
    this.type = type /*the kind of Entity it is such as "Nigelas", "Cavro" or "Blockade"*/
    this.sheet = new Image()
    this.sheet.src = imagePath
    this.frame = {row:0, col:0, width:width, height:height, yOffset: yOffset} /*information about spritesheeting*/
    this.sheetInfo = sheetInfo /*how many columns each row has*/
    if(x!=undefined&&y!=undefined){
      this.position = {x:x,y:y}
    }
    else{
      this.position = {x:0, y:0}
    }
    this.vector = {x:0,y:0}
    this.radius = 0
  }
  render(){ /*doesn't work outside of a loop?*/
    this.sheet.onload = 
    ctx.drawImage(
      this.sheet,
      this.frame.col*this.frame.width,
      this.frame.row*this.frame.height, 
      this.frame.width,
      this.frame.height,
      this.renderX(this.position.x,this.frame.width),
      this.renderY(this.position.y+this.frame.yOffset ,this.frame.height), 
      scale * this.frame.width, 
      scale * this.frame.height
    )
    /*for all your rendering issues:*/
    //console.log(this.sheet,this.frame.col*this.frame.width,this.frame.row * this.frame.height, this.frame.width,this.frame.height,renderX(this.position.x,this.frame.width),renderY(this.position.y,this.frame.height), scale * this.frame.width, scale * this.frame.height)
  }
  renderX(x,width){ /*takes a cartesian x coordinate and the width of the image and returns the x centre of the image for canvas*/
  //console.log("X:",centre.x,cam.x)
  x = Math.round(x)
    return (x*scale + centre.x - cam.x*scale) - scale*Math.floor(width/2)
  }
  renderY(y,height){ /*takes a cartesian y coordinate and the height of the image and returns the y centre of the image for canvas*/
  //console.log("Y:",centre.y,cam.y)
  y = Math.round(y)
    return (-1 * y*scale + centre.y + cam.y*scale) - scale*Math.floor(height/2)
  }
  frameIncrement(inc){ /*increment the current animation's frame*/
     /*workaround for decrement issue: 
    increment by number of frames
    this effectively makes it travel backwards*/
    for(inc; inc<0;inc){
      inc+= this.sheetInfo[this.frame.row].frames
    }
    //if(this.key == "ACTION"){console.log(this.sheetInfo,this.frame.row)}
    this.frame.col = (this.frame.col + inc) % this.sheetInfo[this.frame.row].frames
   
  }
  frameSet(frame){
    this.frame.col=frame% this.sheetInfo[this.frame.row].frames
  }
  rowChange(spritesheetRow){ /*change the row for the spritesheet*/
    if(spritesheetRow < this.sheetInfo.length){
      this.frame.row = spritesheetRow
      //this.frame.col = 0
    }
    else{
      //console.log("animation out of range")
    }
  }
  animationSearch(animation){
    for(let n=0;n<this.sheetInfo.length;n++){
      if(this.sheetInfo[n].animation == animation){
        return n
      }
    }
    //console.log(`animation "${animation}" not found`)
  }
  animationChange(animation){
    this.rowChange(this.animationSearch(animation))
  }
  updatePosition(newX,newY){ /*for instantateously moving position*/
    this.position = {x:newX,y:newY}
  }
  getPosition(){
    return this.position
  }
  getPositionCentre(){
    return {x:this.position.x,y:this.position.y+this.frame.yOffset}
  }
  updateVectorTarget(targetX,targetY){
    this.vector = {x:targetX-this.position.x,y:targetY-this.position.y}
  }
  vectorTravel(distance){
    let modulus = Math.sqrt(distance**2/(this.vector.x**2+(this.vector.y)**2))
    //console.log(`${distance} -> vector * ${modulus} \n x=${this.vector.x * modulus} y=${this.vector.y * modulus }`)
    this.position.x += this.vector.x * modulus
    this.position.y += this.vector.y * modulus 
  }
  getType(){
    return this.type
  }
  getKey(){
    return this.key
  }
  keyMatch(key){
    return(this.key==key)
  }
  getRadius(){
    return this.radius
  }
  addEffect(){
    return
  }
}

class mapEntity extends Entity{
  constructor(key,type,imagePath,width,height,sheetInfo,yOffset,radius,health,x,y){
    super(key,type,imagePath,width,height,sheetInfo,yOffset,x,y)
    this.radius = radius
    this.health = health
  }
  changeHealth(value){
    this.health += value
    console.log(this.health)
    if(this.health<1){
      console.log("destroyed")
      this.destroy()
    }
  }
  destroy(){
    console.log("DESTRUCTION OF ",this.type)
    if(this.animationSearch("open") != undefined){
      this.animationChange("open")
      this.health = 343
    }
    else{
      this.health = 0.25
      this.frame.row = 0
      this.animationChange("destroy")
    }
    setTimeout(()=>{
    },1000)
  }
  isDestroyed(){
    return(this.health<=0)
  }
   dealDamage(value,damageType){
    if(value>0){
        this.changeHealth(-value)
    }
  }
  frameIncrement(inc){ /*increment the current animation's frame*/
     /*workaround for decrement issue: 
    increment by number of frames
    this effectively makes it travel backwards*/
    for(inc; inc<0;inc){
      inc+= this.sheetInfo[this.frame.row].frames
    }
    //if(this.key == "ACTION"){console.log(this.sheetInfo,this.frame.row)}
    this.frame.col = (this.frame.col + inc) % this.sheetInfo[this.frame.row].frames
    if(this.frame.col == this.sheetInfo[this.frame.row].frames - 1 && this.health == 0.25) {
      console.log(this.type,"DELETION",this.health)
      this.health = 0}
   
  }



}

class Character extends mapEntity{

  constructor(key,type,typeID,imagePath,width,height,stats,sheetInfo,meterMax,yOffset,actions,radius,resistances,x,y){
    super(key,type,imagePath,width,height,sheetInfo,yOffset,radius,0,x,y)
    this.stats = {str:stats[0],agl:stats[1],vit:stats[2],int:stats[3],spt:stats[4]}
    this.health  = this.getMaxHealth()
    this.typeID = typeID
    this.meterMax = meterMax
    this.meter = this.meterMax
    this.actionUsed = false
    this.actions = actions
    this.effects = []
    this.resistances = resistances
  }

  /*GETTING AND CALCULATING*/
  getModifier(stat){
    return Math.ceil(Math.abs(stat-7.5)) * Math.abs(stat-7.5)/(stat-7.5)
  }
  getMaxHealth(){
    return 2 * this.stats.vit + Math.ceil(/*level:*/3 + (this.getModifier(this.stats.vit + 8)/4))
  }
  getHealthPercent(){
    return this.health / this.getMaxHealth()
  }
  getId(){
    return this.typeID
  }
  getMeter(){
    return this.meter
  }
  getCurrentHealth(){
    return this.health
  }
  getSpeed(){
    return Math.ceil(24- /*max value + 1*/  (this.stats.agl + Math.ceil(/*level*/3 * (this.getModifier(this.stats.agl)+8))/8)  )
  }
  getMovespeed(){
    return Math.ceil((Math.ceil(3 * (this.getModifier(this.stats.agl)+8))/8)  )
  }
  getStats(){
    return this.stats
  }



  /*SETTING AND CHANGING*/
  setMeter(value){
    value = value>0?value:0
    this.meter = value<this.meterMax?value:this.meterMax
  }
  changeHealth(value){
    this.health += value
    this.health = this.health<this.getMaxHealth()?this.health:this.getMaxHealth()
    this.health = this.health>0?this.health:0
    if(this.health<1){
      console.log("killed",this.type)
      this.destroy()}
  }
  dealDamage(value,damageType){
    console.log(this.resistances)
    let n = this.resistances.length - 1
    let mult = 1
    for(n;n>-1;n--){
        console.log(damageType, this.resistances[n])
      if(damageType == this.resistances[n].type){
        mult = this.resistances[n].mult
        break
      }
    }
    this.health -= Math.round(value * mult)
    this.health = this.health<this.getMaxHealth()?this.health:this.getMaxHealth()
    console.log(`${this.type}: ${this.health + Math.round(value*mult)}HP -> ${this.health}HP \n (${value} damage x ${mult} from resistance = ${Math.round(value*mult)}) [${damageType}]`)
    if(this.health<1){
      console.log("murdered",this.type)
      this.destroy()}
  }



  /*ACTIONS*/
  doAction(actionNum,targetX,targetY, level){
    if(this.actionUsed) return
    this.actions[actionNum].processAction(this.position.x,  this.position.y + this.frame.yOffset,  targetX,  targetY,  this.meter, level, this.key)
  }
  actionUsed(){
    return this.actionUsed
  }
  depleteAction(){
    this.actionUsed = true
  }
  restoreAction(){
    this.actionUsed = false
  }
  getActionName(actionNum){
    if(actionNum >= this.actions.length){return ""}
    return this.actions[actionNum].type
  }
  getActionDescription(actionNum){
    if(actionNum >= this.actions.length){return ""}
    return this.actions[actionNum].description
  }
  getActionCost(actionNum){
    if(actionNum >= this.actions.length){return 0}
    return this.actions[actionNum].cost
  }
  getActionDamage(actionNum){
    if(actionNum >= this.actions.length){return 0}
    return this.actions[actionNum].getDamage(this.stats)
  }
  getReticleFrame(actionNum,targetX,targetY,level){
    if(actionNum >= this.actions.length || this.actionUsed){return 0}
    //let action = this.actions[actionNum]
    return this.actions[actionNum].targetValidation(this.position.x,  this.position.y + this.frame.yOffset,  targetX,  targetY,  this.meter, level, this.key)
  }
  getYOffset(){
    return this.frame.yOffset
  }
  addEffect(input){
    this.actions.push(input)
  }
  clearEffects(){
    this.effects = []
  }
  removeEffect(effect){
    let n = this.effects.length-1
    for(n;n>-1;n--){
      if(this.effects[n] == effect){
        this.effects.splice(n,1)
      }
    }
  }
  decreaseMeter(value){
    this.meter -= value
    this.meter = this.meter>this.meterMax ? this.meterMax : this.meter
    this.meter = this.meter<0 ? 0 : this.meter
  }

}

class Action extends Entity{
  constructor(type,imagePath,row,column,x,y,width,height,sheetInfo,cost,stat,multiplier,constant,damageType,targetType,range,effectRadius,selfEffect,targetEffect,movement,speed,animationType,description){
    super("ACTION",type,imagePath,width,height,sheetInfo,0,x,y)
    this.cost = cost
    this.damage = {stat:stat,mult:multiplier,const:constant,type:damageType}
    this.target = {type:targetType,range:range,radius:effectRadius}
    this.effects = {movement:movement,speed:speed,self:selfEffect,target:targetEffect}
    this.animationType = animationType
    this.description = description
    this.currentTarget = undefined
    this.areaTargets = []
  }
  targetValidation(originX,originY,targetX,targetY,meter,level,originKey){
    let reticleFrame = 0
    if(meter<this.cost){
      return reticleFrame
      /*GREY*/
    }
    if(!(this.inRange(originX,originY,targetX,targetY))){
      reticleFrame = 1
      return reticleFrame
      /*RED*/
    }
    if(!(this.targetTypeValid(targetX,targetY,level,originKey))){
      reticleFrame = 2
      //return reticleFrame
      /*YELLOW*/
    }
    if(!(this.inLine(originX,originY,targetX,targetY,level,originKey))){
      reticleFrame = 3
      //return reticleFrame
      /*ORANGE*/
    }
    if(reticleFrame == 2 || reticleFrame == 3){
      return reticleFrame
    }

    reticleFrame = 4
    return reticleFrame
    /*GREEN*/
  }
  inRange(a,b,x,y){
    /*elliptical*/
    if(this.target.range == 0) {return true}
    return this.withinEllipse(a,b,x,y,this.target.range)
  }
  withinEllipse(a,b,x,y,radius){
    return ((x-a)**2 + 4*(y-b)**2 <= radius**2)
  }
  objectWithinEllipse(a,b,x,y,ellipseRadius,objectRadius){
    return this.withinEllipse(a,b,x,y,ellipseRadius+2*objectRadius)
  }
  inLine(originX,originY,targetX,targetY,level,originKey){
    /*iterative check for every object on the line's path to check if it intersects any of the four lines that comprise the rectangle in the correct range*/
    if (this.target.range == 0) {return true}
    let dy_dx = this.calcGradient(originX,originY,targetX,targetY)
    let dx_dy = this.calcGradient(originY,originX,targetY,targetX)
    let n = level.getObjectCount()-1
    let objects = level.getObjects()
    for(n;n>-1;n--){
      let entity = objects[n]
      let entityPosition = entity.getPositionCentre()
      //if(entity.getRadius()==0){return false}
      if(entity.getKey() != originKey && entity.getKey() != this.currentTarget){
      if(originX<=entityPosition.x&& entityPosition.x<=targetX || originX>=entityPosition.x&&entityPosition.x>=targetX){
      if(originY<=entityPosition.y&& entityPosition.y<=targetY || originY>=entityPosition.y&&entityPosition.y>=targetY){
      if(this.radiusIntersect(entityPosition.x,entityPosition.y,entity.getRadius(),originX,originY,dy_dx,dx_dy)){
        //console.log(entity)
        console.log(`Origin (${originX},${originY}) \n Intersected by ${entity.getType()} (${entityPosition.x},${entityPosition.y}) \n gradients: dy/dx=${dy_dx}, dx/dy=${dx_dy} \n
        Target ${this.currentTarget} @ (${targetX},${targetY})`)
        return false
      }}
    }}
    }
    return true
  }
  targetTypeValid(targetX,targetY,level,originKey){
    this.areaTargets = []
    if(this.target.type == "point" || this.target.type == "area" || this.target.type == "self"){
      this.currentTarget = undefined
      return true
    }
    let n = level.getObjectCount()-1
    let objects = level.getObjects()
    for(n;n>-1; n--){
      let entity = objects[n]
      if(entity.getKey() != originKey){
        if(this.inRadius(targetX,targetY,entity.getRadius(),entity.getPositionCentre().x,entity.getPositionCentre().y)){
          this.currentTarget = entity.getKey()
          //console.log(`targeting ${this.currentTarget} <3`)
          return true
        }
      }
    }
    return false

    
  }
  inRadius(targetX,targetY,radius,centreX,centreY){
    if((centreX - radius <= targetX && targetX <= centreX + radius) && (centreY - 0.5*radius <= targetY && targetY <= centreY + 0.5*radius)){
      return true
    }
    return false
  }
  getName(){
    return this.type
  }
  getDescription(){
    return this.description
  }
  getCost(){
    return this.cost
  }
  getModifier(x){
    return Math.ceil(Math.abs(x-7.5)) * (x-7.5/Math.abs(x-7.5))
  }
  getDamage(stats){
    let damage = this.damage.stat == "const"||stats[this.damage.stat]==undefined ? this.damage.const : this.modifier(stats[this.damage.stat]) * this.damage.mult + this.damage.const
    return damage
  }
  getAreaTargets(targetX,targetY,level){
    this.areaTargets = []
    let n = level.getObjectCount()-1
    let objects = level.getObjects()
    for(n;n>-1; n--){
      let entity = objects[n]
      //console.log(this.withinEllipse(targetX,targetY,entity.getPosition().x,entity.getPosition().y,this.effects.effectRadius),this.target.radius)
        if(this.objectWithinEllipse(targetX,targetY,entity.getPosition().x,entity.getPosition().y,this.target.radius,entity.getRadius())){
          this.areaTargets.push(entity)
          console.log(`targeting ${entity.getKey()} <3`)
        }
    }
    return false
  }
  processAction(originX,originY,targetX,targetY,meter,level,originKey){
    if(this.targetValidation(originX,originY,targetX,targetY,meter,level,originKey) != 4){
      console.log("action unavailable")
      return}
    let self = undefined
    let n = level.getCount() - 1
    console.log(level)
    level.resetPointer()
      for(n;n>-1; n--){
      let entity = level.softDequeue()
        if(entity.getKey() == originKey){
          self = entity
        }
    }
    self.depleteAction()
    self.decreaseMeter(this.cost)
    this.animateAction(originX,originY,targetX,targetY,meter,level,originKey)
    if(! level.isCombat()){
        setTimeout(()=>{self.restoreAction()},3000)
    }
  }
  calculateAction(originX,originY,targetX,targetY,meter,level,originKey){
    let target = undefined
    let self = undefined
    let n = level.getObjectCount() - 1
    let objects = level.getObjects()
    if(this.target.type == "single"){
      for(n;n>-1; n--){
      let entity = objects[n]
        if(entity.getKey() == originKey){
          self = entity
        }
        else if(entity.getKey() == this.currentTarget){
          target = entity
        }
        if(target != undefined && self != undefined) break
      }
    }
    else{
      for(n;n>-1; n--){
        let entity = objects[n]
        if(entity.getKey() == originKey){
          self = entity
          break
        }
        
      }
      if(this.target.type == "area"){
          this.getAreaTargets(targetX,targetY,level)
      }
    }
    if(this.effects.self != null){
      self.addEffect(this.effects.self)
      /*apply self effect to user*/
    }
    switch(this.target.type){
      case "single":
        target.dealDamage(this.getDamage(self.getStats()),this.damage.type)
        if(this.effects.target != null){
          target.addEffect(this.effects.target)
        }
        break
      case "self":
        self.dealDamage(this.getDamage(self.getStats()),this.damage.type)
        break
      case "area":
        let N = this.areaTargets.length - 1
        for(N;N>-1;N--){
          target = this.areaTargets[N]
          console.log(target)
          if(this.getDamage(self.getStats()) <= 0 || target.getKey() != originKey){
            target.dealDamage(this.getDamage(self.getStats()),this.damage.type)
          }
          if(this.effects.target != null){
            target.addEffect(this.effects.target)
          }
        }
        break
      case "point":
        console.log(this.effects.target)
        if(this.effects.target != undefined){
        if(this.effects.target.slice(0,5) == "spawn"){
          console.log("spawn requested")
          let spawnRequest = this.effects.target.slice(5)
          console.log(spawnRequest)
          let spawn = undefined
          if(spawnRequest == "Automata"){
            spawn = charRecipes.createCharacter("Automata",targetX,targetY)
            
          }
          else{
            spawn = entityRecipes.createEntity(spawnRequest.toLowerCase(),targetX,targetY)
          }
          console.log(spawn)
          level.addObject(spawn)
        }
      }
    }
  }
  animateAction(originX,originY,targetX,targetY,meter,level,originKey){
    let frames = 0
    let currentAnimation = 0
    let n = 0
    let frame = 0
    this.frameSet(0)
    console.log(this.sheetInfo)

    switch(this.animationType){


      case "melee": /*SWING (directional) on user + IMPACT on target coords*/
        if(originX > targetX){
          this.updatePosition(originX-0.5*this.target.range,originY)
          this.animationChange("swing-l")
          console.log("swing-l",this.sheetInfo[this.animationSearch("swing-l")])
          frames = this.sheetInfo[this.animationSearch("swing-l")]!=undefined?this.sheetInfo[this.animationSearch("swing-l")].frames:0
        }
        else{
          this.updatePosition(originX+0.5*this.target.range,originY)
          this.animationChange("swing-r")
          console.log("swing-r",this.sheetInfo[this.animationSearch("swing-r")])
          frames = this.sheetInfo[this.animationSearch("swing-r")]!=undefined?this.sheetInfo[this.animationSearch("swing-r")].frames:0
        }
        currentAnimation = setInterval(() => {
          //console.log(this.frame.col,this.frame.row,this.animationType,this.position)
          this.render()
          n=(n+1)%33
          if(n==0) {this.frameIncrement(1); frame++}
          if(frame >= frames){
            if(this.sheetInfo[this.frame.row].animation == "impact"){
                clearInterval(currentAnimation)
                this.calculateAction(originX,originY,targetX,targetY,meter,level,originKey)
            }
            else{
                this.updatePosition(targetX,targetY)
                this.animationChange("impact")
                this.frameSet(0)
                frames = this.sheetInfo[this.animationSearch("impact")]!=undefined?this.sheetInfo[this.animationSearch("impact")].frames:0
                frame = 0
            }
           
          }
        },
      1)
        break



      case "self": /*SELF on user*/
        this.updatePosition(originX,originY)
        this.animationChange("self")
        frames = this.sheetInfo[this.animationSearch("self")]!=undefined?this.sheetInfo[this.animationSearch("self")].frames:0
        currentAnimation = setInterval(() => {
          //console.log(this.frame.col,this.frame.row,this.animationType,this.position)
          this.render()
          n=(n+1)%33
          if(n==0) {this.frameIncrement(1); frame++}
          if(frame >= frames){
            clearInterval(currentAnimation)
            this.calculateAction(originX,originY,targetX,targetY,meter,level,originKey)}
          },1)
        break
        
        

      case "proj": /*PROJ (directional) on vector from user to target + IMPACT on target*/
        frame = -1
        this.updatePosition(originX,originY)
        this.updateVectorTarget(targetX,targetY)
        if(originX > targetX){
          this.animationChange("proj-l")
          frames = this.sheetInfo[this.animationSearch("proj-l")]!=undefined?this.sheetInfo[this.animationSearch("proj-l")].frames:0
          this.updateVectorTarget(targetX,targetY)
          currentAnimation = setInterval(() => {
          //console.log(this.frame.col,this.frame.row,this.animationType,this.position)
           this.render()
           n=(n+1)%33
          if(n==0) {this.frameIncrement(1)}
          if(this.position.x<=targetX){
            if(frame == -1){
                this.animationChange("impact")
                this.frameSet(0)
                frames = this.sheetInfo[this.animationSearch("impact")]!=undefined?this.sheetInfo[this.animationSearch("impact")].frames:0
                frame = 0
            }
            if(n==0){frame++}
            if(frame >= frames){
                clearInterval(currentAnimation)
                this.calculateAction(originX,originY,targetX,targetY,meter,level,originKey)
                }
            }
            else{
                this.vectorTravel(this.target.range**0.5 / 16)
                this.updateVectorTarget(targetX,targetY)
                }
            }, 1)
        }
        else{
          this.animationChange("proj-r")
          frames = this.sheetInfo[this.animationSearch("proj-r")]!=undefined?this.sheetInfo[this.animationSearch("proj-r")].frames:0          
          currentAnimation = setInterval(() => {
          //console.log(this.frame.col,this.frame.row,this.animationType,this.position)
          
          this.render()
          n=(n+1)%33
          if(n==0) {this.frameIncrement(1)}
          if(this.position.x>targetX||targetX==originX&&(this.position.y>targetY>originY||originY>targetY>this.position.y)){
           if(frame == -1){
                this.animationChange("impact")
                this.frameSet(0)
                frames = this.sheetInfo[this.animationSearch("impact")]!=undefined?this.sheetInfo[this.animationSearch("impact")].frames:0
                frame = 0
            }
            if(n==0){frame++}
            if(frame >= frames){
                clearInterval(currentAnimation)
                this.calculateAction(originX,originY,targetX,targetY,meter,level,originKey)
            }
        }
        else{
          this.vectorTravel(this.target.range**0.5 / 16)
           //this.updateVectorTarget(targetX,targetY)
        }
    },  1)
    }
        break



      case "target": /*TARGET on target*/
        this.updatePosition(targetX,targetY)
        this.animationChange("target")
        frames = this.sheetInfo[this.animationSearch("target")]!=undefined?this.sheetInfo[this.animationSearch("target")].frames:0
        currentAnimation = setInterval(() => {
          n=(n+1)%33
          this.render()
          if(n==0) {this.frameIncrement(1); frame++}
          if(frame >= frames){
            clearInterval(currentAnimation)
            this.calculateAction(originX,originY,targetX,targetY,meter,level,originKey)}
        },
      1)
        break



      case "path": /*SWING (directional) on vector movement of self + IMPACT on target*/
      let self = undefined
        let N = level.getCount() - 1
        console.log(level)
        level.resetPointer()
        for(N;N>-1; N--){
        let entity = level.softDequeue()
            if(entity.getKey() == originKey){
                self = entity
            }
        }
        console.log(self)
        if(self == undefined) return

        frame = -1
        this.updatePosition(originX,originY)
        self.updateVectorTarget(targetX,targetY)

        if(originX > targetX){
          this.animationChange("swing-l")
          frames = this.sheetInfo[this.animationSearch("swing-l")]!=undefined?this.sheetInfo[this.animationSearch("swing-l")].frames:0
          currentAnimation = setInterval(() => {
          //console.log(this.frame.col,this.frame.row,this.animationType,this.position)
          this.position = self.getPositionCentre()
          this.position.x -= 16
           this.render()
           n=(n+1)%33
          if(n==0) {this.frameIncrement(1)}
          if(self.getPosition().x<=targetX){
            if(frame == -1){
                this.animationChange("impact")
                this.frameSet(0)
                frames = this.sheetInfo[this.animationSearch("impact")]!=undefined?this.sheetInfo[this.animationSearch("impact")].frames:0
                frame = 0
            }
            if(n==0){frame++}
            if(frame >= frames){
                clearInterval(currentAnimation)
                this.calculateAction(originX,originY,targetX,targetY,meter,level,originKey)
                self.updatePosition(targetX,targetY)
                }
            }
            else{
                self.vectorTravel(this.target.range**0.5 / 8)
                }
            }, 1)
        }
        else{
          this.animationChange("swing-r")
          frames = this.sheetInfo[this.animationSearch("swing-r")]!=undefined?this.sheetInfo[this.animationSearch("swing-r")].frames:0          
          currentAnimation = setInterval(() => {
          //console.log(this.frame.col,this.frame.row,this.animationType,this.position)
          //console.log(self.getPositionCentre())
          this.position = self.getPositionCentre()
          this.position.x += 16
          //console.log(this.position)
          this.render()
          //console.log(n)
          n=(n+1)%33
          if(n==0) {this.frameIncrement(1)}
          //console.log(originY,targetY,self.getPositionCentre().y)
          if(self.getPosition().x>targetX   ||  targetX==originX && (self.getPositionCentre().y>=targetY>>originY || originY>targetY>=self.getPositionCentre().y)   ){
           if(frame == -1){
                this.animationChange("impact")
                this.frameSet(0)
                frames = this.sheetInfo[this.animationSearch("impact")]!=undefined?this.sheetInfo[this.animationSearch("impact")].frames:0
                frame = 0
            }
            if(n==0){frame++}
            if(frame >= frames){
                clearInterval(currentAnimation)
                this.calculateAction(originX,originY,targetX,targetY,meter,level,originKey)
                self.updatePosition(targetX,targetY)
            }
        }
        else{
            self.vectorTravel(this.target.range**0.5 / 8)
          
           //this.updateVectorTarget(targetX,targetY)
        }
    },  1)
    }
        break



      case "rain": /**erm*/
      let acceleration = 1
      let velocity = 0
      frame = -1
        this.updatePosition(targetX,targetY + 64)
        this.animationChange("rain")
        frames = this.sheetInfo[this.animationSearch("rain")]!=undefined?this.sheetInfo[this.animationSearch("rain")].frames:0
        currentAnimation = setInterval(() => {
          this.render()
          n = (n+1)%33
          if(n == 0) {this.frameIncrement(1); velocity += acceleration}
        
        if(this.position.y <= targetY){
          console.log("change",this.position.y,velocity,targetY)
        if(frame == -1){
                this.animationChange("impact")
                this.frameSet(0)
                frames = this.sheetInfo[this.animationSearch("impact")]!=undefined?this.sheetInfo[this.animationSearch("impact")].frames:0
                frame = 0
            }
            if(n==0){frame++}
            if(frame >= frames){
                clearInterval(currentAnimation)
                this.calculateAction(originX,originY,targetX,targetY,meter,level,originKey)
            }
        }
        else{
          this.updatePosition(targetX,this.position.y - velocity)
          console.log("new",this.position.y,velocity,targetY)
           //this.updateVectorTarget(targetX,targetY)
        }
      },1)
        break
    }
  }
  calcGradient(a,b,c,d){
    return a-c == 0? 0 : (d-b)/(c-a)
  }
  line(x, originX, originY, gradient){
    return gradient * (x - originX) + originY
  }
  radiusIntersect(x,y,radius,originX,originY,dy_dx,dx_dy){
    //console.log(x,y,radius,originX,originY,dy_dx,dx_dy)
    if(radius == 0 ){return false}
    if(this.line(x-radius,originX,originY,dy_dx)>=y-0.5*radius && this.line(x-radius,originX,originY,dy_dx)<=y+0.5*radius){return true}
    else if(this.line(x+radius,originX,originY,dy_dx)>=y-0.5*radius && this.line(x+radius,originX,originY,dy_dx)<=y+0.5*radius){return true}
    else if(this.line(y-0.5*radius,originY,originX,dx_dy)>=x-radius && this.line(y-0.5*radius,originY,originX,dx_dy)<=x+radius){return true}
    else if(this.line(y+0.5*radius,originY,originX,dx_dy)>=x-radius && this.line(y+0.5*radius,originY,originX,dx_dy)<=x+radius){return true}
    return false

  }
  modifier(stat){
    return Math.ceil(Math.abs(stat-7.5)) * (stat-7.5)/(Math.abs(stat-7.5))
  }
}