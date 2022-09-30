import { Routes, Route } from 'react-router-dom';
import { RootState } from './app/store';
import { useAppSelector } from './app/hooks';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import LogIn from './routes/log-in/log-in.component';
import SignUp from './routes/sign-up/sign-up.component';
import Dashboard from './routes/dashboard/dashboard.component';
import UserProfile from './routes/user-profile/user-profile.component';
import Pets from './routes/pets/pets.component';
import Pet from './routes/pet/pet.component';
import NewPet from './routes/new-pet/new-pet.component';

function App() {
  const { user } = useAppSelector((state: RootState) => state.user);

  return (
    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={user ? <Dashboard /> : <Home />} />
          <Route path='log-in' element={<LogIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='profile' element={<UserProfile />} />
          <Route path='pets' element={<Pets />} />
          <Route path='pets/:petId' element={<Pet />} />
          <Route path='new-pet' element={<NewPet />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
