// /src/components/molecules/VisionCard.styles.ts
import styled from "styled-components"
import { fontSize, theme } from "@/styles/theme";
import { radius, semanticColors, typography } from "@/styles/tokens";

export const StyledVisionCard = styled.div `
    display: flex;
    width: 24rem;
    height: 25rem;
    border: 2px solid ${semanticColors.border.default};
    border-radius: ${radius.xl};
    background-color: ${semanticColors.background.card};

    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 2rem 2.25rem;
    gap: 2.25rem;

    ${theme.media.mobile} {
        border-radius: ${radius.md};
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border: 1px solid ${semanticColors.border.default};
        gap: 1rem;
        padding: 0.75rem;
        width: 100%;
        height: 4.5rem;
    }

    ${theme.media.tablet} {
        border: 1px solid ${semanticColors.border.default};
        border-radius: ${radius.lg};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        padding: 1.5rem 1rem;
        gap: 1rem;
        margin: 0;
    }

    [data-theme="dark"] & {
        background-color: ${semanticColors.background.card};
        border-color: ${semanticColors.border.default};
    }

    img {
        width: 7.5rem;
        height: 7.5rem;

        ${theme.media.mobile} {
            width: 3rem;
            height: 3rem;
        }

        ${theme.media.tablet} {
            width: 5rem;
            height: 5rem;
        }
    }
`;

export const TextContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 19.5rem;
    gap: 0.75rem;

    ${theme.media.mobile} {
        flex: 1;
        width: auto;
        text-align: left;
        gap: 0.25rem;
    }

    ${theme.media.tablet} {
        text-align: center;
        align-items: center;
        width: 100%;
    }

    h1 {
        ${typography('Heading2')};
        font-weight: 700;
        color: ${semanticColors.text.brand};

        ${theme.media.mobile} {
            font-size: ${fontSize.smaller};
        }

        ${theme.media.tablet} {
            font-size: ${fontSize.base};
        }
    }

    p {
        ${typography('Body2')};
        color: ${semanticColors.text.secondary};
        white-space: pre-wrap;
        word-break: keep-all;

        ${theme.media.mobile} {
            font-size: 0.625rem;
        }

        ${theme.media.tablet} {
            font-size: ${fontSize.smaller};
            white-space: normal;
        }

    }
`;
