'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BoardPages = ({ pages }: { pages: number[] }) => {
  const pathname = usePathname();

  return (
    <>
      {pages.map((v) => (
        <li>
          <Link href={`${pathname}?page=${v}`}>{v}</Link>
        </li>
      ))}
    </>
  );
};

export default BoardPages;
