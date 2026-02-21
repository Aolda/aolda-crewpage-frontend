// /src/components/molecules/OverviewCard.styles.ts
import styled from 'styled-components';
import { fontSize, theme } from '@/styles/theme';

export const StyledOverviewCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24rem;
    height: 9.1875rem;
    padding: 1.9375rem 2.875rem;
    background-color: white;
    border-radius: 3.75rem 0.75rem 3.75rem 0.75rem; 
    box-shadow: 0px 0.25rem 1.25rem 0px #1A8EE54D;

    ${theme.media.mobile} {
        flex: 1;
        flex-direction: column;
        height: auto;
        padding: 1rem 0.25rem;
        gap: 0.75rem;
        border-radius: 1.5rem 0.5rem;
        min-width: 0;
    }

    .leftSection {
        display: flex;
        width: 10.625rem;
        flex-direction: column;
        gap: 1rem;
        flex-shrink: 0;

        ${theme.media.mobile} {
            width: 100%;
            align-items: center;
            gap: 0.4rem;
        }
    }

    .titleSection {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        ${theme.media.mobile} {
            flex-direction: column;
            gap: 0.2rem;
            img { width: 1rem; height: auto; }
        }

        h3 {
            margin: 0;
            font-size: ${fontSize.body1};
            font-weight: 700;

            ${theme.media.mobile} { font-size: 0.7rem; white-space: nowrap; }
        }
    }

    .legendSection {
        display: flex;
        gap: 1rem;

        ${theme.media.mobile} { gap: 0.4rem; }
    }

    .legendItem {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: ${fontSize.small};
        color: #555;

        ${theme.media.mobile} { font-size: 0.6rem; span { display: none; } }
    }

    .rightSection {
        display: flex;
        align-items: center;
        justify-content: center;

        ${theme.media.mobile} {
            order: -1;
        }
    }
`;

export const ColorBox = styled.div<{ $color: string }>`
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
    background-color: ${(props) => props.$color};

    ${theme.media.mobile} { width: 0.6rem; height: 0.6rem; }
`;