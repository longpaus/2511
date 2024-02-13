package unsw.archaic_fs.exceptions;

import java.nio.file.NoSuchFileException;

public class UNSWNoSuchFileException extends NoSuchFileException {
    /**
     * Constructs an instance of this class.
     *
     * @param file a string identifying the file or {@code null} if not known.
     */
    public UNSWNoSuchFileException(String file) {
        super(file);
    }

}
