import styled from 'styled-components';
import { fontSize, theme } from '@/styles/theme';
import { semanticColors, typography, radius } from '@/styles/tokens';

export const SolutionCard = styled.div`
    padding: 1.25rem 1.5rem;
    border-radius: ${radius.lg};
    border: 1px solid ${semanticColors.border.default};
    background: ${semanticColors.background.card};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
        border-radius: 0;
        padding: 0.625rem 0;
        background: transparent;

        &:last-child {
            border-bottom: none;
        }

        [data-theme="dark"] & {
            background: transparent;
            border-color: transparent;
        }
    }

    [data-theme="dark"] & {
        background: ${semanticColors.background.card};
        border-color: ${semanticColors.border.default};
    }
`;

export const SolutionTitle = styled.h3`
    margin: 0;
    ${typography('Body1')};
    font-weight: 700;
    color: ${semanticColors.text.brand};
    text-align: center;

    ${theme.media.tablet} {
        font-size: ${fontSize.base};
    }

    ${theme.media.mobile} {
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 4.5rem;
        height: 1.625rem;
        padding: 0.375rem 1rem;
        background: ${semanticColors.background.elevated};
        border-radius: ${radius.sm};
        ${typography('Caption2')};
        font-weight: 700;
        color: ${semanticColors.text.secondary};
        white-space: nowrap;

        [data-theme="dark"] & {
            background-color: ${semanticColors.background.elevated};
            color: ${semanticColors.text.secondary};
        }
    }
`;

export const SolutionDescription = styled.p`
    margin: 0;
    ${typography('Body2')};
    color: ${semanticColors.text.secondary};
    text-align: center;

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
        padding: 1.25rem;
    }

    ${theme.media.mobile} {
        font-size: 0.75rem;
        color: ${semanticColors.text.primary};
        text-align: left;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    [data-theme="dark"] & {
        color: ${semanticColors.text.secondary};
    }

    ${theme.media.mobile} {
        [data-theme="dark"] & {
            color: ${semanticColors.text.primary};
        }
    }
`;
