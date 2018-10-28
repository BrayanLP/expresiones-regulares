// Cualquier Número
let numero = /\d/

// Cualquier letra o número
let w = /\w/

// cualquier espacio en blanco incluido tabs, salto de linea o similares
let s = /\s/

// Cualquier carácter que no ea un número
let D = /\D/

// Cualquier carácter que no sea alfanumérico
let W = /\W/

// Cualquier carácter que no sea un espacio en blanco
let S = /\S/

// Cualquier carácter excepto nuevas líneas
let punto = /./


// 21-01-1996
let expresion1 = /\d\d-\d\d-\d\d\d\d/
console.log(expresion1.test('21-01-1996'))
