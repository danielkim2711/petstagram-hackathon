type Props = {};

const FeedItem = (props: Props) => {
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <h1 className='text-2xl text-center'>Feed</h1>
      <figure>
        <img src='https://placeimg.com/400/225/arch' alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
