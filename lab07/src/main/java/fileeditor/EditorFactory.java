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

public abstract class EditorFactory {
    public JFrame createFrame(JFrame frame) {
        Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
        screenSize.height = screenSize.height - (25 * screenSize.height / 768);
        frame.setSize(screenSize);
        return frame;
    }

    public JDesktopPane createDesktopPane() {
        return new JDesktopPane();
    }

    public ButtonListener createActionListener(JDesktopPane pane) {
        return new ButtonListener(pane);
    }

    public JToolBar createToolBar(ActionListener listener) {
        JToolBar toolBar = new JToolBar();
        String[] buttons = new String[] {
                "New", "Open", "Save", "Copy", "Cut", "Paste"
        };

        for (int i = 0; i < buttons.length; i++) {
            JButton button = new JButton(buttons[i], new ImageIcon(buttons[i] + ".jpg"));
            button.setPreferredSize(new Dimension(500, 50));
            toolBar.add(button);
            button.addActionListener(listener);
            if (i == 2)
                toolBar.addSeparator(new Dimension(10, toolBar.getHeight()));
        }
        return toolBar;
    }

    public WindowAdapter creatWindowAdapter(JDesktopPane pane) {
        return new WindowCloser(pane);
    }

    public JFrame updateFrame(JFrame frame, JMenuBar menuBar, WindowAdapter windowAdapter, JToolBar toolBar,
            JDesktopPane pane) {
        frame.setJMenuBar(menuBar);
        frame.addWindowListener(windowAdapter);
        frame.getContentPane().add(toolBar, "North");
        frame.getContentPane().add(pane);
        return frame;
    }

    public abstract MenuBar createMenuBar();

}
