import React, { useContext } from "react";
import { UserContext } from "../../../shared/contexts/UserContextProvider";
import "./CommentStub.css";

const CommentStub = ({ comment }) => {
  const {
    users: { users },
  } = useContext(UserContext);

  const user = users.find((user) => user.userId === comment.userId);
  return (
    <li className="comment-stub">
      <h4>{user !== undefined ? user.username : "Anonymous"}</h4>
      <p>{comment.message}</p>
    </li>
  );
};

export default CommentStub;
