// /src/components/templates/main/Hero/Hero.styles.ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';

export const HeroWrapper = styled.section`
    width: 100%;
    height: 45rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    overflow: hidden;

    ${theme.media.mobile} {
        display: none;
    }

    /* 배경 전용 가상 요소 */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        
        /* 배경 이미지 설정 */
        background-image: url('/images/main/heroImg.jpg'); 
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        
        transform: scale(1.8);
        transform-origin: center center;

        /* 배경 투명도 유지*/
        opacity: 0.15;
        z-index: 0;

        ${theme.media.mobile} {
            transform: scale(1.8);
        }
    }
    
    ${theme.media.mobile} {
        height: 25rem;
    }

    ${theme.media.tablet} {
        height: 35rem;
    }
`;

export const HeroBgText = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: block;
        position: absolute;
        width: 100%;
        overflow: hidden;
        opacity: 0.15;
        z-index: 0;
        pointer-events: none;
        user-select: none;

        img {
            max-width: unset;
            width: 50rem;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;
    
    h1 {
        font-size: ${fontSize.h3};
        font-weight: 700;
        line-height: 1.4;
        color: ${colors.black600};
        margin-bottom: 2rem;
        word-break: keep-all;

        ${theme.media.mobile} {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }
    }

    .team-name {
        font-size: 3.75rem;
        font-weight: 700;
        color: ${colors.primary500};

        ${theme.media.mobile} {
            font-size: 2.5rem;
        }
        
        span:not(.font-paperlogy) {
            font-size: ${fontSize.h3};
            color: ${colors.black600};
            margin-right: 1rem;

            ${theme.media.mobile} {
                font-size: 1.5rem;
                margin-right: 0.5rem;
            }
        }

        .font-paperlogy {
            font-family: var(--font-paperlogy); 
            font-size: 3.75rem;
            font-weight: 700;
            line-height: 1;

            ${theme.media.mobile} {
                font-size: 2.5rem;
            }
        }
    }
`;