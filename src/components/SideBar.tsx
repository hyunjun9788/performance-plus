'use client';

import { IconType } from '@/types/iconType';
import { usePathname } from 'next/navigation';
import MenuItem from './MenuItem';

interface MenuItems {
  id: number;
  icon: IconType;
  text: string;
  path: string;
}

interface MenuSection {
  title: string;
  items: MenuItems[];
}

const SideBar = () => {
  const pathname = usePathname();

  const menuSections: MenuSection[] = [
    { title: '', items: [{ id: 1, icon: 'HomeIcon', text: '홈', path: '/' }] },
    {
      title: '공연 정보',
      items: [
        {
          id: 2,
          icon: 'MusicIcon',
          text: '콘서트',
          path: '/concert',
        },
        {
          id: 3,
          icon: 'MusicalIcon',
          text: '뮤지컬',
          path: '/musical',
        },
        {
          id: 4,
          icon: 'PlayIcon',
          text: '연극',
          path: '/play',
        },
      ],
    },
    {
      title: '커뮤니티',
      items: [
        { id: 5, icon: 'ReviewIcon', text: '공연 후기', path: '/review' },
        { id: 6, icon: 'BoardIcon', text: '자유게시판', path: '/board' },
      ],
    },
    {
      title: '지도',
      items: [
        { id: 7, icon: 'MapIcon', text: '공연장 위치', path: '/location' },
      ],
    },
  ];

  const isPathActive = (basePath: string) => {
    if (basePath === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(basePath);
  };
  return (
    <>
      <div>
        <nav className="fixed top-0 bottom-0 z-50 mt-[87px] border-r border-gray-36 text-gray-97 bg-black w-60 p-4 duration-300">
          <div className="flex flex-col gap-8">
            {menuSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h3 className={`pl-3 text-[15px] font-bold `}>
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-1 text-[17px]">
                  {section.items.map((item) => (
                    <MenuItem
                      key={item.id}
                      icon={item.icon}
                      text={item.text}
                      path={item.path}
                      isClicked={isPathActive(item.path)}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
