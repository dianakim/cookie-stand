'use strict';

var tableEl = document.getElementById('sales-table');
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

Shop.prototype.render = function() {
  //create the table header section
  var thEl = document.createElement('th');
  tableEl.appendChild(thEl);
  //create a table row
  var trEl = document.createElement('tr');
  thEl.appendChild(trEl);
  //create a td cell
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);

  //create the table body section
  var tbodyEl = document.createElement('tbody');
  tableEl.appendChild(tbodyEl);
  //create a table row
  trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);
  //create a td cell
  tdEl = document.createElement('td');
  trEl.appendChild(tdEl);

  //create the table footer section
  var tfootEl = document.createElement('tfoot');
  tableEl.appendChild(tfootEl);
  //create a table row
  trEl = document.createElement('tr');
  tfootEl.appendChild(trEl);
  //create a td cell
  tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
};

new Shop('1st and Pike', 23, 65, 6.3);
new Shop('SeaTac Airport', 3, 24, 1.2);
new Shop('Seattle Center', 11, 38, 3.7);
new Shop('Capitol Hill', 20, 38, 2.3);
new Shop('Alki', 2, 16,4.6);

Shop.prototype.calcCookiesSoldEachHour = function(minCustomer, maxCustomer, avgCookies){
  for(var i = 0; i < hoursOpen.length; i++){
    //for each hour open, get random number of customers
    var customersEachHour = Math.random() * (maxCustomer - minCustomer) + minCustomer;
    //calculate cookies each hour and append to array
    var cookiesEachHour = Math.floor(customersEachHour * avgCookies);
  }
  this.cookiesEachHourArr.push(cookiesEachHour);
};

//render header
function renderHeader(){
  //create header section
  var theadEl = document.createElement('thead');
  tableEl.appendChild(theadEl);
  //create row
  var trEl = document.createElement('tr');
  theadEl.appendChild(trEl);
  //create blank td
  var tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  //for each hour open, create td
  for(var i = 0; i < hoursOpen.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = hoursOpen[i];
    trEl.appendChild(tdEl);
  }
}

renderHeader();
//render shops rows
//render totals footer row
////////////////////////////////////////////////////////////////////////////


