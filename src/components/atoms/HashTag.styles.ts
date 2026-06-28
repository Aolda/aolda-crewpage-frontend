import styled, { css } from 'styled-components';
import { ActivityStatusKey } from "@/types/project";
import { fontSize, colors, theme } from '@/styles/theme';

interface HashTagProps {
    $status?: ActivityStatusKey,
    $date?: string,
}

export const StyledHashTag = styled.div<HashTagProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    width: auto;
    height: 1.0625rem;
    padding: 0.5rem 0.75rem;
    font-size: ${fontSize.smaller};
    font-family: var(--font-cjk);

    ${theme.media.tablet} {
        padding: 0;
        background-color: transparent;
        color: #777777;
        font-size: 0.625rem;

        [data-theme="dark"] & {
            color: #EFEFEF;
        }
    }

    ${({ $date, $status }) => {
        // 1. 상태값(Status) 기반 스타일
        if ($status) {
            return css`
                background-color: ${() => {
                    // 프리픽스(STATUS/TYPE)에 상관없이 핵심 키워드로 색상 매핑
                    if ($status.includes('RECRIUTING') || $status.includes('ONBOARDING')) {
                        return colors.primary500; // Blue (진행/모집 중)
                    }
                    if ($status.includes('COMPLETED')) {
                        return '#10B981'; // Green (완료)
                    }
                    return colors.gray600; // 기본 회색 (기획/준비 중)
                }};
                color: #FEFEFE;
            `;
        }

        // 2. 날짜(Date) 기반 스타일
        if ($date) {
            return css`
                background-color: #232527;
                color: #FEFEFE;
            `;
        }
    }}
`;