import React, { useEffect } from 'react';

export const useCloseModal = (
  handleClose: () => void,
  modalRef: React.RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    if (!modalRef.current) return undefined;

    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleClose, modalRef]);
};
