'use client';
import {JSX, ReactNode} from 'react';
import {motion} from 'motion/react';
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

const variants = {
  hidden: (direction: number) => ({
    x: direction === 1 ? -100 : 100,
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1
  }
};

export default function ContentBlock({block}: Block): JSX.Element {
  const direction = block.id === 'culture' ? 1 : -1;

  return (
    <section
      id={block.id}
      className={
        block.id === 'culture'
          ? 'py-12 lg:py-36 bg-secondary text-white'
          : 'py-12 lg:py-36 bg-white text-black'
      }
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{once: true}}
        variants={variants}
        custom={direction}
        transition={{duration: 0.75}}
        className='lg:flex lg:justify-center lg:items-center md:max-w-2xl lg:max-w-5xl md:mx-auto'
      >
        <div
          className={
            block.id === 'culture'
              ? 'lg:order-2 mb-8 lg:w-2/4 lg:mb-0'
              : 'mb-8 lg:w-2/4 lg:mb-0'
          }
        >
          <Image
            className='w-full h-full object-cover'
            src={block.imgSrc}
            width={600}
            height={400}
            alt={block.altText}
          />
        </div>
        <div
          className={
            block.id === 'culture'
              ? 'lg:w-2/4 lg:px-8 lg:text-right'
              : 'lg:w-2/4 lg:px-8'
          }
        >
          <h3 className='px-4 mb-4 text-2xl md:text-4xl'>{block.title}</h3>
          <p className='px-4 lg:text-lg'>{block.text}</p>
        </div>
      </motion.div>
    </section>
  );
}
