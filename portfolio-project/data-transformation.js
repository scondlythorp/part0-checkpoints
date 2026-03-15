// data-transformation.js
// -------------------------
// Group fares by vehicle type and by route
// -------------------------

const { fares } = require("./data.js");

// Group by vehicle type
const faresByVehicle = fares.reduce((acc, f) => {
  if (!acc[f.vehicleType]) acc[f.vehicleType] = [];
  acc[f.vehicleType].push(f);
  return acc;
}, {});

// Group by route
const faresByRoute = fares.reduce((acc, f) => {
  const route = `${f.from}-${f.to}`;
  if (!acc[route]) acc[route] = [];
  acc[route].push(f);
  return acc;
}, {});

module.exports = { faresByVehicle, faresByRoute };