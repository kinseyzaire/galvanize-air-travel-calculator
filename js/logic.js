var departure = document.getElementById("departure");
var arrival = document.getElementById('arrival');
var bags = document.getElementById('bags');
var classs = document.getElementById('classs');
var wifi = document.getElementById('wifi');
var discountCode = document.getElementById('discountCode');
var button = document.getElementById('button');
var stopNow;
var flightCost = 0;
button.addEventListener("click", function(){
   // document.getElementById("returnTheAnswer").innerText = (fare() + bags() + wifi() + classs());
      fare();
      console.log(flightCost);
      if(stopNow === true) {
         stopNow = false;
         return;
      }
      bagCost()
      console.log(flightCost);
      wifiCost();
      console.log(flightCost);
      classsCost();
      console.log(flightCost);
      document.getElementById("returnTheAnswer").innerText = "Your fare is $" + flightCost;
});
