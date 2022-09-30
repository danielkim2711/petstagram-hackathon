import { Link } from 'react-router-dom';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';

import { useAppDispatch } from '../../app/hooks';
import { logoutUser, reset } from '../../features/user/userSlice';

type Props = {};

const SignInNavigation = (props: Props) => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
  };

  return (
    <div className='navbar bg-base-100 border-b-2'>
      <div className='flex-1'>
        <Link to='/'>
          <p className='font-["Passions_Conflict"] text-4xl'>Petstagram</p>
        </Link>
      </div>
      <div className='flex-none space-x-2'>
        <button className='btn btn-ghost btn-circle'>
          <div className='indicator'>
            <IoMdNotificationsOutline className='h-8 w-8' />
          </div>
        </button>
        <Link to='/new-post'>
          <button className='btn btn-ghost btn-circle'>
            <div className='indicator'>
              <AiOutlinePlusSquare className='h-8 w-8' />
            </div>
          </button>
        </Link>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='https://placeimg.com/80/80/people' alt='profile' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/profile' className='justify-between'>
                Profile
              </Link>
            </li>
            <li>
              <Link to='/pets' className='justify-between'>
                My Pets
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignInNavigation;
