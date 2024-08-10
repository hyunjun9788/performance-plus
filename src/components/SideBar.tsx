'use client';

import Image from 'next/image';
import { useState } from 'react';
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
  const [isHoveringSideBar, setIsHoveringSideBar] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isClickedFoldButton, setIsClickedFoldButton] = useState(false);
  console.log(isClickedFoldButton);
  const pathname = usePathname();

  const handleSideBarMouseEnterOrLeave = () => {
    setIsHoveringSideBar(!isHoveringSideBar);
  };

  const handleButtonMouseEnterOrLeave = () => {
    setIsHoveringButton(!isHoveringButton);
  };

  const handleClickFoldButton = () => {
    setIsClickedFoldButton(true);
  };
  const isDisplayFoldBtn =
    isHoveringSideBar || isHoveringButton
      ? 'opacity-100 transition-opacity duration-200 ease-in-out'
      : 'opacity-0 transition-opacity duration-200 ease-in-out';

  const menuSections: MenuSection[] = [
    {
      title: '공연 정보',
      items: [
        { id: 1, icon: 'HomeIcon', text: '홈', path: '/' },
        { id: 2, icon: 'MusicIcon', text: '대중음악', path: '/music' },
        { id: 3, icon: 'MusicalIcon', text: '뮤지컬', path: '/musical' },
        { id: 4, icon: 'PlayIcon', text: '연극', path: '/play' },
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

  const navClassName = isClickedFoldButton
    ? 'w-[76px] p-2 duration-300'
    : 'w-60 p-4 duration-300';
  return (
    <>
      <div>
        <nav
          onMouseEnter={handleSideBarMouseEnterOrLeave}
          onMouseLeave={handleSideBarMouseEnterOrLeave}
          className={`fixed top-0 bottom-0 z-50 mt-[87px] border-r border-gray-36 text-gray-97 bg-black ${navClassName}`}
        >
          <div className="flex flex-col gap-8">
            {menuSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h3
                  className={`pl-3 text-[15px] font-bold ${isClickedFoldButton ? 'invisible h-[13px] ' : 'visible'}`}
                >
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-1 text-[17px]">
                  {section.items.map((item) => (
                    <MenuItem
                      key={item.id}
                      icon={item.icon}
                      text={item.text}
                      path={item.path}
                      isClicked={pathname === item.path}
                      isClickedFoldButton={isClickedFoldButton}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Image
            src={`${isClickedFoldButton ? '/no-fold.png' : '/fold.png'}`}
            width="20"
            height="60"
            alt="접기 버튼"
            className={`absolute top-1/2 right-[-21px] cursor-pointer ${isDisplayFoldBtn}`}
            onClick={handleClickFoldButton}
            onMouseEnter={handleButtonMouseEnterOrLeave}
            onMouseLeave={handleButtonMouseEnterOrLeave}
          />
        </nav>
      </div>
    </>
  );
};

export default SideBar;
