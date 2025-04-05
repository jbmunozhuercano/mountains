import {JSX} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/img/svg/logo.svg';

export default function Footer(): JSX.Element {
  return (
    <footer className='bg-secondary text-white py-4 flex flex-col justify-center items-center'>
      <Link href='#'>
        <Image
          src={logo}
          priority
          alt='Mountains Logo'
          width={230}
          height={20}
          className='mb-2'
        />
      </Link>
      <p className='flex items-center gap-1 text-sm'>
        <FontAwesomeIcon icon={faCopyright} className='w-4' />
        Todos los derechos reservados
      </p>
      <Link
        href='#backTop'
        className='text-white bg-menu p-3 fixed bottom-4 right-4 rounded-sm lg:hidden'
      >
        <FontAwesomeIcon icon={faAngleUp} className='w-4' />
      </Link>
    </footer>
  );
}
