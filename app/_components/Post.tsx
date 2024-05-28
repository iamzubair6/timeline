"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import Comments from "./Comments";

interface PostProps {
  post: any;
}
const Post = ({ post }: PostProps) => {
  const [user, setUser] = useState<{ name?: string }>({});
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        const postUser = data.find(
          (user: { id: number }) => user.id === post.userId
        );
        setUser(postUser);
      });
  }, [post.userId]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>by {user.name || ""}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{post.body}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <div className="post">
        <h2>{post.title}</h2>
        <h3>by {user.name || ""}</h3>
        <p>{post.body}</p>
        <button onClick={() => setShowComments(!showComments)}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
        {showComments && <Comments postId={post.id} />}
      </div>
    </>
  );
};

export default Post;
