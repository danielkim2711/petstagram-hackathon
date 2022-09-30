type Props = {
  title: string;
  description: string;
};

const Event = ({ title, description }: Props) => {
  return (
    <div className='card w-96 bg-slate-100 shadow-xl mb-4'>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary hover:scale-105 transition-all duration-200'>
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
