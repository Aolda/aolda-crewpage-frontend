import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { colors } from "@/styles/theme";

export const StyledVisionCard = styled.div `
    display: flex;
    width: 21.75rem;
    height: 22.75rem;
    border: 2px solid ${colors.border};;
    border-radius: 1rem;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 2rem 2.25rem;

    img {
        width: 7.5rem;
        height: 7.5rem;
    }
    
    h1 {
        color: ${colors.primary500};
    }

    span {
        color: ${colors.gray600};
        white-space: pre-wrap;
    }
`;