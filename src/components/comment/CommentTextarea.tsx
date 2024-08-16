'use client';

import { useRef } from 'react';
import { Icon } from '../common/Icon';
import Button, { ButtonKind } from '../common/Button';

const CommentTextarea = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file);
    }
  };

  return (
    <div className="relative w-full">
      <div className="h-32">
        <textarea className="w-full h-full bg-black border text-white border-gray-bf resize-none" />
      </div>
      <Icon
        name="ImageIcon"
        className="absolute bottom-3 left-3 w-6 fill-white cursor-pointer"
        onClick={handleIconClick}
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="absolute right-3 bottom-2">
        <Button kind={ButtonKind.secondary}>작성</Button>
      </div>
    </div>
  );
};

export default CommentTextarea;
