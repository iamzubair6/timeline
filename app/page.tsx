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
    <div>
      {posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Timeline;
