import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/postsSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { pages } = useSelector((state) => state.posts);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchPosts(pageNumber));
  }, [dispatch, pageNumber]);

  const paginate = (pageNum) => {
    setPageNumber(pageNum);
  };

  const prevPage = () => {
    setPageNumber((prev) => prev - 1);
  };

  const nextPage = () => {
    setPageNumber((prev) => prev + 1);
  };

  return (
    <nav>
      <ul className='pagination'>
        <button onClick={prevPage}>Prev</button>
        {[...Array(pages)].map((_, index) => {
          let pageNumber = index + 1;
          return (
            <li key={index} className='page-item'>
              <a
                href='!#'
                className='page-link'
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          );
        })}
        <button onClick={nextPage}>Next</button>
      </ul>
    </nav>
  );
};

export default Pagination;
