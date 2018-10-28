// + acepta al menos 1 expresion
let expresion1 = /\d+/
console.log(expresion1.test('')) // false

// * acepta desde 0 repeticiones
console.log(expresion1.test('')) // true