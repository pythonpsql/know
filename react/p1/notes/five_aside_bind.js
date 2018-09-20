// Why use bind()?

// 1. Use a method from an object
this.x = 9
var module = {
	x: 81,
  getX: function() {
    return this.x
  }
}

console.log(module.getX()) // 81

y = module.getX // 9
console.log(y())

z = module.getX.bind(module)
console.log(z()) // 81

// 2. Make a function with pre-specified initial args

function list() {
  // note that we are creating a function named list in javascript
  // JavaScript functions have a built-in object called the arguments object.
  // The argument object contains an array of the arguments used when the function was called (invoked).
  // old way
  //return Array.prototype.slice.call(arguments)

  //ECMA 2015
  //return Array.from(arguments)
  //ECMA 2015
  return [...arguments]
}
var list1 = list(1,2,3)
console.log(list1)

var leadingThirtySevenList = list.bind(null, 37)
console.log(leadingThirtySevenList())
console.log(leadingThirtySevenList(1,2,3))

list3 = leadingThirtySevenList.bind(null, 4)
console.log(list3(1,2,3))
