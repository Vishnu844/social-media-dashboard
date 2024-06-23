import React from "react";
import useSWR from "swr";

const Comments = ({ postId }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/posts/${postId}/comments`,
    fetcher
  );
  return (
    <div className="mt-4">
      {isLoading ? (
        <div className="text-slate-400 text-sm text-center">Loading...</div>
      ) : data?.total > 0 ? (
        data?.comments?.map((comment) => (
          <div key={comment.id} className="mb-4 p-4 bg-gray-100 rounded-lg">
            <p className="text-gray-800">{comment.body}</p>
            <div className="flex justify-between items-center text-gray-600 text-sm mt-2">
              <span>👍 {comment.likes}</span>
              <span>By {comment.user.username}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="text-slate-400 text-sm text-center">
          No comments yet on this post
        </div>
      )}
    </div>
  );
};

export default Comments;
