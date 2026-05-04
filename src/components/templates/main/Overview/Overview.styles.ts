// src/components/templates/main/Overview/Overview.styles.ts
import styled from 'styled-components';
import { colors, fontSize, theme } from '@/styles/theme';

export const SinceText = styled.div`
    font-size: 1rem;
    font-weight: normal;
    color: #9CA3AF;
    margin-bottom: 0.75rem;

    ${theme.media.mobile} {
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

    ${theme.media.mobile} {
        height: 20rem;
        overflow: hidden;
    }

    ${theme.media.tablet} {
        height: 26rem;
    }
`;

/* 모바일 전용: 배경 글씨 4개 세로 배열 */
export const MobileBgTextGrid = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        position: absolute;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        user-select: none;
    }
`;

export const MobileBgTextRow = styled.div<{ $shifted?: boolean }>`
    display: none;

    ${theme.media.mobile} {
        display: block;
        opacity: 0.15;
        transform: ${(props) => props.$shifted ? 'translateX(-18%)' : 'translateX(0)'};

        img {
            width: 60rem;
            max-width: unset;
            height: auto;
        }
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

    ${theme.media.mobile} {
        display: none;
    }

    ${theme.media.tablet} {
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
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

    ${theme.media.tablet} {
        width: 30rem;
        height: 15rem;
    }

    ${theme.media.mobile} {
        width: 14rem;
        height: 7rem;
        background: rgba(26, 142, 229, 0.2);
        filter: blur(3rem);
    }
`;

export const ShadowWrapper = styled.div`
    position: absolute;
    top: 70%; 
    left: 50%;
    transform: translate(-50%, -0%);
    
    width: 20rem;
    height: auto;
    
    ${theme.media.tablet} {
        width: 15rem;
    }
    
    ${theme.media.mobile} {
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

    ${theme.media.mobile} {
        width: 14rem;
        height: 14rem;
    }

    ${theme.media.tablet} {
        width: 18rem;
        height: 18rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transform: rotateY(-25deg) rotateX(25deg);
    }
`;

/* 모바일 전용: sphere 아래 타이틀 영역 */
export const MobileOverviewHeader = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        padding: 1.5rem 0 1rem;

        h2 {
            font-size: 1.75rem;
            font-weight: 700;
            line-height: 1.3;
            color: #111827;
            word-break: keep-all;

            span { color: ${colors.primary500}; }
        }

        p {
            font-size: ${fontSize.smaller};
            line-height: 1.5;
            color: ${colors.gray500};
            word-break: keep-all;
        }
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

    ${theme.media.mobile} {
        display: none;
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

    ${theme.media.tablet} {
        border: none;
        flex-direction: column;
        height: auto;
        padding: 0.75rem 0.75rem;
        text-align: center;

        br.pc-only {
            display: none;
        }
        br.mobile-only {
            display: flex;
        }
    }

    ${theme.media.mobile} {
        border: none;
        flex-direction: column;
        height: auto;
        padding: 0;
        text-align: left;

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
    ${theme.media.tablet} {
        gap: 0.75rem;
        
        h3 {
            font-size: ${fontSize.h2};
        }
        p {
            font-size: ${fontSize.base};
        }
    }
    ${theme.media.mobile} {
        gap: 0.75rem;
        text-align: left;
        
        h3 {
            font-size: 1.5rem;
        }
        p {
            font-size: ${fontSize.smaller};
        }
    }
`;

export const CardIllustration = styled.div`
    img {
        width: 100%;
        height: auto;
    }

    ${theme.media.tabletDown} {
        display: none;
    }
`;