// /src/components/molecules/VisionCard.styles.ts
import styled from "styled-components"
import { colors, fontSize, theme } from "@/styles/theme";

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
    
    ${theme.media.mobile} {
        width: 18rem;
        height: 20rem;
        padding: 1.5rem;
        gap: 1.5rem;
    }

    img {
        width: 7.5rem;
        height: 7.5rem;

        ${theme.media.mobile} {
            width: 5.5rem;
            height: 5.5rem;
        }
    }
`;

export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 19.5rem;
    gap: 0.75rem;

    ${theme.media.mobile} {
        width: 100%;
        gap: 0.5rem;

        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: ${fontSize.smaller};
            line-height: 1.5;
        }
    }

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