import { Icon } from './Icon';

const SideBar = () => {
  return (
    <div>
      <aside className="fixed top-0 bottom-0 z-50 w-60 p-4 mt-[87px] border-r border-gray-36 text-gray-97 ">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="pl-3 text-[15px] font-bold">공연 정보</h3>
            <ul className="flex flex-col gap-1 text-[17px]">
              <li className="px-3 py-2">
                <button
                  type="button"
                  className="w-full flex items-center gap-4"
                >
                  <Icon name="HomeIcon" className="fill-gray-97 w-[20px]" />홈
                </button>
              </li>
              <li className="px-3 py-2">
                <button
                  type="button"
                  className="w-full flex items-center gap-4"
                >
                  <Icon name="MusicIcon" className="fill-gray-97 w-[20px]" />
                  대중음악
                </button>
              </li>
              <li className="px-3 py-2">
                <button
                  type="button"
                  className="w-full flex items-center gap-4"
                >
                  <Icon name="MusicalIcon" className="fill-gray-97 w-[20px]" />
                  뮤지컬
                </button>
              </li>
              <li className="px-3 py-2">
                <button
                  type="button"
                  className="w-full flex items-center gap-4"
                >
                  <Icon name="PlayIcon" className="fill-gray-97 w-[20px]" />
                  연극
                </button>
              </li>
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
