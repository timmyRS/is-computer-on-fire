const isComputerOnFire = require("./is-computer-on-fire.js");

console.log(isComputerOnFire.isComputerOn()); // true (unless your computer is off)
isComputerOnFire.assertComputerIsOn(); // no exception (unless your computer is off)
console.log(isComputerOnFire.isComputerOnFire()); // false (unless your computer is burning)
isComputerOnFire.assertComputerIsNotOnFire(); // no exception (unless your computer is burning)
