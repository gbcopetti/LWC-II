import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    @track primeironome = 'Eliseu';
    @track sobrenome = 'Dameto';
    @track idade = 25;
    @track email = 'eli.dameto@dameto.com';
    @track classificacao = 'Hot';
    @track empresa = 'Dameto Móveis';
    @track receitaanual = '$50.000';
}
