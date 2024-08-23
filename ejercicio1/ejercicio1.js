var Empleado = /** @class */ (function () {
    function Empleado(nombre, apellido, edad, activo, roles, dato) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.activo = activo;
        this.roles = roles;
        this.dato = dato;
        console.log("Empleado: ".concat(this.nombre, ", Apellido: ").concat(this.apellido, ", Edad: ").concat(this.edad, ", Activo: ").concat(this.activo, ", Roles: ").concat(this.roles.join(', '), ", Dato Extra: ").concat(this.dato));
    }
    return Empleado;
}());
var empleado1 = new Empleado('Marcelo', 'Maradona', 30, true, ['Programador', 'Ingeniero en sistema'], 15);
