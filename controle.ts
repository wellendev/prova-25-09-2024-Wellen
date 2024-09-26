export class Controle {
    constructor(
        private _velocidadeAtual: number,
        private _velocidadeMax: number,
    ) {}

    public get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    public set velocidadeAtual(velocidadeAtual: number) {
        this._velocidadeAtual = velocidadeAtual;
    }

    public get velocidadeMax(): number {
        return this._velocidadeMax;
    }

    public set velocidadeMax(velocidadeMax: number) {
        this._velocidadeMax = velocidadeMax;
    }

    velocidadeMaxima(valor: number) {
        this.velocidadeMax = valor;
        console.log("Velocidade máxima permitida estipulada em: " + this.velocidadeMax.toFixed(1) + "Km/h")
    }

    acelerar(): void {
        this.velocidadeAtual += Math.random() * 20;
        console.log(this.velocidadeAtual.toFixed(1))
        if (this.velocidadeAtual>this.velocidadeMax) {
            console.log("Você foi multado :(")
        }
    }
}