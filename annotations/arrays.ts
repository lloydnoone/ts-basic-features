const carMakers = ['ford', 'toyota', 'chevy'];
const blankArray: string[] = []
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

const blankTwoDArray: string[][] = [];

// help with inference when ectracting values
const make = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push(10);

//help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030');
importantDates.push(new Date());


