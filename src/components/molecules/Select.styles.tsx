import styled from 'styled-components';
import { fontSize } from '@/styles/theme';
import { pxToRem } from '@/styles/utils';

export const SelectContainer = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    width: ${pxToRem(62)};
    height: ${pxToRem(24)};
    padding: ${pxToRem(12)} ${pxToRem(16)};
    
    border: 1.5px solid #888888;
    border-radius: ${pxToRem(12)};
    background-color: white;
    cursor: pointer;

    &:hover {
        border-color: #555555;
    }
`;

export const LabelText = styled.span`
    font-size: ${fontSize.body2};
    font-weight: 600;
    color: #555555;
    margin-right: ${pxToRem(8)};
    pointer-events: none;
`;

export const ArrowIcon = styled.div`
    display: flex;
    align-items: center;
    pointer-events: none;
    
    &::after {
        content: '';
        width: ${pxToRem(10)};
        height: ${pxToRem(10)};
        border-right: 2px solid #888888;
        border-bottom: 2px solid #888888;
        transform: rotate(45deg);
        margin-bottom: ${pxToRem(4)};
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