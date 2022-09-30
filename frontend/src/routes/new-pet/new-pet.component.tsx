import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { createPet } from '../../features/pets/petSlice';

type Props = {};

const defaultFormFields = {
  name: '',
  age: 0,
  type: '',
};

const NewPet = (props: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, age, type } = formFields;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const petData = {
      name,
      age,
      type,
    };

    dispatch(createPet(petData));
    navigate('/');
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <h1 className='text-xl font-bold text-center mt-4'>Create New Pet</h1>
          <img
            src='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            alt=''
            className='h-20 w-20 rounded-full self-center mt-4'
          />
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
                <span className='label-text'>Age</span>
              </label>
              <input
                className='input input-bordered'
                type='number'
                name='age'
                value={age}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Type</span>
              </label>
              <input
                className='input input-bordered'
                type='text'
                name='type'
                value={type}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-control mt-6'>
              <button
                className={`${
                  name || age || type ? 'bg-[#0095f6]' : 'bg-[#c0dffd]'
                } border-none text-white text-sm rounded-md p-4 uppercase font-semibold`}
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPet;
