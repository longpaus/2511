package bool;

import java.util.ArrayList;
import java.util.List;

public class AndNode implements BooleanNode {
    private List<BooleanNode> children = new ArrayList<>();

    @Override
    public void add(BooleanNode node) {
        children.add(node);
    }

    @Override
    public boolean evaluate() {
        for (BooleanNode node : children) {
            if (!node.evaluate()) {
                return false;
            }
        }
        return true;
    }

    @Override
    public String prettyPrint() {
        String joinString = "";
        for (BooleanNode booleanNode : children) {
            joinString = joinString + " " + booleanNode.prettyPrint();
        }
        return "(AND " + joinString.trim() + ")";
    }
}
