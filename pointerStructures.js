class Stack{
  constructor(){
    this.pointer = -1
    this.data = []
  }
  push(data){
    //if(this.pointer===this.data.length-1){return false}
    this.pointer ++ 
    this.data[this.pointer] = data
  }
  pop(){
    if(this.isEmpty()){return false}
    this.pointer --
    return this.data[this.pointer+1]
  }
  peek(){
    if(this.isEmpty()){return false}
    return this.data[this.pointer]
  }
  isEmpty(){
    if(this.pointer==-1){return true}
  }
}

class PriorityQueue {
  constructor(){
    this.queue = []
  }
  enqueue(data,priority){/*add data with a descending priority (lowest number first)*/
    let element = {data:data,priority:priority}

    for(let n = 0;n<this.queue.length;n++){
      if(this.queue[n].priority > element.priority) {
        this.queue.splice(n,0,element)
        return
      }
    }
    this.queue.push(element)
  }
  dequeue(){ /*remove first item and return it*/
    if(this.empty()){return }
    return this.queue.shift()
    /*array.shift() is like inbuilt array dequeue!!!!!! wow!!!!*/
  }
  frontPeek(){ /*return first item in queue*/
    if(this.empty()){return null}
    return this.queue[0]
  }
  rearPeek(){ /*return last item in queue*/
    if(this.empty()){return null}
    return this.queue[this.queue.length-1]
  }
  empty(){ /*check if the queue is empty*/
    return this.queue.length == 0
  }
  getCount(){
    return this.queue.length
  }
}

class PriorityTurnQueue extends PriorityQueue{
  constructor(iconsCombat,hexesCombat,portraitsIdle){
    super()
    this.turnNumber = 1
    this.pointer = 0
    this.iconsCombat = iconsCombat
    this.hexesCombat = hexesCombat
    this.portraitsIdle = portraitsIdle
    this.alternate = 0
    this.combat = false
  }
  enqueueCharacter(character){ /*enqueue character (automated priority)*/
    let priority = ! this.combat ? this.turnNumber : this.turnNumber + character.getSpeed()
    //this.turnNumber++
    this.enqueue(character,priority)
  }
  dequeue(){ /*remove first item and return it*/
    if(this.empty()){return }
    this.alternate = this.alternate==1?0:1
    return this.queue.shift()
    /*array.shift() is like inbuilt array dequeue!!!!!! wow!!!!*/
  }
  endTurn(){ /*dequeue and requeue character*/
    this.turnNumber++
    let character = this.dequeue()
    this.enqueue(character.data, ! this.combat ? this.turnNumber : character.data.getSpeed() + character.priority)
    this.peekCharacter().restoreAction()
    //this.pointer--
    return character
  }
  peekCharacter(){ /*peek but only the datar*/
    return this.frontPeek().data
  }
  softDequeue(){ /*dequeue a second pointer used for looking through the queue for rendering*/
    if(this.empty()){return}
    let out = this.queue[this.pointer].data
    this.pointer++
    if(this.pointer>this.queue.length-1){
      this.pointer = 0
    }
    return out
  }
  getLength(){/*return length of queue*/
    return this.queue.length
  }
  resetPointer(){
    this.pointer = 0
  }
  clearQueue(){
    this.queue = []
    this.pointer = 0
    this.turnNumber = 1
  }
  renderTurnOrder(){
    let portraits = this.combat ? this.iconsCombat : this.portraitsIdle
    let portraitCount = this.queue.length
    const portraitStartX = -160 + 4 + 13
    const portraitDefaultY = 90-16
    const portraitTesselationWidth = 26
    const portraitTesselationHeight = 14
    /*Turn Order:*/
    for(let n=0;n<portraitCount;n++){
      /*this makes a tesselated row of hexagons!*/
      //console.log(this.softDequeue().getType())
      let portraitChar = this.softDequeue()
      portraits.animationChange(portraitChar.getType())
      
      if(n>11){
        this.resetPointer()
        return
      }
      let isSelected = n==0?1:0
      let positionX = portraitStartX+portraitTesselationWidth*n
      let positionY = portraitDefaultY-portraitTesselationHeight*((n+Math.floor(this.alternate))%2)

      portraits.frameSet(isSelected)
      if(this.combat){
        let allegiance = portraitChar.getAllegiance()
        if(allegiance=="party"){this.hexesCombat.rowChange(0)}
        else{
          this.hexesCombat.rowChange(2 - allegiances[allegiance]["party"]) /*1 if allied, 2 if neutral, 3 if hostile*/
        }
        this.hexesCombat.frameSet(isSelected)
        this.hexesCombat.updatePosition(positionX,positionY)
        this.hexesCombat.render()
      }
      portraits.updatePosition(positionX,positionY)
      portraits.render()
    }
  }
  removeCharacter(key){
    for(let n = 0;n<this.queue.length;n++){
      //console.log(this.queue[n].data.getKey(),key)
      if(this.queue[n].data.getKey()==key){
        this.queue.splice(n,1)
        //console.log(this.queue)
        return
      }
    }
  }
  updateCombat(combatStatus){
    this.combat = combatStatus
  }
  
}
