import PetCard from '../pet-card/pet-card.component';

type Props = {};

const PetList = (props: Props) => {
  return (
    <div>
      <h1>My Pets</h1>
      <PetCard />
    </div>
  );
};

export default PetList;
