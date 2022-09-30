import { CgSpinner } from 'react-icons/cg';

type Props = {
  maxWidth?: string;
};

const Spinner = ({ maxWidth }: Props) => {
  return (
    <div
      className={`min-h-screen w-screen ${maxWidth} flex justify-center items-center`}
    >
      <CgSpinner className='animate-spin h-10 w-10' />
    </div>
  );
};

export default Spinner;
