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

//array with 5 fortune message
let fortune = ["Change yourself and fortune will change", "A wise man turns chance into good fortune",
                     "Fortune favors the prepared mind.", "Fortune favors the prepared mind. ",
                         "Friends and acquaintances are the surest passport to fortune."];


//function to show fortne msg when user enter name and age and click on button
function fortuneDisplay() {
    //store value from the input boxes
    let name = document.forms["fortuneForm"]["name"].value;
    let age = document.forms["fortuneForm"]["age"].value;

    //for checking both input feilds are filled or not and will display suitable msg
    if (name != "" && age != "") {
        let randomFortune = Math.floor(Math.random() * 5);
        console.log(randomFortune);
        document.getElementById("result").innerText = " Your Fortune: " + fortune[randomFortune];
    }
    else
        document.getElementById("result").innerText = "Plz Enter Your Name and Age to See Your Fortune!!";
}

// For Challenge 4
function timeToDestination() {
    //speed array for train 1 and 2 in km/h
    let train1Speed = [40, 55, 70, 100, 85];
    let train2Speed = [45, 60, 80, 70, 90];

    //random number for picking random speed
    let randTrain1 = Math.floor(Math.random() * 5);
    console.log("rand train1:" + randTrain1);
    let randTrain2 = Math.floor(Math.random() * 5);
    console.log("rand train2:" + randTrain2);

    //calculate and storing time required by each train to reach at same destination
    let timeForTrain1 = (distance / train1Speed[randTrain1]).toFixed(1);
    let timeForTrain2 = (distance / train2Speed[randTrain2]).toFixed(1);

    //displaying distance on html page
    document.getElementById("distance").innerText = "Distance for Both Train to reach at " + 
        "destination(same point): " + distance + " km.";
    //displaying time taken by 1st train to reach at destination
    document.getElementById("train1").innerText = "Train one reach at destination point in " + timeForTrain1+
        " hour(s) with speed of " + train1Speed[randTrain1] + " km/h.";
    //displaying time taken by 2nd train to reach at destination
    document.getElementById("train2").innerText = "Train two reach at destination point in " + timeForTrain2+
        " hour(s) with speed of " + train2Speed[randTrain2] + " km/h.";

}