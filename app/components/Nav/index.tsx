import {ReactNode} from 'react';
import Link from 'next/link';

export default function Nav(): ReactNode {
  return (
    <nav className='bg-[var(--menu-bg-color)] fixed top-0 left-0 w-full p-1 z-10 shadow-md'>
      <ul className='flex items-center justify-between uppercase font-bold text-white transition'>
        <li>
          <Link
            className='py-2 px-4 transition hover:text-[var(--secondary)] hover:[text-shadow:2px_2px_3px_rgba(0,0,0,0.5)]'
            href='#origin'
          >
            Origen
          </Link>
        </li>
        <li>
          <Link
            className='py-2 px-4 transition hover:text-[var(--secondary)] hover:[text-shadow:2px_2px_3px_rgba(0,0,0,0.5)]'
            href='#cultura'
          >
            Cultura
          </Link>
        </li>
        <li>
          <Link
            className='py-2 px-4 transition hover:text-[var(--secondary)] hover:[text-shadow:2px_2px_3px_rgba(0,0,0,0.5)]'
            href='#sostenible'
          >
            Sostenible
          </Link>
        </li>
      </ul>
    </nav>
  );
}
