'use client';

import { useCloseModal } from '@/app/hooks/useCloseModal';

import { ReactNode, useEffect, useRef } from 'react';
import { Icon } from './common/Icon';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    router.back();
  };

  useCloseModal(handleClose, modalRef);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  return (
    <div className="fixed inset-0 w-full h-full z-[999] overflow-auto flex justify-center items-center bg-black bg-opacity-60 backdrop-blur">
      <div
        ref={modalRef}
        className={'relative rounded-2xl bg-gray-22 w-[432px] p-6'}
      >
        <button
          className="absolute top-5 right-5"
          onClick={handleClose}
          type="button"
        >
          <Icon name="CloseIcon" className="w-8 h-8 fill-gray-70" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
