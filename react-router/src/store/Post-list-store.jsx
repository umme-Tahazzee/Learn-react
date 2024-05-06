import { useCallback } from "react";
import { createContext, useReducer, useEffect, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_ITEM") {
    newPostList = currPostList.filter(
      (post) => post.Id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    {
      newPostList = action.payload.posts;
    }
  } else if (action.type === "ADD_POST") {
    {
      newPostList = [action.payload, ...currPostList];
    }
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);
  
 

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addIntialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
      dispatchPostList({
        type: "DELETE_ITEM",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

 
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
