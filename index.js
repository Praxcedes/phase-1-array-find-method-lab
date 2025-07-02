const drivers = [
  { name: "Bobby", hometown: "Pittsburgh" },
  { name: "Sammy", hometown: "New York" },
  { name: "Sally", hometown: "Cleveland" },
  { name: "Annette", hometown: "Los Angeles" },
  { name: "Bobby", hometown: "Tampa Bay" }
];

function findDriverByName(name) {
  return drivers.find(driver => driver.name === name);
}

module.exports = {
  findDriverByName,
};
// index.js

function superbowlWin(record) {
  const win = record.find(game => game.result === "W");
  return win ? win.year : undefined;
}

module.exports = {
  superbowlWin,
};

