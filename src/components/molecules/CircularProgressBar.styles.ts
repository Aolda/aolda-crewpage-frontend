// /src/components/molecules/CircularProgressBar.styles.ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';

export const Container = styled.div<{ $size: number }>`
    position: relative;
    /* 외부 컨테이너 크기는 rem으로 설정 */
    width: ${(props) => props.$size}rem;
    height: ${(props) => props.$size}rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${theme.media.mobile} {
        width: 3.5rem; 
        height: 3.5rem;
    }
`;

export const Svg = styled.svg`
    width: 100%;
    height: 100%;
    transform: rotate(90deg) scaleX(-1); 
    transform-origin: center;
`;

export const CircleBackground = styled.circle`
    fill: none;
    stroke: #e5e7eb;
    stroke-width: 16; 
`;

export const CircleProgress = styled.circle<{ $offset: number; $circumference: number }>`
    fill: none;
    stroke: ${colors.primary500};
    stroke-width: 16;
    stroke-linecap: round;
    transition: stroke-dashoffset 1.5s ease-out; 
    stroke-dasharray: ${(props) => props.$circumference};
    stroke-dashoffset: ${(props) => props.$offset};

    ${theme.media.mobile} { stroke-width: 12; }
`;

export const NumberLabel = styled.div`
    position: absolute;
    font-size: 1rem;
    font-weight: bold;
    color: ${colors.primary500};

    ${theme.media.mobile} {
        font-size: 0.8rem;
    }
`;