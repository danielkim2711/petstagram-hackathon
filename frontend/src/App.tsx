import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import LogIn from './routes/log-in/log-in.component';
import SignUp from './routes/sign-up/sign-up.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='log-in' element={<LogIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
