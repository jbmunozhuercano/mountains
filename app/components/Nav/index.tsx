import {ReactNode} from 'react';
import Link from 'next/link';

export default function Nav(): ReactNode {
  return (
    <nav className='bg-menu fixed top-0 left-0 right-0 p-1 z-10 shadow-md lg:left-auto lg:bottom-0 lg:translate-x-[85%] transition-all duration-500 lg:hover:translate-x-0'>
      <span className='uppercase font-bold text-white rotate-90 absolute top-3 left-[-10px] hidden lg:block'>
        Menú
      </span>
      <ul className='flex items-center justify-between uppercase font-bold text-white transition lg:flex-col lg:h-full md:justify-center lg:items-end lg:gap-24'>
        <li>
          <Link
            className='py-2 px-4 transition hover:text-secondary hover:[text-shadow:var(--text-shadow)]'
            href='#origin'
          >
            Origen
          </Link>
        </li>
        <li>
          <Link
            className='py-2 px-4 transition hover:text-secondary hover:[text-shadow:var(--text-shadow)]'
            href='#culture'
          >
            Cultura
          </Link>
        </li>
        <li>
          <Link
            className='py-2 px-4 transition hover:text-secondary hover:[text-shadow:var(--text-shadow)]'
            href='#sostenible'
          >
            Sostenible
          </Link>
        </li>
      </ul>
    </nav>
  );
}
