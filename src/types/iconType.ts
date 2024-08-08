import { HTMLAttributes } from 'react';

export type IconType =
  | 'HomeIcon'
  | 'ReviewIcon'
  | 'NoticeIcon'
  | 'MusicIcon'
  | 'SearchIcon'
  | 'PlayIcon'
  | 'MusicalIcon'
  | 'MapIcon';

export interface IconProps {
  name: IconType;
  className: HTMLAttributes<SVGAElement>['className'];
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export interface LoadingProps {
  iconClassName?: HTMLAttributes<SVGAElement>['className'];
  textClassName?: HTMLAttributes<HTMLParagraphElement>['className'];
}
