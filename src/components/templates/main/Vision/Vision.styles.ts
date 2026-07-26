// /src/components/templates/main/Vision/Vision.style.ts
import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const VisionWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ${theme.media.mobile} {
        height: auto;
        padding: 0 1rem;
        width: calc(100% + 2rem);
        margin-left: -1rem;
    }

    ${theme.media.tablet} {
        height: auto;
        padding: 1rem 0;
    }
`;

export const RectangleWrapper = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: flex;
        position: absolute;
        width: 100%;
        top: 1rem;
    }
`;

const rectangleBase = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: block;
        position: relative;
    }
`;

export const Rectangle1 = styled.div`
    ${rectangleBase}

    content: '';
    position: absolute;
    width: clamp(13.875rem, 59.2vw, 27rem);
    height: 11.6875rem;
    left: -6%;
    top: -1rem;
    background: linear-gradient(180deg, #A3D2F5 0%, #A3D2F54D 100%);
    filter: blur(0.25rem);
    border-radius: 0 5.84375rem 5.84375rem 0;
    z-index: 0;
    pointer-events: none;
`;

export const Rectangle2 = styled.div`
    ${rectangleBase}

    content: '';
    position: absolute;
    width: clamp(19.5625rem, 83.5vw, 38rem);
    height: 11.6875rem;
    left: 15%;
    top: 3.5rem;
    background: linear-gradient(180deg, #48A4EA 0%, #48A4EA4D 100%);
    filter: blur(0.25rem);
    border-radius: 5.84375rem 0 0 5.84375rem;
    z-index: 1;
    pointer-events: none;
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

    ${theme.media.tablet} {
        width: 15rem;
        height: 15rem;
    }

    ${theme.media.mobile} {
        display: none;
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
        gap: 0.75rem;
    }

    ${theme.media.tablet} {
        grid-template-columns: repeat(3, 1fr);
        gap: 1.25rem;
    }
`;
