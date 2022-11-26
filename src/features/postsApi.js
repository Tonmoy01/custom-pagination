import axios from '../utils/axios';

export const getPosts = async (currentPage = 1) => {
  let limitPerPage = 10;

  const { data } = await axios.get(`/posts`);

  const res = await axios.get(
    `/posts/?&_page=${currentPage}&_limit=${limitPerPage}`
  );

  const pages = Math.ceil(data?.length / limitPerPage);

  return { posts: res.data, pages };
};
