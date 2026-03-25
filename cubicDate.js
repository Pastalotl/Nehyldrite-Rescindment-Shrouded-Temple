let today = new Date()
let date = today.getDate()
let month = today.getMonth()+1
let year = today.getFullYear()

let icon = "./icons/"
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

function dateToCubic(alpha,beta,gamma){
    gamma = parseInt(gamma.toString()[2]+gamma.toString()[3]) /*we are only using YY format, not YYYY*/

    /*roots of polynomials business for an cubic equation in the form:
    0 = a𝑥³+b𝑥²+c𝑥+d
    but a will always equal 1, to make the mathematics simpler*/
    const b = -(alpha+beta+gamma) /*sum*/
    const c = alpha*beta + beta*gamma + gamma*alpha /*sum of the product of pairs*/
    const d = -(alpha*beta*gamma) /*product*/
    const equation = "𝑥³ " + b + "𝑥² +" + c + "𝑥 " + d /*make the equation into a string*/

    /*Inequality*/
    if (alpha <= beta && alpha <= gamma) {
        inequality = "α≤"
    if (beta <= gamma) {inequality += "β≤γ"}
        else {inequality += "γ<β"}
    }
    else if (beta <= alpha && beta <= gamma) {
        inequality = "β≤"
        if (alpha <= gamma) { inequality += "α≤γ" }
        else { inequality += "γ<α" }
    }
    else {
        inequality = "γ≤"
        if (alpha <= beta) { inequality += "α≤β" }
        else { inequality += "β<α" }
    }
    let output = ("Today is: " + equation + " with the roots α, β, γ in the form α/β/γ where " + inequality)
    console.log(output)
    return output /*return equation and equality*/
} 


document.getElementById("date").innerHTML = dateToCubic(date,month,year)