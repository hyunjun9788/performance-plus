'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const MenuList = () => {
  const activeSegment = useSelectedLayoutSegment();
  const BOARD_MENU = [
    { label: 'concert', menu: '콘서트', path: '/board/concert' },
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
                ? "before:content-['|'] before:pr-[1.3rem] before:text-gray-bf before:font-normal"
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
