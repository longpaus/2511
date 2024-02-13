package bool;

public class TrueNode implements BooleanNode {
    @Override
    public boolean evaluate() {
        return true;
    }

    @Override
    public String prettyPrint() {
        return "true";
    }

    @Override
    public void add(BooleanNode parse) {
        throw new UnsupportedOperationException("Unimplemented method 'add'");
    }

}
