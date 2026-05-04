import styled from 'styled-components';
import { colors, fontSize, theme } from '@/styles/theme';

export const HeaderBackground = styled.header`
    width: 100%;
    height: 30rem;
    background: linear-gradient(108deg, #E0F2FE 0%, #DBEAFE 100%);
    display: flex;
    align-items: end;

    padding-left: 15.9375rem;
    padding-right: 15.9375rem;
    padding-bottom: 3.75rem;

    ${theme.media.desktopSm} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    background-image: url('/images/crew/crewbookBG.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;

    ${theme.media.tablet} {
        height: 25rem;
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    ${theme.media.mobile} {
        position: relative;
        height: 22rem;
        padding: 0 1.25rem 2.5rem;
        background-size: 40%;
        align-items: center;
    }
`;

export const HeaderContent = styled.div`

    ${theme.media.mobile} {
        position: absolute;
        bottom: 2.5rem;
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
            font-size: 1.5rem;
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

    ${theme.media.mobile} {
        padding: 2.5rem 1.25rem;
    }
`;

export const FilterBar = styled.section`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 2rem;
    align-items: center;

    ${theme.media.mobile} {
        overflow-x: auto;
        white-space: nowrap;
        padding-bottom: 12rem;
        margin-bottom: -10rem;
        
        &::-webkit-scrollbar { display: none; }
    }
`;

export const AllButton = styled.button<{ $isActive: boolean }>`
    width: 4.4375rem;
    height: 2.9375rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: ${props => props.$isActive ? '#111827' : '#E5E7EB'};
    color: ${props => props.$isActive ? 'white' : '#6B7280'};
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${props => props.$isActive ? '#111827' : '#D1D5DB'};
    }

    ${theme.media.mobile} {
        height: 2.5rem;
        padding: 0.5rem 0.75rem;
        font-size: ${fontSize.smaller};
    }
`;

export const CrewList = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: 6.25rem 0;
    color: #9CA3AF;
    font-size: 1.125rem;
`;