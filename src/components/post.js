"use client";

import React from "react";
import Comments from "./comments";
import UserDetail from "./userDetail";

const Post = ({ post }) => {
  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active ? true : false);
  };
  return (
    <div
      className="max-w-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md"
    >
      <UserDetail userId={post?.userId} />
      <p className="text-black text-2xl font-bold mb-2">{post?.title}</p>
      <p className="text-gray-700 mb-4">{post?.body}</p>
      <div className="flex justify-between items-center text-gray-600 text-sm">
        <span>👍 {post?.reactions?.likes}</span>
        <span>👎 {post?.reactions?.dislikes}</span>
        <span>👀 {post?.views}</span>
      </div>
      <div className="mt-5">
        <div
          className="text-black font-semibold flex items-center justify-between"
          onClick={() => handleClick()}
        >
          Comments
          <div className="toggle text-black">{active ? "▲" : "▼"}</div>
        </div>
        {active ? <Comments postId={post.id} /> : ""}
      </div>
    </div>
  );
};

export default Post;
