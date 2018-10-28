let expresion1 = /hola mun?do/
console.log(expresion1.test('hola mudo')) // true

let expresion2 = /pollo|res|pescado/
console.log(expresion2.test('Yo quiero pollo')) //true