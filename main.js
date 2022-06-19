let p_btn = document.querySelector(".p-btn");
let btns_btns = document.querySelector(".btns-btns");
let n_char = document.querySelectorAll(".n-char");
let t_input = document.querySelectorAll(".t-input");
let reset_btn = document.querySelector(".reset-btn");
let totalTime;
let timeSet;
let oneSecond = 1000;


function textStart() {
    p_btn.innerHTML = "START";
    p_btn.style.padding = "2px 8px";
    btns_btns.style.transition = "0";
}

function input00() {
    for (let i = 0; i < t_input.length; i++) {
        t_input[i].value = "00";
    }
}

reset_btn.addEventListener("click", () => {
    input00();
    textStart();
});


function sBox() {
    function tLoopS() {
        if (p_btn.innerHTML == "START") {
            return;
        } else {
            if (t_input[0].value > 0 && t_input[1].value > 0 && t_input[2].value == 0){
                t_input[2].value = 59;
                t_input[1].value = t_input[1].value - 1;
            }
            if (t_input[0].value == 0 && t_input[1].value > 0 && t_input[2].value == 0){
                t_input[2].value = 59;
                t_input[1].value = t_input[1].value - 1;
            }
            setTimeout(() => {


                // not putting t_input[i].values in variables because sometimes I have to change the values in html
                t_input[2].value = t_input[2].value - 1;
                console.log(t_input[2].value);
                let totalTInput = t_input[0].value + t_input[1].value + t_input[2].value;
                if (totalTInput == 0) {
                    alert("Time's Up!!!!!!!!!!");
                    textStart();
                    input00();
                }
                
                if (t_input[1].value == 0 && t_input[0].value > 0) {
                    t_input[1].value == 0;
                    setTimeout(() => {
                        t_input[1].value = 59;
                        t_input[0].value = t_input[0].value - 1;
                        if (t_input[1].value > 0) {
                            tLoopS();
                        }
                    }, oneSecond);
                    // console.log("done");
                }
                if (t_input[2].value == 0 && t_input[1].value > 0) {
                    t_input[2].value == 0;
                    setTimeout(() => {
                        t_input[2].value = 59;
                        t_input[1].value = t_input[1].value - 1;
                        if (t_input[2].value > 0) {
                            tLoopS();
                        }
                    }, oneSecond);
                    // console.log("done");
                }
                if (t_input[2].value > 0) {
                    tLoopS();
                }
            }, oneSecond);
        }
    }
    tLoopS();
}


p_btn.addEventListener("click", () => {
    if (p_btn.innerHTML == "START") {
        p_btn.innerHTML = "STOP";
        btns_btns.style.transition = "0";
        p_btn.style.padding = "2px 13.4px";

        timeSet = [];
        for (let i = 0; i < t_input.length; i++) {
            timeSet[i] = t_input[i].value;
        }
        totalTime = timeSet[0] + timeSet[1] + timeSet[2];
        if (timeSet[2] > 60) {
            input00();
            alert("Please Enter Values Correctly!");
            textStart();
        }
        if (totalTime == 0) {
            alert("Please Enter Some Value ");
            textStart();
        } else {
            try {
                t_input[2].value = t_input[2].value - 1;
                sBox();
            } catch (error) {
                alert("Something is wrong, please try again.");
            }
        }
    } else {
        textStart();
    }
});


try {
    if (t_input[2].value > 60){
        aSeconds = t_input[2].value - 60;
        t_input[1].value = t_input[1].value + 1;
        t_input[2].value = aSeconds;
    }
} catch (error) {
    console.log("Error in changing seconds");
    
}