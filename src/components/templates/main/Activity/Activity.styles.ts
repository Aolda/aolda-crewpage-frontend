import styled from 'styled-components';
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
    gap: 1.25rem; /* 20px */
    margin-bottom: 3.75rem; /* 60px */
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
    display: flex;
    width: 36.75rem;
    height: 7.5rem;

    padding: 1.5rem 2.25rem;
    background: #FFFFFF;
    border: 0.0625rem solid ${(props) => (props.$isActive ? colors.primary500  : '#F3F4F6')};
    border-radius: 1rem;

    justify-content: space-between;
    text-align: left;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: ${(props) => (props.$isActive ? '0 0.5rem 1.5rem rgba(59, 130, 246, 0.1)' : 'none')};

    h4 {
        font-size: ${fontSize.body1};
        font-weight: 700;
        color: ${(props) => (props.$isActive ? colors.primary500 : '#111827')};
        margin: 0;
    }

    p {
        margin: 0;
        font-size: ${fontSize.smaller};
        color: #6B7280;
        line-height: 1.5;
        max-width: 18.75rem;
        text-align: right;
        span {
            font-weight: 700;
            color: black;
        }
    }
`;

/* 수평 스크롤 리스트 영역 */
export const HorizontalScrollArea = styled.div`
    width: 100vw;
    position: relative;
    overflow-x: auto;
    
    &::-webkit-scrollbar {
        display: none; /* 스크롤바 숨김 */
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const CardList = styled.div`
    display: flex;
    gap: 1.5rem; /* 24px */
    padding-bottom: 2.5rem; /* 그림자 잘림 방지 */
`;