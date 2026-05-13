import { useEffect, useState } from 'react';

/** 19시 ~ 07시 사이인지 확인 */
function isNightTime(): boolean {
    const hour = new Date().getHours();
    return hour >= 19 || hour < 7;
}

/**
 * 다크모드 활성화 여부를 반환합니다.
 * 아래 두 조건 중 하나라도 충족하면 다크모드가 활성화됩니다:
 * 1. 브라우저/OS가 다크모드로 설정된 경우 (prefers-color-scheme: dark)
 * 2. 현재 시간이 19:00 ~ 07:00 사이인 경우
 */
export function useDarkMode(): boolean {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const update = () => {
            setIsDark(mediaQuery.matches || isNightTime());
        };

        update();

        // OS 다크모드 변경 감지
        mediaQuery.addEventListener('change', update);

        // 1분마다 시간 조건 재확인
        const interval = setInterval(update, 60_000);

        return () => {
            mediaQuery.removeEventListener('change', update);
            clearInterval(interval);
        };
    }, []);

    return isDark;
}
