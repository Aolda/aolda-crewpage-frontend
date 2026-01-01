import styled from 'styled-components';
import { fontSize } from '@/styles/theme';
import { pxToRem } from '@/styles/utils';

export const StyledOverviewCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${pxToRem(384)};
    height: ${pxToRem(147)};
    padding: ${pxToRem(31)} ${pxToRem(46)};
    background-color: white;
    border-radius: ${pxToRem(60)} ${pxToRem(12)} ${pxToRem(60)} ${pxToRem(12)}; 
    box-shadow: 0px ${pxToRem(4)} ${pxToRem(20)} 0px #1A8EE54D;
    gap: ${pxToRem(55)};

    .leftSection {
        display: flex;
        flex-direction: column;
        gap: ${pxToRem(16)};
    }

    .titleSection {
        display: flex;
        align-items: center;
        gap: ${pxToRem(8)};
        h3 {
            margin: 0;
            font-size: ${fontSize.body1};
            font-weight: bold;
        }
    }

    .legendSection {
        display: flex;
        gap: ${pxToRem(16)};
    }

    .legendItem {
        display: flex;
        align-items: center;
        gap: ${pxToRem(6)};
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
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    border-radius: ${pxToRem(4)};
    background-color: ${(props) => props.$color};
`;