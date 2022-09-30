import Event from '../event/event.component';

type Props = {};

const Events = (props: Props) => {
  return (
    <div>
      <h1 className='text-center text-2xl tracking-widest mb-4'>Events</h1>
      <Event
        title='Dog Competition in Auckland'
        description="Let's see whose dog can chew more!"
      />
      <Event
        title='Summer event - water park 2022'
        description='Bring your pets and have a splash'
      />
    </div>
  );
};

export default Events;
