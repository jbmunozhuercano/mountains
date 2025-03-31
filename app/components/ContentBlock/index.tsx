import {JSX, ReactNode} from 'react';
import Image from 'next/image';

interface ContentBlockProps {
  id: string;
  imgSrc: string;
  altText: string;
  title: ReactNode;
  text: string;
}

interface Block {
  block: ContentBlockProps;
}

export default function ContentBlock({block}: Block): JSX.Element {
  return (
    <section
      id={block.id}
      className={
        block.id === 'culture' ? 'py-12 bg-secondary text-white' : 'py-12'
      }
    >
      <Image
        className='mb-8'
        src={block.imgSrc}
        width={600}
        height={400}
        alt={block.altText}
      />
      <h3 className='px-4'>{block.title}</h3>
      <p className='px-4'>{block.text}</p>
    </section>
  );
}
