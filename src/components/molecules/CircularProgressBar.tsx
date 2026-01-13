'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fontSize, colors } from '@/styles/theme';

const Container = styled.div<{ $size: number }>`
    position: relative;
    /* 외부 컨테이너 크기는 rem으로 설정 */
    width: ${(props) => props.$size}rem;
    height: ${(props) => props.$size}rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Svg = styled.svg`
    width: 100%;
    height: 100%;
    transform: rotate(-90deg); 
    transform-origin: center;
`;

const CircleBackground = styled.circle`
    fill: none;
    stroke: #e5e7eb;
    stroke-width: 16; 
`;

const CircleProgress = styled.circle<{ $offset: number; $circumference: number }>`
    fill: none;
    stroke: ${colors.primary500};
    stroke-width: 16;
    stroke-linecap: round;
    transition: stroke-dashoffset 1.5s ease-out; 
    stroke-dasharray: ${(props) => props.$circumference};
    stroke-dashoffset: ${(props) => props.$offset};
`;

const NumberLabel = styled.div`
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    color: ${colors.primary500};
`;

const CircularProgressBar: React.FC<{ total: number; current: number; size?: number }> = ({
    total,
    current,
    size = 110, // 기본 px 값
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
        <Container $size={size / 16}>
            {/* viewBox는 내부 좌표계이므로 숫자로 유지해야 원이 보입니다! */}
            <Svg viewBox={`0 0 ${size} ${size}`}>
                <CircleBackground cx={center} cy={center} r={radius} />
                <CircleProgress
                    cx={center}
                    cy={center}
                    r={radius}
                    $circumference={circumference}
                    $offset={offset}
                />
            </Svg>
            <NumberLabel>{displayCount}</NumberLabel>
        </Container>
    );
};

export default CircularProgressBar;