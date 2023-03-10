import { usePostsContext } from '../context/posts/posts.context';

const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = usePostsContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page - 1;
    changePage(newPage);
    if (newPage < numOfPages) {
      newPage = numOfPages;
    }
  };

  const prevPage = () => {
    let newPage = page + 1;
    changePage(newPage);
    if (newPage > numOfPages) {
      newPage = 1;
    }
  };

  return (
    <div className='flex justify-end m-5'>
      <button className='btn' onClick={prevPage}>
        prev
      </button>

      <div className='btn-container'>
        {pages.map((pageNumber, index) => {
          return (
            <button
              key={index}
              type='button'
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}>
              {pageNumber}
              key={pageNumber}
              onClick={() => changePage(page)}
            </button>
          );
        })}
      </div>
      <button className='btn' onClick={nextPage}>
        next
      </button>
    </div>
  );
};

export default PageBtnContainer;
