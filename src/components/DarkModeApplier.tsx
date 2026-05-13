'use client';

import { useEffect } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';

/**
 * 다크모드 조건이 충족되면 <html>에 data-theme="dark" 속성을 적용합니다.
 * layout.tsx에 포함시켜 전역으로 동작합니다.
 */
export default function DarkModeApplier() {
    const isDark = useDarkMode();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return null;
}
