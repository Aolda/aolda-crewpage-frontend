import styled from 'styled-components';

export const SelectContainer = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    width: 62px;
    height: 24px;
    padding: 12px 16px;
    
    border: 1.5px solid #888888;
    border-radius: 12px;
    background-color: white;
    cursor: pointer;

    &:hover {
        border-color: #555555;
    }
`;

export const LabelText = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #555555;
    margin-right: 8px;
    pointer-events: none;
`;

export const ArrowIcon = styled.div`
    display: flex;
    align-items: center;
    pointer-events: none;
    
    &::after {
        content: '';
        width: 10px;
        height: 10px;
        border-right: 2px solid #888888;
        border-bottom: 2px solid #888888;
        transform: rotate(45deg);
        margin-bottom: 4px;
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