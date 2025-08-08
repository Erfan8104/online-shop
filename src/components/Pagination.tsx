"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    router.push(`/store?page=${page}&per_page=5`);
  };
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
export default Pagination;
