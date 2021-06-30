function timer(){
    let counter  = document.getElementById("counter").innerHTML;
    let time = counter.split(":");
    let hours = time[0];
    let minutes = time[1];
    let seconds = time[2];
    
    if(seconds != 59 ){
        seconds++;
    }else{
        seconds=0;
        minutes++;
    }
    if(minutes == 59){
        minutes=0;
        hours++;
    }
    document.getElementById("counter").innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(timer, 1000);
}

function numberOfVisitors(){
    let currentCount = localStorage.getItem("visitors");
    currentCount++;
    localStorage.setItem("visitors", currentCount);
    document.getElementById("visit").innerHTML = currentCount;

}


timer();
