import {ReactNode} from 'react';
import Header from './components/Header';
import ContentBlocks from './components/ContentBlocks';
import ContactBlock from './components/ContactBlock';

export default function Home(): ReactNode {
  return (
    <>
      <Header />
      <ContentBlocks />
      <ContactBlock />
    </>
  );
}
