import { useEffect, useState } from 'react';

/** 19시 ~ 07시 사이인지 확인 */
function isNightTime(): boolean {
    const hour = new Date().getHours();
    return hour >= 19 || hour < 7;
}

/**
 * 다크모드 활성화 여부를 반환합니다.
 * 우선순위:
 * 1. 브라우저/OS가 라이트모드로 명시적 설정 → 항상 라이트 (시간 무관)
 * 2. 브라우저/OS가 다크모드로 명시적 설정 → 다크
 * 3. 설정 없음 → 19:00 ~ 07:00 사이이면 다크, 아니면 라이트
 */
export function useDarkMode(): boolean {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const lightQuery = window.matchMedia('(prefers-color-scheme: light)');

        const update = () => {
            if (lightQuery.matches) {
                // 사용자가 명시적으로 라이트 모드 설정 → 항상 라이트
                setIsDark(false);
            } else if (darkQuery.matches) {
                // 사용자가 명시적으로 다크 모드 설정
                setIsDark(true);
            } else {
                // 설정 없음 → 시간대로 결정
                setIsDark(isNightTime());
            }
        };

        update();

        // OS 테마 변경 감지
        darkQuery.addEventListener('change', update);
        lightQuery.addEventListener('change', update);

        // 1분마다 시간 조건 재확인
        const interval = setInterval(update, 60_000);

        return () => {
            darkQuery.removeEventListener('change', update);
            lightQuery.removeEventListener('change', update);
            clearInterval(interval);
        };
    }, []);

    return isDark;
}
