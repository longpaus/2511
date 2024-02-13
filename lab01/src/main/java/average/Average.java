package lab01.src.main.java.average;

public class Average {
    /**
     * Returns the average of an array of numbers
     *
     * @param nums the array of integer numbers
     * @return the average of the numbers
     */
    public float computeAverage(int[] nums) {
        float result = 0;
        for (int num : nums) {
            result += num;
        }
        // Add your code
        return result / nums.length;
    }

    /**
     * @param args
     */
    public static void main(String[] args) {
        int[] sums = new int[] { 1, 2, 3, 4, 5, 6 };
        Average a = new Average();
        float average = a.computeAverage(sums);
        System.out.println("The average is " + average);
    }
}
