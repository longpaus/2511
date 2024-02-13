package metrics;

import java.util.ArrayList;

import java.util.List;

import metrics.graphing.Panel;

public class Plot {
    private Panel panel;
    private List<Double> metrics = new ArrayList<>();
    private GraphingStrategy graphType = new AllPointsStrategy();

    private int range = 150;

    public void setGraphType(String strategy) {
        if (strategy.equals("All Points")) {
            this.graphType = new AllPointsStrategy();
        } else if (strategy.equals("Average")) {
            this.graphType = new AverageStrategy();
        } else if (strategy.equals("Max")) {
            this.graphType = new MaxStrategy();
        } else if (strategy.equals("Sum")) {
            this.graphType = new SumStrategy();
        }
    }

    public Panel getPanel() {
        return panel;
    }

    public void setPanel(Panel panel) {
        this.panel = panel;
    }

    public List<Double> getData() {
        List<Double> newList = new ArrayList<>(metrics);
        if (newList.size() > range) {
            newList = newList.subList(newList.size() - range - 1, newList.size() - 1);
        }
        return graphType.getData(newList);
    }

    public void update(Double metric) {
        metrics.add(metric);
        if (panel != null)
            panel.repaint();

    }
}
