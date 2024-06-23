"use client";

import React, { useCallback, useRef, useState } from "react";
import Post from "./post";
import useSWR from "swr";
import Loading from "./loading";
import Pagination from "./pagination";

const MainContent = () => {
  const [page, setPage] = useState(1);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/posts?limit=10&skip=${page * 10 - 10}`,
    fetcher
  );
  const total = Math.round(data?.total / 10) + 1;
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {isLoading ? (
          <Loading />
        ) : (
          data?.posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        )}
      </div>
      <Pagination total={total} page={page} setPage={setPage} />
    </div>
  );
};

export default MainContent;
