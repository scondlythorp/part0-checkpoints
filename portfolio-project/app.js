// app.js
// -------------------------
// Main CLI demo for the portfolio project
// -------------------------

const { fares } = require("./data.js");
const { createFare, findFareById, updateFare, deleteFare } = require("./crud.js");
const { calculateAverageFare, getMostExpensiveRoute, getCheapestVehicleType, getMostCommonRoute } = require("./enhancements.js");
const { faresByVehicle, faresByRoute } = require("./data-transformation.js");

console.log("===== CURRENT FARES =====");
console.table(fares);

console.log("\n===== ADD A NEW FARE =====");
console.log(createFare({ from: "Bakau", to: "Brikama", vehicleType: "Taxi", price: 22 }));

console.log("\n===== UPDATED FARES =====");
console.table(fares);

console.log("\n===== STATISTICS =====");
console.log("Average fare:", calculateAverageFare());
console.log("Most expensive route:", getMostExpensiveRoute());
console.log("Cheapest vehicle type:", getCheapestVehicleType());
console.log("Most common route:", getMostCommonRoute());

console.log("\n===== FARES GROUPED BY VEHICLE =====");
console.log(faresByVehicle);

console.log("\n===== FARES GROUPED BY ROUTE =====");
console.log(faresByRoute);