import sectionImageOne from '../../assets/images/section-image-one.png';
import sectionImageTwo from '../../assets/images/section-image-two.png';
import sectionImageThree from '../../assets/images/section-image-three.png';

type Props = {};

const Section = (props: Props) => {
  return (
    <section className='min-h-[50vh] flex flex-col justify-between items-center p-20'>
      <h2 className='text-4xl font-bold'>How This works</h2>
      <p className='w-[50ch] text-center mt-4 text-lg font-light'>
        Meet new people who share your interests through online and in-person
        events. It is free to create an account.
      </p>

      <div className='flex space-x-32 mt-20'>
        <div className='relative'>
          <img className='w-72 h-72' src={sectionImageOne} alt='section-one' />
          <h4 className='font-bold text-2xl text-[#388092] absolute top-64 left-12'>
            Capture moments
          </h4>
          <p className='w-[30ch] text-center absolute top-80'>
            Capture and share the wonderful moments you share with your pet and
            get your daily dose of cute, loving animals!
          </p>
        </div>
        <div className='relative'>
          <img className='w-72 h-72' src={sectionImageTwo} alt='section-two' />
          <h4 className='font-bold text-2xl text-[#388092] absolute top-64 left-12'>
            Socialise with others
          </h4>
          <p className='w-[30ch] text-center absolute top-80 left-2'>
            Join a community of pets and pet owners Keep track of all of your
            pets appointments, needs, and important dates
          </p>
        </div>
        <div className='relative'>
          <img
            className='w-72 h-72'
            src={sectionImageThree}
            alt='section-three'
          />
          <h4 className='font-bold text-2xl text-[#388092] absolute top-64 left-24'>
            Pet Book
          </h4>
          <p className='w-[20ch] text-center absolute top-80 left-12'>
            Make a page for each of your pets!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
