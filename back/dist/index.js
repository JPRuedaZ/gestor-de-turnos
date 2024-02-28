"use strict";
const calcularAre = (lado1, lado2) => {
    return lado1 * lado2;
};
console.log(calcularAre(5, 6));
const presentarUsuario = (name, apellido, edad = 'No especificada') => {
    if (!apellido) {
        console.log(`Nombre: ${name}, Edad: ${edad}`);
    }
    else {
        console.log(`Nombre: ${name}, Apellido: ${apellido}, Edad: ${edad}`);
    }
};
console.log(presentarUsuario('Homero'));
console.log(presentarUsuario('Homero', 'Simpson'));
console.log(presentarUsuario('Homero', 'Simpson', '39'));
