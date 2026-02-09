import styled from 'styled-components';
import { fontSize, colors } from '@/styles/theme';

export const TemplateWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.25rem;
    width: 90rem;

    margin: 0 auto;
    padding-top: 12.5rem;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
`;

/* 좌측 사이드바 (Profile) */
export const SidebarSection = styled.aside`
    flex-shrink: 0;
    width: 20rem;
`;

/* 우측 컨텐츠 영역 */
export const ContentSection = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

/* 탭 메뉴 스타일 */
export const TabWrapper = styled.div`
    display: flex;
    margin-bottom: 2.25rem;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1.25rem;
    background: transparent;
    border: none;
    border-bottom: 0.125rem solid ${(props) => (props.$isActive ? colors.primary500 : 'transparent')};
    
    color: ${(props) => (props.$isActive ? colors.primary500 : colors.gray500)};
    font-weight: ${(props) => (props.$isActive ? '700' : '500')};
    cursor: pointer;
    
    margin-bottom: -0.0625rem;
    transition: all 0.2s ease;

    img {
        filter: ${(props) => (props.$isActive ? 'none' : 'grayscale(100%) opacity(0.6)')};
    }
`;

/* 아이템 리스트 컨테이너 */
export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    /* 마지막 아이템을 제외하고 하단에 경계선 추가 */
    & > *:not(:last-child) {
        border-bottom: 0.0625rem solid #F3F4F6;
    }
`;