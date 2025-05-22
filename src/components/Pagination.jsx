import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        type="button"
        aria-label="prev"
        className="rounded-full bg-slate-200/50 text-lg cursor-pointer"
      >
        <GrFormPrevious />
      </button>
      <div className="flex items-center gap-2 text-sm font-medium">
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() =>
              setCurrentPage(index + 1)
            }
            key={index}
            className={`h-10 w-10 flex items-center justify-center aspect-square cursor-pointer ${
              currentPage === index + 1 &&
              "text-indigo-500 border border-indigo-200 rounded-full"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        type="button"
        aria-label="next"
        className="rounded-full bg-slate-200/50 text-lg cursor-pointer"
      >
        <MdNavigateNext />
      </button>
    </div>
  );
};

export default Pagination;
