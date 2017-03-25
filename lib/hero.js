'use strict'
// A prototype is a way to assign a function/method to a constructor function
// Constructor functions should mainly deal with properties (name, alias)
// Prototypes are all about methods (usePower)
const Hero = function (name, alias, power) {
  this.name = name
  this.alias = alias
  this._power = power
}

// The way to make usePower associated with Hero is to use a Prototypes
// Any object created off of this constructor function will inherit the usePower function
// Arrays are constructor functions. The prototype associated with that array contains a function for calculating the length.
// Every object created from a prototype will inherit the functions of that prototype
Hero.prototype.usePower = function () {
  return this._power
}

Hero.prototype.unmask = function () {
  console.log(this.alias + ' ' + 'is' + ' ' + this.name)
}

const batMan = new Hero('Bruce Wayne', 'Batman', 'Spending money and hitting people')
const spiderMan = new Hero('Peter Parker', 'Spiderman', 'Shooting webs and saving people')

// console.log(batMan)
// console.log(batMan.usePower())
// console.log(batMan.unmask())

module.exports = {Hero, batMan, spiderMan}
