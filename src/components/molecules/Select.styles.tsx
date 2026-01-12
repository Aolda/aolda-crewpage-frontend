import styled from 'styled-components';
import { fontSize } from '@/styles/theme';

export const SelectContainer = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    
    width: 5.875rem;
    height: 3rem;
    padding: 0.75rem 1rem;
    
    border: 1px solid #888888;
    border-radius: 0.5rem;
    background-color: white;
    cursor: pointer;

    &:hover {
        border-color: #555555;
    }
`;

export const LabelText = styled.span`
    font-size: ${fontSize.body2};
    // font-weight: 600;
    color: #555555;
    margin-right: 0.5rem;
    pointer-events: none;
`;

export const ArrowIcon = styled.div`
    display: flex;
    align-items: center;
    pointer-events: none;
    
    &::after {
        content: '';
        width: 0.625rem;
        height: 0.625rem;
        border-right: 2px solid #888888;
        border-bottom: 2px solid #888888;
        transform: rotate(45deg);
        margin-bottom: 0.25rem;
    }
`;

export const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    opacity: 0;
    cursor: pointer;
    appearance: none;
`;