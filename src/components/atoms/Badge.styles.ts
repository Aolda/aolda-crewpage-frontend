import styled, { css } from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';
import { BadgeVariant } from "./Badge";
import { ActivityStatusKey } from "@/types/project";


export const StyledBadge = styled.span<{ $variant: BadgeVariant; $status?: ActivityStatusKey | boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: ${fontSize.smaller};
    border-radius: 0.625rem;
    width: fit-content;
    height: 1.9375rem;
    padding: 0.4375rem 1rem;
    white-space: nowrap;

    ${theme.media.tablet} {
        height: 1.75rem;
        font-size: 0.625rem;
    }

    ${theme.media.mobile} {
        height: auto;
        font-size: 0.625rem;
        padding: 0;
        border: none;
    }

    /* 1. Solid Variant (배경 있음 - [A-2] 활동중, [A-4] 진행중 등) */
    ${({ $variant, $status }) => $variant === 'solid' && css`
        background-color: ${() => {
            if (typeof $status === 'boolean') {
                return $status ? colors.primary500 : colors.gray600;
            }
            switch ($status) {
                case 'ACTIVITY_STATUS/RECRIUTING':
                case 'ACTIVITY_STATUS/ONBOARDING':
                    return colors.primary500;
                case 'ACTIVITY_STATUS/COMPLETED':
                    return '#10B981';
                default:
                    return '#E5E7EB';
            }
        }};
        color: white;

        ${typeof $status === 'boolean' && css`
            ${theme.media.mobile} {
                background-color: transparent;
                color: ${$status ? colors.primary500 : colors.gray600};
            }
        `}
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