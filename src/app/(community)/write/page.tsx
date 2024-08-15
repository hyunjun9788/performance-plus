'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Write = () => {
  const DynamicEditor: any = dynamic(
    () => import('@/components/community/EditorComponent'),
    {
      ssr: false,
    },
  );

  const [isEditorReady, setIsEditorReady] = useState(false);

  useEffect(() => {
    setIsEditorReady(true);
  }, []);

  return (
    <div className="w-full flex flex-col gap-3">
      <input
        className="w-full pb-3 text-3xl border-b border-b-white bg-black outline-none text-white"
        placeholder="제목을 입력해주세요"
      />

      <DynamicEditor />
    </div>
  );
};

export default Write;
