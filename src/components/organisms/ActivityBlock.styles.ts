// /src/components/organisms/ActivityBlock/styles/ts
import { fontSize, theme } from "@/styles/theme";
import { radius, semanticColors, typography } from "@/styles/tokens";

import styled from "styled-components"

export const StyledActivityBlock = styled.div`

    display: flex;
    border: 1px solid ${semanticColors.border.default};
    border-radius: ${radius.xl};
    background-color: ${semanticColors.background.card};

    width: 15rem;
    height: 20rem;
    padding: 1.25rem;

    & * {
        flex-shrink: 0;
        box-sizing: unset !important;
    }

    flex-shrink: 0;
    box-sizing: border-box;

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    ${theme.media.tablet} {
        width: 9.6875rem;
        height: 15rem;
        padding: 1rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        height: auto;
        min-height: 3.8125rem;
        padding: 0.75rem;
        gap: 0.5rem;
        border: 1px solid ${semanticColors.border.default};
        border-radius: ${radius.md};
        justify-content: center;
    }

    .mobileStatus {
        display: none;

        ${theme.media.mobile} {
            display: block;
            font-size: 0.625rem;
            color: ${semanticColors.text.secondary};
        }
    }

    .hashTagSection {
        display: inline-flex;
        align-items: flex-start;
        gap: 0.5rem;
        margin-bottom: 1rem;

        ${theme.media.tablet} {
            width: 7.6875rem;
        }

        ${theme.media.mobile} {
            display: none;
        }
    }

    .topSection {
        display: flex;
        flex-direction: column;
    }

    .titleSection {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        gap: 0.5rem;
        overflow: hidden;

        h2 {
            ${typography('Body1')};
            font-weight: bold;
            color: ${semanticColors.text.primary};
            width: 100%;
            word-break: break-word;
            overflow-wrap: break-word;

            ${theme.media.tablet} {
                font-size: ${fontSize.smaller};
            }

            ${theme.media.mobile} {
                font-size: ${fontSize.smaller};
                word-break: keep-all;
            }
        }

        span {
            font-size: ${fontSize.smaller};
            color: ${semanticColors.text.secondary};
            font-family: var(--font-cjk);
            width: 100%;
            word-break: break-word;
            overflow-wrap: break-word;

            ${theme.media.tablet} {
                font-size: 0.625rem;
            }

            ${theme.media.mobile} {
                display: none;
            }
        }

        * {
            margin: 0;
        }
    }

    .bottomSection {
        display: flex;
        flex-direction: row;
        justify-content: right;
        width: 100%;

        ${theme.media.mobile} {
            display: none;
        }

        p {
            margin: 0;
            padding-left: 2rem;
            width: 10rem;
            height: 3.375rem;
            white-space: pre-wrap;
            font-size: ${fontSize.smaller};
            color: ${semanticColors.text.secondary};
            font-family: var(--font-cjk);
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: justify;

            ${theme.media.tablet} {
                width: 5.6875rem;
                font-size:  0.625rem;
            }
        }
    }

    [data-theme="dark"] & {
        border-color: ${semanticColors.border.default};
        background-color: ${semanticColors.background.card};
        color: ${semanticColors.text.primary};

        .titleSection {
            h2 {
                color: ${semanticColors.text.brand};
            }

            span {
                color: ${semanticColors.text.primary};
            }
        }

        .bottomSection {
            p {
                color: ${semanticColors.text.primary};
            }
        }
    }
`;
