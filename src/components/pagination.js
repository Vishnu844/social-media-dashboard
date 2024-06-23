import React from "react";

const Pagination = ({ total, page, setPage }) => {
  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= total && selectedPage !== page) {
      setPage(selectedPage);
    }
  };

  const maxPagesToShow = 10;
  let startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  let endPage = startPage + maxPagesToShow - 1;

  if (endPage > total) {
    endPage = total;
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const pages = [...Array(endPage - startPage + 1)].map(
    (_, i) => startPage + i
  );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {total > 0 && (
        <div className="p-2.5 my-4 flex justify-center overflow-x-auto text-black">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={
              page > 1 ? "py-4 px-5 rounded cursor-pointer" : "opacity-0"
            }
          >
            ◀
          </span>

          {pages.map((pageNumber) => {
            return (
              <span
                key={pageNumber}
                className={`${
                  page === pageNumber ? "bg-slate-500 text-white" : ""
                } py-4 px-5 rounded-md cursor-pointer`}
                onClick={() => selectPageHandler(pageNumber)}
              >
                {pageNumber}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={
              page < total ? "py-4 px-5 rounded-sm cursor-pointer" : "opacity-0"
            }
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
