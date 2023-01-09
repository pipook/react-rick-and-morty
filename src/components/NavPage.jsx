function NavPage({ page, setPage, lastPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <p>Page: {page}</p>
      {page + 1 > lastPage ? (
        <p>Last page.</p>
      ) : (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setPage(page + 1)}
        >
          Page {page + 1}
        </button>
      )}
    </header>
  );
}

export default NavPage;
