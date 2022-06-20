

let refreshInterval;
function todo() {
    clearInterval(refreshInterval);

    if(document.getElementById("time").value > 1500) { 
        if(confirm("Minutes should be less than and equal to 1500. Enter the Minutes Again!")) {
            window.location.reload();
        }
    }
    else {
        refreshInterval = setInterval(updateCountDown, 1000); // it refreshes each second!

        let fullTime = document.getElementById("time").value;

        console.log("This code will run if the Minutes are smaller than and equal to 1500.");

        const startingMinute = fullTime;
        let timeInSec = startingMinute * 60;
        const ele = document.getElementById("countdown"); // where to show


        function updateCountDown() {
            const minuteRem = Math.floor(timeInSec / 60);
            let secondRem = timeInSec % 60;

            secondRem = secondRem < 10 ? '0' + secondRem : secondRem;

            ele.innerHTML = `${minuteRem}:${secondRem}`;

            timeInSec--;

            if(timeInSec < 0) {
                clearInterval(refreshInterval);
                secondfunc();
            }
        }
    }
}

function secondfunc() {
    if(confirm("Now your countdown has finished!")) {
        window.location.reload(); // it reloads the current page!
    }
}
