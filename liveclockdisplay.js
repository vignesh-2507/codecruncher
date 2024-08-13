function updateclock(){
    let clockelement = document.getElementById("clock")
    let now = new Date()
    let hours = now.getHours()
    //.toString().padStart(2,"0")
let minutes = now.getMinutes().toString().padStart(2,"0")
let seconds = now.getSeconds()
//.toString().padStart(2,"0")
clockelement.innerText=`${hours}: ${minutes}: ${seconds}`
}
updateclock()
setInterval(updateclock,1000)