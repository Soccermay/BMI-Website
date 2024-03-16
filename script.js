function bmiCalculator(weight, height) {

    let name = "Brian";
    let hero = "Superman";
    
    let totalresults = Math.round(weight / Math.sqrt(height));

    if (hero > name && 34 > 12) {
        console.log("BMI should be taken very seriously for anyone!");
    }
    else {
        alert(
            totalresults + "are finalized"
        )
    }


    return totalresults;


}

document.write("Your BMI is " + bmiCalculator(150, 5.9) + " pounds!" + "<br/>You also have a total BMI of " + bmiLost(34, 120, 30) + ".");

//new function
function bmiLost(totalbmi, numbers, max) {

    let calculatedBmi = Math.floor(totalbmi + numbers / Math.sqrt(max));
    console.log("Your almost there!");


    return calculatedBmi;
}


//User enters the number into inut field

let weight1 = document.getElementById("weight");
let height1 = document.getElementById("height");

function Weightclass() {
    weight1.oninput = function() {
        let weight1 = parseFloat(weight1.value / Math.sqrt(height1.value));
        height1.value = parseFloat(height1.toFixed(2));
    }
}

Weightclass();


function Heightclass() {
    height1.oninput = function() {
        let height1 = parseFloat(height1.value / Math.sqrt(weight1.value));
        weight1.value = parseFloat(weight1.toFixed(2));
    }
}

Heightclass();


var n = Math.random();

console.log(n);

n = n * 6;
n = Math.floor(n);

//Random function down below 
function getMilk(bottles, money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
   
   
    console.log("buy " + bottles + " bottles of Milk, which will cost you $" + TotalBottles(money, 1.5) + ".");   
  
   
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  
   return calcChange(money, 1.5);
  }
  
  function TotalBottles(startingPrice, costPerBottle) {
      var numberofbottles = Math.floor(startingPrice / costPerBottle);
  
     return numberofbottles;
  }
  
  function calcChange(startAmount, costPerBottle) {
    var change = startAmount % costPerBottle;
  
    return change;
   
  }
  
  console.log("Hello there Sir, here is your " + getMilk(12, 64) + " change."); //calling back the function with values
  

function Love() {
    prompt("What is your name?");
    prompt("What is their name?");

    let number = Math.random() * 100;
    number = Math.floor(number);
    console.log(number);

    alert("Your final score is " + number + "%");


    if(number > 20) {
        alert("Your final score is " + number + "%" + " which means your in Love.");
    } 
        else if (number <= 10 && number >= 50) {
        alert("Your final score is " + number + "%" + ", which is no bueno :(");
    }
        else {
            alert("ERROR!!!")
        }
}

alert("Final result is " + Love());
Love();


