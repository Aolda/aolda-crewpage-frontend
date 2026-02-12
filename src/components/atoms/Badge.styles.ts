import styled, { css } from 'styled-components';
import { fontSize, colors } from '@/styles/theme';
import { BadgeVariant } from "./Badge";
import { ProjectStatus } from "@/types/project";


export const StyledBadge = styled.span<{ $variant: BadgeVariant; $status?: ProjectStatus | boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: ${fontSize.smaller};
    border-radius: 0.625rem;
    width: fit-content;
    height: 1.9375rem;
    padding: 0.4375rem 1rem;
    white-space: nowrap;
    white-space: nowrap;

    /* 1. Solid Variant (배경 있음 - [A-2] 활동중, [A-4] 진행중 등) */
    ${({ $variant, $status }) => $variant === 'solid' && css`
        background-color: ${() => {
            if ($status === 'ACTIVE' || $status === 'ONGOING') return colors.primary500; // Blue
            if ($status === 'INACTIVE' || $status === 'PLANNING') return colors.gray600; // Gray
            if ($status === 'DONE') return '#10B981'; // Green (예상)
            return '#E5E7EB';
        }};
        color: white;
    `}

    /* 2. Outline Variant (배경 없음 - [A-2] 기수, 학과 등) */
    ${({ $variant }) => $variant === 'outline' && css`
        background-color: transparent;
        border: 1px solid #D1D5DB;
        color: ${colors.gray600};
    `}

    /* 3. Transparent Variant (반투명 배경 - [A-5] 프로젝트 리스트) */
    ${({ $variant }) => $variant === 'transparent' && css`
        background-color: rgba(255, 255, 255, 0.2); // 흰색 반투명
        backdrop-filter: blur(4px);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
    `}
`;