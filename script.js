const day = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const newYrMsg = document.getElementById("newYear");
const data ="hello";
const timer = setInterval(countDown,1000);
function countDown(){
    const date  = new Date();
    const newYear = new Date("2022-01-25T11:53:00");
    const count = (newYear-date)/1000;
    if(count>=0){
const sec = Math.floor(count%60);
    const min = Math.floor((count/60)%60);
    const hrs = Math.floor((count/3600)%24);
    const days = Math.floor(count/(3600*24));
    
    
    console.log(days+","+hrs+","+min+","+sec);
    day.innerHTML = days;
    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec ;
console.log(count);

    }
    else if(count<0){
        newYrMsg.innerHTML = "Happy New year Happy Happy New Year";
        console.log("Happy new year");
        stop();
        newYrMsg.className = 'anime-new-year';
     
    }
    
}
countDown();


 
function stop(){
    clearInterval(timer);
 }
//timer();
// if (count ==0){
//     clearInterval(timer);
// newYrMsg.innerHTML = "Happy New year Happy Happy New Year";
// }


