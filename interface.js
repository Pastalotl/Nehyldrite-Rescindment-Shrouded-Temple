class Ui{
  constructor(imagePath,row,column,x,y,width,height,sheetInfo){
    this.sheet = new Image()
    this.sheet.src = imagePath
    this.frame = {row:row, col:column, width:width, height:height}
    this.sheetInfo = sheetInfo /*how many columns each row has*/
    this.position = {x:x, y:y}
    this.hover = false
  }
  render(){
    this.sheet.onload = 
    ctx.drawImage(
      this.sheet,
      this.frame.col*this.frame.width,
      this.frame.row*this.frame.height, 
      this.frame.width,
      this.frame.height,
      (this.position.x*scale + centre.x) - scale*Math.floor(this.frame.width/2),
      (-1 * this.position.y*scale + centre.y) - scale*Math.floor(this.frame.height/2),
      scale * this.frame.width, 
      scale * this.frame.height)
  }
  frameIncrement(inc){ /*increment the current animation's frame*/
     /*workaround for decrement issue: 
    increment by number of frames
    this effectively makes it travel backwards*/
    for(inc; inc<0;inc){
      inc+= this.sheetInfo[this.frame.row]
    }

    this.frame.col = (this.frame.col + inc) % this.sheetInfo[this.frame.row]
   
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

  updatePosition(newX,newY){ /*for instantateously moving position*/
    this.position = {x:newX,y:newY}
  }
  frameSet(col){
    for(col; col<0;col){
      col+= this.sheetInfo[this.frame.row]
    }

    this.frame.col = col % this.sheetInfo[this.frame.row]
  }
}

class Icon extends Ui{
  constructor(imagePath,row,column,x,y,width,height,sheetInfo){
    super(imagePath,row,column,x,y,width,height,sheetInfo)
  }
  frameIncrement(inc){ /*increment the current animation's frame*/
     /*workaround for decrement issue: 
    increment by number of frames
    this effectively makes it travel backwards*/
    for(inc; inc<0;inc){
      inc+= this.sheetInfo[this.frame.row].frames
    }

    this.frame.col = (this.frame.col + inc) % this.sheetInfo[this.frame.row].frames
   
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
  frameSet(col){
    for(col; col<0;col){
      col+= this.sheetInfo[this.frame.row].frames
    }

    this.frame.col = col % this.sheetInfo[this.frame.row].frames
  }
  rowChange(spritesheetRow){ /*change the row for the spritesheet*/
    if(spritesheetRow < this.sheetInfo.length){
      this.frame.row = spritesheetRow
      if(this.frame.col-1>this.sheetInfo[spritesheetRow].frames){
        this.frame.col = this.frame.col%this.sheetInfo[spritesheetRow].frames
      }
    }
    else{
      //console.log("animation out of range")
    }
    
  }
}

class StatBar extends Ui{
  constructor(imagePath,row,column,x,y,width,height,sheetInfo,barPixels){
    super(imagePath,row,column,x,y,width,height,sheetInfo)
    this.barLengths = barPixels
  }
  setPercentage(decimal){
    this.frame.col = Math.ceil(decimal * this.barLengths[this.frame.row])
  }
  setFrame(frame){
    this.frame.col = frame
  }
}

class Textbox extends Ui{
  constructor(imagePath,row,column,x,y,width,height,sheetInfo,boundary){
    super(imagePath,row,column,x,y,width,height,sheetInfo)
    this.boundary = boundary
    this.columns = sheetInfo[0]
  }
  inBounds(xCheck,yCheck){   
  if(
    (this.boundary.xMin<=xCheck&& xCheck<=this.boundary.xMax)
    && (this.boundary.yMin<=yCheck&& yCheck<=this.boundary.yMax)
  ){
    return true}
  /*if out of bounds*/
  return false
  }
  writeText(sentence){
    let spacing = 1
    //console.log("Begin write")
    let totalLength = sentence.length
    this.updatePosition(this.boundary.xMin - spacing, this.boundary.yMax - spacing)
    //console.log(totalLength)
    for(let n=0;n<totalLength;n++){
      if(sentence.charCodeAt(n)==64){ /*@ symbol = line break*/
        n++
        if(this.inBounds(this.boundary.xMin + spacing, this.position.y - this.frame.height - spacing)){
          this.updatePosition(this.boundary.xMin - spacing, this.position.y - this.frame.height - spacing)
        }
        else{
          return "string overflow"
        }
      }
      this.frame.col = (sentence.charCodeAt(n)-32)%this.columns
      this.frame.row = Math.floor((sentence.charCodeAt(n)-32)/this.columns)
      //console.log(sentence[n],sentence.charCodeAt(n)-32,this.frame.row,this.frame.col)
      if(this.inBounds(this.position.x + this.frame.width + spacing,this.position.y)){
        //console.log("Case A")
        this.updatePosition(this.position.x + this.frame.width + spacing,this.position.y)
        //this.render()
      }
      else if(this.inBounds(this.boundary.xMin + this.frame.width, this.position.y - this.frame.height - spacing)){
        //console.log("Case B")
        this.updatePosition(this.boundary.xMin + this.frame.width, this.position.y - this.frame.height - spacing)
        //this.render()
      }
      else{
        //console.log(this.boundary.xMin - spacing, this.position.y - this.frame.height - spacing)
        return "string overflow"
      }
      //console.log("final step!",this.position.x,this.position.y)
      this.render()
    }
    //console.log("text written")
  }

}