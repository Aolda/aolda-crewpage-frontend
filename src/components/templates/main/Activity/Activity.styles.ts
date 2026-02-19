import styled, { keyframes } from 'styled-components';
import { colors, fontSize } from '@/styles/theme';

export const ActivityWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

/* 탭 메뉴 스타일 */
export const TabContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2.25rem;
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

    h4 {
        font-size: ${fontSize.body1};
        font-weight: 700;
        color: #111827;
        margin: 0;
    }

    p {
        margin: 0;
        font-size: ${fontSize.smaller};
        color: #6B7280;
        line-height: 1.5;
        text-align: right;
        font-weight: 400;
        span {
            font-weight: 700;
            color: black;
        }
    }
`;

const infiniteScroll = keyframes`
    0% { transform: translateX(-50%); }   /* 이미 화면이 카드로 꽉 찬 상태에서 시작 */
    100% { transform: translateX(-25%); } /* 한 세트만큼 오른쪽으로 이동 후 리셋 */
`;

/* 수평 스크롤 리스트 영역 */
export const HorizontalScrollArea = styled.div`
    width: 100vw;
    position: relative;
    overflow: hidden;

    pointer-events: none;

    /* 양 끝이 자연스럽게 사라지는 페이드 효과 (선택 사항) */
    mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 15%,
        rgba(0, 0, 0, 1) 85%,
        rgba(0, 0, 0, 0) 100%
    );
    
    &::-webkit-scrollbar {
        display: none; /* 스크롤바 숨김 */
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const CardList = styled.div<{ $count: number }>`
    display: flex;
    gap: 1.5rem;

    width: max-content;
    /* 왼쪽 -> 오른쪽 무한 애니메이션 적용 */
    /* 숫자가 커질수록 더 천천히 움직임, 활동 개수에 맞게 스크롤 되는 속도 조정 */
    animation: ${infiniteScroll} ${props => props.$count * 20}s linear infinite;

    padding-right: 1.5rem;
`;