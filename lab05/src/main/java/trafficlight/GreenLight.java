package trafficlight;

public class GreenLight implements Light {
    private final static int DEFAULT_COUNT = 4;
    private int count = 0;

    public GreenLight(int count) {
        this.count = count;
    }

    public GreenLight() {
        this.count = DEFAULT_COUNT;
    }

    @Override
    public Light change(int numOfCars, int numOfPedestrians) {
        count = 1;
        Light yellowLight = new YellowLight(count);
        return yellowLight;
    }

    @Override
    public String reportState() {
        return "Green light";
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
