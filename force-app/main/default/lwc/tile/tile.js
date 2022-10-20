import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api product;

    // tileClick method that creates a new CustomEvent with event type 'tileclick' 
    tileClick() {
        // CustomEvent intervace allow you to pass any kind of data via detail property
        const event = new CustomEvent('tileclick', {
            // detail contains only primitives
            detail: this.product.fields.Id.value
        });
        // Fire the event from c-tile
        this.dispatchEvent(event);
    }
}
