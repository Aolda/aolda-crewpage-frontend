// /src/components/molecules/VisionCard.styles.ts
import styled from "styled-components"
import { colors, fontSize, theme } from "@/styles/theme";

export const StyledVisionCard = styled.div `
    display: flex;
    width: 24rem;
    height: 25rem;
    border: 2px solid ${colors.border};
    border-radius: 1rem;
    background-color: #FEFEFE;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 2rem 2.25rem;
    gap: 2.25rem;

    ${theme.media.mobile} {
        border-radius: 0.5rem;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border: 1px solid ${colors.border};
        gap: 1rem;
        padding: 0.75rem;
        width: 100%;
        height: 4.5rem;
    }

    ${theme.media.tablet} {
        border: 1px solid ${colors.border};
        border-radius: 0.75rem;
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
        background-color: #2A2A2A;
        border-color: #444444;
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
        font-size: ${fontSize.h2};
        font-weight: 700;
        color: ${colors.primary500};

        ${theme.media.mobile} {
            font-size: ${fontSize.smaller};
        }

        ${theme.media.tablet} {
            font-size: ${fontSize.base};
        }
    }

    p {
        color: ${colors.gray600};
        font-size: ${fontSize.base};
        white-space: pre-wrap;
        word-break: keep-all;

        ${theme.media.mobile} {
            font-size: 0.625rem;
        }

        ${theme.media.tablet} {
            font-size: ${fontSize.smaller};
            white-space: normal;
        }

        [data-theme="dark"] & {
            color: #EFEFEF;
        }
    }
`;