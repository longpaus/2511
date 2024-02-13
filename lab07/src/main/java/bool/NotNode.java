package bool;

import java.util.ArrayList;
import java.util.List;

public class NotNode implements BooleanNode {
    private BooleanNode node;

    private List<BooleanNode> children = new ArrayList<>();

    @Override
    public boolean evaluate() {
        for (BooleanNode node : children) {
            if (!node.evaluate()) {
                return true;
            }
        }
        return false;
    }

    @Override
    public String prettyPrint() {
        String joinString = "";
        for (BooleanNode booleanNode : children) {
            joinString = joinString + " " + booleanNode.prettyPrint();
        }
        return "(NOT " + joinString.trim() + ")";
    }

    @Override
    public void add(BooleanNode node) {
        children.add(node);
    }

}
