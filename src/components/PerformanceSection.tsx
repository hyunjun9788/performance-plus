import { PerformanceInfo } from '@/constants/mockData';
import Image from 'next/image';

function PerformanceSection({
  title,
  data,
}: {
  title: string;
  data: PerformanceInfo[];
}) {
  return (
    <div className="flex flex-col gap-3 px-[15px]">
      <div className="flex items-center">
        <span className="text-lg font-bold text-main">{title}</span>
        <div className="flex-grow h-px bg-gray-400 mx-4" />
      </div>
      <div className="grid grid-cols-2 grid- gap-2 text-white">
        {data.map((v) => (
          <div
            className="max-w-[180px] max-h-[350px] flex flex-col gap-5"
            key={v.id}
          >
            <div className="relative w-full h-full aspect-[180/244]">
              <Image fill src={v.imageUrl} alt="공연 포스터" />
            </div>
            <div className="h-10 truncate w-full">{v.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerformanceSection;
