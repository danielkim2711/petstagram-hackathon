import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { RootState } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getPosts } from '../../features/posts/postSlice';

import Spinner from '../spinner/spinner.component';

type Props = {};

const FeedList = (props: Props) => {
  const { posts, isLoading } = useAppSelector(
    (state: RootState) => state.posts
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
    console.log(posts);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='overflow-y-scroll'>
      {posts.map((post) => (
        // I'd normally put this into another component, but
        // couldn't resolve the issue with passing redux store as props
        // with TypeScript. My appologies for this smelly code.
        <div key={post._id} className='card w-96 bg-base-100 shadow-xl'>
          <figure>
            <img src={post.imageUrl} alt='post' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{post.title}</h2>
            <p>{post.body}</p>
            <div className='card-actions justify-end'>
              <Link to={`posts/${post._id}`}>
                <button className='btn btn-primary'>View</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedList;
