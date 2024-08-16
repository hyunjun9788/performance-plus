'use client';

import { useState } from 'react';
import { Icon } from '../common/Icon';
import Button, { ButtonKind } from '../common/Button';

const HeartAndCommentCountBox = () => {
  const [isClickedHeart, setIsClickedHeart] = useState(false);
  const handleClickHeart = () => {
    setIsClickedHeart(!isClickedHeart);
  };
  return (
    <div className="flex justify-between">
      <div className="flex gap-3 text-white">
        <div className="flex items-center gap-1 text-white">
          <Icon
            onClick={handleClickHeart}
            name="HeartIcon"
            className={`w-6 fill-white cursor-pointer ${isClickedHeart ? 'fill-red-600' : ''}`}
          />
          <div>434</div>
        </div>
        <div className="flex items-center gap-2 text-white">
          <Icon name="CommentIcon" className="w-6 fill-white" />
          <div>5</div>
        </div>
      </div>
      <div className="flex gap-3">
        <Button kind={ButtonKind.secondary}>수정</Button>
        <Button kind={ButtonKind.secondary}>삭제</Button>
      </div>
    </div>
  );
};
export default HeartAndCommentCountBox;
