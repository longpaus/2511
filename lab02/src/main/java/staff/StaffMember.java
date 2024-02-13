package staff;

import java.time.LocalDate;

/**
 * A staff member
 * @author Robert Clifton-Everest
 *
 */
public class StaffMember {
    private String name;
    private double salary;
    private LocalDate hireDate;
    private LocalDate endDate;

    public StaffMember(String name, double salary) {
        this.name = name;
        this.salary = salary;
        this.hireDate = LocalDate.now();
    }

    /**
     * Gets the staffmember name.
     * @return the name of staffmember
     */
    public String getName() {
        return name;
    }

    /**
     * Gets the salary of staffmember
     * @return the salary of staffmember
     */
    public double getSalary() {
        return salary;
    }

    /**
     * set salary of staffmember
     * @param salary must be greater than 0
     */
    public void setSalary(double salary) {
        this.salary = salary;
    }

    /**
     * get the day that the staffmember was hired
     * @return hire date
     */
    public LocalDate getHireDate() {
        return hireDate;
    }

    /**
     * get the day that the staff member will leave the job
     * @return the end date
     */
    public LocalDate getEndDate() {
        return endDate;
    }

    /**
     * set the date the staffmember will leave the job
     * @param endDate
     */
    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    @Override
    public String toString() {
        return "staff name: " + name + " ,salary: " + salary + " ,hire date: " + hireDate + ",end date: " + endDate;
    }

    private static boolean endDateEquals(LocalDate date1, LocalDate date2) {
        if (date1 == null && date2 == null) {
            return true;
        } else {
            return date1.compareTo(date2) == 0;
        }
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof StaffMember)) {
            return false;
        }
        StaffMember s = (StaffMember) obj;
        return s.name.equals(name) && Double.compare(salary, s.salary) == 0 && s.hireDate.compareTo(hireDate) == 0
                && endDateEquals(s.endDate, endDate);
    }

}
