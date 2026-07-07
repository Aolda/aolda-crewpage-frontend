import styled from 'styled-components';
import { colors, fontSize, theme } from '@/styles/theme';

export const SolutionCard = styled.div`
    padding: 1.25rem 1.5rem;
    border-radius: 10px;
    border: 1px solid #EFEFEF;
    background: #FEFEFE;
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
        background: #2A2A2A;
        border-color: #444444;
    }
`;

export const SolutionTitle = styled.h3`
    margin: 0;
    font-size: ${fontSize.body1};
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
        width: 4.5rem;
        height: 1.625rem;
        padding: 0.375rem 1rem;
        background: #EFEFEF;
        border-radius: 0.25rem;
        font-size: 0.625rem;
        font-weight: 700;
        color: #777777;
        white-space: nowrap;

        [data-theme="dark"] & {
            background-color: #444444;
            color: #EFEFEF;
        }
    }
`;

export const SolutionDescription = styled.p`
    margin: 0;
    font-size: ${fontSize.base};
    color: ${colors.gray600};
    text-align: center;

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
        padding: 1.25rem;
    }

    ${theme.media.mobile} {
        font-size: 0.75rem;
        color: #181818;
        text-align: left;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    [data-theme="dark"] & {
        color: #EFEFEF;
    }

    ${theme.media.mobile} {
        [data-theme="dark"] & {
            color: ${colors.primary500};
        }
    }
`;
