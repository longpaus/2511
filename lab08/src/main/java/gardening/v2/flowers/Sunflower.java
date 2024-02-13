package gardening.v2.flowers;

public class Sunflower extends Flower implements Sellable {
    private int numSeeds;
    private int bloom;

    public Sunflower(int numSeeds, int bloom) {
        this.numSeeds = numSeeds;
        this.bloom = bloom;
    }

    public int harvestSeeds() {

        return numSeeds;
    }

    @Override
    public int getPrice() {
        return 15 + bloom;
    }

}
