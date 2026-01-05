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
        gap: ${pxToRem(32)};

        p {
            margin: 0;
            color: #777777;
            font-size: ${fontSize.body1};
            font-weight: 400;
            line-height: 1.5;

            white-space: pre-wrap;
        }
    }

    button {
        background: none;
        border: solid 1px #777777;
        border-radius: ${pxToRem(8)};
        padding: ${pxToRem(12)} ${pxToRem(16)};
    }
`;