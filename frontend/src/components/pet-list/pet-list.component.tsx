import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RootState } from '../../app/store';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getPets } from '../../features/pets/petSlice';
import Spinner from '../../components/spinner/spinner.component';

type Props = {};

const PetList = (props: Props) => {
  const { pets, isLoading } = useAppSelector((state: RootState) => state.pets);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPets());
  }, []);

  if (isLoading) {
    return <Spinner maxWidth='max-w-sm' />;
  }

  return (
    <div className='overflow-y-scroll'>
      <h1 className='text-center text-2xl'>My Pets</h1>
      {pets.length > 0 ? (
        pets.map((pet) => (
          // I'd normally put this into another component, but
          // couldn't resolve the issue with passing redux store as props
          // with TypeScript. My appologies for this smelly code.
          <Link key={pet._id} to={`/pets/${pet._id}`}>
            <div className='hero bg-base-200'>
              <div className='hero-content flex-col'>
                <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
                  <img
                    src='https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                    alt=''
                    className='h-20 w-20 rounded-full self-center mt-4 object-cover'
                  />
                  <div className='card-body mx-auto'>
                    <div className='flex space-x-10'>
                      <h1>Name</h1>
                      <p>{pet.name}</p>
                    </div>
                    <div className='flex space-x-10'>
                      <h1>Age</h1>
                      <p>{pet.age}</p>
                    </div>
                    <div className='flex space-x-10'>
                      <h1>Type</h1>
                      <p>{pet.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <div className='min-h-screen flex flex-col justify-center items-center'>
          <h1 className='mb-4'>You don't have any pets yet</h1>
          <Link to='/new-pet'>
            <button
              className='btn btn-primary hover:bg-black hover:text-white transition-all duration-300'
              type='submit'
            >
              Add Pet
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PetList;
