import Banner from '@/components/Banner';
import Image from 'next/image';

function Home() {
  return (
    <div className="mt-[87px] ml-[240px]">
      <main className="w-full">
        <Banner />
        <div className="flex text-dark-main">
          <div>
            <span>대중음악</span>
            <div>
              <Image
                width="180"
                height="244"
                src="http://via.placeholder.com/180x244"
                alt="공연 포스터"
              />
            </div>
          </div>
          <div>뮤지컬</div>
          <div>연극</div>
        </div>
      </main>
    </div>
  );
}

export default Home;
