// import { useState } from 'react';
import BoardList from './BoardList';
import { Icon } from '../common/Icon';
import BoardPages from './BoardPages';
import { usePathname } from 'next/navigation';
import WriteButtonBox from './WriteButtonBox';

const Board = () => {
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const limit = 10;
  // const offset = (currentPage - 1) * limit;
  // const totalDatas = DATA.length;
  // let numPages. = Math.ceil(totalDatas / 10);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const firstPageNum = currentPage - ((currentPage - 1) % 10);
  // let lastPageNum = firstNum + 9;

  // for (let i = numPages; i > 0; i--) {
  //     pages.push(i);
  //   }

  // const onClickPageHandler = (page: number) => {
  //   setCurrentPage(page);
  // };

  // const prevPageButtonHandler = () => {
  //   if (firstNum === 1) return;
  //   setCurrentPage(firstNum - 10);
  // };

  // const nextPageButtonHandler = () => {
  //   if (numPages === lastNum) return;
  //   if (numPages < lastNum) return;
  //   setCurrentPage(lastNum + 1);
  // };
  return (
    <div className="w-full border-t-2 border-white">
      <ul>
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
        <BoardList />
      </ul>
      <WriteButtonBox />
      <nav className="relative flex justify-center text-white">
        <ul className="absolute top-6 flex items-center gap-2">
          <li>
            <Icon name="LeftIcon" className="w-[13px] fill-white" />
          </li>
          <BoardPages pages={pages} />
          <li>
            <Icon name="RightIcon" className="w-[13px] fill-white" />
          </li>
        </ul>
      </nav>
      <div />
    </div>
  );
};
export default Board;
