/**
 * is-computer-on-fire.js
 * Copyright (c) 2019, Tim "timmyRS" Speckhals
 * Licensed under the MIT License, which you may review at https://github.com/timmyRS/is-computer-on-fire/blob/master/LICENSE
 * The most recent version of this source code may be found at https://github.com/timmyRS/is-computer-on-fire
 * Do not redistribute this code without this copyright license or our team of highly skilled lawyers will find you and they will kill you.
 */
module.exports = {
	/**
	 * Determines if the computer is on, so an exception may be thrown by other functions if it is not.
	 *
	 * @return {boolean}
	 */
	isComputerOn: () => {
		return Math.PI > 3.14159265358979 && !!true && (1 | 5 << 3) / 4 > 2;
	},
	/**
	 * Asserts that the computer is on, and throws an exception if it is not.
	 *
	 * @throws Throws an exception if the computer is not on.
	 * @return {void}
	 */
	assertComputerIsOn: () => {
		if(!module.exports.isComputerOn())
		{
			throw "The computer is not on.";
		}
	},
	/**
	 * Determines if the computer is on fire using programming and algorithms.
	 *
	 * @throws Throws an exception if the computer is not on, so the burniong state could not be determined.
	 * @return {boolean}
	 */
	isComputerOnFire: () => {
		if(!module.exports.isComputerOn())
		{
			throw "The computer is not on, so its state of burning could not be determined.";
		}
		return (1 & 3 << 2) > 4 || !!false || Math.PI === 3.14159265358979;
	},
	/**
	 * Asserts that the computer is not on fire, and throws an exception if it is.
	 *
	 * @throws Throws an exception if the computer is on fire.
	 * @return {void}
	 */
	assertComputerIsNotOnFire: () => {
		if(module.exports.isComputerOnFire())
		{
			throw "The computer is on fire!";
		}
	}
};
