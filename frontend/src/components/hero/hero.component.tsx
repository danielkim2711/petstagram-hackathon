import { Link } from 'react-router-dom';

import heroImage from '../../assets/images/hero-background-image.jpg';

const Hero = () => {
  return (
    <main
      className='hero min-h-[80vh]'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold text-slate-100 drop-shadow-lg'>
            Loving Pet Sitting &amp; Dog Walking
          </h1>
          <p className='mb-5 text-slate-200 drop-shadow-xl'>
            We can help you to create a community for pets and pet owners. Help
            meetups, set reminders and manage your pets.
          </p>
          <Link to='/sign-up'>
            <button className=' bg-[#e69765] text-white px-8 py-3 rounded-lg uppercase font-semibold shadow-lg hover:scale-105 transition-all duration-200'>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
