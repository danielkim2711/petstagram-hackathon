// Components
import { CgSpinner } from 'react-icons/cg';

// Types
import type { SpinnerProps } from './types/SpinnerProps';

export const Spinner = ({ maxWidth }: SpinnerProps) => {
  return (
    <div className={`min-h-screen w-screen ${maxWidth} flex justify-center items-center`}>
      <CgSpinner className='animate-spin h-10 w-10' />
    </div>
  );
};
