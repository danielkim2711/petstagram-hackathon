import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getPets } from '../../features/pets/petSlice';
import { Spinner } from '../../components/Spinner/Spinner';
import { AiOutlinePlusSquare } from 'react-icons/ai';

const Pets = () => {
  const { pets, isLoading } = useAppSelector((state: RootState) => state.pets);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='relative grid grid-cols-3 mt-20'>
      {pets.length > 0 ? (
        pets.map((pet) => (
          <div key={pet._id} className='hero bg-base-200'>
            <div className='hero-content flex-col mb-10'>
              <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
                <h1 className='text-xl font-bold text-center mt-4'>Edit Pet Profile</h1>
                <img src={pet.imageUrl} alt='' className='h-20 w-20 rounded-full self-center mt-4' />
                <div className='card-body'>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Pet Name</span>
                    </label>
                    <input className='input input-bordered' type='name' value={pet.name} readOnly />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Age</span>
                    </label>
                    <input className='input input-bordered' type='text' value={pet.age} readOnly />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Type</span>
                    </label>
                    <input className='input input-bordered' type='text' value={pet.type} readOnly />
                  </div>
                  <Link to={`/pets/${pet._id}`} className='form-control mt-6'>
                    <button
                      className={
                        'bg-[#0095f6] border-none text-white text-sm rounded-md p-4 uppercase font-semibold'
                      }
                      type='submit'
                    >
                      Edit Information
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='w-screen min-h-screen flex justify-center items-center'>
          <h1 className='text-4xl'>No Pet Yet</h1>
        </div>
      )}
      <Link to='/new-pet'>
        <AiOutlinePlusSquare className='absolute h-20 w-20 bottom-10 right-10 cursor-pointer' />
      </Link>
    </div>
  );
};

export default Pets;
