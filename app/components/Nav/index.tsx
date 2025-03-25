import {ReactNode} from 'react';
import Link from 'next/link';

export default function Nav(): ReactNode {
  return (
    <nav className='menu-bg-color fixed top-0 left-0 w-full p-1 z-10 shadow-md bg-'>
      <ul className='flex items-center justify-evenly uppercase font-bold text-white transition'>
        <li>
          <Link
            className='py-2 px-4 hover-link-color transition'
            href='#origin'
          >
            Origen
          </Link>
        </li>
        <li>
          <Link
            className='py-2 px-4 hover-link-color transition'
            href='#cultura'
          >
            Cultura
          </Link>
        </li>
        <li>
          <Link
            className='py-2 px-4 hover-link-color transition'
            href='#sostenible'
          >
            Sostenible
          </Link>
        </li>
      </ul>
    </nav>
  );
}
