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

public class TextEditorMenuBar implements MenuBar {
    @Override
    public JMenuBar createMenuBar(ActionListener listener) {
        JMenuBar menuBar = new JMenuBar();
        JMenu fileMenu = new JMenu("File");
        String[] fileMenuItems = new String[] {
                "New", "Open", "Save", "Save As"
        };

        for (int i = 0; i < fileMenuItems.length; i++) {
            JMenuItem menuItem = new JMenuItem(fileMenuItems[i]);
            fileMenu.add(menuItem);
            menuItem.addActionListener(listener); // Listens to button press
        }
        menuBar.add(fileMenu);

        // Edit menu
        JMenu editMenu = new JMenu("Edit");
        String[] editMenuItems = new String[] {
                "Copy", "Cut", "Paste", "Select All"
        };

        for (int i = 0; i < editMenuItems.length; i++) {
            JMenuItem menuItem = new JMenuItem(editMenuItems[i]);
            editMenu.add(menuItem);
            menuItem.addActionListener(listener); // Listens to button press
        }
        menuBar.add(editMenu);
        return menuBar;
    }

}
