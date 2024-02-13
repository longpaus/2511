package lab01.src.main.java.splitter;

import java.util.Scanner;

public class Splitter {
    public static void main(String[] args) {
        System.out.println("Enter a sentence specified by spaces only: ");
        Scanner scanner = new Scanner(System.in);
        String line = scanner.nextLine();
        scanner.close();
        String[] words = line.split(" ");
        for (String word : words) {
            System.out.println(word);
        }
    }
}
