import styled from 'styled-components';
import { colors, fontSize, theme } from '@/styles/theme';

export const HeaderBackground = styled.header`
    width: 100%;
    height: 30rem;
    background:
        url('/images/crew/crewbookBG.png') right bottom / auto 108% no-repeat,
        linear-gradient(to top right, #F1F7FC 0%, #FCFFFF 100%);
    display: flex;
    align-items: end;

    padding-left: 15.9375rem;
    padding-right: 15.9375rem;
    padding-bottom: 3.75rem;

    ${theme.media.desktopSm} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    ${theme.media.tablet} {
        height: 25rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    ${theme.media.mobile} {
        height: auto;
        padding: 5rem 1rem 1rem;
        align-items: flex-start;
        background: #ffffff;
    }

    [data-theme="dark"] & {
        background:
            url('/images/crew/crewbookBG.png') right bottom / auto 108% no-repeat,
            linear-gradient(to top, #32383D 0%, #3B3F3F 100%);
    }

    ${theme.media.mobile} {
        [data-theme="dark"] & {
            background: #2A2A2A;
        }
    }
`;

export const HeaderContent = styled.div`
    ${theme.media.mobile} {
        width: 100%;
    }

    h1 {
        font-size: ${fontSize.h2};
        font-weight: 700;
        line-height: 1.4;
        margin-bottom: 1.5rem;
        span { color: ${colors.primary500}; }

        ${theme.media.tablet} {
            font-size: ${fontSize.h3};
        }

        ${theme.media.mobile} {
            font-size: ${fontSize.base};
            margin-bottom: 0.625rem;
        }

        [data-theme="dark"] & {
            color: ${colors.primary500};
        }
    }
`;

export const ContentContainer = styled.main`
    display: flex;
    max-width: 75rem;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 4.5rem;

    ${theme.media.tablet} {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    ${theme.media.mobile} {
        padding: 0 1.25rem;
    }
`;

export const FilterBar = styled.section`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 2rem;
    align-items: center;

    ${theme.media.tablet} {
        margin-bottom: 1.5rem;
    }

    ${theme.media.mobile} {
        white-space: nowrap;
        padding-bottom: 11rem;
        margin-bottom: -10rem;
        
        &::-webkit-scrollbar { display: none; }
    }
`;

export const AllButton = styled.button<{ $isActive: boolean }>`
    width: 4.4375rem;
    height: 2.9375rem;
    border-radius: 0.5rem;
    border: none;
    background-color: ${props => props.$isActive ? '#181818' : '#444444'};
    color: ${props => props.$isActive ? 'white' : '#777777'};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${props => props.$isActive ? '#111827' : '#D1D5DB'};
    }

    ${theme.media.tablet} {
        width: 3.875rem;
        height: 1.9375rem;
        font-size: ${fontSize.smaller};
    }

    ${theme.media.mobile} {
        display: none;
    }

    [data-theme="dark"] & {
        background-color: ${props => props.$isActive ? '#181818' : '#444444'};
        color: ${props => props.$isActive ? '#FFFFFF' : '#9CA3AF'};
    }
`;

export const CrewList = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${theme.media.mobile} {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 0.5rem;
    }
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: 6.25rem 0;
    color: #9CA3AF;
    font-size: 1.125rem;
`;
