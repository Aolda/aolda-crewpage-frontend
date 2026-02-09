'use client';

import { useEffect, useState } from 'react';

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const initMSW = async () => {
        if (process.env.NODE_ENV === 'development') {
            const { worker } = await import('@/mocks/browser');
            // worker.start()가 끝날 때까지 기다립니다.
            await worker.start({
            onUnhandledRequest: 'bypass',
            });
            setIsReady(true); // 준비 완료!
        } else {
            setIsReady(true); // 개발 환경이 아니면 바로 통과
        }
        };

        initMSW();
    }, []);

    // 워커가 준비되기 전에는 아무것도 렌더링하지 않거나 로딩 화면을 보여줍니다.
    if (!isReady) return null; 

    return <>{children}</>;
};