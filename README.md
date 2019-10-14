# is-computer-on-fire

Adds various helpful functions to assert the state of the machine before performing any heavy tasks.

> npm install is-computer-on-fire

```JavaScript
const isComputerOnFire = require("is-computer-on-fire");

console.log(isComputerOnFire.isComputerOn()); // true (unless your computer is off)
isComputerOnFire.assertComputerIsOn(); // no exception (unless your computer is off)
console.log(isComputerOnFire.isComputerOnFire()); // false (unless your computer is burning)
isComputerOnFire.assertComputerIsNotOnFire(); // no exception (unless your computer is burning)
```

This project is licensed under the MIT License, which you may review at https://github.com/timmyRS/is-computer-on-fire/blob/master/LICENSE

**Do not redistribute this code without this copyright license or our team of highly skilled lawyers will find you and they will kill you.**
