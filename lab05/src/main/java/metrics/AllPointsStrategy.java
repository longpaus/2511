package metrics;

import java.util.List;

public class AllPointsStrategy implements GraphingStrategy {
    @Override
    public List<Double> getData(List<Double> metrics) {
        return metrics;
    }

}
