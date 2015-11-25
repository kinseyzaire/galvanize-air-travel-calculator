var departure = document.getElementById("departure");
var arrival = document.getElementById('arrival');
var bags = document.getElementById('bags');
var classs = document.getElementById('classs');
var wifi = document.getElementById('wifi');
var discountCode = document.getElementById('discountCode');
var button = document.getElementById('button');

button.addEventListener("click", calculate, false);

function calculate() {
   // var totalCost = 0;


   if (departure.value == arrival.value) {
      document.getElementById("returnTheAnswer").innerText = "Staying where you are is free, dude";
   }
   else if (departure.value==="Choose a City") {
      document.getElementById("returnTheAnswer").innerText = "You must select a departure city";
   }
   else if (arrival.value==="Choose a City") {
      document.getElementById("returnTheAnswer").innerText = "You must select an arrival city";
   }




   else if ((departure.value==="Chicago" && arrival.value==="Los Angeles") || (departure.value==="Los Angeles" && arrival.value==="Chicago")) {
      // totalCost = totalCost + 350;
      document.getElementById("returnTheAnswer").innerText = "Your fare is $350";
   }
   else if ((departure.value==="Chicago" && arrival.value==="New York") || (departure.value==="New York" && arrival.value==="Chicago")) {
      // totalCost = totalCost + 250;
      document.getElementById("returnTheAnswer").innerText = "Your fare is $250";
   }
   else if ((departure.value==="New York" && arrival.value==="Los Angeles") || (departure.value==="Los Angeles" && arrival.value==="New York")) {
      // totalCost = totalCost + 545;
      document.getElementById("returnTheAnswer").innerText = "Your fare is $545";
   }



   // if (bags.value>0) {
   //    totalCost  = totalCost + (bags.value*25)
   // }
   //
   // if (wifi.value) {
   //    totalCost  = totalCost + (12)
   // }
   //
   // if (classs.value>0) {
   //    totalCost  = totalCost + (classs.value)
   // }
   //
   //
   //
   // console.log(totalCost);

}
