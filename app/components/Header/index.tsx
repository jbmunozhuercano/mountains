import {ReactNode} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/img/svg/logo.svg';
import Nav from '../Nav';

export default function Header(): ReactNode {
  return (
    <header className='flex justify-center px-4 py-8'>
      <Link href='#'>
        <Image
          src={logo}
          priority
          alt='Mountains Logo'
          width={250}
          height={23}
        />
      </Link>
      <Nav />
    </header>
  );
}
