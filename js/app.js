'use strict';

function random(min, max){
  var randNum = Math.random() * (+max - +min) +  +min;
  return Math.floor(randNum);

}

//hours open are 6am to 8pm

//create object literals for each shop location
var firstAndPike = {
  name: '1st and Pike',
  minCustomerPerDay: 23,
  maxCustomerPerDay: 65,
  avgCookiesPerSale: 6.3,
  customersPerHour: function(){
    return random(this.minCustomerPerDay, this.maxCustomerPerDay);
  },

  cookiesPerHour: function(){
    return this.customersPerHour() * this.avgCookiesPerSale;
  }
}
console.log(`Customers per hour is ${firstAndPike.customersPerHour()}`);
console.log(`Cookies per hour is ${firstAndPike.cookiesPerHour()}.`);

var seaTac = {
  name: 'SeaTac Airport',
  minCustomerPerDay: 3,
  maxCustomerPerDay: 24,
  avgCookiesPerSale: 1.2
}

var seattleCenter  = {
  name: 'Seattle Center',
  minCustomerPerDay: 11,
  maxCustomerPerDay: 38,
  avgCookiesPerSale: 3.7
}

var capitolHill = {
  name: 'Capitol Hill',
  minCustomerPerDay: 20,
  maxCustomerPerDay: 38,
  avgCookiesPerSale: 2.3
}

var alki = {
  name: 'Alki',
  minCustomerPerDay: 2,
  maxCustomerPerDay: 16,
  avgCookiesPerSale: 4.6
}
