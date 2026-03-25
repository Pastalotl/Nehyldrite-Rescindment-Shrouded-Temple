let today = new Date()
let date = today.getDate()
let month = today.getMonth()+1
let year = today.getFullYear()

let icon = "../icons/"
iconList = ["Swanopoly Idle.png","Ifforrem Idle.png","Peter Idle.png","Kauplaire Idle.png","Ddwgyl Idle.png","Ddwgyl Idle (Pride).png","Vayens Idle.png","Taure Idle.png","Calian Idle.png","Nigelas Idle.png","Silaera Idle.png","Nigelas Festive.png"]
prideIconList = ["Ddwgyl Idle (Pride).png","Silaera Idle (Pride).png", "Kauplaire Idle (Pride).png", "Taure Idle (Pride).png", "Calian Idle (Pride).png"]
festiveIconList = ["Nigelas Festive.png"]
if(month==3 && date==30){/*international day of trans visibility*/
    icon += "Silaera Idle (Pride).png"
}
else if(month==6){ /*pride month*/
    icon += prideIconList(Math.floor(Math.random()*(prideIconList.length)))
}
else if(month==12){
    icon += festiveIconList(Math.floor(Math.random()*(festiveIconList.length)))
}
else{
    icon += iconList[month-1]
}
console.log(icon)
document.getElementById("bannerIcon").src = icon
favicon = document.createElement('Link');
favicon.rel = 'icon'
document.head.appendChild(favicon)
favicon.href = icon