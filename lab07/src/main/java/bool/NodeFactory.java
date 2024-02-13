package bool;

import org.json.JSONObject;

// import org.json.JSONObject;

public class NodeFactory {

    public static BooleanNode makeBooleanNode(String booleanOperator) {
        switch (booleanOperator) {
            case "and":
                return new AndNode();
            case "or":
                return new OrNode();
            case "not":
                return new NotNode();
            case "true":
                return new TrueNode();
            case "false":
                return new FalseNode();
            default:
                return null;
        }
    }

    public static BooleanNode parse(JSONObject json) {
        BooleanNode t = null;
        // check the top level node
        if ("value".equals(json.get("node"))) {
            t = parseLeaf(json);
        } else {
            t = parseComposite(json);
        }
        return t;
    }

    private static BooleanNode parseComposite(JSONObject json) {
        String booleanOperator = json.get("node").toString();
        BooleanNode tree = makeBooleanNode(booleanOperator);
        if (tree instanceof NotNode) {
            JSONObject subnode = new JSONObject(json.get("subnode1").toString());
            tree.add(parse(subnode));
        } else {
            JSONObject subnode1 = new JSONObject(json.get("subnode1").toString());
            JSONObject subnode2 = new JSONObject(json.get("subnode2").toString());
            tree.add(parse(subnode1));
            tree.add(parse(subnode2));
        }

        return tree;
    }

    private static BooleanNode parseLeaf(JSONObject json) {
        String booleanOperator = json.get("value").toString();
        return makeBooleanNode(booleanOperator);

    }

    public static void main(String[] args) {
        String testString = "{\"node\": \"or\", \"subnode1\": {\"node\": \"value\", \"value\": true},\"subnode2\": {\"node\": \"value\", \"value\": false} }";

        String testString2 = "{\"node\":\"and\",\"subnode1\" :" + testString
                + ",\"subnode2\": {\"node\": \"value\", \"value\": true}}";

        System.out.println(testString2);

        JSONObject testJson = new JSONObject(testString2);

        System.out.println(testJson.toString());

        BooleanNode testNode = parse(testJson);

        System.out.println(testNode.prettyPrint());

    }
}
