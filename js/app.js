'use strict';

var tableEl = document.getElementById('sales-table');
var tbodyEl = document.createElement('tbody');
var tfootEl = document.createElement('tfoot');
var trEl;

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

Shop.prototype.calcCookiesSoldEachHour = function(){
  for(var i = 0; i < hoursOpen.length; i++){
    //for each hour open, get random number of customers
    var customersEachHour = Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
    //calculate cookies each hour and append to array
    var cookiesEachHour = Math.floor(customersEachHour * this.avgCookiesPerSale);
    this.cookiesEachHourArr.push(cookiesEachHour);
  }
};

Shop.prototype.render = function() {
  this.calcCookiesSoldEachHour(this.minCustomer, this.maxCustomer, this.avgCookiesPerSale);

  //create a row and append to tbody
  trEl = document.createElement('tr');
  tbodyEl.appendChild(trEl);

  //create and fill first td with shop name
  renderTd(trEl, this.name);

  var cookiesTotal = 0;
  //for each item in the shop's cookiesEachHourArr
  for(var h = 0; h < this.cookiesEachHourArr.length; h++) {
    cookiesTotal += this.cookiesEachHourArr[h];
    //create and fill td, append to row
    renderTd(trEl, this.cookiesEachHourArr[h]);

  }
  renderTd(trEl, cookiesTotal);
};

new Shop('1st and Pike', 23, 65, 6.3);
new Shop('SeaTac Airport', 3, 24, 1.2);
new Shop('Seattle Center', 11, 38, 3.7);
new Shop('Capitol Hill', 20, 38, 2.3);
new Shop('Alki', 2, 16,4.6);

function renderTd(trEl, content) {
  var tdEl = document.createElement('td');
  tdEl.textContent = content;
  trEl.appendChild(tdEl);
}

//render header
function renderHeader() {
  //create header section
  var theadEl = document.createElement('thead');
  tableEl.appendChild(theadEl);
  //create header row
  var trEl = document.createElement('tr');
  theadEl.appendChild(trEl);
  //create blank td
  renderTd(trEl, '');

  //for each hour open, create and fill td
  for(var i = 0; i < hoursOpen.length; i++) {
    renderTd(trEl, hoursOpen[i]);
  }
  //create Daily Location Total
  renderTd(trEl, 'Daily Location Total');
}

function renderTableBody() {
  tableEl.appendChild(tbodyEl);
  //for each shop in the allShops array, call the shop's render method
  for(var s =  0; s < allShops.length; s++) {
    allShops[s].render();
  }
}

function renderFooter() {
  tableEl.appendChild(tfootEl);
  //create footer row
  var trEl = document.createElement('tr');
  tfootEl.appendChild(trEl);

  renderTd(trEl, 'Totals');

  var grandTotal = 0;
  //for each hour open
  for(var i = 0; i < hoursOpen.length; i++) {
    //variable to hold running total for the current hour
    var hourTotal = 0;
    //loop through each property's cookiesEachHourArr and
    //sum up the column of data
    for(var t =  0; t < allShops.length; t++) {
      hourTotal += allShops[t].cookiesEachHourArr[i];
    }
    renderTd(trEl, hourTotal);
    grandTotal += hourTotal;
  }
  renderTd(trEl, grandTotal);
}

renderHeader();
renderTableBody();
renderFooter();

var shopFormEl = document.getElementById('form');
shopFormEl.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  //get user input and create new Shop
  //append to table and update totals
  var name = event.target.shopname.value;
  var minCustomer = event.target.mincustomer.value;
  var maxCustomer = event.target.maxcustomer.value;
  var avgCookiesPerSale = event.target.avgcookiespersale.value;

  new Shop(name, minCustomer, maxCustomer, avgCookiesPerSale);

  //Remove totals row
  tfootEl.firstChild.remove();

  //get length of allShops array to determine index of newly added shop
  //and add new shop row
  var l = allShops.length;
  allShops[l - 1].render();

  //Add recalculated totals row
  renderFooter();
}
