/*
=====================================================
PASSO Fare Price Update Script
Checkpoint 0d.5
=====================================================
*/

const fs = require("fs");


// --------------------------------------------------
// Fare Data
// --------------------------------------------------

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
// Show current fares
// --------------------------------------------------

console.log("\n===== CURRENT FARES =====");
console.table(fares);


// --------------------------------------------------
// Price Update Function
// --------------------------------------------------

function updatePrices(percent) {

  let logText = "";
  let totalIncrease = 0;

  logText += "Price Update - 2026-02-13\n";
  logText += "=========================\n";

  fares.forEach(fare => {

    const oldPrice = fare.price;

    const increase = oldPrice * (percent / 100);

    const newPrice = Math.round(oldPrice + increase);

    fare.price = newPrice;

    totalIncrease += (newPrice - oldPrice);

    logText += `Fare ID ${fare.id}: D${oldPrice} → D${newPrice} (${fare.from} → ${fare.to}, ${fare.vehicleType})\n`;

  });

  const avgIncrease = Math.round(totalIncrease / fares.length);

  logText += `\nTotal fares updated: ${fares.length}\n`;
  logText += `Average increase: D${avgIncrease}\n`;

  return logText;

}


// --------------------------------------------------
// Apply 15% increase
// --------------------------------------------------

const logData = updatePrices(15);


// --------------------------------------------------
// Show updated fares
// --------------------------------------------------

console.log("\n===== UPDATED FARES =====");
console.table(fares);
