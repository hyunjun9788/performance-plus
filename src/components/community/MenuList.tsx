'use client';

import Link from 'next/link';
import {
  usePathname,
  useSearchParams,
  useSelectedLayoutSegment,
} from 'next/navigation';

const MenuList = () => {
  const searchParams = useSearchParams();
  const type = searchParams?.get('type');
  const pathname = usePathname();
  console.log(pathname);
  const BOARD_MENU = [
    {
      label: 'concert',
      menu: '콘서트',
      searchParams: `type=concert`,
    },
    { label: 'musical', menu: '뮤지컬', searchParams: 'type=musical' },
    { label: 'play', menu: '연극', searchParams: 'type=play' },
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
            } ${type === v.label ? 'text-main font-bold' : ''}`}
          >
            <Link href={`${pathname}?${v.searchParams}`}>
              <span>{v.menu}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
