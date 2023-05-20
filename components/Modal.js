'use client';

import { useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ children }) {
  const overlay = useRef();
  const wrapper = useRef();
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (
        (e.target === overlay.current || e.target === wrapper.current) &&
        onDismiss
      ) {
        onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key.toLowerCase() !== 'escape') {
        return;
      }

      onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute max-w-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-10/12 md:w-8/12 lg:w-1/2 "
      >
        <div className="bg-white rounded-lg shadow-lg p-6">{children}</div>
      </div>
    </div>
  );
}
