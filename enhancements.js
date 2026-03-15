/*
=====================================================
PASSO Fare Calculator Enhancements
Checkpoint 0d.3

Features implemented:
1. Validation
2. Statistics
3. Bulk Operations
4. Edge-case handling

=====================================================
*/

// --------------------------------------------------
// SAMPLE DATA (Simulated database)
// --------------------------------------------------

const fares = [

  {
    id: 1,
    from: "Banjul",
    to: "Serekunda",
    vehicleType: "Taxi",
    price: 25
  },

  {
    id: 2,
    from: "Banjul",
    to: "Serekunda",
    vehicleType: "Bus",
    price: 12
  },

  {
    id: 3,
    from: "Brikama",
    to: "Banjul",
    vehicleType: "Taxi",
    price: 30
  },

  {
    id: 4,
    from: "Brikama",
    to: "Banjul",
    vehicleType: "Bus",
    price: 18
  },

  {
    id: 5,
    from: "Bakau",
    to: "Serekunda",
    vehicleType: "Gelegele",
    price: 10
  },

  {
    id: 6,
    from: "Bakau",
    to: "Serekunda",
    vehicleType: "Taxi",
    price: 20
  },

  {
    id: 7,
    from: "Farafenni",
    to: "Banjul",
    vehicleType: "7-Seater",
    price: 50
  },

  {
    id: 8,
    from: "Farafenni",
    to: "Banjul",
    vehicleType: "Bus",
    price: 35
  }

];


// --------------------------------------------------
// VALID VEHICLE TYPES
// --------------------------------------------------

const validVehicles = ["Taxi", "Bus", "Gelegele", "7-Seater"];


// ==================================================
// 1️⃣ VALIDATION FUNCTION
// ==================================================

/*
Checks if fare data is valid before saving it.
*/

function validateFare(from, to, vehicleType, price) {

  // Check if price is a number
  if (typeof price !== "number" || price <= 0) {
    return "Error: Price must be a positive number.";
  }

  // Origin and destination cannot be the same
  if (from === to) {
    return "Error: From and To locations cannot be the same.";
  }

  // Vehicle type must exist
  if (!validVehicles.includes(vehicleType)) {
    return "Error: Invalid vehicle type.";
  }

  return "Fare is valid.";

}


// ==================================================
// 2️⃣ STATISTICS FUNCTIONS
// ==================================================


// --------------------------------------------
// Average Fare Price
// --------------------------------------------

function calculateAverageFare() {

  // Prevent division by zero
  if (fares.length === 0) {
    return "No fares available";
  }

  let total = 0;

  fares.forEach(fare => {
    total += fare.price;
  });

  return total / fares.length;
}



// --------------------------------------------
// Most Expensive Route
// --------------------------------------------

function getMostExpensiveRoute() {

  if (fares.length === 0) {
    return "No fares available";
  }

  let mostExpensive = fares[0];

  fares.forEach(fare => {

    if (fare.price > mostExpensive.price) {
      mostExpensive = fare;
    }

  });

  return mostExpensive;
}



// --------------------------------------------
// Cheapest Vehicle Type
// --------------------------------------------

function getCheapestVehicleType() {

  if (fares.length === 0) {
    return "No fares available";
  }

  let cheapest = fares[0];

  fares.forEach(fare => {

    if (fare.price < cheapest.price) {
      cheapest = fare;
    }

  });

  return cheapest.vehicleType;
}



// --------------------------------------------
// Most Common Route
// --------------------------------------------

function getMostCommonRoute() {

  if (fares.length === 0) {
    return "No fares available";
  }

  const routeCount = {};

  fares.forEach(fare => {

    const route = `${fare.from}-${fare.to}`;

    // Count route occurrences
    routeCount[route] = (routeCount[route] || 0) + 1;

  });

  let mostCommon = null;
  let highestCount = 0;

  for (let route in routeCount) {

    if (routeCount[route] > highestCount) {

      highestCount = routeCount[route];
      mostCommon = route;

    }

  }

  return mostCommon;
}

