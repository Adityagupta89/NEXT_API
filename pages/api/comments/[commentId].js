import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const commentID = req.query.commentId;
  console.log(commentID);
  const comment = comments.filter(
    (comment) => comment.id === parseInt(commentID)
  );
  res.send(comment);
}
