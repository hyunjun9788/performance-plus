'use client';

import Banner from '@/components/Banner';
import Calendar from '@/components/Calendar';
import PerformanceSection from '@/components/PerformanceSection';
import { MUSICAL_INFO, MUSIC_INFO, PLAY_INFO } from '@/constants/mockData';

function Home() {
  return (
    <div className="mt-[87px] ml-60">
      <main className="w-full">
        <Banner />
        <div className="flex justify-center">
          <PerformanceSection title="콘서트" data={MUSIC_INFO} />
          <PerformanceSection title="뮤지컬" data={MUSICAL_INFO} />
          <PerformanceSection title="연극" data={PLAY_INFO} />
        </div>
        <Calendar />
      </main>
    </div>
  );
}

export default Home;
