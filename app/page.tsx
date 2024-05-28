"use client";
import { useEffect, useState } from "react";
import Post from "./_components/Post";
const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data.sort((a: { id: number }, b: { id: number }) => b.id - a.id)
        )
      );
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Timeline;
