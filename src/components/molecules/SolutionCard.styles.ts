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

    ${theme.media.mobile} {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 0.75rem;
        height: auto;
        min-height: auto;
        border: none;
        border-bottom: 1px solid #F3F4F6;
        border-radius: 0;
        padding: 0.625rem 0;
        background: transparent;

        &:last-child {
            border-bottom: none;
        }
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

    ${theme.media.mobile} {
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 4.5rem;
        padding: 0.1875rem 0.5rem;
        background: #F3F4F6;
        border-radius: 0.25rem;
        font-size: 0.625rem;
        font-weight: 500;
        color: #6B7280;
        white-space: nowrap;
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

    ${theme.media.mobile} {
        font-size: 0.75rem;
        color: #111827;
        text-align: left;
        line-height: 1.4;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
