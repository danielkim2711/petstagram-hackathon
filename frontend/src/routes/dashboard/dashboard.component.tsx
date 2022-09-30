import PetList from '../../components/pet-list/pet-list.component';
import FeedList from '../../components/feed-list/feed-list.component';
import Friends from '../../components/friends/friends.component';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className='w-full max-h-screen flex justify-between p-10'>
      <PetList />
      <FeedList />
      <Friends />
    </div>
  );
};

export default Dashboard;
