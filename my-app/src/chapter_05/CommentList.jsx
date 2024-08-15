import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "김태연",
    comment: "리엑트 재미있어요~",
  },
  {
    name: "김염염",
    comment: "정말이에요~~",
  },
]


function CommentList(props){
  return(
    <div>
      {comments.map(comment=>{
        return(
          <Comment name={comment.name} comment={comment.comment}/>
        )
      })}
    </div>
  )
}

export default CommentList;