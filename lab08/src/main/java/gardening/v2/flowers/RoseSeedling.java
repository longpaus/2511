package gardening.v2.flowers;

import java.util.Random;

// TODO for students: Add in appropriate generic parameter
public class RoseSeedling extends FlowerSeedling<Rose> {
    public final static String[] MESSAGES = {
            "Abscence makes the heart grow fonder", "A rose by any other name would smell as sweet",
            "One rose says more than the dozen",
            "If every tiny flower wanted to be a rose, spring would lose its loveliness"
    };
    public final static int REVEAL_DURATION = 3;
    private final static Random rng = new Random();
    private String chosenMessage;
    private int revealTime = REVEAL_DURATION;

    public RoseSeedling() {
        this.chosenMessage = MESSAGES[rng.nextInt(MESSAGES.length)];
    }

    @Override
    public void grow() {
        this.revealTime = Math.max(0, this.revealTime - 1);
    }

    @Override
    public boolean canHarvest() {
        return this.revealTime == 0;
    }

    @Override
    public int getPrice() {
        return 25 + 3 * chosenMessage.length();
    }

    @Override
    public Rose harvestFlower() {
        return new Rose(this.chosenMessage);
    }
}
