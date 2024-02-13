package fileeditor;

public class HTMLEditorFactory extends EditorFactory {
    public MenuBar createMenuBar() {
        return new HtmlMenuBar();
    }

}
