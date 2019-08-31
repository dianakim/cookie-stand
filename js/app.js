'use strict';

var tableEl = document.getElementById('sales-table');
var tbodyEl = document.createElement('tbody');

var allShops = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Shop(name, minCustomer, maxCustomer, avgCookiesPerSale) {
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesEachHourArr = [];

  allShops.push(this);
}

Shop.prototype.calcCookiesSoldEachHour = function(minCustomer, maxCustomer, avgCookies){
  for(var i = 0; i < hoursOpen.length; i++){
    //for each hour open, get random number of customers
    var customersEachHour = Math.random() * (maxCustomer - minCustomer) + minCustomer;
    //calculate cookies each hour and append to array
    var cookiesEachHour = Math.floor(customersEachHour * avgCookies);
    this.cookiesEachHourArr.push(cookiesEachHour);
  }
};

Shop.prototype.render = function() {
  this.calcCookiesSoldEachHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerSale);

  //create a row and append to tbody
  var trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);

  //create and fill first td with shop name
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  console.log('first column shop name ' + this.name);

  //for each item in the shop's cookiesEachHourArr
  for(var h = 0; h < this.cookiesEachHourArr.length; h++) {

    //create and fill td
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHourArr[h];
    //append to row
    trEl.appendChild(tdEl);
  }
};

new Shop('1st and Pike', 23, 65, 6.3);
new Shop('SeaTac Airport', 3, 24, 1.2);
new Shop('Seattle Center', 11, 38, 3.7);
new Shop('Capitol Hill', 20, 38, 2.3);
new Shop('Alki', 2, 16,4.6);

console.log(allShops);

//render header
function renderTable() {
  //create header section
  var theadEl = document.createElement('thead');
  tableEl.appendChild(theadEl);
  //create header row
  var trEl = document.createElement('tr');
  theadEl.appendChild(trEl);
  //create blank td
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  //for each hour open, create and fill td
  for(var i = 0; i < hoursOpen.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hoursOpen[i];
    trEl.appendChild(tdEl);
  }
  //create the table body section
  tableEl.appendChild(tbodyEl);

  //for each shop in the allShops array, call the shop's render method
  for(var s =  0; s < allShops.length; s++) {
    allShops[s].render();
  }

}


renderTable();
//render shops rows
//render totals footer row
////////////////////////////////////////////////////////////////////////////


