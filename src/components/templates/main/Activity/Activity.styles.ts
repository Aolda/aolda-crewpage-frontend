// /src/components/templates/main/Activity/Activity.styles.ts
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { colors, fontSize, theme } from '@/styles/theme';

export const ActivityWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${theme.media.mobile} {
        align-items: center;
    }
`;

/* 탭 메뉴 스타일 */
export const TabContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2.25rem;

    ${theme.media.mobile} {
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        margin-bottom: 1.25rem;
    }

    ${theme.media.tablet} {
        flex-direction: row;
        width: 100%;
        gap: 1.25rem;
    }
`;

export const Tab = styled.div`
    display: flex;
    width: 36.75rem;
    height: 7.5rem;

    padding: 1.5rem 2.25rem;
    background: #FFFFFF;
    border: 2px solid #E2E2E2;
    border-radius: 1rem;

    justify-content: space-between;
    text-align: left;

    ${theme.media.mobile} {
        width: 100%;
        height: auto;
        flex-direction: column;
        align-items: flex-start;
        border-radius: 0.5rem;
        text-align: left;
        padding: 1rem;
        gap: 0.5rem;
        font-size: 0.625rem;

        br {
            display: none;
        }
    }

    ${theme.media.tablet} {
        flex: 1;
        width: auto;
        height: auto;
        flex-direction: column;
        align-items: center;
        text-align: left;
        padding: 1.5rem;
        gap: 1rem;
        justify-content: flex-start;
    }

    h4 {
        font-size: ${fontSize.body1};
        font-weight: 700;
        color: ${colors.primary500};
        margin: 0;

        ${theme.media.mobile} {
            font-size: 0.875rem;
        }
    }

    p {
        margin: 0;
        font-size: ${fontSize.smaller};
        color: #6B7280;
        line-height: 1.5;
        text-align: right;
        font-weight: 400;

        ${theme.media.mobile} {
            text-align: left;
            word-break: keep-all;
            font-size: 0.625rem;
        }

        ${theme.media.tablet} {
            text-align: center;
            font-size: ${fontSize.smaller};
        }

        span {
            font-weight: 700;
            color: black;
            ${theme.media.tabletDown} {
                color: ${colors.primary500};
            }
        }
    }
`;

const infiniteScroll = keyframes`
    0% { 
        transform: translateX(-50%);
    }
    100% { 
        transform: translateX(calc(0));
    }
`;

/* 수평 스크롤 리스트 영역 */
export const HorizontalScrollArea = styled.div`
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    overflow: hidden;
    pointer-events: none;

    mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 5rem,
        rgba(0, 0, 0, 1) calc(100% - 5rem),
        rgba(0, 0, 0, 0) 100%
    );

    ${theme.media.mobile} {
        display: none;
    }

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

/* 모바일 전용 활동 그리드 */
export const MobileActivityGrid = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
        width: 100%;
    }
`;

export const MoreLink = styled(Link)`
    display: none;

    ${theme.media.mobile} {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        margin-top: 1.5rem;
        font-size: ${fontSize.smaller};
        font-weight: 600;
        color: ${colors.primary500};
        text-decoration: none;

        &::after {
            content: '→';
        }
    }
`;

export const CardList = styled.div<{ $count: number }>`
    display: flex;
    gap: 1.5rem;
    width: max-content;

    /* 왼쪽 -> 오른쪽 무한 애니메이션 적용 */
    /* 숫자가 커질수록 더 천천히 움직임, 활동 개수에 맞게 스크롤 되는 속도 조정 */
    animation: ${infiniteScroll} ${props => props.$count * 15}s linear infinite;

    padding-right: 1.5rem;
`;