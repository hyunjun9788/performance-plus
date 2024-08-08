'use client';

import Image from 'next/image';
import { useState } from 'react';
import MenuItem from './MenuItem';

const SideBar = () => {
  const [isHoveringSideBar, setIsHoveringSideBar] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  const handleSideBarMouseOver = () => {
    setIsHoveringSideBar(true);
  };

  const handleSideBarMouseOut = () => {
    setIsHoveringSideBar(false);
  };

  const handleButtonMouseEnter = () => {
    setIsHoveringButton(true);
  };

  const handleButtonMouseLeave = () => {
    setIsHoveringButton(false);
  };

  const isDisplayFoldBtn =
    isHoveringSideBar || isHoveringButton ? '' : 'invisible';

  return (
    <>
      <div>
        <nav
          onMouseOver={handleSideBarMouseOver}
          onMouseOut={handleSideBarMouseOut}
          className="fixed top-0 bottom-0 z-50 w-60 p-4 mt-[87px] border-r border-gray-36 text-gray-97"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="pl-3 text-[15px] font-bold">공연 정보</h3>
              <ul className="flex flex-col gap-1 text-[17px]">
                <MenuItem icon="HomeIcon" text="홈" />
                <MenuItem icon="MusicIcon" text="대중음악" />
                <MenuItem icon="MusicalIcon" text="뮤지컬" />
                <MenuItem icon="PlayIcon" text="연극" />
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="pl-3 text-[15px] font-bold">커뮤니티</h3>
              <ul className="flex flex-col gap-1 text-[17px]">
                <MenuItem icon="ReviewIcon" text="공연 후기" />
                <MenuItem icon="NoticeIcon" text="자유게시판" />
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="pl-3 text-[15px] font-bold">지도</h3>
              <ul className="flex flex-col gap-1 text-[17px]">
                <MenuItem icon="MapIcon" text="공연장 위치" />
              </ul>
            </div>
            <div />
          </div>
        </nav>
      </div>
      <Image
        src="/fold.png"
        width="20"
        height="60"
        alt="접기 버튼"
        className={`absolute top-1/2 left-60 cursor-pointer ${isDisplayFoldBtn}`}
        onMouseEnter={handleButtonMouseEnter}
        onMouseLeave={handleButtonMouseLeave}
      />
    </>
  );
};

export default SideBar;
