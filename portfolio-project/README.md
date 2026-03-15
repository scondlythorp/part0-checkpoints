# Personal Fare Management System

A command-line fare and student tracker demonstrating JavaScript fundamentals, CRUD operations, data validation, statistics, and logging.

---

## 🎯 Purpose

This project is part of the **PASSO API Development Course** portfolio. It demonstrates:

- Working with arrays of objects
- CRUD operations (Create, Read, Update, Delete) for both students and fares
- Data validation and error handling
- Organizing code into modules
- Data transformation, statistics, and bulk operations
- Logging changes to files

It covers **Checkpoints 0d.1 through 0d.7**, from basic JS fundamentals to a fully integrated portfolio project.

---

## 📁 Project Structure

```text
part0-checkpoints/
└── 0d/
    ├── js-fundamentals-quiz.js         # 0d.1 - JS fundamentals quiz
    ├── student-tracker/                 # 0d.2 - CRUD Student Tracker
    │   ├── app.js
    │   ├── crud.js
    │   ├── data.js
    │   └── README.md
    ├── enhancements.js                  # 0d.3 - Fare enhancements
    ├── data-transformation.js           # 0d.4 - Data transformation
    ├── price-update.js                  # 0d.5 - Price updates & logging
    ├── price-changes.log                # Log of fare updates
    ├── crud-with-errors.js              # 0d.6 - Error-handling CRUD
    └── portfolio-project/               # 0d.7 - Integrated portfolio project
        ├── app.js
        ├── crud.js
        ├── data.js
        ├── data-transformation.js
        ├── enhancements.js
        ├── price-update.js
        ├── price-changes.log
        └── README.md
```

---

## 🚀 How to Run

Make sure **Node.js** is installed → https://nodejs.org

**1. Clone the repository:**
```bash
git clone <your-repo-link>
```

**2. Navigate to the project folder:**
```bash
cd part0-checkpoints/0d/portfolio-project
```

**3. Run the main application:**
```bash
node app.js
```

**4. Run the price update script:**
```bash
node price-update.js
```

> This updates all fares by 15% and logs changes to `price-changes.log`.

---

## 📚 Features by Checkpoint

### 0d.1 – JavaScript Fundamentals Quiz

- Arrays of Gambian cities
- Objects representing taxi fares
- Array methods: `map`, `filter`, `find`
- Template literals for formatted messages

```javascript
const cities = ["Banjul", "Serekunda", "Brikama", "Bakau", "Farafenni"];

const taxiFare = {
  id: 1,
  from: "Banjul",
  to: "Serekunda",
  vehicleType: "Taxi",
  price: 25
};

const message = `Fare from ${taxiFare.from} to ${taxiFare.to} costs D${taxiFare.price}`;
```

---

### 0d.2 – Student Tracker CRUD

- Tracks students with `id`, `name`, `age`, `grade`, `attendance`
- CRUD operations: Create, Read, Update, Delete
- Search by name, grade, or other properties
- Displays students in a formatted console table

```javascript
// Example: Create a new student
createStudent("Modou", 21, "A", 90);

// Example: Search by grade
searchByGrade("A");

// Example: Delete a student
deleteStudent(3);
```

---

### 0d.3 – Fare Calculator Enhancements

**Validation rules:**
- Price must be positive
- `From` and `To` cannot be the same
- Vehicle type must be one of: `Taxi`, `Bus`, `Gelegele`, `7-Seater`

```javascript
validateFare("Banjul", "Banjul", "Taxi", 20);
// Output: "Error: 'From' and 'To' locations cannot be the same."

validateFare("Banjul", "Serekunda", "Taxi", 25);
// Output: "Fare is valid."
```

**Statistics:**
- Average fare price
- Most expensive route
- Cheapest vehicle type
- Most common route

**Bulk Operations:**
- Increase fares for a vehicle type by percentage
- Delete all fares for a specific route

---

### 0d.4 – Data Transformation

**Group fares by vehicle type:**
```javascript
{
  Taxi:     [fare1, fare2, ...],
  Bus:      [fare3, fare4, ...],
  Gelegele: [fare5, ...]
}
```

**Create a route lookup:**
```javascript
{
  "Banjul-Serekunda": [fare1, fare2, ...],
  "Brikama-Banjul":   [fare3, ...]
}
```

**Compute statistics by vehicle type:**
```javascript
{
  Taxi: { min: 20, max: 30, average: 25 },
  Bus:  { min: 12, max: 35, average: 20 }
}
```

---

### 0d.5 – Price Updates & Logging

- Increases all fares by 15%
- Logs all changes to `price-changes.log`

**Log file format:**
```text
Price Update - 2026-03-08
=========================
Fare ID 1: D25 → D29 (Banjul → Serekunda, Taxi)
Fare ID 2: D12 → D14 (Banjul → Serekunda, Bus)
Fare ID 3: D30 → D35 (Brikama → Banjul, Taxi)
Fare ID 4: D18 → D21 (Brikama → Banjul, Bus)
```

---

### 0d.6 – Error Handling CRUD

Handles invalid operations gracefully:

- Creating a fare with missing or invalid fields
- Updating or deleting non-existent fares
- Invalid vehicle types or negative prices
- Searching for routes with no fares

```javascript
updateFare(99, { price: 50 });
// Output: "Error: Fare with ID 99 not found."

createFare("Banjul", "Banjul", "Taxi", 20);
// Output: "Error: 'From' and 'To' locations cannot be the same."

deleteFare(99);
// Output: "Error: Fare with ID 99 not found."
```

---

### 0d.7 – Portfolio Project

Fully integrates all previous checkpoints into one clean project:

- Shows current fares and statistics
- Updates fares with 15% increase and logs changes
- Data validation and error handling in all operations
- Formatted console output using tables and messages

```bash
node app.js
```

**Sample output:**
```text
========= CURRENT FARES =========
┌─────┬───────────┬────────────┬─────────────┬───────┐
│ id  │ from      │ to         │ vehicleType │ price │
├─────┼───────────┼────────────┼─────────────┼───────┤
│  1  │ Banjul    │ Serekunda  │ Taxi        │  25   │
│  2  │ Banjul    │ Serekunda  │ Bus         │  12   │
│  3  │ Brikama   │ Banjul     │ Taxi        │  30   │
└─────┴───────────┴────────────┴─────────────┴───────┘

========= STATISTICS =========
Average Fare Price:    D25
Most Expensive Route:  Farafenni → Banjul (7-Seater) - D50
Cheapest Vehicle:      Gelegele
Most Common Route:     Banjul-Serekunda
```

---

## 💡 What I Learned

- Structuring a Node.js project into modules
- Working with `require` and `module.exports`
- CRUD operation patterns for arrays of objects
- Array methods: `map`, `filter`, `find`, `findIndex`, `splice`
- Object manipulation using `Object.assign()`
- Data validation and error handling
- Logging changes and tracking history
- Integrating multiple features into one portfolio project

---

## 🔮 Future Enhancements

- Export and import fares to and from CSV
- CLI options for all operations
- Color-coded console output
- Database integration with MongoDB or SQLite
- Web interface using Node.js and Express

---

## Project Structure

part0-checkpoints/
 ├── 0a/                           # Checkpoint 0a (if any)
 ├── 0b/                           # Checkpoint 0b (if any)
 ├── 0c/                           # Checkpoint 0c (if any)
 └── 0d/
     ├── js-fundamentals-quiz.js          # 0d.1 - Arrays, objects, array methods, template literals
     ├── student-tracker/                  # 0d.2 - CRUD Student Tracker Project
     │    ├── data.js                     # Initial student data (10 students)
     │    ├── crud.js                     # CRUD functions
     │    ├── app.js                      # Demo application (CLI)
     │    └── README.md                   # Project instructions / screenshots
     ├── enhancements.js                  # 0d.3 - PASSO Fare Calculator Enhancements
     │    ├── validateFare()              # Validation functions
     │    ├── statistics functions        # Average, most expensive route, cheapest vehicle, most common route
     │    └── bulkOperations()            # Update fares, delete routes
     ├── data-transformation.js           # 0d.4 - Grouping & Stats by vehicle type & route
     ├── price-update.js                  # 0d.5 - Increase fares by 15%, update, log
     ├── price-changes.log                # 0d.5 - Log of updated fares
     ├── crud-with-errors.js              # 0d.6 - CRUD functions with comprehensive error handling
     └── portfolio-project/               # 0d.7 - Personal Fare Management System
          ├── data.js                     # All fare data
          ├── crud.js                     # All CRUD functions
          ├── enhancements.js             # Validation + Stats + Bulk Operations
          ├── data-transformation.js      # Grouping and statistics
          ├── price-update.js             # Update prices & log
          ├── price-changes.log           # Price change log
          ├── app.js                      # Main CLI demo for all features
          └── README.md                   # Full project README (description, screenshots, usage)
---- 

## 👨‍💻 Author

**Modou Lamin Thorp**
ICT Student — PASSO API Development Course 2026



## 📝 License

MIT
