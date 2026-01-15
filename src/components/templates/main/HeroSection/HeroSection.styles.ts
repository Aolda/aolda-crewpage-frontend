import styled from 'styled-components';
import { fontSize, colors } from '@/styles/theme';

export const HeroWrapper = styled.section`
    width: 100%;
    height: 100vh; /* 화면 전체 높이 */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    background: url('/heroImg.jpg');
    opacity: 0.15;
    background-size: cover;
    background-position: center;
`;

export const HeroContent = styled.div`
    z-index: 1;
    
    h1 {
        font-size: ${fontSize.h3};
        font-weight: 700;
        line-height: 1.4;
        color: #111827;
        margin-bottom: 2rem;
        word-break: keep-all;
    }

    .team-name {
        font-size: 3.75rem;
        font-weight: 800;
        color: ${colors.primary500};
        
        span {
            font-size: ${fontSize.h3};
            color: #111827;
            margin-right: 1rem;
        }
    }
`;