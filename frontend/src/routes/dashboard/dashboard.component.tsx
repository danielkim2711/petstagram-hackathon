import PetList from '../../components/pet-list/pet-list.component';
import Feed from '../../components/feed/feed.component';
import Friends from '../../components/friends/friends.component';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className='w-full max-h-screen flex justify-between p-10'>
      <PetList />
      <Feed />
      <Friends />
    </div>
  );
};

export default Dashboard;
