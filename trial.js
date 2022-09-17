const stopWatch =()=>{
    let countTime = myMilliseconds.value
    countTime++;
    myMilliseconds.value = countTime;
    setTimeout(stopWatch, 10);
    if(myMilliseconds.value == 60 ){
        myMilliseconds.value = 0;
        mySeconds.value ++;
    }
    if(mySeconds.value == 60){
        mySeconds.value = 0;
        myMinutes.value ++;
    }
}

    // if(myMinutes.value==60){
    //     myMinutes.value = 0
    //     myHour.value ++
    // }