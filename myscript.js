let refreshInterval;
function todo() {

    clearInterval(refreshInterval);

    // if(document.getElementById("timeInHours").value > 1500) { 
    //     if(confirm("Minutes should be less than and equal to 1500. Enter the Minutes Again!")) {
    //         window.location.reload();
    //     }
    // }
    // else {
        
    // }

    if(document.getElementById("timeInHours").value < 0 || document.getElementById("timeInHours").value > 24) {
        if(confirm("Hours must be between 0-24 ")) {
            window.location.reload();
        }
    }

    else if(document.getElementById("timeInMinutes").value < 0 || document.getElementById("timeInMinutes").value > 59) {
        if(confirm("Minutes must be between 0-59 ")) {
            window.location.reload();
        }
    }

    else if(document.getElementById("timeInSeconds").value < 0 || document.getElementById("timeInSeconds").value > 59) {
        if(confirm("Seconds must be between 0-59 ")) {
            window.location.reload();
        }
    }

    else {
        refreshInterval = setInterval(updateCountDown, 1000); // it refreshes each second!

        console.log("This code will run if the Minutes are smaller than and equal to 1500.");

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
            document.getElementsByClassName("Hours")[0].innerHTML = `${hourRem}`;
            document.getElementsByClassName("Minutes")[0].innerHTML = `${minuteRem}`;
            document.getElementsByClassName("Seconds")[0].innerHTML = `${secondRem}`;

            // for hourRem
            if(parseInt(secondRem) == 0 && parseInt(minuteRem) == 0) {
                hourRem = parseInt(hourRem);

                if(hourRem == 0) {
                    clearInterval(refreshInterval);
                    // secondfunc();
                    reDirect();
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

function reDirect() {
    if(confirm("Enjoy the Song")) {
        // window.location.href = "https://youtu.be/QJO3ROT-A4E";
        window.open("https://youtu.be/QJO3ROT-A4E");
    }
    else {
        alert("Okay then Stay in the Same Website...");
    }
}

function secondfunc() {
    if(confirm("Now your countdown has finished!")) {
        window.location.reload(); // it reloads the current page!
    }
}
