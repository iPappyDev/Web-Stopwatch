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


// const stopWatch =()=>{
//     repBtn.innerHTML = `<button style="background-color: transparent; border: 0;" onclick="stopStop()"  id="secBtn">
//         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-pause-circle" viewBox="0 0 16 16">
//             <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//             <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
//         </svg>
//         </button>
//     `
//     let countTime = myMilliseconds.value
//     countTime++;
//     myMilliseconds.value = countTime;
//     myTimeout = setTimeout(stopWatch, 10);
//     if(myMilliseconds.value == 100 ){
//         myMilliseconds.value = 0;
//         mySeconds.value ++;
//     }
//     if(mySeconds.value == 60){
//         mySeconds.value = 0;
//         myMinutes.value ++;
//     }
// }
// const stopStop = ()=>{
//     clearTimeout(myTimeout);
//     secBtn.innerHTML `<button style="background-color: transparent; border: 0;">
//     <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
//         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//         <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
//       </svg>
// </button>`
// }
// const resetWatch =()=>{
//     clearInterval(myTimeout);
//     myMilliseconds.value = 0;
//     mySeconds.value = 0;
//     myMinutes.value = 0
// }