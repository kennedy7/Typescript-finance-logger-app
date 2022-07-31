import { HasFormatter } from "../interfaces/HasFormatter"

export class payment implements HasFormatter {
    // client: string;
    // details: string;
    // amount: number;

    constructor (
        readonly recipient: string,
        private details: string,
        public amount : number,
        ) {}
    format(){
        return `${this.recipient} is owed  £${this.amount}  for ${this.details}`
    }
}
