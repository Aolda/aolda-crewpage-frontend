// /src/components/templates/CrewDetail/CrewDetailPageTemplate.styles.ts
import styled from 'styled-components';
import { colors, theme } from '@/styles/theme';

export const TemplateWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.25rem;
    max-width: 90rem;
    width: 100%;

    margin: 0 auto;
    padding: 12.5rem 7.5rem;

    ${theme.media.desktopSm} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    ${theme.media.tablet} {
        flex-direction: column;
        gap: 0;
        padding-top: 4rem;
        padding-left: 0;
        padding-right: 0;
    }

    ${theme.media.mobile} {
        flex-direction: column;
        gap: 0;
        padding-top: 4rem;
        padding-left: 0;
        padding-right: 0;
    }
`;

/* 좌측 사이드바 (Profile) */
export const SidebarSection = styled.aside`
    flex-shrink: 0;
    width: 20rem;

    ${theme.media.tablet} {
        width: 100%;
        padding: 2.25rem 2rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        padding: 0.5rem 1rem;
    }
`;

/* 우측 컨텐츠 영역 */
export const ContentSection = styled.section`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    ${theme.media.desktopSm} {
        min-width: 0;
        width: auto;
    }

    ${theme.media.tablet} {
        padding: 2.25rem 2rem;
    }

    ${theme.media.mobile} {
        padding: 0.75rem 1rem;
    }
`;

/* 탭 메뉴 스타일 */
export const TabWrapper = styled.div`
    display: flex;
    margin-bottom: 2.25rem;

    ${theme.media.tablet} {
        margin-bottom: 1.5rem;
    }

    ${theme.media.mobile} {
        height: 1.9375rem;
        margin-bottom: 0;
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
    font-weight: ${(props) => (props.$isActive ? '700' : '400')};
    cursor: pointer;

    margin-bottom: -0.0625rem;
    transition: all 0.2s ease;

    [data-theme="dark"] & {
        color: ${(props) => (props.$isActive ? colors.primary500 : '#EFEFEF')};
    }

    ${theme.media.tablet} {
        font-size: 1rem;
    }

    ${theme.media.mobile} {
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0;
        gap: 0.375rem;
        font-size: 0.625rem;
        border-bottom: ${(props) => (props.$isActive ? `2px solid ${colors.primary500}` : 'none')};
        color: ${(props) => (props.$isActive ? colors.primary500 : colors.gray500)};
    }

    img {
        width: 1.25rem;
        height: auto;
        filter: ${(props) => (props.$isActive ? 'none' : 'grayscale(100%) opacity(0.6)')};

        ${theme.media.tablet} {
            width: 1.125rem;
            height: 1.125rem;
        }

        ${theme.media.mobile} {
            display: none;
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
        /* 모바일에서는 카드 스타일이므로 구분선 제거 */
        & > *:not(:last-child) {
            border-bottom: none;
        }
    }

    [data-theme="dark"] & > *:not(:last-child) {
        border-bottom-color: rgba(255, 255, 255, 0.08);
    }
`;
