import styled from 'styled-components';
import { colors, fontSize, theme } from '@/styles/theme';

export const SolutionCard = styled.div`
    padding: 1.25rem 1.5rem;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.8rem;
    min-height: 5rem;
    width: 100%;
    height: 8rem;

    ${theme.media.tablet} {
        gap: 0.5rem;
    }
`;

export const SolutionTitle = styled.h3`
    margin: 0;
    font-size: ${fontSize.h3};
    font-weight: 700;
    color: ${colors.primary500};
    text-align: center;

    ${theme.media.tablet} {
        font-size: ${fontSize.base};
    }
`;

export const SolutionDescription = styled.p`
    margin: 0;
    font-size: ${fontSize.base};
    color: ${colors.gray600};
    line-height: 1.6;
    text-align: center;

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
        padding: 1.25rem;
    }
`;

