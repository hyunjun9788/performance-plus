'use client';

import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

const MenuList = () => {
  const activeSegment = useSelectedLayoutSegment();
  const pathname = usePathname();
  console.log(pathname);
  const BOARD_MENU = [
    { label: 'concert', menu: '콘서트', path: `${pathname}/concert` },
    { label: 'musical', menu: '뮤지컬', path: '/board/musical' },
    { label: 'play', menu: '연극', path: '/board/play' },
  ];
  return (
    <ul className="text-gray-bf flex justify-between list-none">
      {BOARD_MENU.map((v, index) => {
        return (
          <li
            key={v.label}
            className={`relative flex items-center ${
              index !== 0
                ? "before:content-['|'] before:pr-[1.3rem] before:text-gray-bf before:font-normal pl-[1.3rem]"
                : ''
            } ${activeSegment === v.label ? 'text-main font-bold' : ''}`}
          >
            <Link href={v.path}>
              <span>{v.menu}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
