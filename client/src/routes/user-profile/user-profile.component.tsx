import { useState, SyntheticEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { updateUser, deleteUser } from '../../features/user/userSlice';

const defaultFormFields = {
  name: '',
  imageUrl: '',
  email: '',
};

const UserProfile = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, imageUrl, email } = formFields;
  const { user } = useAppSelector((state: RootState) => state.user);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const userData = {
      name,
      imageUrl,
      email,
    };

    const userId = user?._id;

    dispatch(updateUser({ userData, userId }));
    navigate('/');
  };

  const deleteUserHandler = () => {
    if (window.confirm('Are you sure you want to delete user?')) {
      dispatch(deleteUser(user?._id));
      navigate('/');
    }
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <h1 className='text-xl font-bold text-center mt-4'>Edit Profile</h1>
          <img
            src={user?.imageUrl}
            alt=''
            className='h-20 w-20 rounded-full self-center mt-4'
          />
          <form className='card-body' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Username</span>
              </label>
              <input
                className='input input-bordered'
                type='text'
                name='name'
                value={name}
                placeholder={user?.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Image Url</span>
              </label>
              <input
                className='input input-bordered'
                type='text'
                name='imageUrl'
                onChange={handleChange}
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
                placeholder={user?.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button
                className={`${
                  name && email ? 'bg-[#0095f6]' : 'bg-[#c0dffd]'
                } border-none text-white text-sm rounded-md p-4 uppercase font-semibold`}
                type='submit'
              >
                Submit
              </button>
            </div>
            <div className='form-control mt-2'>
              <button
                className='bg-red-500 border-none text-white text-sm rounded-md p-4 uppercase font-semibold'
                type='button'
                onClick={deleteUserHandler}
              >
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
