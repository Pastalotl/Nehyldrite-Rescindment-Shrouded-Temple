class Hashtable{
  constructor(size){
    this.table = new Array(size)
    this.size = size
  }
  get(location){
    var index = this.hash(location)
    var record = this.table[index]
    if(record==undefined){return null}
    var n = record.length - 1
    for(n;n>-1;n--){
      console.log(n,record[n])
      if(record[n].location == location){
        return record[n].data
      }
    }
    return null
  }
  set(location,data){
    var index = this.hash(location)
    if (!this.table[index]){ /*no collisions - best case*/
      this.table[index]=[]
    }
    for(var pair of this.table[index]){
      if(pair.location == location){
        pair.data = data
        return
      }
    }
    this.table[index].push({location:location,data:data})
  }
  hash(input){
    const salt = "pleasedon'tcollide"
    input = input + salt
    var output = 0
    const prime = 419
    var n = input.length - 1
    for(n;n>=0;n--){
      output += input.charCodeAt(n) * (n+5) * prime - n * input.charCodeAt(n)
    }
    return output % this.size
  }
  
}

class CharacterTable extends Hashtable{
  constructor(size){
    super(size)
    this.currentKey = 99
  }
  createCharacter(type,x,y){
    if(x==undefined) x = 0
    if(y==undefined) y = 0
    let record = this.get(type)
    if(record == null) return
    //console.log(record)
    //if(record.id > 7){
      //return (new Character(type,record.id,record.imagePath,0,0,0,0,record.width,record.height,record.stats,record.sheetInfo))
    //}
    this.currentKey++
    return (new Character("cha"+String(this.currentKey),type,record.id,record.imagePath,record.width,record.height,
    record.stats,record.sheetInfo,record.meterMax,record.yOffset,record.actions,record.radius,record.resistances,x,y))

  }
}

class EntityTable extends Hashtable{
  constructor(size){
    super(size)
    this.currentKey = 199
  }
  createEntity(type,x,y){
    if(x==undefined) x = 0
    if(y==undefined) y = 0
    let record = this.get(type)
    if(record == null) return
    //console.log(record)
    //if(record.id > 7){
      //return (new Character(type,record.id,record.imagePath,0,0,0,0,record.width,record.height,record.stats,record.sheetInfo))
    //}
    this.currentKey++
    if(record.radius!=undefined){
      return new mapEntity("map"+String(this.currentKey),type,record.imagePath,record.width,record.height,
      record.sheetInfo,record.yOffset,record.radius,record.health,x,y)
    }
    else{
      return new Entity("obj"+String(this.currentKey),type,record.imagePath,record.width,record.height,
      record.sheetInfo,record.yOffset,x,y)
    }
  }
}

class ActionTable extends Hashtable{
    constructor(size){
    super(size)
  }
  createAction(type){
    let record = this.get(type)
    //console.log(record)
    if(record == null) return
    //if(record.id > 7){
      //return (new Character(type,record.id,record.imagePath,0,0,0,0,record.width,record.height,record.stats,record.sheetInfo))
    //}
    return (new Action(type,record.imagePath,0,0,0,0,record.width,record.height,record.sheetInfo,
      record.cost,record.stat,record.multiplier,record.constant,record.damageType,record.targetType,record.range,
    record.effectRadius,record.selfEffect,record.targetEffect,record.movement,record.speed,record.animationType,
  record.description))

  }
}