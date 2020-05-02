var dojo = {};
dojo = {
    name: 'Coding Dojo', // key
    number_of_students: 25, //value
    instractors: ['Claire', 'Drew', 'Matt'],
    location:{
        city: 'San Jose',
        state: 'CA',
        zipcode: 95112
    }
}
//console.log(dojo.name, dojo.number_of_students, dojo.instractors, dojo.location)
//console.log(dojo["name"])
dojo.snacks = ['Fig Bars', 'Bagles','Popcorn','Apples'];
dojo.number_of_students = 50;
dojo.location.city = "Bellevue";
dojo.instructor = "Adam";
dojo.location.zipcode = "unknown";

console.log(dojo)


var glazedDonuts = [
    {
      frosting: 'glazed',
      style: 'cake',
      type: 'old fashioned',
      age: '45',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'regular',
      age: '5',
      time: 'minutes'
    },
    {
      frosting: 'glazed',
      style: 'yeast raised',
      type: 'jelly filled',
      age: '1',
      time: 'seconds'
    }
  ];

  var purchase;
//You
if((glazedDonuts[0].age < 25 && glazedDonuts[0].time == 'minutes') || glazedDonuts[0].time == 'seconds'){
  //shop owner
  purchase = glazedDonuts[0];
}
else {
  console.log('sorry it has been out a bit longer');
}  

var numPurchase = 0;
for (var donut in glazedDonuts){
  console.log(glazedDonuts[donut].type);
  if((glazedDonuts[donut].age < 25 && glazedDonuts[donut].time == 'minutes') || glazedDonuts[donut].time == 'seconds'){
    numPurchase++;
  }
  else {
    console.log('not this donut...');
   }
}
console.log(numPurchase);
