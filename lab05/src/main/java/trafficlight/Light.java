package trafficlight;

public interface Light {
    public Light change(int numOfCars, int numOfPedestrians);

    public String reportState();

    public int getCount();

    public void setCount(int count);
}
