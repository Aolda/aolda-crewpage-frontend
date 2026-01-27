'use client';

import { useEffect } from 'react';

export const MSWComponent = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (typeof window !== 'undefined') {
        // browser.js에서 정의한 worker를 가져와 시작합니다.
        const { worker } = require('@/mocks/browser');
        worker.start({
          onUnhandledRequest: 'bypass', // 정의되지 않은 API는 무시하고 통과
        });
      }
    }
  }, []);

  return null;
};