import styled from 'styled-components';
import { colors, fontSize, theme } from '@/styles/theme';

export const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 4rem 0;
`;

export const PageList = styled.ul`
    display: flex;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
`;

export const PageItem = styled.li<{ $isActive: boolean }>`
    font-size: 1rem;
    color: ${(props) => (props.$isActive ? colors.primary500 : '#777777')};
    font-weight: ${(props) => (props.$isActive ? '700' : '400')};
    cursor: pointer;
    position: relative;
    min-width: 2.75rem;
    padding-bottom: 0.75rem;
    text-align: center;
    transition: color 0.2s ease;

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
    }

    &:hover {
        color: #1572B8;
    }

  /* 활성화된 페이지 하단 파란색 밑줄 */
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 2.75rem;
        height: 0.125rem;
        background: ${(props) => (props.$isActive ? colors.primary500 : '#1572B8')};
        display: ${(props) => (props.$isActive ? 'block' : 'none')};
        transform: translateX(-50%);
        transition: background-color 0.2s ease;
    }

    &:hover::after {
        display: block;
        background: #1572B8;
    }
`;

export const ArrowButton = styled.button`
    background: none;
    border: none;
    color: #777777;
    font-size: 0.875rem;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover:not(:disabled) {
        color: #1572B8;
    }

    &:disabled {
        cursor: default;
        opacity: 0.5;
    }

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
    }
`;
