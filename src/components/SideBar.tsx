import MenuItem from './MenuItem';

const SideBar = () => {
  return (
    <div>
      <aside className="fixed top-0 bottom-0 z-50 w-60 p-4 mt-[87px] border-r border-gray-36 text-gray-97">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="pl-3 text-[15px] font-bold">공연 정보</h3>
            <ul className="flex flex-col gap-1 text-[17px]">
              <MenuItem icon="HomeIcon" text="홈" />
              <MenuItem icon="MusicIcon" text="대중음악" />
              <MenuItem icon="MusicalIcon" text="뮤지컬" />
              <MenuItem icon="PlayIcon" text="연극" />
            </ul>
          </div>
          <div>
            <h3 className="text-[15px] font-bold">커뮤니티</h3>
            <ul className="text-[17px]">
              <li>공연 후기</li>
              <li>자유게시판</li>
            </ul>
          </div>
          <div />
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
