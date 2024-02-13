package lab01.src.main.java.unsw.piazza;

import java.util.ArrayList;
import java.util.List;

/**
 * A Piazza Forum
 *
 * @author Your Name
 */
public class PiazzaForum {
    /**
     * Initialises the new PiazzaForum with the given group name
     */
    private String name;
    private List<Thread> threads;

    public PiazzaForum(String className) {
        this.threads = new ArrayList<>();
        this.name = className;
    }

    /**
     * @return The name of the forum
     */
    public String getName() {
        return this.name;
    }

    /**
     * Sets the name of the group of the Forum
     *
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Returns a list of Threads in the Forum, in the order that they were published
     */
    public List<Thread> getThreads() {
        return this.threads;
    }

    /**
     * Creates a new thread with the given title and adds it to the Forum.
     * The content is provided to allow you to create the first Post.
     * Threads are stored in the order that they are published.
     * Returns the new Thread object
     *
     * @param title
     * @param content
     */
    public Thread publish(String title, String content) {
        Thread newThread = new Thread(title, content);
        this.threads.add(newThread);
        return newThread;
    }

    /**
     * Searches all forum Threads for any that contain the given tag.
     * Returns a list of all matching Thread objects in the order that they were
     * published.
     *
     * @param tag
     * @return
     */
    public List<Thread> searchByTag(String tag) {
        List<Thread> matchingTags = new ArrayList<>();
        for (Thread t : this.threads) {
            List<String> tags = t.getTags();
            if (tags.contains(tag) && !matchingTags.contains(t)) {
                matchingTags.add(t);
            }
        }
        return matchingTags;
    }

    public void setThreads(List<Thread> threads) {
        this.threads = threads;
    }

}
