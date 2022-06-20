

let refreshInterval;
function todo() {
    clearInterval(refreshInterval);

    if(document.getElementById("timeInHours").value > 1500) { 
        if(confirm("Minutes should be less than and equal to 1500. Enter the Minutes Again!")) {
            window.location.reload();
        }
    }
    else {
        refreshInterval = setInterval(updateCountDown, 1000); // it refreshes each second!

        console.log("This code will run if the Minutes are smaller than and equal to 1500.");

        const ele = document.getElementById("countdown"); // where to show the countDown

        let hourRem = document.getElementById("timeInHours").value;
        if(hourRem >= 0 && hourRem < 10) {
            hourRem = '0' + hourRem;
        }

        let minuteRem = document.getElementById("timeInMinutes").value;
        if(minuteRem >= 0 && minuteRem < 10) {
            minuteRem = '0' + minuteRem;
        }

        let secondRem = document.getElementById("timeInSeconds").value;
        if(secondRem >= 0 && secondRem < 10) {
            secondRem = '0' + secondRem;
        }

        function updateCountDown() {
            ele.innerHTML = `${hourRem}:${minuteRem}:${secondRem}`;

            // for hourRem
            if(parseInt(secondRem) == 0 && parseInt(minuteRem) == 0) {
                hourRem = parseInt(hourRem);

                if(hourRem == 0) {
                    clearInterval(refreshInterval);
                    secondfunc();
                }
                else {
                    hourRem -= 1;
                    if(hourRem >= 0 && hourRem < 10) {
                        hourRem = '0' + hourRem;
                    }
                }
            }
            
            // for minuteRem
            if(parseInt(secondRem) == 0) { // we will change the minutes if and only if secondRem == 0
                minuteRem = parseInt(minuteRem);

                if(minuteRem == 0) {
                    minuteRem = 59;
                }
                else {
                    minuteRem -= 1;
                    if(minuteRem  >= 0 && minuteRem < 10) {
                        minuteRem = '0' + minuteRem;
                    }
                }
            }

            // for secondRem
            if(parseInt(secondRem) == 0) {
                secondRem = 59;
            }
            else if(parseInt(secondRem) > 0 && parseInt(secondRem) <= 10) {
                secondRem = parseInt(secondRem);
                secondRem -= 1;
                secondRem  = '0' + secondRem;
            }
            else {
                secondRem = parseInt(secondRem);
                secondRem -= 1;
            }
        }
    }
}

function secondfunc() {
    if(confirm("Now your countdown has finished!")) {
        window.location.reload(); // it reloads the current page!
    }
}
