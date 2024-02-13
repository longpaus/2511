package metrics;

import java.util.ArrayList;
import java.util.List;

public class Emitter {
    private List<Plot> observers = new ArrayList<>();

    public void emitMetric(double xValue) {
        Double metric = Math.sin(Math.toRadians(xValue));
        for (Plot observer : observers) {
            observer.update(metric);
        }
    }

    public void addObserver(Plot observer) {
        observers.add(observer);
    }
}
