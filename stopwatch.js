const stopWatch =()=>{
    let countTime = myMilliseconds.value
    countTime++;
    myMilliseconds.value = countTime;
    myTimeout = setTimeout(stopWatch, 10);
    if(myMilliseconds.value == 100 ){
        myMilliseconds.value = 0;
        mySeconds.value ++;
    }
    if(mySeconds.value == 60){
        mySeconds.value = 0;
        myMinutes.value ++;
    }
}
const stopStop = ()=>{
    clearTimeout(myTimeout);
}
const resetWatch =()=>{
    clearInterval(myTimeout);
    myMilliseconds.value = 0;
    mySeconds.value = 0;
    myMinutes.value = 0
}