import { invoice } from './classes/invoice.js';
import { listTemplate } from './classes/listTemplate.js';
import { payment } from './classes/payments.js';
// let docOne: HasFormatter; 
// let docTwo: HasFormatter; 
// docOne = new invoice('yoshi', 'web work', 1000);
// docTwo = new payment('bato', 'project', 750);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
//list template instance
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
const form = document.querySelector('.new-item-form');
//form inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == "invoice") {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
