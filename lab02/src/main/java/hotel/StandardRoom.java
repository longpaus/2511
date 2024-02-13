package hotel;

import org.json.JSONObject;

public class StandardRoom extends Room {
    public JSONObject toJSON() {
        JSONObject o = new JSONObject();
        o.put("bookings", bookings);
        o.put("type", "standard");
        return o;
    }

    public void printWelcomeMessage() {
        System.out.println("Welcome to your standard room. Enjoy your stay :)");
    }

}
