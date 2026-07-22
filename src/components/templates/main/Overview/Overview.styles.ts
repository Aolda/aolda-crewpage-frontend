// src/components/templates/main/Overview/Overview.styles.ts
import styled from 'styled-components';
import { colors, fontSize } from '@/styles/theme';

export const SinceText = styled.div`
    font-size: 1rem;
    font-weight: normal;
    color: #9CA3AF;
    margin-bottom: 0.75rem;

    @media (max-width: 744px) {
        font-size: 0.875rem;
    }
`;

export const OverviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

/* 상단: 구체 및 배경 텍스트 영역 */
export const SphereContainer = styled.div`
    position: relative;
    width: 100%;
    height: 31.25rem; /* 500px */
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 744px) {
        height: 17rem;
    }
`;

export const BgText = styled.div`
    position: absolute;
    overflow: hidden;
    width: 106.875rem;
    height: auto;
    opacity: 0.2;
    z-index: 0;
    pointer-events: none;
    user-select: none;

    @media (max-width: 744px) {
        width: 100%;

        img {
            width: 63rem;
        }
    }

    img {
        max-width: unset;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const GlareEffect = styled.div`
    position: absolute;
    width: 40.4375rem;
    height: 15.6875rem;
    background: rgba(26, 142, 229, 0.5);
    filter: blur(4rem);
    z-index: 1;

    @media (max-width: 744px) {
        width: 20rem;
        height: 10rem;
    }
`;

export const ShadowWrapper = styled.div`
    position: absolute;
    top: 70%; 
    left: 50%;
    transform: translate(-50%, -0%);
    
    width: 20rem;
    height: auto;
    
    @media (max-width: 744px) {
        width: 12rem;
        top: 65%;
    }
    
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

    @media (max-width: 744px) {
        width: 12rem;
        height: 12rem;
    }
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: rotateY(-25deg) rotateX(25deg);
    }
`;

/* 중앙: 연결 점선 */
export const DashedLine = styled.div`
    background: url("/images/main/dashedLine.png");
    width: 1rem;
    height: 11rem;
    margin-bottom: 2rem;
    background-repeat: no-repeat;
    background-size: contain;

    mask-image: linear-gradient(to bottom, transparent 0%, black 20%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%);

    @media (max-width: 744px) {
        margin-top: -4rem;
        mask-image: linear-gradient(to bottom, transparent 0%, black 100%);
        -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 100%);
    }
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

    br.pc-only {
            display: flex;
        }
        br.mobile-only {
            display: none;
        }

    @media (max-width: 744px) {
        border: none;
        flex-direction: column;
        height: auto;
        padding: 2.5rem 1.5rem;
        text-align: center;
        gap: 2.5rem;

        br.pc-only {
            display: none;
        }
        br.mobile-only {
            display: flex;
        }
    }
`;

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    
    span {
            color: ${colors.primary500};
    }
    h3 {
        font-size: ${fontSize.h2};
        font-weight: 700;
        line-height: 1.4;
        color: #111827;
        word-break: keep-all;
    }
    p {
        font-size: ${fontSize.base};
        line-height: 1.6;
        color: ${colors.gray500};
        word-break: keep-all;
    }

    @media (max-width: 744px) {
        gap: 1.5rem;
        
        h3 {
            font-size: 1.5rem;
        }
        p {
            font-size: ${fontSize.smaller};
        }
    }
`;

export const CardIllustration = styled.div`
    flex: 0 0 20rem;
    width: 20rem;
    max-width: 34%;

    img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 744px) {
        display: none;
    }
`;
