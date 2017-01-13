'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': RentalPrice('2016-01-02', '2016-01-02',20,0.10, 100),
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': RentalPrice('2016-01-05', '2016-01-09',60,0.30, 300),
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': RentalPrice('2016-01-05', '2016-01-09',100,0.45, 1000),
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

function DateDiff(pickupDate,returnDate){
  var date1 = new Date(pickupDate);
  var date2 = new Date(returnDate)
  var timeDiff = date2 - date1;

  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  if(diffDays==0)
    return 1;
  else return diffDays;
}

function DecreasePrincing(pickupDate,returnDate){
  if(DateDiff(pickupDate,returnDate)>10)
    return 0.5;
  if(DateDiff(pickupDate,returnDate)>4)
    return 0.3;
  if(DateDiff(pickupDate,returnDate)>1)
    return 0.1;
  else return 1;
}
 
function RentalPrice(pickupDate, returnDate,pricePerDay,pricePerKm, distance){

return DateDiff(pickupDate,returnDate)*pricePerDay*DecreasePrincing(pickupDate,returnDate) + pricePerKm*distance;

}
