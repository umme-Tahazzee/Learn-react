import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addIntialPosts: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_ITEM") {
    newPostList = currPostList.filter(
      (post) => post.Id !== action.playload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    {
      newPostList = action.playload.posts;
    }
  } else if (action.type === "ADD_POST") {
    {
      newPostList = [action.playload, ...currPostList];
    }
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      playload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addIntialPosts = (posts) => {
    
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      playload: {
        posts,
      },
    });
  };

  const deletePost = useCallback((postId) => {
    console.log("ok");
    dispatchPostList({
      type: "DELETE_ITEM",
      playload: {
        postId,
      },
    });
  }, [dispatchPostList]);

  const arr = [5,2,6,7,4];
  const sortedArr = arr.sort()

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        addIntialPosts: addIntialPosts,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;
