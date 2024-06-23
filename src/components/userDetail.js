import React from "react";
import useSWR from "swr";
import defaultUser from "../../public/images/user.png";

const UserDetail = ({ userId }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://dummyjson.com/users/${userId}`,
    fetcher
  );
  return (
    <div className="flex items-center gap-4 mb-3">
      <img
        className="h-5 w-5 rounded-full"
        src={data?.image || defaultUser}
        alt={data?.username}
      />
      <p className="text-gray-500">{data?.username}</p>
    </div>
  );
};

export default UserDetail;
