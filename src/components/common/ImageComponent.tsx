import Image from 'next/image';

export type ImageType = 'home' | 'music' | 'board' | 'profile';

export interface ImageProps {
  type: ImageType;
  // className?: HTMLAttributes<HTMLImageElement>['className'];
  src: string;
}

const typeClasses: Record<ImageProps['type'], string> = {
  home: 'relative w-full h-full aspect-[180/244]',
  music:
    'relative w-full h-full aspect-[251/398] brightness-100 group-hover:brightness-75',
  board: 'relative w-[60px] h-[60px]',
  profile: 'relative min-w-[40px] h-[40px] rounded-full overflow-hidden',
};

const ImageComponent = ({ type, src }: ImageProps) => {
  return (
    <div className={typeClasses[type]}>
      <Image fill src={src} alt="공연 포스터" />
    </div>
  );
};

export default ImageComponent;
