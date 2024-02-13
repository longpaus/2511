package trafficlight;

public class YellowLight implements Light {
    private final static int DEFAULT_COUNT = 1;
    private int count;

    public YellowLight(int count) {
        this.count = count;
    }

    public YellowLight() {
        this.count = DEFAULT_COUNT;
    }

    @Override
    public Light change(int numOfCars, int numOfPedestrians) {
        int trafficDemand = numOfCars + numOfPedestrians;
        count = trafficDemand < 10 ? 10 : 6;
        Light redLight = new RedLight(count);
        return redLight;
    }

    @Override
    public String reportState() {
        return "Yellow light";
    }

    @Override
    public int getCount() {
        return this.count;
    }

    @Override
    public void setCount(int count) {
        this.count = count;
    }

}
