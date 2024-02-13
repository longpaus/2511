package trafficlight;

public class TrafficLight {
    private Light state;
    private String id;

    public TrafficLight(String state, String id) {
        if (state.equals("Red light")) {
            this.state = new RedLight();
        } else if (state.equals("Green light")) {
            this.state = new GreenLight();
        } else if (state.equals("Yellow light")) {
            this.state = new YellowLight();
        } else if (state.equals("Pedestrian light")) {
            this.state = new Pedestrianlight();
        }
        this.id = id;
    }

    public void change(int numOfCars, int numOfPedestrians) {
        int count = state.getCount();
        if (count > 0) {
            state.setCount(count - 1);
            return;
        }
        state = state.change(numOfCars, numOfPedestrians);
    }

    public int timeRemaining() {
        return state.getCount();
    }

    public String reportState() {
        return state.reportState();
    }
}
