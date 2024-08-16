import Button, { ButtonKind } from '@/components/common/Button';
import dynamic from 'next/dynamic';

const Write = () => {
  const DynamicEditor: any = dynamic(
    () => import('@/components/community/EditorComponent'),
    {
      ssr: false,
    },
  );

  return (
    <div className="mt-8 relative w-full">
      <div className="w-full flex flex-col gap-3">
        <input
          className="w-full pb-3 text-3xl border-b border-b-white bg-black outline-none text-white"
          placeholder="제목을 입력해주세요"
        />
        <DynamicEditor />
      </div>
      <div className="absolute flex gap-2 bottom-[-80px] right-0">
        <Button kind={ButtonKind.secondary}>취소</Button>
        <Button kind={ButtonKind.secondary}>등록</Button>
      </div>
    </div>
  );
};

export default Write;
