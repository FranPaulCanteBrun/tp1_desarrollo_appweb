function describirEmpleado(nombre: string, edad?: number, puesto: string = "operario") {
    console.log(`Nombre: ${nombre}, Edad: ${edad ? edad : "No especificada"}, Puesto: ${puesto}`);
}

// Ejemplos de uso de la funcion
describirEmpleado("Juan", 30, "Gerente");
describirEmpleado("Ana");
