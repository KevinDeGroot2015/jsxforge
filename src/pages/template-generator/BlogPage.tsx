import PageBase from "@components/PageBase/PageBase";

export default function BlogPage() {
    const headerCode = `import { Button } from "@components/Button";
import { Input } from "@components/InputField";

type Blog = {
    id: number;
    title: string;
    body: string;
};`;

    const bodyCode = `
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
            .then((res) => res.json())
            .then((data: Blog[]) => setBlogs(data))
            .catch(console.error);
    }, []);

    const openModal = (blog: Blog): void => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setSelectedBlog(null);
        setIsModalOpen(false);
    };

    const handleAddBlog = (): void => {
        const newBlog: Blog = {
            id: Date.now(),
            title: newTitle,
            body: newBody,
        };
        setBlogs([newBlog, ...blogs]);
        setNewTitle("");
        setNewBody("");
    };

    const handleDeleteBlog = (id: number): void => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
    };

    const handleTitleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setNewTitle(e.target.value);
    };

    const handleBodyChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        setNewBody(e.target.value);
    };
    `;
    const returnCode = `
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Blog Overview</h1>

            <div className="mb-6 space-y-2">
                <InputField
                    label="Blog title"
                    placeholder="Title"
                    value={newTitle}
                    onChange={handleTitleChange}
                />
                <InputField
                    label="Blog content"
                    placeholder="Content"
                    inputType="textarea"
                    value={newBody}
                    onChange={handleBodyChange}
                />
                <Button onClick={handleAddBlog}>Add Blog</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition cursor-pointer relative"
                        onClick={() => openModal(blog)}
                    >
                        <h2 className="text-xl font-semibold">{blog.title}</h2>
                        <p className="text-gray-600 line-clamp-2">
                            {blog.body}
                        </p>
                        <Button
                            variant="destructive"
                            className="absolute top-2 right-2"
                            onClick={(
                                e: React.MouseEvent<HTMLButtonElement>
                            ) => {
                                e.stopPropagation();
                                handleDeleteBlog(blog.id);
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div
                    id="modal"
                    className="fixed inset-0 z-50 hidden items-center justify-center"
                >
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

                    <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 max-w-lg w-full mx-4">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                            onClick={closeModal}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-2">
                            {selectedBlog?.title}
                        </h2>
                        <p className="text-gray-700 whitespace-pre-line">
                            {selectedBlog?.body}
                        </p>
                    </div>
                </div>
            )}
        </div>
    `;

    return (
        <PageBase
            defaultComponentName="BlogPage"
            defaultUseStateInput="blogs, selectedBlog, isModalOpen, newTitle, newBody"
            headerCode={headerCode}
            bodyCode={bodyCode}
            returnCode={returnCode}
        />
    );
}
