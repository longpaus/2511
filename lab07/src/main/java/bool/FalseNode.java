package bool;

public class FalseNode implements BooleanNode {
    @Override
    public boolean evaluate() {
        return false;
    }

    @Override
    public String prettyPrint() {
        return "false";
    }

    @Override
    public void add(BooleanNode node) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'add'");
    }

}
