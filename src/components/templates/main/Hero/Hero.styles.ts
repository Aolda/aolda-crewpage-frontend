import styled from 'styled-components';
import { fontSize, colors } from '@/styles/theme';

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
        
        transform: translate(-20rem, -12rem) scale(1.8); 

        /* 2. 배경 투명도 유지 (글씨에는 영향 없음) */
        opacity: 0.15; 
        
        z-index: 0;
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
    }

    .team-name {
        font-size: 3.75rem;
        font-weight: 700;
        color: ${colors.primary500};
        
        span:not(.font-cjk) {
            font-size: ${fontSize.h3};
            color: ${colors.black600};
            margin-right: 1rem;
        }

        .font-cjk {
            font-family: var(--font-cjk); 
            font-size: 3.75rem;
            font-weight: 700;
            line-height: 1;
        }
    }
`;