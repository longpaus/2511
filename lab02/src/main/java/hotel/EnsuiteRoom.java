package hotel;

import org.json.JSONObject;

public class EnsuiteRoom extends Room {
    public JSONObject toJSON() {
        JSONObject o = new JSONObject();
        o.put("bookings", bookings);
        o.put("type", "ensuite");
        return o;
    }

    public void printWelcomeMessage() {
        System.out
                .println("Welcome to your beautiful ensuite room which overlooks the Sydney harbour. Enjoy your stay");
    }

}
