/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        // this.multiplication = a * b;
        // this.division = a / b;
    }
    sum() {
        return this.a + this.b;
    }
    subtraction() {
        return this.a - this.b;
    }
    multiplication() {
        return this.a * this.b;
    }
    division() {
        return this.a / this.b;
    }
}

const calculation1 = new Calculator(38,145);
console.log('sum ===',calculation1.sum());
console.log('subtraction ===', calculation1.subtraction());
console.log('multiplication ===', calculation1.multiplication());
console.log('division ===', calculation1.division());