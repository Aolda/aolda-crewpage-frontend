import styled from 'styled-components';
import { fontSize } from '@/styles/theme';

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
    border-radius: 1.5rem;
    width: auto;
    padding: 0.4375rem 1rem;
    color: ${(props) => props.$color};
    font-size: ${fontSize.smaller};

    background-color: ${(props) => props.$bgColor};
`;