import styled from "styled-components"
import { colors, fontSize } from "@/styles/theme";

export const StyledVisionCard = styled.div `
    display: flex;
    width: 24rem;
    height: 25rem;
    border: 2px solid ${colors.border};;
    border-radius: 1rem;
    background-color: white;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 2rem 2.25rem;
    gap: 2.25rem;
    // z-index: 1;

    img {
        width: 7.5rem;
        height: 7.5rem;
    }
`;

export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 19.5rem;
    gap: 0.75rem;


    h1 {
        font-size: ${fontSize.h2};
        font-weight: 700;
        color: ${colors.primary500};
    }

    p {
        color: ${colors.gray600};
        font-size: ${fontSize.base};
        white-space: pre-wrap;
        word-break: keep-all;
    }
`;