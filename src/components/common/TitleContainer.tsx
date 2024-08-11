import { PropsWithChildren } from 'react';

interface TitleContainerProps {
  title: '콘서트' | '뮤지컬' | '연극';
}

const TitleContainer = ({
  title,
  children,
}: PropsWithChildren<TitleContainerProps>) => {
  return (
    <div className="w-full h-[120px] flex flex-col justify-center gap-1 px-6 py-7 rounded-lg bg-gray-1e text-white">
      <div className="text-xl font-bold text-main">{title}</div>
      <p className="text-[14px]">{children}</p>
    </div>
  );
};

export default TitleContainer;
