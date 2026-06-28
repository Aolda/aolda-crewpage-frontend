// /src/components/templates/main/Crew/Crew/styles/ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';

export const CrewSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2.25rem;

    ${theme.media.tablet} {
        gap: 1.5rem;
    }

    ${theme.media.mobile} {
        gap: 0rem;
    }
`;

export const CrewGridWrapper = styled.div`
    width: 100%;

    ${theme.media.mobile} {
        position: relative;
        padding: 1.25rem 1rem;
        width: calc(100% + 2rem);
    }
`;

export const RectangleWrapper = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: flex;
        position: absolute;
        width: 100%;
        top: 1rem;
    }
`;

const rectangleBase = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: block;
        position: relative;
    }
`;

export const Rectangle1 = styled.div`
    ${rectangleBase}

    content: '';
    position: absolute;
    width: clamp(13.875rem, 59.2vw, 27rem);
    height: 11.6875rem;
    left: 40%;
    top: -1rem;
    background: linear-gradient(180deg, #A3D2F5 0%, #A3D2F54D 100%);
    filter: blur(0.25rem);
    border-radius: 5.84375rem 0 0 5.84375rem;
    z-index: 0;
    pointer-events: none;
`;

export const Rectangle2 = styled.div`
    ${rectangleBase}

    content: '';
    position: absolute;
    width: clamp(19.5625rem, 83.5vw, 38rem);
    height: 11.6875rem;
    left: -6%;
    top: 5rem;
    background: linear-gradient(180deg, #48A4EA 0%, #48A4EA4D 100%);
    filter: blur(0.25rem);
    border-radius: 0 5.84375rem 5.84375rem 0;
    z-index: 1;
    pointer-events: none;
`;

export const Rectangle3 = styled.div`
    ${rectangleBase}

    content: '';
    position: absolute;
    width: clamp(19.5625rem, 83.5vw, 38rem);
    height: 11.6875rem;
    left: 15%;
    top: 10.5rem;
    background: linear-gradient(180deg, #1A8EE5 0%, #1A8EE54D 100%);
    filter: blur(0.25rem);
    border-radius: 5.84375rem 0 0 5.84375rem;
    z-index: 1;
    pointer-events: none;
`;

export const CrewMoreLink = styled.a`
    display: none;

    ${theme.media.mobile} {
        display: inline-flex;
        align-items: center;
        gap: 0.375rem;
        font-size: ${fontSize.smaller};
        font-weight: 600;
        color: ${colors.primary500};
        text-decoration: none;
    }
`;

/* 기수 페이지네이션 컨테이너 */
export const GenerationPagination = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 75rem;

    ${theme.media.mobile} {
        /* 기수가 많아질 경우를 대비해 가로 스크롤 허용 */
        overflow-x: auto;
        white-space: nowrap;
        justify-content: center;
        
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

    ${theme.media.tablet} {
        padding: 0.5rem 1rem;
        font-size: 0.625rem;
    }

    ${theme.media.mobile} {
        font-size: ${fontSize.smaller};
        padding: 0.5rem 1rem; // 모바일에서 터치 영역 확보 및 간격 조정
    }

    &:hover {
        color: ${colors.primary500};
    }

    [data-theme="dark"] & {
        color: ${(props) => (props.$isActive ? colors.primary500 : '#EFEFEF')};
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
        height: 21.4375rem;
        align-content: flex-start;
        align-items: flex-start;
        justify-items: stretch;
        gap: 0.75rem;
        padding: 0;
        z-index: 1;

        & > :nth-child(n + 11) {
            display: none;
        }

        & > * {
            position: relative;
            z-index: 2;
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
