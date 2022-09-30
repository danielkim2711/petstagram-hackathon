import { RootState } from '../../app/store';
import { useAppSelector } from '../../app/hooks';
import { Link, Outlet } from 'react-router-dom';

import LogInNavigation from '../../components/log-in-navigation/log-in-navigation.component';

type Props = {};

const Navigation = (props: Props) => {
  const { user } = useAppSelector((state: RootState) => state.user);

  return (
    <>
      {user ? (
        <LogInNavigation />
      ) : (
        <ul className='flex space-x-10 justify-between items-center px-16 py-4 border-b-2 tracking-wider'>
          <Link to='/'>
            <p className='font-["Passions_Conflict"] text-4xl'>Petstagram</p>
          </Link>
          <div className='flex space-x-10'>
            <Link to='/log-in'>
              <li>Log in</li>
            </Link>
            <Link to='/sign-up'>
              <li>Sign up</li>
            </Link>
          </div>
        </ul>
      )}
      <Outlet />
    </>
  );
};

export default Navigation;
