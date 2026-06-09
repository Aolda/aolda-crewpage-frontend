import styled, { keyframes } from 'styled-components';
import { colors } from '@/styles/theme';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
    to { transform: rotate(360deg); }
`;

const pulse = keyframes`
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.3; }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: #ffffff;
    color: #171717;
    animation: ${fadeIn} 0.4s ease-out;

    [data-theme="dark"] & {
        background-color: #2A2A2A;
        color: #F9FAFB;
    }
`;

export const LogoArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const LogoImage = styled.img`
    width: 3.5rem;
    height: 3.5rem;
`;

export const LogoText = styled.span`
    font-family: var(--font-paperlogy);
    font-size: 2rem;
    font-weight: 700;
    color: ${colors.primary500};
    letter-spacing: 0.05em;
`;

export const Spinner = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border: 3px solid rgba(26, 142, 229, 0.15);
    border-top-color: ${colors.primary500};
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;

    [data-theme="dark"] & {
        border-color: rgba(255, 255, 255, 0.12);
        border-top-color: ${colors.primary500};
    }
`;

export const Dots = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Dot = styled.span<{ $delay: number }>`
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    background-color: ${colors.primary500};
    animation: ${pulse} 1.2s ease-in-out infinite;
    animation-delay: ${props => props.$delay}s;
`;

export const Message = styled.p`
    font-size: 0.875rem;
    color: #9CA3AF;
    margin: 0;

    [data-theme="dark"] & {
        color: #D1D5DB;
    }
`;
