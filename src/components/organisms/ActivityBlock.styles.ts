// /src/components/organisms/ActivityBlock/styles/ts
import { fontSize, theme } from "@/styles/theme";

import styled from "styled-components"

export const StyledActivityBlock = styled.div`

    display: flex;
    border: 1px solid #E2E2E2;
    border-radius: 1.25rem;
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

    ${theme.media.mobile} {
        width: 12rem;
        height: 16rem;
        padding: 1rem;
        border-radius: 1rem;
    }

    .hashTagSection {
        display: inline-flex;
        align-items: flex-start;
        gap: 0.5rem;
        margin-bottom: 1rem;

        ${theme.media.mobile} {
            margin-bottom: 0.5rem;
            transform: scale(0.9);
            transform-origin: left;
        }
    }

    .topSection {
        display: flex;
        flex-direction: column;
    }

    .titleSection {
        display: flex;
        width: auto;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        gap: 0.5rem;

        h2 {
            font-size: ${fontSize.body1};
            font-weight: bold;

            ${theme.media.mobile} {
                font-size: ${fontSize.base};
            }
        }

        span {
            font-size: ${fontSize.smaller};
            font-family: var(--font-cjk);

            {theme.media.mobile} {
                font-size: 0.75rem;
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

        p {
            margin: 0;
            padding-left: 2rem;
            width: 10rem;
            height: 3.375rem;
            white-space: pre-wrap;
            font-size: ${fontSize.smaller};
            font-family: var(--font-cjk);
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: justify;

            ${theme.media.mobile} {
                width: 8rem;
                font-size: 0.7rem;
                padding-left: 1rem;
            }
        }
    }
`;