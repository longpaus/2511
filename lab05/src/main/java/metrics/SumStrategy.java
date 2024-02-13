package metrics;

import java.util.ArrayList;
import java.util.List;

import metrics.GraphingStrategy;

public class SumStrategy implements GraphingStrategy {
    /**
     * get the sum of the last ten value of metrics
     */
    @Override
    public List<Double> getData(List<Double> metrics) {
        List<Double> sums = new ArrayList<>();
        double currSum = 0;
        for (int i = 1; i < metrics.size(); i++) {
            currSum += metrics.get(i);
            if (i % 10 == 0) {
                sums.add(currSum);
                currSum = 0;
            }
        }
        return sums;
    }

}
