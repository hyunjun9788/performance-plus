import Image from 'next/image';

export type ImageType = 'home' | 'music';

export interface ImageProps {
  type: ImageType;
  // className?: HTMLAttributes<HTMLImageElement>['className'];
  src: string;
}

const typeClasses: Record<ImageProps['type'], string> = {
  home: 'relative w-full h-full aspect-[180/244]',
  music: 'relative w-full h-full aspect-[251/398]',
};

const ImageComponent = ({ type, src }: ImageProps) => {
  return (
    <div className={typeClasses[type]}>
      <Image fill src={src} alt="공연 포스터" />
    </div>
  );
};

export default ImageComponent;
