import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { fontSize, colors } from "@/styles/theme";


export const StyledHeader = styled.header`
    display: flex;
    width: calc(100% - 20rem);
    height: 4.5rem;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    border: solid 1px ${colors.border};
    border-radius: 0.75rem;
    background-color: white;
    
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translate(-50%);
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

    color: ${props => props.$isActive ? colors.primary500 : colors.gray500};

    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color:${colors.primary500}; /* 마우스를 올렸을 때도 미리 피드백 제공 */
    }
`;