import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  return (
    <>
      <button onClick={fetchComments}>load Comment</button>
      {comments.map((comment) => (
        <div key={comments.id}>
          {comment.id} {comment.text}
        </div>
      ))}
    </>
  );
}
