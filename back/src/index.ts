const calcularAre = (lado1:number, lado2:number): number => {
    return lado1 * lado2
}
console.log(calcularAre(5,6));

const presentarUsuario = (name: string, apellido?: string, edad: string = 'No especificada'): void => {
    if(!apellido) {
        console.log(`Nombre: ${name}, Edad: ${edad}`);
    } else {
        console.log(`Nombre: ${name}, Apellido: ${apellido}, Edad: ${edad}`);
    }
}
console.log(presentarUsuario('Homero'));
console.log(presentarUsuario('Homero', 'Simpson'));
console.log(presentarUsuario('Homero', 'Simpson', '39'));


