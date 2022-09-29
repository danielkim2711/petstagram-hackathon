import { Link, Outlet } from 'react-router-dom';

type Props = {};

const Navigation = (props: Props) => {
  return (
    <>
      <ul className='flex space-x-10 justify-between py-4 px-10 border-b-2'>
        <Link to='/'>Logo</Link>
        <div className='flex space-x-10'>
          <Link to='/log-in'>
            <li>Log In</li>
          </Link>
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
