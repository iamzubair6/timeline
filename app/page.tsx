"use client";
import { useEffect, useState } from "react";
import Loading from "./_components/Loading";
import Post from "./_components/Post";
const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data.sort((a: { id: number }, b: { id: number }) => b.id - a.id)
        )
      );
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-10 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
          <h1 className="text-3xl font-bold leading-none text-center text-white sm:text-4xl md:text-5xl">
            Post Timeline
          </h1>
          {posts.map((post: any) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default Timeline;
