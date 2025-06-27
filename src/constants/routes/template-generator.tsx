export const BlogPageDescription = (
    <>
        <p>
            This is a simple blog application that interacts with a dummy REST
            API and provides basic functionality to view, add, and delete blog
            posts.
        </p>

        <h2>Features</h2>
        <ul className="list-disc pl-5">
            <li>
                <strong>Fetch Blogs</strong>: The app loads the first 10 blog
                posts from <code>jsonplaceholder.typicode.com</code>.
            </li>
            <li>
                <strong>Blog Overview</strong>: Displays all blogs in a
                responsive grid layout.
            </li>
            <li>
                <strong>View Details</strong>: Clicking on a blog opens a modal
                showing the full title and body.
            </li>
            <li>
                <strong>Add Blog</strong>: Users can create a new blog post
                using a title and content input.
            </li>
            <li>
                <strong>Delete Blog</strong>: Each blog card has a delete button
                to remove it from the list.
            </li>
        </ul>
    </>
);
