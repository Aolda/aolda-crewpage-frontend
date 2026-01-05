import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { fontSize } from "@/styles/theme";


export const StyledHeader = styled.header`
    display: flex;
    width: ${pxToRem(1360)};
    height: ${pxToRem(72)};
    justify-content: space-between;
    align-items: center;

    padding: ${pxToRem(16)};
    border: solid 1px #E2E2E2;
    border-radius: ${pxToRem(12)};
    background-color: white;
    
    position: sticky;
    top: ${pxToRem(40)};
    left: ${pxToRem(40)};
    z-index: 10;

    .iconSection {
        width: ${pxToRem(36)};
        height: ${pxToRem(36)};
    }

    .linkSeciton {
        display: inline-flex;
        height: ${pxToRem(40)};
        
        a {
            height: ${pxToRem(40)};
            text-align: center;
            padding: ${pxToRem(8)} ${pxToRem(20)};
            color: #777777;
            font-size: ${fontSize.base};
            font-weight: 400;
        }
    }
`;