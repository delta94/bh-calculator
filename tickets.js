class Ticket extends Item {
    constructor(name, imageURL) {
        super(name, imageURL);
    }
}

let ticket = new Ticket('ticket', '/images/ticket.png');
let ticketPlus = new Ticket('ticket plus', '/images/ticket.png');
