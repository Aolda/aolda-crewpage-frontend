import styled from 'styled-components';
import { colors, fontSize, theme } from '@/styles/theme';

export const Container = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.25rem;
    padding: 4rem 0;
`;

export const PageList = styled.ul`
    display: flex;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
`;

export const PageItem = styled.li<{ $isActive: boolean }>`
    display: flex;
    font-size: 1rem;
    color: ${(props) => (props.$isActive ? colors.primary500 : '#777777')};
    font-weight: ${(props) => (props.$isActive ? '700' : '400')};
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    transition: color 0.2s ease;

    border-bottom: ${(props) => (props.$isActive ? '2px solid' : '0px')};
    border-color: ${(props) => (props.$isActive ? colors.primary500 : '#1572B8')};

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
        font-weight: 400;
    }

    [data-theme="dark"] & {
        color: ${(props) => (props.$isActive ? colors.primary500 : '#EFEFEF')};
    }

    &:hover {
        color: #1572B8;
        border-bottom: 2px solid #1572B8;
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

    [data-theme="dark"] & {
        color: #EFEFEF;
    }


    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
    }
`;
