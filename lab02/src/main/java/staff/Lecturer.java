package staff;

public class Lecturer extends StaffMember {
    private String school;
    private char status;

    public Lecturer(String school, char status, String name, double salary) {
        super(name, salary);
        this.school = school;
        this.status = status;
    }

    /**
     * get the school the lecturer lectures in
     * @return name of school(string)
     */
    public String getSchool() {
        return school;
    }

    /**
     * set the school the lecturer teaches in
     * @param school name of school
     */
    public void setSchool(String school) {
        this.school = school;
    }

    /**
     * status can either be A for
     * Associate Lecturer, B for a Lecturer, and C for a Senior Lecturer
     * @return the status of the lecturer
     */
    public char getStatus() {
        return status;
    }

    /**
     * set the status, status can either be A for
     * Associate Lecturer, B for a Lecturer, and C for a Senior Lecturer
     * @param status
     */
    public void setStatus(char status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!super.equals(obj)) {
            return false;
        }

        if (!(obj instanceof Lecturer)) {
            return false;
        }
        Lecturer l = (Lecturer) obj;
        return l.school.equals(school) && l.status == status;
    }

    @Override
    public String toString() {
        return super.toString() + " ,school: " + school + " ,status: " + status;
    }

}
