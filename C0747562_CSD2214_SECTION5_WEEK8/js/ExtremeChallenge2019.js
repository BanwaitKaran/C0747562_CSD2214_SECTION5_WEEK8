//Karanvir Singh Banwait  C0747562
//Gunraj Singh Badi C0742871


//constructor method for first two challenges
let NumbersAdding=function () {
    
        // function for adding numbers from start parameter to end parameter
        //with countDown parameter value count down
        this.addNumbers =function (start, countDown, end) {

            //accumulator variable
            var sum = 0;

            //loop to add  numbers from start parameter to end parameter
            //with countDown parameter value count down
            for (i = start; i >= end; i -= countDown) {
                sum += i;
            }

            return sum;
        }
}

// For Challenge 3

let fortune = ["Change yourself and fortune will change", "A wise man turns chance into good fortune",
                     "Fortune favors the prepared mind.", "Fortune favors the prepared mind. ",
                         "Friends and acquaintances are the surest passport to fortune."];

function fortuneDisplay() {
    let name = document.forms["fortuneForm"]["name"].value;
    let age = document.forms["fortuneForm"]["age"].value;

    if (name != "" && age != "") {
        let randomFortune = Math.floor(Math.random() * 5);
        console.log(randomFortune);
        document.getElementById("result").innerText = " Your Fortune: " + fortune[randomFortune];
    }
    else
        document.getElementById("result").innerText = "Plz Enter Your Name and Age to See Your Fortune!!";
}