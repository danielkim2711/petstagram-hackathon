import { Link } from 'react-router-dom';

import heroImage from '../../assets/images/hero-background-image.jpg';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className='hero min-h-screen'
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold text-white'>
            Loving Pet Sitting &amp; Dog Walking
          </h1>
          <p className='mb-5 text-white text-shadow-md'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to='/sign-up'>
            <button className=' bg-[#e69765] text-white px-8 py-3 rounded-lg uppercase font-semibold hover:scale-105 transition-all duration-200'>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
