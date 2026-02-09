import styled from 'styled-components';
import { fontSize, colors } from '@/styles/theme';

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
    gap: 0.75rem;
    margin-bottom: 3rem;
    width: 100%;
    max-width: 75rem;
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
    border-bottom: 2px solid ${(props) => (props.$isActive ? '#3B82F6' : 'transparent')};
    
    cursor: pointer;
    transition: all 0.2s ease;

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

    & > * {
        box-sizing: border-box !important;
        flex-shrink: 0;
    }
`;