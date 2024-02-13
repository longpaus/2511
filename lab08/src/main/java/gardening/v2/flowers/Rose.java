package gardening.v2.flowers;

import java.util.Random;

public class Rose extends Flower implements Sellable {
    private String chosenMessage;

    public Rose(String chosenMessage) {
        this.chosenMessage = chosenMessage;
    }

    public String revealMessage() {

        return chosenMessage;
    }

    @Override
    public int getPrice() {
        return 25 + 3 * chosenMessage.length();
    }

}
