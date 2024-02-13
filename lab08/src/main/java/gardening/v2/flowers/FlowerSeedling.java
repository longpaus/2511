package gardening.v2.flowers;

// TODO for students: Choose whether you want this to be an abstract class or
// interface

// TODO for students: Add in appropriate generic parameter
public abstract class FlowerSeedling<F extends Flower> implements Sellable {
    public abstract void grow();

    public abstract boolean canHarvest();

    public abstract F harvestFlower();

    public abstract int getPrice();
}
