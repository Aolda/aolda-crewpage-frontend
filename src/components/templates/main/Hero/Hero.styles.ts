// /src/components/templates/main/Hero/Hero.styles.ts
import styled from 'styled-components';
import { fontSize, theme } from '@/styles/theme';
import { semanticColors } from '@/styles/tokens';

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
        
        transform: scale(2.0);
        transform-origin: center center;

        /* 배경 투명도 유지*/
        opacity: 0.15;
        z-index: 0;

        ${theme.media.tablet} {
            transform: scale(2.3);
        }
    }
    
    ${theme.media.mobile} {
        display: none;
    }

    ${theme.media.tablet} {
        height: 25rem;
    }
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 1;

    h1 {
        font-size: ${fontSize.h3};
        font-weight: 700;
        line-height: 1.4;
        color: ${semanticColors.text.primary};
        margin-bottom: 2rem;
        word-break: keep-all;

        ${theme.media.tablet} {
            font-size: ${fontSize.base};
            margin-bottom: 0.75rem;
        }

        ${theme.media.mobile} {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }

    }

    .team-name {
        span:not(.font-paperlogy) {
            font-size: ${fontSize.h3};
            font-weight: 700;
            color: ${semanticColors.text.primary};
            margin-right: 1rem;

            ${theme.media.tablet} {
                font-size: ${fontSize.base};
            }

            ${theme.media.mobile} {
                font-size: 1.5rem;
                margin-right: 0.5rem;
            }

        }

        .font-paperlogy {
            font-family: var(--font-paperlogy);
            color: ${semanticColors.text.brand};
            font-size: 3.75rem;
            font-weight: 700;
            line-height: 1;

            ${theme.media.tablet} {
                font-size: ${fontSize.h2};
            }

            ${theme.media.mobile} {
                font-size: 2.5rem;
            }
        }
    }
`;
