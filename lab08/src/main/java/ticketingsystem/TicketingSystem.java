package ticketingsystem;

import ticketingsystem.receipts.EmailReceiptDecorator;
import ticketingsystem.receipts.PostReceiptDecorator;
import ticketingsystem.receipts.Receipt;
import ticketingsystem.receipts.RecieptDecorator;
import ticketingsystem.receipts.SMSReceiptDecorator;

public class TicketingSystem {
    private static TicketingSystem ticketingSystem = null;
    private int ticketsLeft;

    public TicketingSystem(int numTickets) {
        this.ticketsLeft = numTickets;
    }

    public synchronized static TicketingSystem getInstance(int numTickets) {
        if (ticketingSystem == null) {
            ticketingSystem = new TicketingSystem(numTickets);
        }
        return ticketingSystem;
    }

    public int getTicketsLeft() {
        return ticketsLeft;
    }

    private void setTicketsLeft(int ticketsLeft) {
        this.ticketsLeft = ticketsLeft;
    }

    public String buyTicket(String email, String sms, String address) {
        String msg = "";
        if (getTicketsLeft() > 0) {
            setTicketsLeft(getTicketsLeft() - 1);
            msg += "There is now " + getTicketsLeft() + " left!" + "\n";
            RecieptDecorator receipt = new Receipt();
            if (email != null) {
                receipt = new EmailReceiptDecorator(email, receipt);
            }
            if (sms != null) {
                receipt = new SMSReceiptDecorator(sms, receipt);
            }
            if (address != null) {
                receipt = new PostReceiptDecorator(address, receipt);
            }
            msg += receipt.send();
            msg += "The total cost is: " + receipt.getCost() + "\n";
            msg += "------------------------------------------";
        } else {
            msg += "Unfortunately there are no tickets left :(";
        }
        System.out.println(msg);
        return msg;
    }

}
