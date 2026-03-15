/*
=====================================================
PASSO CRUD with Error Handling
Checkpoint 0d.6
=====================================================
*/

const fares = [
  { id: 1, from: "Banjul", to: "Serekunda", vehicleType: "Taxi", price: 25 },
  { id: 2, from: "Banjul", to: "Serekunda", vehicleType: "Bus", price: 12 }
];

const validVehicles = ["Taxi", "Bus", "Gelegele", "7-Seater"];

// --------------------------------------------------
// 1️⃣ Create Fare with validation
// --------------------------------------------------
function createFare({ from, to, vehicleType, price }) {
  if (!from || !to || !vehicleType || price == null) {
    return "Error: All fields are required to create a fare.";
  }

  if (from === to) return "Error: 'From' and 'To' cannot be the same.";
  if (!validVehicles.includes(vehicleType)) return "Error: Invalid vehicle type.";
  if (price <= 0) return "Error: Price must be positive.";

  const id = fares.length ? fares[fares.length - 1].id + 1 : 1;
  const newFare = { id, from, to, vehicleType, price };
  fares.push(newFare);
  return newFare;
}

// --------------------------------------------------
// 2️⃣ Read/Search Fares
// --------------------------------------------------
function findFareByRoute(from, to) {
  const results = fares.filter(f => f.from === from && f.to === to);
  return results.length ? results : `Error: No fares found for route ${from} → ${to}`;
}

function findFareById(id) {
  const fare = fares.find(f => f.id === id);
  return fare || `Error: Fare with ID ${id} not found.`;
}

// --------------------------------------------------
// 3️⃣ Update Fare
// --------------------------------------------------
function updateFare(id, updates) {
  const fare = fares.find(f => f.id === id);
  if (!fare) return `Error: Fare with ID ${id} not found.`;

  if (updates.from && updates.to && updates.from === updates.to) {
    return "Error: 'From' and 'To' cannot be the same.";
  }

  if (updates.vehicleType && !validVehicles.includes(updates.vehicleType)) {
    return "Error: Invalid vehicle type.";
  }

  if (updates.price != null && updates.price <= 0) {
    return "Error: Price must be positive.";
  }

  Object.assign(fare, updates);
  return fare;
}

// --------------------------------------------------
// 4️⃣ Delete Fare
// --------------------------------------------------
function deleteFare(id) {
  const index = fares.findIndex(f => f.id === id);
  if (index === -1) return `Error: Fare with ID ${id} not found or already deleted.`;

  const removed = fares.splice(index, 1)[0];
  return removed;
}


// --------------------------------------------------
// 5️⃣ Testing the Functions
// --------------------------------------------------
console.log("\n--- CREATE TESTS ---");
console.log(createFare({ from: "Banjul", to: "Banjul", vehicleType: "Taxi", price: 10 })); // Error: same from/to
console.log(createFare({ from: "Brikama", to: "Banjul", vehicleType: "Plane", price: 15 })); // Error: invalid vehicle
console.log(createFare({ from: "Brikama", to: "Banjul", vehicleType: "Taxi", price: 0 })); // Error: price <=0
console.log(createFare({ from: "Brikama", to: "Banjul", vehicleType: "Bus", price: 18 })); // Success

console.log("\n--- READ TESTS ---");
console.log(findFareByRoute("Banjul", "Serekunda")); // Success
console.log(findFareByRoute("Bakau", "Brikama")); // Error

console.log("\n--- UPDATE TESTS ---");
console.log(updateFare(2, { price: -5 })); // Error
console.log(updateFare(2, { price: 15, vehicleType: "Taxi" })); // Success
console.log(updateFare(99, { price: 20 })); // Error: id not found

console.log("\n--- DELETE TESTS ---");
console.log(deleteFare(1)); // Success
console.log(deleteFare(1)); // Error: already deleted
