// /src/components/molecules/Select/styles/ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';

export const SelectContainer = styled.div`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    min-width: 5.875rem;
    width: auto;

    ${theme.media.tablet} {
        min-width: 4.9375rem;
        width: auto;
    }

    ${theme.media.mobile} {
        min-width: 4.125rem;
        width: auto;
    }
`;

export const SelectHeader = styled.div<{ $isSelected?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-width: 5.875rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    border: 1px solid #777777;
    border-radius: 0.5rem;
    background-color: white;
    cursor: pointer;

    [data-theme="dark"] & {
        background-color: #2A2A2A;
        border-color: #777777;
    }

    ${theme.media.tablet} {
        min-width: 4.9375rem;
        width: auto;
        height: 1.9375rem;
        padding: 0.5rem 0.75rem;
        white-space: nowrap;
    }

    ${theme.media.mobile} {
        min-width: 4.125rem;
        width: auto;
        height: 2rem;
        padding: 0.4375rem 0.875rem;
        border-radius: 0.375rem;
        background-color: ${props => props.$isSelected ? '#E8F4FC' : 'white'};
        border-color: ${props => props.$isSelected ? colors.primary500 : '#EFEFEF'};

        [data-theme="dark"] & {
            background-color: ${props => props.$isSelected ? '#E8F4FC' : 'transparent'};
            color: ${props => props.$isSelected ? colors.primary500 : '#EFEFEF'};
            border-color: ${props => props.$isSelected ? colors.primary500 : '#444444'};
        }
    }
`;

export const LabelText = styled.span<{ $isSelected?: boolean }>`
    font-size: ${fontSize.base};
    font-weight: 700;
    color: #777777;
    pointer-events: none;

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
        white-space: nowrap;
    }

    ${theme.media.mobile} {
        font-size: ${fontSize.smaller};
        font-weight: 400;
        color: ${props => props.$isSelected ? colors.primary500 : '#777777'};

        [data-theme="dark"] & {
            background-color: ${props => props.$isSelected ? '#E8F4FC' : 'transparent'};
            color: ${props => props.$isSelected ? colors.primary500 : '#EFEFEF'};
        }
    }
`;

export const ArrowIcon = styled.div<{ $isOpen: boolean, $isSelected?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    &::after {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-right: 2px solid #777777;
        border-bottom: 2px solid #777777;
        
        transition: transform 0.3s ease;
        
        transform: ${props => props.$isOpen ? 'rotate(225deg)' : 'rotate(45deg)'};
        
        margin-top: ${props => props.$isOpen ? '0.25rem' : '0'};
        margin-bottom: ${props => props.$isOpen ? '0' : '0.25rem'};

        ${theme.media.mobile} {
            width: 6px;
            height: 6px;
            border-right: 1px solid ${props => props.$isSelected ? colors.primary500 : '#444444'};
            border-bottom: 1px solid ${props => props.$isSelected ? colors.primary500 : '#444444'};
        }
    }
`;

export const OptionsList = styled.ul`
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    width: max-content;
    min-width: 10rem;

    background: white;
    border-radius: 0.75rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15); /* 부드러운 그림자 */
    padding: 0.5rem;
    z-index: 100;
    list-style: none;

    [data-theme="dark"] & {
        background: #444444;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    }

    ${theme.media.mobile} {
        right: auto;
        left: 0;
        max-height: 12rem;
        overflow-y: auto;
        min-width: 8rem;
        
        /* 스크롤바 커스텀 (선택 사항) */
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: ${colors.gray500};
            border-radius: 4px;
        }
    }
`;

export const OptionItem = styled.li<{ $isSelected?: boolean }>`
    padding: 0.75rem 1rem;
    font-size: ${fontSize.base};
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;

    /* 선택된 항목에 체크 표시나 색상 변경 */
    background-color: ${props => props.$isSelected ? '#f5f5f5' : 'transparent'};

    &:hover {
        background-color: #f0f0f0;
    }

    ${theme.media.tablet} {
        font-size: 0.75rem;
    }

    ${theme.media.mobile} {
        padding: 0.5rem 0.75rem;
        font-size: ${fontSize.smaller};
    }

    &::before {
        content: '✓';
        margin-right: 0.5rem;
        visibility: ${props => props.$isSelected ? 'visible' : 'hidden'};
    }

    [data-theme="dark"] & {
        color: #D1D5DB;
        background-color: ${props => props.$isSelected ? '#555555' : 'transparent'};

        &:hover {
            background-color: #555555;
        }
    }
`;