import styled from 'styled-components';
import { fontSize } from '@/styles/theme';

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
    gap: 3.4375rem;

    .leftSection {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .titleSection {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        h3 {
            margin: 0;
            font-size: ${fontSize.base};
            font-weight: bold;
        }
    }

    .legendSection {
        display: flex;
        gap: 1rem;
    }

    .legendItem {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: ${fontSize.small};
        color: #555;
    }

    .rightSection {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ColorBox = styled.div<{ $color: string }>`
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
    background-color: ${(props) => props.$color};
`;