'use strict';

var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//create object literals for each shop location
var firstAndPike = {
  name: '1st and Pike',
  minCustomerPerDay: 23,
  maxCustomerPerDay: 65,
  avgCookiesPerSale: 6.3,
  salesEachHour: function(){
    var sales = populateSalesEachHour(this.minCustomerPerDay, this.maxCustomerPerDay, this.avgCookiesPerSale);
    // console.log(`Sales Each hour for ${this.name} is ${sales}`);
    return sales;
  }
};

var seaTac = {
  name: 'SeaTac Airport',
  minCustomerPerDay: 3,
  maxCustomerPerDay: 24,
  avgCookiesPerSale: 1.2,
  salesEachHour: function(){
    var sales = populateSalesEachHour(this.minCustomerPerDay, this.maxCustomerPerDay, this.avgCookiesPerSale);
    return sales;
  }
};

var seattleCenter  = {
  name: 'Seattle Center',
  minCustomerPerDay: 11,
  maxCustomerPerDay: 38,
  avgCookiesPerSale: 3.7,
  salesEachHour: function(){
    var sales = populateSalesEachHour(this.minCustomerPerDay, this.maxCustomerPerDay, this.avgCookiesPerSale);
    return sales;
  }
};

var capitolHill = {
  name: 'Capitol Hill',
  minCustomerPerDay: 20,
  maxCustomerPerDay: 38,
  avgCookiesPerSale: 2.3,
  salesEachHour: function(){
    var sales = populateSalesEachHour(this.minCustomerPerDay, this.maxCustomerPerDay, this.avgCookiesPerSale);
    return sales;
  }
};

var alki = {
  name: 'Alki',
  minCustomerPerDay: 2,
  maxCustomerPerDay: 16,
  avgCookiesPerSale: 4.6,
  salesEachHour: function(){
    var sales = populateSalesEachHour(this.minCustomerPerDay, this.maxCustomerPerDay, this.avgCookiesPerSale);
    return sales;
  }
};


//invoked by the salesEachHour method of the store object
function populateSalesEachHour(minCustomer, maxCustomer, avgCookies){
  var cookiesPerHour= [];
  for(var i = 0; i < hoursOpen.length; i++){
    //get random number for customers in each hour
    var customersPerHour = random(minCustomer, maxCustomer);
    //calculate cookies per hour and append to array
    cookiesPerHour[i] = Math.floor(customersPerHour * avgCookies);
  }
  return cookiesPerHour;
}
var shops = [firstAndPike, seaTac, seattleCenter, capitolHill, alki];

//invoked by the populateSalesEachHour function
function random(min, max){
  var randNum = Math.random() * (+max - +min) + +min;
  return Math.floor(randNum);
}

function renderSales(){
  for(var i = 0; i < shops.length; i++){
    var dayTotal = 0;
    //for each shop in shops array, create a new ul
    var ul = document.createElement('ul');
    ul.innerHTML = `<p class="shop">Shop: ${shops[i].name}`;
    // ul.textContent = `Shop: ${shops[i].name}`;
    document.body.appendChild(ul);

    //for each hour open, create a new li element
    for(var h = 0; h < hoursOpen.length; h++){
      var liEl = document.createElement('li');
      var hourTotal = shops[i].salesEachHour()[h];
      //populate the li with that hour and the cookies sold that hour
      liEl.textContent = `${hoursOpen[h]}: ${hourTotal} cookies`;
      ul.appendChild(liEl);

      dayTotal = dayTotal + hourTotal;
    }

    var totalLiEl = document.createElement('li');
    totalLiEl.textContent = `Total: ${dayTotal} cookies`;
    ul.appendChild(totalLiEl);
  }
}

// // select the section element with ID of sales-list
// var sectionEl = document.getElementById('sales-list');

// function renderSales(){
//   //for each shop in the shops array
//   for(var i = 0; i < shops.length; i++){
//     //write name of shop
//     sectionEl.textContent = `Shop: ${shops[i].name}`;
//     //create ul element
//     var ul = document.createElement('ul');
//     sectionEl.appendChild(ul);
//     //for each hour open, create a new li element
//     for(var j = 0; j < hoursOpen.length; j++){
//       var liEl = document.createElement('li');
//       //populate the li with that hour and the cookies sold that hour
//       liEl.textContent = `${hoursOpen[j]}: ${shops[i].salesEachHour()[j]} cookies`;
//       ul.appendChild(liEl);
//     }
//   }

renderSales();
