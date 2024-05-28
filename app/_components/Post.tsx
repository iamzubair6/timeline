"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Comments from "./Comments";

interface PostProps {
  post: any;
}
const Post = ({ post }: PostProps) => {
  const [user, setUser] = useState<{ name?: string }>({});
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      next: { revalidate: 0 },
    })
      .then((response) => response.json())
      .then((data) => {
        const postUser = data.find(
          (user: { id: number }) => user.id === post.userId
        );
        setUser(postUser);
      });
  }, [post.userId]);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>by {user.name || ""}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{post.body}</p>
        </CardContent>
        <CardFooter>
          <p>
            <MessageCircle
              className="cursor-pointer"
              onClick={() => setShowComments(!showComments)}
            />
          </p>
        </CardFooter>
      </Card>
      {showComments && (
        <Comments
          postId={post.id}
          showComments={showComments}
          setShowComments={setShowComments}
        />
      )}
    </div>
  );
};

export default Post;
