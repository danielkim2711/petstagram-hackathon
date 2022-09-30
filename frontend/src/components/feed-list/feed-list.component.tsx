import FeedItem from '../feed-item/feed-item.component';

type Props = {};

const FeedList = (props: Props) => {
  return (
    <div className='overflow-y-scroll'>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </div>
  );
};

export default FeedList;
