import {ReactNode} from 'react';
import Link from 'next/link';

export default function Nav(): ReactNode {
  return (
    <nav className='bg-menu fixed top-0 left-0 w-full p-1 z-10 shadow-md'>
      <ul className='flex items-center justify-between uppercase font-bold text-white transition'>
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
            href='#cultura'
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
