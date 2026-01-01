import styled from 'styled-components';
import { fontSize } from '@/styles/theme';
import { pxToRem } from '@/styles/utils';

interface HashTagProps {
    $completed?: boolean,
    $date?: string,
    $color: string,
    $bgColor: string,
}

export const StyledHashTag = styled.div<HashTagProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: ${pxToRem(24)};
    width: auto;
    padding: ${pxToRem(7)} ${pxToRem(16)};
    color: ${(props) => props.$color};
    font-size: ${fontSize.smaller};

    background-color: ${(props) => props.$bgColor};
`;