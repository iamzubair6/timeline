"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface CommentProps {
  postId: number;
  showComments: boolean;
  setShowComments: any;
}
const Comments = ({ postId, showComments, setShowComments }: CommentProps) => {
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
    <Dialog open={showComments} onOpenChange={() => setShowComments(false)}>
      <DialogContent>
        <DialogHeader>
          {comments.map((comment: any) => (
            <div key={comment.id}>
              <DialogTitle>{comment.name}</DialogTitle>
              <DialogDescription>{comment.body}</DialogDescription>
            </div>
          ))}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Comments;
