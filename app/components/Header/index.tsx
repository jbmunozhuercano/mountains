import {JSX} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/img/svg/logo.svg';
import Nav from '../Nav';

export default function Header(): JSX.Element {
  return (
    <header
      id='backTop'
      className='relative flex flex-col justify-between items-center flex-wrap h-screen bg-[url("/img/header_sm.jpg")] bg-cover bg-center py-8'
    >
      <Nav />
      <div className='absolute top-0 bottom-0 w-full h-screen bg-header flex flex-col justify-between items-center py-8 px-4'>
        <Link href='#'>
          <Image
            src={logo}
            priority
            alt='Mountains Logo'
            width={250}
            height={23}
          />
        </Link>

        <div className='text-white'>
          <h1>
            Llegamos
            <span className='text-primary font-bold block'>de lo más alto</span>
          </h1>
          <p className='[text-shadow:var(--text-shadow)]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            quas? Repellat expedita ex autem, iure aliquam odio a suscipit quas
            sint quia repudiandae eligendi quibusdam facere ipsam voluptatum
            labore tempora!
          </p>
        </div>
      </div>
    </header>
  );
}
