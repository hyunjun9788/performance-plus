import { Icon } from '../common/Icon';
import ImageComponent from '../common/ImageComponent';

const BoardList = () => {
  return (
    <li className="flex justify-between items-center p-3 border-b border-white">
      <div className="flex gap-5">
        <ImageComponent type="board" src="http://via.placeholder.com/180x244" />
        <div className="flex flex-col justify-between text-white">
          <div className="max-w-[500px] text-white truncate">
            [부산공연/무료] 8월 해질녘 콘서트 - 여름의 끝 by 겸(GYE0M)
          </div>
          <div className="flex gap-2">
            <div>닉네임</div>
            <div>2024-07-31</div>
            <div>조회수</div>
            <div className="flex gap-1">
              <Icon name="ReviewIcon" className="w-3 fill-gray-97" />
              <div>3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Icon name="BoardIcon" className="w-4 fill-gray-97" />
        <div className="text-main">3</div>
      </div>
    </li>
  );
};

export default BoardList;
