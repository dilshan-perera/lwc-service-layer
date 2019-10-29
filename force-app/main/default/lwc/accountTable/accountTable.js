import { LightningElement, track } from 'lwc';

export default class AccountTable extends LightningElement {
    @track accounts

    columns = [
        {label: 'Name', fieldName: 'Name'},
        {label: 'Industry', fieldName: 'Industry'}
    ];

    //handle initial load after front end is rendered
    renderedCallback() {
        const accountDataService = this.template.querySelector('c-account-data-service');
        
        accountDataService.getAccounts()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                //handle errors
            });
    }
}