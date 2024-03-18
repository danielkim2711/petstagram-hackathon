type Props = {
  imageUrl: string;
};

const FriendCard = ({ imageUrl }: Props) => {
  return (
    <div className='avatar'>
      <div className='w-24 rounded-full bg-gradient-to-r p-[4px] from-[#f4fa4e] to-[#ea2aff]'>
        <img className='rounded-full' src={imageUrl} alt='friend' />
      </div>
    </div>
  );
};

export default FriendCard;
