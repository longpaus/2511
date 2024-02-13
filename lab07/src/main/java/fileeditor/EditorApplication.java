package fileeditor;

import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;

import javax.swing.JDesktopPane;
import javax.swing.JFrame;
import javax.swing.JMenuBar;
import javax.swing.JToolBar;

import java.awt.Dimension;
import java.awt.Toolkit;

import javax.swing.ImageIcon;
import javax.swing.JButton;
// import javax.swing.JDesktopPane;
// import javax.swing.JFrame;
import javax.swing.JMenu;
// import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JTextField;
// import javax.swing.JToolBar;

public class EditorApplication {
    private JFrame frame;

    public EditorApplication() {
        frame = new JFrame("Basic Editor");

    }

    public void setFrameVisible(boolean value) {
        frame.setVisible(value);
    }

    public static void main(String[] args) {
        String editorType = "HTML Editor";
        EditorApplication editor = new EditorApplication();
        editor.setFrameVisible(true);
        EditorFactory editorFactory = null;
        switch (editorType) {
        case "Text Editor":
            editorFactory = new TextEditorFactory();
        case "HTML Editor":
            editorFactory = new HTMLEditorFactory();
        }

        editor.createDefaultUI(editorFactory);

    }

    private void createDefaultUI(EditorFactory editorFactory) {
        editorFactory.createFrame(frame);
        JDesktopPane pane = editorFactory.createDesktopPane();
        ActionListener listener = editorFactory.createActionListener(pane);
        JMenuBar menuBar = editorFactory.createMenuBar().createMenuBar(listener);
        JToolBar toolBar = editorFactory.createToolBar(listener);
        WindowAdapter windowAdapter = editorFactory.creatWindowAdapter(pane);
        editorFactory.updateFrame(this.frame, menuBar, windowAdapter, toolBar, pane);

    }

}
