import styled from 'styled-components';
import { fontSize } from '@/styles/theme';
import { pxToRem } from '@/styles/utils';

interface HashTagProps {
    $completed?: boolean,
    $date?: string,
    $bgColor: string,
}

export const StyledHashTag = styled.div<HashTagProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 24px;
    width: auto;
    padding: 7px 16px;
    color: white;
    font-size: 12px;

    background-color: ${(props) => props.$bgColor};
`;