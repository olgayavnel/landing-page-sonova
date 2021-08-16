import Navbar from './components/Navbar/Navbar';
import GlobalStyle from './globalStyle';
import Hero from './components/Hero/Hero';
import Wrapper from './components/Wrapper/Wrapper';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Wrapper />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
