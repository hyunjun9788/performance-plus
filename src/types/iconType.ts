import { HTMLAttributes } from 'react';

export type IconType =
  | 'HomeIcon'
  | 'ReviewIcon'
  | 'BoardIcon'
  | 'MusicIcon'
  | 'SearchIcon'
  | 'PlayIcon'
  | 'MusicalIcon'
  | 'MapIcon'
  | 'LeftIcon'
  | 'RightIcon'
  | 'HeartIcon'
  | 'CommentIcon';

export interface IconProps {
  name: IconType;
  className: HTMLAttributes<SVGAElement>['className'];
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export interface LoadingProps {
  iconClassName?: HTMLAttributes<SVGAElement>['className'];
  textClassName?: HTMLAttributes<HTMLParagraphElement>['className'];
}
