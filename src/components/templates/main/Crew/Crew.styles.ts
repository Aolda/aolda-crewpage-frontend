// /src/components/templates/main/Crew/Crew/styles/ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';

export const CrewSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
`;

export const CrewGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
    gap: 1.5rem;
    width: 100%;
    max-width: 75rem;
    margin: 0 auto;

    ${theme.media.mobile} {
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        gap: 1rem;
        padding: 0 1rem;
    }

    ${theme.media.tablet} {
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
        padding: 0;
    }

    & > * {
        box-sizing: border-box !important;
        flex-shrink: 0;
    }
`;