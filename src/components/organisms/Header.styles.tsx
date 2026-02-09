import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { fontSize, colors } from "@/styles/theme";


export const StyledHeader = styled.header`
    display: flex;
    width: 85rem;
    height: 4.5rem;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    border: solid 1px ${colors.border};
    border-radius: 0.75rem;
    background-color: white;
    
    position: absolute;
    top: 2.5rem;
    left: 10.9375rem;
    z-index: 10;

    box-sizing: border-box;

    .iconSection {
        width: 2.25rem;
        height: 2.25rem;
    }

    .linkSeciton {
        display: inline-flex;
        align-items: center;
        height: 2.5rem;
    }
`;

export const NavLink = styled.span<{ $isActive: boolean }>`
    height: 2.5rem;
    text-align: center;
    padding: 0.5rem 2.25rem;
    font-size: ${fontSize.base};
    font-weight: 400;

    color: ${props => props.$isActive ? '#3B82F6' : '#6B7280'};

    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: #3B82F6; /* 마우스를 올렸을 때도 미리 피드백 제공 */
    }
`;