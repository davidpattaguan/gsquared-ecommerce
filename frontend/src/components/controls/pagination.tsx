import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page.toString());
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <div className="flex justify-center space-x-2 mt-4">
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1 || totalPages <= 1}
      >
        Previous
      </Button>
      <span className="flex items-center px-4">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages <= 1}
      >
        Next
      </Button>
    </div>
  );
}
