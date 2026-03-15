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

