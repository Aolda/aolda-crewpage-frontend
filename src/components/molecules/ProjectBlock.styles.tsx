import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { fontSize } from "@/styles/theme";

interface StyledProjectBlockProps {
    bgcolor: string;
}

export const StyledProjectBlock = styled.div<StyledProjectBlockProps>`
    display: flex;
    width: ${pxToRem(273)};
    height: ${pxToRem(409.5)};
    border-radius: ${pxToRem(20)};
    flex-direction: column;
    justify-content: space-between;

    background-color: ${(props) => props.bgcolor};

    * {
        margin: 0;
        color: white;
    }

    .infoSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: ${pxToRem(12)};
        
        padding: ${pxToRem(20)} 0 0 0;
    }

    .textSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: ${pxToRem(4)};

        h1 {
            font-size: ${pxToRem(36)};
            font-weight: bold;
        }
    }

    .imgSection {
        position: relative;
        width: auto;
        height: 50%;
        overflow: hidden;
        img {
            position: absolute;
            height: ${pxToRem(300)} !important;
            bottom: 0;
        }
    }
`;