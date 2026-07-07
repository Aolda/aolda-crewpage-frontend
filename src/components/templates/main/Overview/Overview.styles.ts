// src/components/templates/main/Overview/Overview.styles.ts
import styled from 'styled-components';
import { fontSize, theme } from '@/styles/theme';
import { radius, semanticColors, typography } from '@/styles/tokens';

export const SinceText = styled.div`
    font-size: ${fontSize.base};
    font-weight: 300;
    color: ${semanticColors.text.secondary};
    margin-bottom: 0.75rem;

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
        margin-bottom: 0.5rem;
    }

    ${theme.media.mobile} {
        font-size: 0.875rem;
        margin-bottom: 0;
    }

`;

export const OverviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    ${theme.media.mobile} {
        margin-top: 5.5rem;
    }
`;

/* 상단: 구체 및 배경 텍스트 영역 */
export const SphereContainer = styled.div`
    position: relative;
    width: 100%;
    // height: 31.25rem; /* 500px */
    display: flex;
    justify-content: center;
    align-items: center;
`;

/* 모바일 전용: 배경 글씨 4개 세로 배열 */
export const MobileBgTextGrid = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100vw;
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
        min-width: 66.5rem;
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
        width: 20rem;
        height: 10rem;
        background: rgba(26, 142, 229, 0.3);
        filter: blur(4rem);
    }

    ${theme.media.mobile} {
        width: 20rem;
        height: 7.5rem;
        background: rgba(26, 142, 229, 0.5);
        filter: blur(4rem);
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
        top: 75%;
        width: 10rem;
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

/* 모바일 전용: sphere 아래 타이틀 영역 */
export const MobileOverviewHeader = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 3.5rem;
        margin-bottom: 2rem;

        h2 {
            font-size: 1.25rem;
            font-weight: 700;
            line-height: 120%;
            color: ${semanticColors.text.primary};
            word-break: keep-all;
            margin-bottom: 0.75rem;

            span { color: ${semanticColors.text.brand}; }
        }

        p {
            font-size: 0.625rem;
            color: ${semanticColors.text.secondary};
            word-break: keep-all;
        }
    }
`;

/* 중앙: 연결 점선 */
export const DashedLine = styled.div`
    position: relative;
    width: 0.1875rem;
    height: 10rem;
    margin: 0.5rem 0 2.25rem;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, #76BBEF 0%, rgba(118, 187, 239, 0.2) 100%);
        mask-image: repeating-linear-gradient(
            to bottom,
            #000 0,
            #000 0.375rem,
            transparent 0.375rem,
            transparent 0.75rem
        );
        -webkit-mask-image: repeating-linear-gradient(
            to bottom,
            #000 0,
            #000 0.375rem,
            transparent 0.375rem,
            transparent 0.75rem
        );
    }

    &::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 1rem;
        height: 1rem;
        background: #76BBEF;
        border-radius: 50%;
        transform: translate(-50%, 50%);
    }

    ${theme.media.tablet} {
        height: 5.5rem;
        margin: 0.25rem 0 1.5rem;
    }

    ${theme.media.mobile} {
        display: none;
    }
`;

/* 하단: 인포 화이트 카드 */
export const InfoCard = styled.div`
    width: 100%;
    height: 23.5rem;
    max-width: 75rem;
    border: 2px solid ${semanticColors.border.default};
    border-radius: ${radius.xl};
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
        padding: 2.5rem 3.75rem;
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
        align-items: flex-start;

        br.pc-only {
            display: none;
        }
        br.mobile-only {
            display: flex;
        }
    }

    [data-theme="dark"] & {
        border-color: ${semanticColors.border.default};

        ${theme.media.mobile} {
            background: transparent;
        }
    }
`;

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    span {
        color: ${semanticColors.text.brand};
    }
    h3 {
        ${typography('Heading2')};
        font-weight: 700;
        line-height: 1.2;
        color: ${semanticColors.text.primary};
        word-break: keep-all;
    }
    p.not-mobile {
        display: block
        ${typography('Body2')};
        color: ${semanticColors.text.secondary};
    }

    p.mobile-only {
        display: none;
    }

    ${theme.media.tablet} {
        gap: 0.75rem;

        h3 {
            font-size: ${fontSize.h3};
        }
        p.not-mobile {
            font-size: ${fontSize.smaller};
        }
    }

    ${theme.media.mobile} {
        gap: 0.75rem;
        text-align: left;

        h3 {
            font-size: ${fontSize.body1};
        }

        p.not-mobile {
            display: none;
        }

        p.mobile-only {
            display: block;
            font-size: 0.625rem;
            color: ${semanticColors.text.secondary};
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
