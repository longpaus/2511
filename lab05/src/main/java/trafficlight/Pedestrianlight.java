package trafficlight;

public class Pedestrianlight implements Light {
    private static final int DEFAULT_COUNT = 2;
    private int count;

    public Pedestrianlight() {
        this.count = DEFAULT_COUNT;
    }

    @Override
    public Light change(int numOfCars, int numOfPedestrians) {
        int trafficDemand = numOfCars + numOfPedestrians;
        count = trafficDemand > 100 ? 6 : 4;
        Light greenLight = new GreenLight(count);
        return greenLight;
    }

    @Override
    public String reportState() {
        return "Pedestrian light";
    }

    @Override
    public int getCount() {
        return count;
    }

    @Override
    public void setCount(int count) {
        this.count = count;
    }

}
