import {ReactNode} from 'react';
import Header from './components/Header';
import ContentBlocks from './components/ContentBlocks';
import ContactBlock from './components/ContactBlock';
import Footer from './components/Footer';

export default function Home(): ReactNode {
  return (
    <>
      <Header />
      <ContentBlocks />
      <ContactBlock />
      <Footer />
    </>
  );
}
