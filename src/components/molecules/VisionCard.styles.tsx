import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { colors } from "@/styles/theme";

export const StyledVisionCard = styled.div `
    display: flex;
    width: ${pxToRem(348)};
    height: ${pxToRem(358)};
    border: 2px solid ${colors.border};
    border-radius: ${pxToRem(16)};

    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: ${pxToRem(32)} ${pxToRem(36)};

    img {
        width: ${pxToRem(120)};
        height: ${pxToRem(120)};
    }
    
    h1 {
        color: ${colors.primary500};
    }

    span {
        color: ${colors.gray600};
        white-space: pre-wrap;
    }
`;