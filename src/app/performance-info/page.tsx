import { redirect } from 'next/navigation';

export default async function PerformanceInfo({
  params,
}: {
  params: { id: string };
}) {
  console.log(params);
  if (!params) {
    redirect('/performance-info/concert');
  }
}
