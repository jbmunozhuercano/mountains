'use client';
import {JSX} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {motion, useScroll} from 'motion/react';
import logo from '../../../public/img/svg/logo.svg';
import Nav from '../Nav';

export default function Header(): JSX.Element {
  const {scrollYProgress} = useScroll();

  return (
    <>
      <motion.div
        id='scroll-indicator'
        className='fixed top-0 z-11 left-0 right-0 h-1 bg-[#ff0088] origin-left'
        style={{
          scaleX: scrollYProgress
        }}
      />
      <header
        id='backTop'
        className='relative flex flex-col justify-between items-center flex-wrap h-screen bg-[url("/img/header_sm.jpg")] lg:bg-[url("/img/header_lg.jpg")] lg:max-h-[1080px] bg-cover bg-center py-8 overflow-hidden'
      >
        <Nav />
        <div className='absolute top-0 bottom-0 w-full h-screen min-h-fit bg-header flex flex-col justify-between items-center py-8 px-4 md:justify-center lg:pt-2'>
          <Link href='#'>
            <Image
              src={logo}
              priority
              alt='Mountains Logo'
              className='w-64 md:w-108 absolute top-12 left-1/2 -translate-x-1/2 lg:top-2'
              width={250}
              height={23}
            />
          </Link>

          <motion.div
            initial={{y: 300, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.75}}
            className='text-white md:flex md:mb-36'
          >
            <h1 className='text-3xl md:max-w-sm md:text-right md:text-5xl'>
              Llegamos
              <span className='text-primary font-bold block'>
                de lo más alto
              </span>
            </h1>
            <p className='[text-shadow:var(--text-shadow)] md:ml-8 md:max-w-sm lg:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vel libero eu ipsum auctor aliquam. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Integer
              blandit ultricies erat, non ullamcorper metus ultricies in. Ut
              consequat, nisl sed dapibus rhoncus, nulla nulla pharetra erat,
              nec faucibus erat erat in massa. Suspendisse dapibus quam quis
              ligula suscipit dictum. Integer ac fermentum nibh. Integer commodo
              interdum quam, in ullamcorper augue mollis quis.
            </p>
          </motion.div>
        </div>
      </header>
    </>
  );
}
