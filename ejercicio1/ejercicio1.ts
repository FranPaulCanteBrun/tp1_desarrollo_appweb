class Empleado {
    nombre: string;
    apellido: string;
    edad: number;
    activo: boolean;
    roles: string[];
    dato: number | string;


    constructor(nombre: string, apellido: string, edad: number, activo: boolean, roles: string[], dato: number | string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.activo = activo;
        this.roles = roles;
        this.dato = dato;

        console.log(`Empleado: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}, Activo: ${this.activo}, Roles: ${this.roles.join(', ')}, Dato Extra: ${this.dato}`);
    }
}

const empleado1 = new Empleado('Marcelo', 'Maradona', 30, true, ['Programador','Ingeniero en sistema'], 15);