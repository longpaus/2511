package metrics;

import java.util.List;

public interface GraphingStrategy {
    public List<Double> getData(List<Double> metrics);
}
