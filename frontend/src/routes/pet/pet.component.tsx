import { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getPet, updatePet, deletePet } from '../../features/pets/petSlice';

type Props = {};

const defaultFormFields = {
  imageUrl: '',
  name: '',
  age: 0,
  type: '',
};

const Pet = (props: Props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { imageUrl, name, age, type } = formFields;
  const { pet } = useAppSelector((state: RootState) => state.pets);

  const { petId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPet(petId));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const petData = {
      imageUrl,
      name,
      age,
      type,
    };

    dispatch(updatePet({ petData, petId }));
    navigate('/');
  };

  const deletePetHandler = () => {
    if (window.confirm('Are you sure you want to delete this pet?')) {
      dispatch(deletePet(petId));
      navigate('/');
    }
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <h1 className='text-xl font-bold text-center mt-4'>
            Edit Pet Profile
          </h1>
          <img
            src={pet.imageUrl}
            alt=''
            className='h-20 w-20 rounded-full self-center mt-4'
          />
          <form className='card-body' onSubmit={handleSubmit}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Image Url</span>
              </label>
              <input
                className='input input-bordered'
                type='text'
                name='imageUrl'
                value={imageUrl}
                onChange={handleChange}
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                className='input input-bordered'
                type='text'
                name='name'
                value={name}
                placeholder={pet.name}
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
                placeholder={pet.age?.toString()}
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
                placeholder={pet.type}
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
            <div className='form-control mt-2'>
              <button
                className='bg-red-500 border-none text-white text-sm rounded-md p-4 uppercase font-semibold'
                type='button'
                onClick={deletePetHandler}
              >
                Delete Pet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pet;
