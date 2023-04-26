import { LightningElement, api } from 'lwc';

export default class Oppsdaconta extends LightningElement {
    @api id;
    @api nome;
    @api valor;
    @api fase;
}
