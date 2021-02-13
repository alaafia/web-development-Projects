const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour:" + hr + " Minute:" + min + " Second" + sec);
    
let hrPositions = hr*360/12 + ((min*360/60)/12);
let minPositions = (min*360/60) + (sec*(360/3600));
let secPositions = sec*360/60;
    

function runTheClock() {
    hrPositions = hrPositions + 3/360;
    minPositions = minPositions + 6/60 ;
    secPositions = secPositions + 6;
    
    HOURHAND.style.transform = "rotate(" + hrPositions + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPositions + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPositions + "deg)";
    
}
function clickFunction()
{
    alert("Hour:" + hr + " Minute:" + min + " Second" + sec);
}
var interval = setInterval(runTheClock,1000);
