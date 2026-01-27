import styled from 'styled-components';
import { colors, fontSize } from '@/styles/theme';

export const OverviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: visible;
`;

/* 상단: 구체 및 배경 텍스트 영역 */
export const SphereContainer = styled.div`
    position: relative;
    width: 100%;
    height: 31.25rem; /* 500px */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BgText = styled.div`
    position: absolute;
    width: 133rem;
    height: auto;
    opacity: 0.2;
    z-index: 0;
    pointer-events: none;
    user-select: none;
`;

export const GlareEffect = styled.div`
    position: absolute;
    width: 40.4375rem;
    height: 15.6875rem;
    background: rgba(26, 142, 229, 0.5);
    filter: blur(4rem);
    z-index: 1;
`;

export const ShadowWrapper = styled.div`
    position: absolute;
    top: 70%; 
    left: 50%;
    transform: translate(-50%, -0%);
    
    width: 20rem;
    height: auto;
    
    z-index: 2;
    pointer-events: none;

    svg {
        width: 100%;
        height: auto;
    }
`;

export const SphereImage = styled.div`
    position: relative;
    z-index: 3;
    width: 24rem;
    height: 24rem;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: rotateY(-25deg) rotateX(25deg);
    }
`;

/* 중앙: 연결 점선 */
export const DashedLine = styled.div`
    background: url("/main/dashedLine.png");
    width: 1rem;
    height: 11rem;
    margin-bottom: 2rem;
`;

/* 하단: 인포 화이트 카드 */
export const InfoCard = styled.div`
    width: 100%;
    height: 23.5rem;
    max-width: 75rem;
    background: #FFFFFF;
    border: 2px solid rgba(226, 226, 226, 1); /* 1px */
    border-radius: 1.5rem;
    padding: 3.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
`;

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    h3 {
        font-size: ${fontSize.h2};
        font-weight: 700;
        line-height: 1.4;
        color: #111827;
        word-break: keep-all;

        strong {
        color: ${colors.primary500};
        }
    }
    p {
        font-size: ${fontSize.base};
        line-height: 1.6;
        color: ${colors.gray500};
        word-break: keep-all;
    }
`;

export const CardIllustration = styled.div`
    img {
        width: 100%;
        height: auto;
    }
`;