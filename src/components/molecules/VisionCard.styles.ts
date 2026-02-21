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
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.25rem;
        width: 30rem;
        height: 7rem;
        margin: 0 auto;
    }

    img {
        width: 7.5rem;
        height: 7.5rem;

        ${theme.media.mobile} {
            width: 4rem;
            height: 4rem;
        }
    }
`;

export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 19.5rem;
    gap: 0.75rem;

    ${theme.media.mobile} {
        text-align: left;
        align-items: left;
    }

    h1 {
        font-size: ${fontSize.h2};
        font-weight: 700;
        color: ${colors.primary500};

        ${theme.media.mobile} {
            font-size: 1.25rem;
        }
    }

    p {
        color: ${colors.gray600};
        font-size: ${fontSize.base};
        white-space: pre-wrap;
        word-break: keep-all;

        ${theme.media.mobile} {
            font-size: ${fontSize.smaller};
        }
    }
`;