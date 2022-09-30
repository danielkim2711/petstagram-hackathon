import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { registerUser } from '../../features/user/userSlice';
import { toast } from 'react-toastify';

type Props = {};

const defaultFormFields = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = (props: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      resetFormFields();
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    dispatch(registerUser(userData));
    navigate('/');
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold'>Sign up</h1>
          <p className='text-lg py-6 tracking-wider'>
            Already a member?{' '}
            <Link to='/log-in'>
              <span className='text-[#008294]'>Log in</span>
            </Link>
          </p>
        </div>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                className='input input-bordered'
                type='text'
                name='name'
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                className='input input-bordered'
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                className='input input-bordered'
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <input
                className='input input-bordered'
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button
                className='btn btn-primary hover:bg-black hover:text-white transition-all duration-300'
                type='submit'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
