import styled from 'styled-components';
import { fontSize, colors } from '@/styles/theme';

export const SelectContainer = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    min-width: 5.875rem; 
    width: auto;
`;

export const SelectHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 5.875rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    border: 1px solid #888888;
    border-radius: 0.5rem;
    background-color: white;
    cursor: pointer;
`;

export const LabelText = styled.span`
    font-size: ${fontSize.body2};
    // font-weight: 600;
    color: #555555;
    margin-right: 0.5rem;
    pointer-events: none;
`;

export const ArrowIcon = styled.div<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    margin-left: 0.5rem;

    &::after {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-right: 2px solid ${colors.gray600};
        border-bottom: 2px solid ${colors.gray600};
        
        transition: transform 0.3s ease;
        
        transform: ${props => props.$isOpen ? 'rotate(225deg)' : 'rotate(45deg)'};
        
        margin-top: ${props => props.$isOpen ? '0.25rem' : '0'};
        margin-bottom: ${props => props.$isOpen ? '0' : '0.25rem'};
    }
`;

export const OptionsList = styled.ul`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    min-width: 10rem;
    
    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* 부드러운 그림자 */
    padding: 0.5rem;
    z-index: 100;
    list-style: none;
`;

export const OptionItem = styled.li<{ $isSelected?: boolean }>`
    padding: 0.75rem 1rem;
    font-size: ${fontSize.body2};
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    /* 선택된 항목에 체크 표시나 색상 변경 */
    background-color: ${props => props.$isSelected ? '#f5f5f5' : 'transparent'};
    
    &:hover {
        background-color: #f0f0f0;
    }

    &::before {
        content: '✓';
        margin-right: 0.5rem;
        visibility: ${props => props.$isSelected ? 'visible' : 'hidden'};
    }
`;