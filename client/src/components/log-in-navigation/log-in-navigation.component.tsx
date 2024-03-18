import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { logoutUser, reset } from '../../features/user/userSlice';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';

const LogInNavigation = () => {
  const { user } = useAppSelector((state: RootState) => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div className='navbar bg-white border-b-2 px-28'>
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
              <img src={user?.imageUrl} alt='profile' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52'
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

export default LogInNavigation;
