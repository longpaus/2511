package unsw.archaic_fs.exceptions;

import java.io.FileNotFoundException;

/**
 * Signals that an attempt to open the file denoted by a specified pathname has
 * failed.
 *
 * @author long.pham
 */
public class UNSWFileNotFoundException extends FileNotFoundException {
    /**
     * Constructs a <code>UNSWFileNotFoundException</code> with <code>null</code> as
     * its error detail message.
     */
    public UNSWFileNotFoundException() {
        super();
    }

    /**
     * Constructs a <code>UNSWFileNotFoundException</code> with the specified detail
     * message. The string <code>s</code> can be retrieved later by the
     * <code>{@link java.lang.Throwable#getMessage}</code> method of class
     * <code>java.lang.Throwable</code>.
     *
     * @param s the detail message.
     */
    public UNSWFileNotFoundException(String s) {
        super(s);
    }
}
