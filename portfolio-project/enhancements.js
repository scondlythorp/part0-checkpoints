// enhancements.js
// -------------------------
// Statistics and bulk operations
// -------------------------

const { fares } = require("./data.js");

// Average fare
function calculateAverageFare() {
  return Math.round(fares.reduce((sum, f) => sum + f.price, 0) / fares.length);
}

// Most expensive fare
function getMostExpensiveRoute() {
  return fares.reduce((max, f) => (f.price > max.price ? f : max), fares[0]);
}

// Cheapest vehicle type
function getCheapestVehicleType() {
  return fares.reduce((min, f) => (f.price < min.price ? f : min), fares[0]).vehicleType;
}

// Most common route
function getMostCommonRoute() {
  const routeCount = {};
  fares.forEach(f => {
    const route = `${f.from}-${f.to}`;
    routeCount[route] = (routeCount[route] || 0) + 1;
  });
  return Object.entries(routeCount).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

// Bulk increase fares
function increaseVehicleFares(vehicleType, percentage) {
  fares.forEach(f => { if (f.vehicleType === vehicleType) f.price = Math.round(f.price * (1 + percentage / 100)); });
}

// Delete all fares for a route
function deleteRoute(from, to) {
  for (let i = fares.length - 1; i >= 0; i--) if (fares[i].from === from && fares[i].to === to) fares.splice(i, 1);
}

module.exports = { calculateAverageFare, getMostExpensiveRoute, getCheapestVehicleType, getMostCommonRoute, increaseVehicleFares, deleteRoute };