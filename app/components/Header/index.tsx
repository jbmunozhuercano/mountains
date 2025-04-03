import {JSX} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/img/svg/logo.svg';
import Nav from '../Nav';

export default function Header(): JSX.Element {
  return (
    <header
      id='backTop'
      className='relative flex flex-col justify-between items-center flex-wrap h-screen bg-[url("/img/header_sm.jpg")] lg:bg-[url("/img/header_lg.jpg")] bg-cover bg-center py-8'
    >
      <Nav />
      <div className='absolute top-0 bottom-0 w-full h-screen bg-header flex flex-col justify-between items-center py-8 px-4 md:justify-center lg:pt-2'>
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

        <div className='text-white md:flex md:mb-36'>
          <h1 className='text-3xl md:max-w-sm md:text-right md:text-5xl'>
            Llegamos
            <span className='text-primary font-bold block'>de lo más alto</span>
          </h1>
          <p className='[text-shadow:var(--text-shadow)] md:ml-8 md:max-w-sm lg:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            vel libero eu ipsum auctor aliquam. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Integer
            blandit ultricies erat, non ullamcorper metus ultricies in. Ut
            consequat, nisl sed dapibus rhoncus, nulla nulla pharetra erat, nec
            faucibus erat erat in massa. Suspendisse dapibus quam quis ligula
            suscipit dictum. Integer ac fermentum nibh. Integer commodo interdum
            quam, in ullamcorper augue mollis quis.
          </p>
        </div>
      </div>
    </header>
  );
}
