const Pagination = ({
  recordsNumber,
  pageSize,
  setPageSizeHandler,
  activePage,
  setPageHandler
}) => {
  const pagesAmount = Math.ceil(recordsNumber / pageSize);
  const pages = [...Array(pagesAmount)].map((_, index) => index + 1);

  return (
    <div className="pagination">
      Page Size:
      <select onChange={e => setPageSizeHandler(e.target.value)} value={pageSize}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
      </select>
      <span>
        {pageSize * (activePage - 1) + 1} -{" "}
        {pageSize * activePage > recordsNumber ? recordsNumber : pageSize * activePage} of total{" "}
        {recordsNumber} results
      </span>
      <div className="pages">
        {pages.map(pageNumber => (
          <button
            key={pageNumber}
            disabled={pageNumber === activePage}
            onClick={() => setPageHandler(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
