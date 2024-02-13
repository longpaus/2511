package fileeditor;

public class TextEditorFactory extends EditorFactory {
    @Override
    public MenuBar createMenuBar() {
        return new TextEditorMenuBar();
    }

}
