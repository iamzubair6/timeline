"use client";
import { useEffect, useState } from "react";

interface CommentProps {
  postId: number;
}
const Comments = ({ postId }: CommentProps) => {
  const [comments, setComments] = useState<[] | any>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => response.json())
      .then((data) => {
        const postComments = data.filter(
          (comment: any) => comment.postId === postId
        );
        setComments(postComments);
      });
  }, [postId]);

  return (
    <div className="comments">
      {comments.map((comment: any) => (
        <div key={comment.id} className="comment">
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
