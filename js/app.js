// var departure = document.getElementById("departure");
// var arrival = document.getElementById('arrival');
// var bags = document.getElementById('bags');
// var classs = document.getElementById('classs');
// var wifi = document.getElementById('wifi');
// var discountCode = document.getElementById('discountCode');
// var button = document.getElementById('button');
// var stopNow;
// var flightCost = 0;
// button.addEventListener("click", function(){
//    // document.getElementById("returnTheAnswer").innerText = (fare() + bags() + wifi() + classs());
//       fare();
//       console.log(flightCost);
//       if(stopNow === true) {
//          stopNow = false;
//          return;
//       }
//       bagCost()
//       console.log(flightCost);
//       wifiCost();
//       console.log(flightCost);
//       classsCost();
//       console.log(flightCost);
//       document.getElementById("returnTheAnswer").innerText = "Your fare is $" + flightCost;
// });

function fare() {
   if (departure.value === arrival.value) {
      document.getElementById("returnTheAnswer").innerText = "You are already there..."
      document.forms[0].reset();
      stopNow = true;
   }
   if ((departure.value==="Chicago" && arrival.value==="Los Angeles") || (departure.value==="Los Angeles" && arrival.value==="Chicago")) {
      flightCost = 350;
      return flightCost;
      // document.getElementById("returnTheAnswer").innerText = "Your fare is $350";
   }
   else if ((departure.value==="Chicago" && arrival.value==="New York") || (departure.value==="New York" && arrival.value==="Chicago")) {
      flightCost = 250;
      return flightCost;
      // document.getElementById("returnTheAnswer").innerText = "Your fare is $250";
   }
   else if ((departure.value==="New York" && arrival.value==="Los Angeles") || (departure.value==="Los Angeles" && arrival.value==="New York")) {
      flightCost = 545;
      return flightCost;
      // document.getElementById("returnTheAnswer").innerText = "Your fare is $545";
   }
}


function bagCost() {
   if (bags.value>0) {
      flightCost += bags.value * 25;
      return flightCost;
      }
   }

function wifiCost() {
   if (wifi.checked) {
      flightCost += 12;
      return flightCost;
      }
   }

function classsCost() {
   if (classs.value>0) {
      flightCost += parseInt(classs.value);
      }
   }
