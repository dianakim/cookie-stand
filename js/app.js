'use strict';

function random(min, max){
  var randNum = Math.random() * (+max - +min) +  +min;
  return Math.floor(randNum);
}

//hours open are 6am to 8pm
//for each hour open, store amount of cookies purchased
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

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
    return Math.floor(this.customersPerHour() * this.avgCookiesPerSale);
  },
  salesEachHour: function(){

  }
};

var seaTac = {
  name: 'SeaTac Airport',
  minCustomerPerDay: 3,
  maxCustomerPerDay: 24,
  avgCookiesPerSale: 1.2,
  customersPerHour: function(){
    return random(this.minCustomerPerDay, this.maxCustomerPerDay);
  },
  cookiesPerHour: function(){
    return Math.floor(this.customersPerHour() * this.avgCookiesPerSale);
  }
};

var seattleCenter  = {
  name: 'Seattle Center',
  minCustomerPerDay: 11,
  maxCustomerPerDay: 38,
  avgCookiesPerSale: 3.7,
  customersPerHour: function(){
    return random(this.minCustomerPerDay, this.maxCustomerPerDay);
  },
  cookiesPerHour: function(){
    return Math.floor(this.customersPerHour() * this.avgCookiesPerSale);
  }
};

var capitolHill = {
  name: 'Capitol Hill',
  minCustomerPerDay: 20,
  maxCustomerPerDay: 38,
  avgCookiesPerSale: 2.3,
  customersPerHour: function(){
    return random(this.minCustomerPerDay, this.maxCustomerPerDay);
  },
  cookiesPerHour: function(){
    return Math.floor(this.customersPerHour() * this.avgCookiesPerSale);
  }
};

var alki = {
  name: 'Alki',
  minCustomerPerDay: 2,
  maxCustomerPerDay: 16,
  avgCookiesPerSale: 4.6,
  customersPerHour: function(){
    return random(this.minCustomerPerDay, this.maxCustomerPerDay);
  },
  cookiesPerHour: function(){
    return Math.floor(this.customersPerHour() * this.avgCookiesPerSale);
  }
};

//testing
var shops = [firstAndPike, seaTac, seattleCenter, capitolHill, alki];

for(var i = 0; i < shops.length; i++){
  console.log(`Customers per hour is ${shops[i].customersPerHour()}`);
  console.log(`Cookies per hour is ${shops[i].cookiesPerHour()}.`);
}
