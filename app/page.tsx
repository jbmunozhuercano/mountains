import {ReactNode} from 'react';
import Header from './components/Header';
import ContentBlocks from './components/ContentBlocks';

export default function Home(): ReactNode {
  return (
    <>
      <Header />
      <ContentBlocks />
    </>
  );
}
