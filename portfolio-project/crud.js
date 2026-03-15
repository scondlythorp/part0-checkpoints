// crud.js
// -------------------------
// Create, Read, Update, Delete fares with error handling
// -------------------------

const { fares } = require("./data.js");
const validVehicles = ["Taxi", "Bus", "Gelegele", "7-Seater"];

// Create fare
function createFare({ from, to, vehicleType, price }) {
  if (!from || !to || !vehicleType || price == null) return "Error: All fields are required";
  if (from === to) return "Error: 'From' and 'To' cannot be the same";
  if (!validVehicles.includes(vehicleType)) return "Error: Invalid vehicle type";
  if (price <= 0) return "Error: Price must be positive";

  const id = fares.length ? fares[fares.length - 1].id + 1 : 1;
  const newFare = { id, from, to, vehicleType, price };
  fares.push(newFare);
  return newFare;
}

// Read/search fares
function findFareById(id) {
  const fare = fares.find(f => f.id === id);
  return fare || `Error: Fare with ID ${id} not found.`;
}

function findFareByRoute(from, to) {
  const results = fares.filter(f => f.from === from && f.to === to);
  return results.length ? results : `Error: No fares found for route ${from}-${to}`;
}

// Update fare
function updateFare(id, updates) {
  const fare = fares.find(f => f.id === id);
  if (!fare) return `Error: Fare with ID ${id} not found`;
  if (updates.from && updates.to && updates.from === updates.to) return "Error: From and To cannot be same";
  if (updates.vehicleType && !validVehicles.includes(updates.vehicleType)) return "Error: Invalid vehicle type";
  if (updates.price != null && updates.price <= 0) return "Error: Price must be positive";

  Object.assign(fare, updates);
  return fare;
}

// Delete fare
function deleteFare(id) {
  const index = fares.findIndex(f => f.id === id);
  if (index === -1) return `Error: Fare with ID ${id} not found or already deleted`;
  return fares.splice(index, 1)[0];
}

module.exports = { createFare, findFareById, findFareByRoute, updateFare, deleteFare, fares };