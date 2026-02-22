// /src/components/molecules/CircularProgressBar.tsx
'use client';

import React, { useEffect, useState } from 'react';
import * as S from './CircularProgressBar.styles';

const CircularProgressBar: React.FC<{ total: number; current: number; size?: number }> = ({
    total,
    current,
    size = 101, // 기본 px 값
}) => {
    const STROKE_WIDTH = 16;
    const center = size / 2;
    const radius = center - (STROKE_WIDTH / 2) - 2;
    const circumference = 2 * Math.PI * radius;
    
    const [offset, setOffset] = useState(circumference);

    useEffect(() => {
        const percentage = total === 0 ? 0 : current / total;
        // SVG 좌표계가 뒤집히지 않도록 기본 계산식 사용
        const targetOffset = circumference * (1 - percentage);
        
        const animationTimeout = setTimeout(() => {
            setOffset(targetOffset);
        }, 100);

        return () => clearTimeout(animationTimeout);
    }, [current, total, circumference]);

    const [displayCount, setDisplayCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const end = current;
        if (start === end) {
            setDisplayCount(end);
            return;
        }

        let timer = setInterval(() => {
            start += 1;
            setDisplayCount(start);
            if (start === end) clearInterval(timer);
        }, 1000 / (end || 1));

        return () => clearInterval(timer);
    }, [current]);

    return (
        // 외부 사이즈만 rem으로 변환 (110 / 16 = 6.875rem)
        <S.Container $size={size / 16}>
            {/* viewBox는 내부 좌표계이므로 숫자로 유지해야 원이 보입니다! */}
            <S.Svg viewBox={`0 0 ${size} ${size}`}>
                <S.CircleBackground cx={center} cy={center} r={radius} />
                <S.CircleProgress
                    cx={center}
                    cy={center}
                    r={radius}
                    $circumference={circumference}
                    $offset={offset}
                />
            </S.Svg>
            <S.NumberLabel>{displayCount}</S.NumberLabel>
        </S.Container>
    );
};

export default CircularProgressBar;