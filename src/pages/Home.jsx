import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import { fetchPosts } from '../features/postsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Posts posts={posts} loading={isLoading} />
      <Pagination />
    </div>
  );
};

export default Home;
