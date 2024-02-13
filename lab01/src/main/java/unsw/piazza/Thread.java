package lab01.src.main.java.unsw.piazza;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * A thread in the Piazza forum.
 */
public class Thread {
    /**
     * Creates a new thread with a title and an initial first post.
     *
     * @param title
     * @param firstPost
     */
    private String title;
    private List<String> posts;
    private List<String> tags;

    public Thread(String title, String firstPost) {
        this.title = title;
        this.posts = new ArrayList<>();
        this.tags = new ArrayList<>();

        this.posts.add(firstPost);
    }

    /**
     * @return The title of the thread
     */
    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * @return A SORTED list of tags
     */
    public List<String> getTags() {
        Collections.sort(tags);
        return tags;
    }

    /**
     * @return A list of posts in this thread, in the order that they were published
     */
    public List<String> getPosts() {
        return posts;
    }

    /**
     * Adds the given post object into the list of posts in the thread.
     *
     * @param post
     */
    public void publishPost(String post) {
        this.posts.add(post);
    }

    /**
     * Allows the given user to replace the thread tags (list of strings)
     *
     * @param tags
     */
    public void setTags(String[] tags) {
        this.tags = Arrays.asList(tags);
    }
}
