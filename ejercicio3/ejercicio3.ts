class Figura {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
}

export class Rectangulo extends Figura {
    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
}

class Triangulo extends Figura {
    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

// Instanciacion
const rectangulo2 = new Rectangulo(10, 5);
console.log(`Área del rectángulo: ${rectangulo2.calcularArea()}`);
console.log(`Perímetro del rectángulo: ${rectangulo2.calcularPerimetro()}`);

const triangulo = new Triangulo(10, 5);
console.log(`Área del triángulo: ${triangulo.calcularArea()}`);
