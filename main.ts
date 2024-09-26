import prompt from 'prompt-sync';
import { Controle } from './controle';

let control: Controle = new Controle(0, 10)
let teclado = prompt();
let option: number = 0;

while(option !=9) {
    console.log('========Personagem========');
    console.log('1. Definir velocidade máxima');
    console.log('2. Acelerar');
    console.log('9. Sair');

    option = +teclado('Escolha uma opção:')

    switch(option) {
        case 1:
            let valor: number = +teclado ("Digite a velocidade máxima permitida: ")
            control.velocidadeMaxima(valor);
            break;
        case 2:
            control.acelerar();
            break;
        default:
            break;
    }
}