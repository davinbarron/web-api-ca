import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxPage = Math.min(totalPages, 100);
    
  const handleFirstPage = () => onPageChange(1);
  const handlePreviousPage = () => onPageChange(currentPage - 1);
  const handleNextPage = () => onPageChange(currentPage + 1);
  const handleLastPage = () => onPageChange(totalPages);

  return (
    <ButtonGroup variant="text" aria-label="pagination">
      <Button onClick={handleFirstPage} disabled={currentPage === 1}>
        First
      </Button>
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </Button>
      <Button disabled>{currentPage}</Button>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </Button>
      <Button onClick={handleLastPage} disabled={currentPage === totalPages}>
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
