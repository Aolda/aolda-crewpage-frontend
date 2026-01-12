'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fontSize } from '@/styles/theme';

const Container = styled.div<{ $size: number }>`
    position: relative;
    width: ${(props) => props.$size};
    height: ${(props) => props.$size};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Svg = styled.svg`
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
    transform-origin: center;
`;

const CircleBackground = styled.circle`
    fill: none;
    stroke: #e5e7eb;
    stroke-width: 1.0625rem;
`;

const CircleProgress = styled.circle<{ $offset: number; $circumference: number }>`
    fill: none;
    stroke: #1A8EE5;
    stroke-width: 1.0625rem;
    stroke-linecap: round;
    transition: stroke-dashoffset 1.5s ease-out; 
    stroke-dasharray: ${(props) => props.$circumference};
    stroke-dashoffset: ${(props) => props.$offset};

    /* 핵심: X축 기준으로 반전시켜 반시계 방향처럼 보이게 함 */
    transform: scaleX(-1);
    /* 중요: 반전의 기준점을 원의 중심으로 설정 */
    transform-origin: center;
`;

const NumberLabel = styled.div`
    position: absolute;
    font-size: ${(fontSize.base)};
    font-weight: bold;
    color: #1A8EE5;
`;

const CircularProgressBar: React.FC<{ total: number; current: number; size?: number }> = ({
    total,
    current,
    size = 110,
}) => {
    const STROKE_WIDTH = 16;
    const center = size / 2;
    const radius = center - (STROKE_WIDTH / 2) - 2;
    const circumference = 2 * Math.PI * radius;
    
    // 1. 초기 상태는 원이 완전히 비어있는 상태(둘레 길이만큼 밀려남)로 설정합니다.
    const [offset, setOffset] = useState(circumference);

    useEffect(() => {
        // 2. 컴포넌트가 마운트된 후, 아주 짧은 지연시간 뒤에 실제 목표 값으로 변경합니다.
        const percentage = total === 0 ? 0 : current / total;
        const targetOffset = circumference * (1 - percentage);
        
        const animationTimeout = setTimeout(() => {
            setOffset(targetOffset);
        }, 100); // 0.1초 뒤에 애니메이션 시작

        return () => clearTimeout(animationTimeout);
    }, [current, total, circumference]);

    // 숫자 카운팅 로직 (이전과 동일)
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
        }, 1000 / (end || 1)); // 전체 1초 동안 균등하게 증가

        return () => clearInterval(timer);
    }, [current]);

    return (
        <Container $size={size / 16}>
            <Svg viewBox={`0 0 ${size / 16} ${size / 16}`}>
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