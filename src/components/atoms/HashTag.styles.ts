import styled, { css } from 'styled-components';
import { ProjectStatus } from "@/types/project";
import { fontSize, colors } from '@/styles/theme';

interface HashTagProps {
    $status?: ProjectStatus,
    $date?: string,
}

export const StyledHashTag = styled.div<HashTagProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border-radius: 1.5rem;
    width: auto;
    height: 1.0625rem;
    padding: 0.5rem 0.75rem;
    font-size: ${fontSize.smaller};

    ${({ $date, $status }) => $status && css`
        background-color: ${() => {
            if ($status === 'DONE') return colors.primary500; // Blue
            if ($status === 'PLANNING') return colors.gray600; // Gray
            if ($status === 'ONGOING') return '#10B981'; // Green (예상)
            return '#E5E7EB';
        }};
        color: white;
    ` || $date && css`
        background-color: black;
        color: white;
    `}
`;