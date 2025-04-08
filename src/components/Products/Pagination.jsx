import React, { useEffect } from "react";

export default function Pagination({ postPerPage, totalData, setCurrentPage, currentPage }) {
  const pages = Array.from({ length: Math.ceil(totalData / postPerPage) }, (_, i) => i + 1);

  const handlePagination = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center w-full gap-4 mt-16">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePagination(page)}
          className={`text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 hover:scale-110 transition-all ${
            page === currentPage ? "bg-red-700 scale-110" : ""
          }`}
          aria-current={page === currentPage ? "page" : undefined}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

