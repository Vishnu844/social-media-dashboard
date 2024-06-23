"use client";

import React from "react";
import defaultUser from "../../public/images/user.png";
import Image from "next/image";
import useSWR from "swr";

const Sidebar = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/posts/tag-list`,
    fetcher
  );
  return (
    <aside className="hidden w-64 overflow-y-auto bg-white md:block">
      <div className="min-h-screen overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            {/* User profile section */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={defaultUser}
                  alt="User avatar"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  User Name
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  @username
                </p>
              </div>
            </div>
          </li>
          <li>
            {/* Trending topics section */}
            <h3 className="px-3 my-5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Trending Topics
            </h3>
            <ul className="mt-6">
              {data?.slice(0, 11).map((tag) => {
                return (
                  <li className="font-medium text-gray-200 m-3" key={tag}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
