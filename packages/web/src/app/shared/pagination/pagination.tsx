import React from "react";
import { PaginationLink } from "../paginationLink/paginationLink";

export const Pagination = ({
  currentPage,
  pagesNumber,
}: {
  currentPage: number;
  pagesNumber: number;
}) => {
  const prevPageUrl = {
    search: new URLSearchParams({
      page: (currentPage - 1).toString(),
    }).toString(),
  };

  const nextPageUrl = {
    search: new URLSearchParams({
      page: (currentPage + 1).toString(),
    }).toString(),
  };

  const pagesArray = new Array(pagesNumber).fill(0);

  return (
    <>
      <PaginationLink href={prevPageUrl}>Previous</PaginationLink>
      {pagesArray.map((_, index) => {
        const pageUrl = {
          search: new URLSearchParams({
            page: (index + 1).toString(),
          }).toString(),
        };
        return (
          <PaginationLink key={index} href={pageUrl}>
            {index + 1}
          </PaginationLink>
        );
      })}
      <PaginationLink href={nextPageUrl}>Next</PaginationLink>
    </>
  );
};
