import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const defaultFormFields = {
  email: '',
  password: '',
};

const LogIn = (props: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    console.log(userData);
    resetFormFields();
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold'>Log In</h1>
          <p className='text-lg py-6 tracking-wider'>
            Not a member yet?{' '}
            <Link to='/sign-up'>
              <span className='text-[#008294]'>Sign up</span>
            </Link>
          </p>
        </div>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <form className='card-body' onSubmit={handleSubmit}>
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
              {/* <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label> */}
            </div>
            <div className='form-control mt-6'>
              <button
                className='btn btn-primary hover:bg-black hover:text-white transition-all duration-300'
                type='submit'
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
