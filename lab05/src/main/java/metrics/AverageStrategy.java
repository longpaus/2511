package metrics;

import java.util.ArrayList;
import java.util.List;

public class AverageStrategy implements GraphingStrategy {
    /**
     * return a list of average value over a 10 count
     */
    @Override
    public List<Double> getData(List<Double> metrics) {
        List<Double> average = new ArrayList<>();
        double currSum = 0;
        for (int i = 1; i < metrics.size(); i++) {
            currSum += metrics.get(i);
            if (i % 10 == 0) {
                average.add(currSum / 10);
                currSum = 0;
            }
        }
        return average;
    }

}
