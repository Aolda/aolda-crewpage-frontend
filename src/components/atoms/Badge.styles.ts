import styled, { css } from 'styled-components';
import { fontSize, colors } from '@/styles/theme';
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
    white-space: nowrap;

    /* 1. Solid Variant (배경 있음 - [A-2] 활동중, [A-4] 진행중 등) */
    ${({ $variant, $status }) => $variant === 'solid' && css`
        background-color: ${() => {
            // 1. 크루 활동 상태 처리 (boolean)
            if (typeof $status === 'boolean') {
                return $status ? colors.primary500 : colors.gray600;
            }

            // 2. 프로젝트 진행 상태 처리 (ActivityStatusKey 키값)
            switch ($status) {
                case 'ACTIVITY_STATUS/RECRIUTING': // 모집중
                case 'ACTIVITY_STATUS/ONBOARDING':  // 진행중
                    return colors.primary500;     // Blue
                case 'ACTIVITY_STATUS/COMPLETED':   // 완료
                    return '#10B981';             // Green
                default:
                    return '#E5E7EB';             // 기본 회색
            }
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