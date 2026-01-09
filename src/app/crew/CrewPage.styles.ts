import styled from 'styled-components';
import { pxToRem } from '@/styles/utils';

export const PageWrapper = styled.div`
    width: 100%;
    background-color: #F9FAFB;
    min-height: 100vh;
`;

export const HeaderBackground = styled.header`
    width: 100%;
    height: ${pxToRem(480)};
    background: linear-gradient(108deg, #E0F2FE 0%, #DBEAFE 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-image: url('/crewbookBG.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: ${pxToRem(1100)};
    padding: 0 ${pxToRem(20)};

    h1 {
        font-size: ${pxToRem(32)};
        font-weight: 700;
        line-height: 1.4;
        margin-bottom: ${pxToRem(24)};
        strong { color: #1E40AF; }
    }
`;

export const ContentContainer = styled.main`
    max-width: ${pxToRem(1100)};
    margin: 0 auto;
    padding: ${pxToRem(40)} ${pxToRem(20)};
`;

export const FilterBar = styled.section`
    display: flex;
    gap: ${pxToRem(12)};
    margin-bottom: ${pxToRem(32)};
    align-items: center;
`;

export const AllButton = styled.button<{ $isActive: boolean }>`
    width: ${pxToRem(71)};
    height: ${pxToRem(47)};
    padding: ${pxToRem(12)} ${pxToRem(16)};
    border-radius: ${pxToRem(8)};
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
    gap: ${pxToRem(16)};
`;

export const EmptyState = styled.div`
    text-align: center;
    padding: ${pxToRem(100)} 0;
    color: #9CA3AF;
    font-size: ${pxToRem(18)};
`;