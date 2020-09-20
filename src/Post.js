import React from "react";

const Post = ({title, body}) =>  (
        <div className="tc ba br2 shadow-5 ma3 bg-lightest-blue w-70">
          <h1 className="f4">{title.toUpperCase()}</h1>
          <p>{body}</p>
        </div>
);

export default Post;