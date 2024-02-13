package hotel;

import org.json.JSONObject;

import com.google.gson.JsonArray;

public class PenthouseRoom extends Room {
    public JSONObject toJSON() {
        JSONObject o = new JSONObject();
        JsonArray b = new JsonArray();
        for (Booking booking : bookings) {
            b.add(booking);
        }
        o.put("bookings", b);
        o.put("type", "penthouse");
        return o;
    }

    public void printWelcomeMessage() {
        System.out.println(
                "Welcome to your penthouse apartment, complete with ensuite, lounge, kitchen and master bedroom.");
    }

}
