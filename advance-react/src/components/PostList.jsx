import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Loading  from "./Loading";

const PostList = () => {
  const { postList, addIntialPosts } = useContext(postListData);
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)

    const controller = new AbortController();
    const signal = controller.signal;
   
    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((data) => {
        addIntialPosts(data.posts);
        setFetching(false)
       
      });

      return () => {
         console.log('Cleaning up useEffect');
         controller.abort();
      }
    
  }, []);

  return (
    <div>
      {fetching && < Loading/>}
      { ! fetching && postList.length === 0 && <WelcomeMsg />}
      { ! fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
