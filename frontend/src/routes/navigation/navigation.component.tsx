import { RootState } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Link, Outlet } from 'react-router-dom';
import { logoutUser, reset } from '../../features/user/userSlice';

type Props = {};

const Navigation = (props: Props) => {
  const { user } = useAppSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(reset);
  };

  return (
    <>
      <ul className='flex space-x-10 justify-between py-4 px-10 border-b-2'>
        <Link to='/'>Logo</Link>
        <div className='flex space-x-10'>
          {user ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <Link to='/log-in'>
              <li>Log In</li>
            </Link>
          )}
          <Link to='/sign-up'>
            <li>Sign Up</li>
          </Link>
        </div>
      </ul>
      <Outlet />
    </>
  );
};

export default Navigation;
