import Hero from '../../components/hero/hero.component';
import Section from '../../components/section/section.component';
import Footer from '../../components/footer/footer.component';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Section />
      <Footer />
    </>
  );
};

export default Home;
