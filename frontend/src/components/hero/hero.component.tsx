type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='hero min-h-screen'>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>
            Loving Pet Sitting &amp; Dog Walking
          </h1>
          <p className='mb-5'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className=' bg-[#e69765] text-white px-4 py-3 rounded-lg uppercase font-semibold hover:scale-105 transition-all duration-200'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
