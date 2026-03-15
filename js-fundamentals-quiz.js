// 1. Array of Gambian Regions
const regions = [
  "Lower River Region",
  "West Coast Region",
  "North Bank Region",
  "Central River Region",
  "Upper River Region"
];

console.log("Regions:", regions);


// 2. Taxi Fare Object
const taxiFare = {
  id: 1,
  from: "Banjul",
  to: "Serekunda",
  vehicleType: "Taxi",
  price: 15
};

console.log("Taxi Fare:", taxiFare); 

// 3. Array of Fare Objects
const fares = [
  { id: 1, from: "Tabokoto",  to: "Latrikunda", vehicle: "Taxi",     price: 15 },

  { id: 2, from: "WestField", to: "Gimpex",     vehicle: "Bus",      price: 12 },
  
  { id: 3, from: "Bakau",     to: "Serekunda",  vehicle: "Gelegele", price: 8  }
];


// 4. Array Methods

// .map() -> get all prices
const prices = fares.map(f => f.price);
console.log("Prices:", prices);

// .filter() -> fares under D20
const cheapFares = fares.filter(f => f.price < 20);
console.log("Fares under D20:", cheapFares);

// .find() -> specific fare
const specificFare = fares.find(f => f.vehicle === "Taxi");
console.log("Taxi Fare Found:", specificFare);

// 5. Template Literals
const message = `Fare from ${taxiFare.from} to ${taxiFare.to} by ${taxiFare.vehicleType} costs D${taxiFare.price}`;
console.log(message);







