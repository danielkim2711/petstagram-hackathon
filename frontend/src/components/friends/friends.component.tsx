import FriendCard from '../friend-card.component.tsx/friend-card.component';

type Props = {};

const Friends = (props: Props) => {
  return (
    <div>
      <h1 className='text-center text-2xl tracking-widest'>Friends</h1>
      <div className='grid grid-cols-3 justify-items-center items-center gap-4 mt-2'>
        <FriendCard imageUrl='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80' />
        <FriendCard imageUrl='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80' />
        <FriendCard imageUrl='https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80' />
      </div>
    </div>
  );
};

export default Friends;
