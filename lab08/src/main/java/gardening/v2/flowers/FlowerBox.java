package gardening.v2.flowers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

// TODO for students: Add in appropriate generic parameters
public class FlowerBox<F extends Flower, S extends FlowerSeedling<F>> {
    private List<S> seeds = new ArrayList<>();

    public void addFlower(S seed) {
        seeds.add(seed);
    }

    public void addSeeds(S seed) {
        seeds.add(seed);
    }

    public int numHarvestable() {
        // safely convert from long to int. stream's count method returns a long
        return Math.toIntExact(seeds.stream().filter(seed -> seed.canHarvest()).count());
    }

    public List<F> harvestFlowers() {
        return extractReadyFlowers();
    }

    public void growFlowers() {
        seeds.forEach((seed) -> seed.grow());
    }

    // A helper method. The types of the objects ready to be harvested
    // may be different from the types you return from your flower box.
    // e.g seedlings are ready to harvest but you return flowers once harvested
    protected List<F> extractReadyFlowers() {
        List<S> readySeeds = seeds.stream().filter((S seed) -> seed.canHarvest()).collect(Collectors.toList());
        List<F> readyFlowers = new ArrayList<>();
        readySeeds.stream().forEach(seed -> readyFlowers.add(seed.harvestFlower()));
        readySeeds.forEach(seed -> seeds.remove(seed));
        return readyFlowers;
    }

}
