import PetList from '../../components/pet-list/pet-list.component';
import FeedList from '../../components/feed-list/feed-list.component';
import Friends from '../../components/friends/friends.component';
import Reminders from '../../components/reminders/reminders.component';
import Events from '../../components/events/events.component';

const Dashboard = () => {
  return (
    <div className='w-full max-h-screen flex justify-between p-10'>
      <PetList />
      <FeedList />
      <div className='flex flex-col justify-between overflow-y-scroll space-y-10'>
        <Friends />
        <Reminders />
        <Events />
      </div>
    </div>
  );
};

export default Dashboard;
