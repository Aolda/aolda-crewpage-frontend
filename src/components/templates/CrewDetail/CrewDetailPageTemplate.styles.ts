// /src/components/templates/CrewDetail/CrewDetailPageTemplate.styles.ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';

export const TemplateWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.25rem;
    width: 90rem;

    margin: 0 auto;
    padding-top: 12.5rem;
    padding-left: 7.5rem;
    padding-right: 7.5rem;

    ${theme.media.mobile} {
        flex-direction: column;
        width: 100%;
        padding: 6rem 1.25rem 2.5rem;
        gap: 1.5rem;
    }
`;

/* 좌측 사이드바 (Profile) */
export const SidebarSection = styled.aside`
    flex-shrink: 0;
    width: 20rem;

    ${theme.media.mobile} {
        width: 100%;
    }
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

    ${theme.media.mobile} {
        margin-bottom: 0;
        border-top: 1px solid ${colors.gray500};
        justify-content: space-around;
    }
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

    ${theme.media.mobile} {
        flex: 1;
        flex-direction: column; // 아이콘과 텍스트 수직 배치
        padding: 0.75rem 0;
        gap: 0.25rem;
        font-size: 0.75rem; // 텍스트 크기 축소
        border-bottom: ${(props) => (props.$isActive ? `2px solid ${colors.black500}` : 'none')};
        color: ${(props) => (props.$isActive ? colors.black500 : colors.gray500)};
    }

    img {
        width: 1.25rem;
        height: auto;
        filter: ${(props) => (props.$isActive ? 'none' : 'grayscale(100%) opacity(0.6)')};

        ${theme.media.mobile} {
            width: 1.5rem;
        }
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

    ${theme.media.mobile} {
        padding-top: 1rem;
        gap: 1rem;
    }
`;