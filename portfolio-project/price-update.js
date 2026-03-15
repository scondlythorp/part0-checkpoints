// price-update.js
// -------------------------
// Increase fares by 15% and log changes
// -------------------------

const fs = require("fs");
const { fares } = require("./data.js");

function increaseFaresByPercent(percent) {
  const logLines = [];
  fares.forEach(f => {
    const oldPrice = f.price;
    f.price = Math.round(f.price * (1 + percent / 100));
    logLines.push(`Fare ID ${f.id}: D${oldPrice} → D${f.price} (${f.from} → ${f.to}, ${f.vehicleType})`);
  });

  const logText = `Price Update - ${new Date().toISOString()}\n=====================\n${logLines.join("\n")}`;
  fs.writeFileSync("price-changes.log", logText);

  console.log("Fares updated. Log saved to price-changes.log");
}

// Run 15% increase
increaseFaresByPercent(15);