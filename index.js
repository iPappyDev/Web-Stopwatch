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
    activitiesDashboard.innerHTML = `<section style="width: 100%;">
    <div style="background-color: #9559cb; height: 10vh;">
        <h2 style="padding-top: 30px; text-align: center;">Activity Dashboard</h2>
    </div>
    <div style="background-color: white; height: 55vh;">
       <div style=" height: 45vh; background-color: #a79eda; padding-top: 20px;">
            <div style="margin: auto; width: 70%; display: grid; gap: 5px;">
                <label for="">DAY</label>
                <input  id="searchID" type="text" id="activity" placeholder="day of activity(1-30)" style="text-align: center;">
                <div style="margin-top: 20px; display: grid; justify-content: center;">
                    <h2 id="lorem">Days of Activity</h2>
                    <div id="activity"></div>
                </div>
            </div>
       </div>
       <div style="display: flex; justify-content: center; margin-top: 20px; gap:20px;">
            <button onclick="goCheckInfo()">CHECK</button>
            <button onclick="rEload()" style="background-color: #9559cb; border: none;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                /svg>
            </button>
       </div>
    </div>
</section>`
}
function goCheckInfo(){
    let searchInfo = Number(searchID.value)
    let allActivities = JSON.parse(localStorage.getItem("active"))
    lorem.innerHTML = `Day ${searchInfo} History`
    activity.innerHTML = `Activity - ${allActivities[searchInfo].act} <br> Duration - ${allActivities[searchInfo].durat} <br> Info - ${allActivities[searchInfo].others}`
}
function rEload(){
    window.location.href = "index.html"
}