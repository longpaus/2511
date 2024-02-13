package staff;

public class StaffTest {
    public static void printStaffDetails(StaffMember s) {
        String info = s.toString();
        System.out.println(info);
    }

    public static void main(String[] args) {
        StaffMember s = new StaffMember("long", 90);
        Lecturer l = new Lecturer("unsw", 'A', "jack", 80);
        printStaffDetails(s);
        printStaffDetails(l);
        StaffMember d = new StaffMember("long", 90);
        if (!s.equals(d)) {
            System.out.println("s != d");
        } else {
            System.out.println("s == d");
        }

        Lecturer c = new Lecturer("djfkas", 'A', "jacj", 88);
        if (!c.equals(l)) {
            System.out.println("c != l");
        } else {
            System.out.println("c == l");
        }

    }
}
