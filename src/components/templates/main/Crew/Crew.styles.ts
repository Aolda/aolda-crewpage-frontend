// /src/components/templates/main/Crew/Crew/styles/ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';

export const CrewSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const CrewGridWrapper = styled.div`
    width: 100%;

    ${theme.media.mobile} {
        position: relative;
        overflow: hidden;
        padding: 1.5rem 1rem 2rem;
        width: calc(100% + 2rem);
        margin-left: -1rem;

        &::before {
            content: '';
            position: absolute;
            width: 11.6875rem;
            height: 19.5625rem;
            left: 0;
            top: 0;
            background: linear-gradient(270deg, #48A4EA 0%, rgba(72, 164, 234, 0.3) 100%);
            filter: blur(0.25rem);
            border-radius: 5.84375rem 5.84375rem 0 0;
            transform: matrix(0, -1, -1, 0, 0, 0);
            z-index: 0;
            pointer-events: none;
        }

        &::after {
            content: '';
            position: absolute;
            width: 11.6875rem;
            height: 19.5625rem;
            right: 7.875rem;
            top: 8.5rem;
            background: linear-gradient(270deg, #1A8EE5 0%, rgba(26, 142, 229, 0.3) 100%);
            filter: blur(0.25rem);
            border-radius: 5.84375rem 5.84375rem 0 0;
            transform: rotate(-90deg);
            z-index: 0;
            pointer-events: none;
        }
    }
`;

export const CrewMoreLink = styled.a`
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

/* 기수 페이지네이션 컨테이너 */
export const GenerationPagination = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    width: 100%;
    max-width: 75rem;

    ${theme.media.mobile} {
        margin-bottom: 2rem;
        /* 기수가 많아질 경우를 대비해 가로 스크롤 허용 */
        overflow-x: auto;
        white-space: nowrap;
        justify-content: center;
        padding-bottom: 0.5rem;
        
        &::-webkit-scrollbar { display: none; }
    }
`;

/* 개별 기수 탭 버튼 스타일 */
export const GenButton = styled.button<{ $isActive: boolean }>`
    padding: 0.5rem 1.25rem;
    background: transparent;
    border: none;

    /* 글씨 스타일 */
    font-size: ${fontSize.base};
    font-weight: ${(props) => (props.$isActive ? '700' : '400')};
    color: ${(props) => (props.$isActive ? colors.primary500 : colors.gray500)};

    /* 선택된 탭 하단 파란색 밑줄 */
    border-bottom: 2px solid ${(props) => (props.$isActive ? colors.primary500 : 'transparent')};

    cursor: pointer;
    transition: all 0.2s ease;

    ${theme.media.mobile} {
        font-size: ${fontSize.smaller};
        padding: 0.5rem 1rem; // 모바일에서 터치 영역 확보 및 간격 조정
    }

    &:hover {
        color: ${colors.primary500};
    }

    [data-theme="dark"] & {
        color: ${(props) => (props.$isActive ? colors.primary500 : '#6B7280')};
    }
`;

export const CrewGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 1.5rem;
    width: 100%;
    max-width: 75rem;
    margin: 0 auto;

    ${theme.media.mobile} {
        position: relative;
        grid-template-columns: repeat(2, 1fr);
        justify-items: stretch;
        gap: 0.75rem;
        padding: 0;
        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            width: 11.6875rem;
            height: 13.875rem;
            left: 9.5625rem;
            top: -12.125rem;
            background: linear-gradient(90deg, #A3D2F5 0%, rgba(163, 210, 245, 0.3) 100%);
            filter: blur(0.25rem);
            border-radius: 5.84375rem 5.84375rem 0 0;
            transform: matrix(0, 1, 1, 0, 0, 0);
            z-index: 0;
            pointer-events: none;
        }

        & > :nth-child(n + 11) {
            display: none;
        }

        & > * {
            position: relative;
            z-index: 1;
        }
    }

    ${theme.media.tablet} {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1rem;
        padding: 0;
    }

    & > * {
        box-sizing: border-box !important;
        flex-shrink: 0;
    }
`;
