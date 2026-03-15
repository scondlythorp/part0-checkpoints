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
