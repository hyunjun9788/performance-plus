import type { Metadata } from 'next';
import '../styles/global.css';
import localFont from 'next/font/local';
import Gnb from '@/components/Gnb';
import SideBar from '@/components/SideBar';
import RecoilRootWrapper from '@/recoil/RecoilWrapper';

export const metadata: Metadata = {
  title: '공연플러스',
  description: '공연 정보가 필요한 사람들을 위한 풍성한 공연 정보 큐레이션. ',
};

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body className={`${pretendard.variable} font-pretendard`}>
        <RecoilRootWrapper>
          <Gnb />
          <SideBar />
          {children}
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
