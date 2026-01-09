import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { fontSize, colors } from "@/styles/theme";


export const StyledHeader = styled.header`
    display: flex;
    width: calc(100% - ${pxToRem(80)});
    height: ${pxToRem(72)};
    justify-content: space-between;
    align-items: center;

    padding: ${pxToRem(16)};
    border: solid 1px ${colors.border};
    border-radius: ${pxToRem(12)};
    background-color: white;
    
    position: absolute;
    top: ${pxToRem(40)};
    left: ${pxToRem(40)};
    z-index: 10;

    box-sizing: border-box;

    .iconSection {
        width: ${pxToRem(36)};
        height: ${pxToRem(36)};
    }

    .linkSeciton {
        display: inline-flex;
        align-items: center;
        height: ${pxToRem(40)};
    }
`;

export const NavLink = styled.span<{ $isActive: boolean }>`
    height: ${pxToRem(40)};
    text-align: center;
    padding: ${pxToRem(8)} ${pxToRem(20)};
    font-size: ${fontSize.base};
    font-weight: 400;

    color: ${props => props.$isActive ? '#3B82F6' : '#6B7280'};

    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: #3B82F6; /* 마우스를 올렸을 때도 미리 피드백 제공 */
    }
`;