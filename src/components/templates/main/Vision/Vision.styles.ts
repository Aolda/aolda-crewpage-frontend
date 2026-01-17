import styled from 'styled-components';
import { fontSize, colors } from '@/styles/theme';

export const VisionWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100%;
    max-width: 75rem;
    margin: 0 auto;
    padding: 0 1.25rem;
    z-index: 1;
`;