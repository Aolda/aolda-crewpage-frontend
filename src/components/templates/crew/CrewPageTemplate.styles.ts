import styled from 'styled-components';
import { pxToRem } from '@/styles/utils';

export const HeaderBackground = styled.header`
    width: 100%;
    height: 30rem;
    background: linear-gradient(108deg, #E0F2FE 0%, #DBEAFE 100%);
    display: flex;
    align-items: end;

    padding-left: 15.9375rem;
    padding-right: 15.9375rem;
    padding-bottom: 3.75rem;
    
    background-image: url('/crewbookBG.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 90rem;

    h1 {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.4;
        margin-bottom: 1.5rem;
        strong { color: #1E40AF; }
    }
`;

export const ContentContainer = styled.main`
    width: 90rem;
    padding: 4.5rem 7.5rem;
    margin: 0 auto;
`;

export const FilterBar = styled.section`
    display: flex;
    gap: 0.75rem;
    margin-bottom: 2rem;
    align-items: center;
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