/*
=====================================================
PASSO Data Transformation Practice
Checkpoint 0d.4
=====================================================
*/

const fares = [
  { id: 1, from: "Banjul", to: "Serekunda", vehicleType: "Taxi", price: 25 },
  { id: 2, from: "Banjul", to: "Serekunda", vehicleType: "Bus", price: 12 },
  { id: 3, from: "Brikama", to: "Banjul", vehicleType: "Taxi", price: 30 },
  { id: 4, from: "Brikama", to: "Banjul", vehicleType: "Bus", price: 18 },
  { id: 5, from: "Bakau", to: "Serekunda", vehicleType: "Gelegele", price: 10 },
  { id: 6, from: "Bakau", to: "Serekunda", vehicleType: "Taxi", price: 20 },
  { id: 7, from: "Farafenni", to: "Banjul", vehicleType: "7-Seater", price: 50 },
  { id: 8, from: "Farafenni", to: "Banjul", vehicleType: "Bus", price: 35 }
];


// --------------------------------------------------
// 1️⃣ Group fares by vehicle type
// --------------------------------------------------
const faresByVehicle = fares.reduce((acc, fare) => {
  if (!acc[fare.vehicleType]) acc[fare.vehicleType] = [];
  acc[fare.vehicleType].push(fare);
  return acc;
}, {});

console.log("\n===== FARES BY VEHICLE TYPE =====");
console.log(faresByVehicle);

// --------------------------------------------------
// 2️⃣ Group fares by route (from → to)
// --------------------------------------------------
const faresByRoute = fares.reduce((acc, fare) => {
  const route = `${fare.from}-${fare.to}`;
  if (!acc[route]) acc[route] = [];
  acc[route].push(fare);
  return acc;
}, {});

console.log("\n===== FARES BY ROUTE =====");
console.log(faresByRoute);

// --------------------------------------------------
// 3️⃣ Price statistics by vehicle type
// --------------------------------------------------
const statsByVehicle = {};

for (const vehicle in faresByVehicle) {
  const prices = faresByVehicle[vehicle].map(f => f.price);
  statsByVehicle[vehicle] = {
    min: Math.min(...prices),
    max: Math.max(...prices),
    average: Math.round(prices.reduce((sum, p) => sum + p, 0) / prices.length)
  };
}

console.log("\n===== PRICE STATISTICS BY VEHICLE TYPE =====");
console.log(statsByVehicle);

