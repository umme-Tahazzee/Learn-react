import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  return (
    <Form method="post" className="create-post">
      <div className="mb-3">
        <label className="form-label">Enter Your User Id:</label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter Your User ID"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How you're feeling today..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Content</label>
        <textarea
          rows="4"
          name="body"
          className="form-control"
          id="content"
          placeholder="Tell me about your feelings..."
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Number of Reactions</label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="Many people react to this..."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter You Hashtag</label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="#tag... "
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
export default CreatePost;
