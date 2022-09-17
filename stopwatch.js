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
let allActivities = []
if(localStorage.active){
    allActivities = JSON.parse(localStorage.getItem("active"))
}
const saved =()=>{
    let eachActivity = {
        act: activity.value,
        durat: duration.value,
        others: optional.value
    }
    if((act = activity.value)  &&
        (durat = duration.value) ||
        (others = optional.value)){
        allActivities.push(eachActivity),

        activity.value = "",
        duration.value = "",
        optional.value = ""
    }
    localStorage.setItem("active",JSON.stringify(allActivities))
}
const search =()=>{
    activitiesDashboard.innerHTML = `<section style="width: 100%;" id="activitiesDashboard">
    <div style="background-color: #9559cb; height: 10vh;">
        <h2 style="padding-top: 30px; text-align: center;">Activity Dashboard</h2>
    </div>
    <div style="background-color: white; height: 55vh;">
       <div style=" height: 45vh; background-color: #a79eda; padding-top: 20px;">
            <div style="margin: auto; width: 70%; display: grid; gap: 5px;">
                <label for="">DAY</label>
                <input type="text" id="activity" placeholder="day of activity(1-30)" style="text-align: center;">
                <div style="margin-top: 20px; display: grid; justify-content: center;">
                    <h2>loremjfne</h2>
                    <p>loremjfne</p>
                    <p>loremjfne</p>
                </div>
            </div>
       </div>
       <div style="display: flex; justify-content: center; margin-top: 20px; gap:20px;">
            <button onclick="search()">SEARCH</button>
            <button onclick="search()" style="background-color: #9559cb; border: none;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                /svg>
            </button>
       </div>
    </div>
</section>`
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