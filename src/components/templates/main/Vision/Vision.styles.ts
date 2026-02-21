// /src/components/templates/main/Vision/Vision.style.ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';

export const VisionWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ${theme.media.mobile} {
        height: auto;
        padding: 2rem 0;
    }
`;

export const GlareEffect = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    width: 29.125rem;
    height: 29.125rem;

    background: radial-gradient(
        circle, 
        rgba(26, 142, 229, 1) 0%,
        rgba(255, 255, 255, 0) 90%
    );

    filter: blur(7rem);
    z-index: 0;
    pointer-events: none;

    ${theme.media.mobile} {
        width: 18rem;
        height: 18rem;
        filter: blur(5rem);
    }
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100%;
    max-width: 75rem;
    margin: 0 auto;
    z-index: 1;

    ${theme.media.mobile} {
        grid-template-columns: 1fr;
        justify-items: center; 
        gap: 2rem;
    }
`;