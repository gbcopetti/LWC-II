import { LightningElement, api } from 'lwc';

export default class Leadinfo extends LightningElement {
    @api primeironome;
    @api sobrenome;
    @api email;
    @api status;
}
