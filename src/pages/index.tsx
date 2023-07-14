import {FC, memo} from 'react';
import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo


const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Footer />
    </Page>
  );
});

export default Home;
