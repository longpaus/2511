package trafficlight;

public class RedLight implements Light {
    private final static int DEFAULT_COUNT = 6;
    private int count = 0;

    public RedLight(int count) {
        this.count = count;
    }

    public RedLight() {
        this.count = DEFAULT_COUNT;
    }

    @Override
    public String reportState() {
        return "Red light";
    }

    @Override
    public Light change(int numOfCars, int numOfPedestrians) {
        if (numOfPedestrians > 0) {
            Light pedesLight = new Pedestrianlight();
            return pedesLight;
        }
        int trafficDemand = numOfCars + numOfPedestrians;
        count = trafficDemand > 100 ? 6 : 4;
        Light greenLight = new GreenLight(count);
        return greenLight;

    }

    public int getCount() {
        return count;
    }

    @Override
    public void setCount(int count) {
        this.count = count;
    }

}
