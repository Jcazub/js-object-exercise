var bed = {
  legs: 4,
  isComfy: true,
  yearOfPurchase: 2016,
  name: 'Tempurpedic',
  previousOwners: ['Bob', 'Homer', 'Fry'],
  temperature: function(temp) {
    console.log('The current temperature is now ' + temp + ".")
  }
};

var computer = {
  brand: ['Apple','Asus','HP', 'Microsoft'],
  name: 'programming computer',
  harddrivespace: [256, 512, 1000],
  ram: 8,
  dedicatedgraphics: false,
  priceRange: function(price){
    if (price < 2000) {
      console.log('GOOD PRICE!!!!!');
    } else if (price > 2000) {
      console.log('DAMN THATS EXPENSIVE');
    } else {
      console.log('PERFECTION YO');
    }
  }
}
