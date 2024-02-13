package metrics;

import java.util.ArrayList;
import java.util.List;

public class MaxStrategy implements GraphingStrategy {
    @Override
    public List<Double> getData(List<Double> metrics) {
        List<Double> max = new ArrayList<>();
        Double currMax = 0.0;
        for (int i = 1; i < metrics.size(); i++) {
            if (metrics.get(i) > currMax) {
                currMax = metrics.get(i);
            }
            if (i % 10 == 0) {
                max.add(currMax);
                currMax = 0.0;
            }
        }
        return max;

    }
}
