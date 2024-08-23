class Rectangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return this.base * this.altura;
    }
}

// Instanciacion
const rectangulo = new Rectangulo(10, 5);
console.log(`Área del rectángulo: ${rectangulo.area()}`);
