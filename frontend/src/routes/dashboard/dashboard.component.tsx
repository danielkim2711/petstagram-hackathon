import PetList from '../../components/pet-list/pet-list.component';
import FeedList from '../../components/feed-list/feed-list.component';
import Friends from '../../components/friends/friends.component';
import Reminders from '../../components/reminders/reminders.component';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className='w-full max-h-screen flex justify-between p-10'>
      <PetList />
      <FeedList />
      <div className='flex flex-col justify-between'>
        <Friends />
        <Reminders />
      </div>
    </div>
  );
};

export default Dashboard;
