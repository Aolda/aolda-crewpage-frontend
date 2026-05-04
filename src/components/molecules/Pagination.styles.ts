import styled from 'styled-components';
import { fontSize, theme } from '@/styles/theme';

export const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 4rem 0;
`;

export const PageList = styled.ul`
    display: flex;
    gap: 1.5rem;
    list-style: none;
    padding: 0;
`;

export const PageItem = styled.li<{ $isActive: boolean }>`
    font-size: 1rem;
    color: ${(props) => (props.$isActive ? '#3B82F6' : '#9CA3AF')};
    font-weight: ${(props) => (props.$isActive ? '700' : '400')};
    cursor: pointer;
    position: relative;
    padding-bottom: 0.25rem;

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
    }

  /* 활성화된 페이지 하단 파란색 밑줄 */
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.125rem;
        background: #3B82F6;
        display: ${(props) => (props.$isActive ? 'block' : 'none')};
    }
`;

export const ArrowButton = styled.button`
    background: none;
    border: none;
    color: #9CA3AF;
    font-size: 0.875rem;
    cursor: pointer;
    &:disabled {
        cursor: default;
        opacity: 0.5;
    }

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
    }
`;