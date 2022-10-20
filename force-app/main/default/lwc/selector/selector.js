import { LightningElement, wire } from 'lwc'; // import wire service from lwc
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';

const fields = [NAME_FIELD];

export default class Selector extends LightningElement {
    selectedProductId;

    // this method set selectedProductID to the evt.detail value that was passed into it
    handleProductSelected(evt) {
        this.selectedProductId = evt.detail;
    }

    userId = Id;
    // uses wire decorator to use the wire service to call getRecord passing in userId and getting fields
    @wire(getRecord, { recordId: '$userId', fields })
    user; // sets user as the receiver for the wire call
    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }
}
