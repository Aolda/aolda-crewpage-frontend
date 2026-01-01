import styled from "styled-components";
import { fontSize } from "@/styles/theme";
import { pxToRem } from "@/styles/utils";

export const StyledLinkSection = styled.section`
    .imgSection {
        width: ${pxToRem(588)};
        height: ${pxToRem(441)};

        img {
            width: 100%;
        }
    }

    .textSection {
        display: flex;
        flex-direction: column;
        width: ${pxToRem(588)};
    }

    button {
        background: none;
        border: solid 1px #777777;
    }
`;