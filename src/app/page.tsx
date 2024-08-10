import Banner from '@/components/Banner';
import PerformanceSection from '@/components/PerformanceSection';
import { MUSICAL_INFO, MUSIC_INFO, PLAY_INFO } from '@/constants/mockData';

function Home() {
  return (
    <div className="mt-[87px] ml-[240px]">
      <main className="w-full">
        <Banner />
        <div className="flex justify-center">
          <PerformanceSection title="대중음악" data={MUSIC_INFO} />
          <PerformanceSection title="뮤지컬" data={MUSICAL_INFO} />
          <PerformanceSection title="연극" data={PLAY_INFO} />
        </div>
      </main>
    </div>
  );
}

export default Home;
