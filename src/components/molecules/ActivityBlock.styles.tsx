import { fontSize } from "@/styles/theme";

import styled from "styled-components"

export const StyledActivityBlock = styled.div`
    display: flex;
    border: 1px solid #E2E2E2;
    border-radius: 1.25rem;
    width: 15rem;
    height: 20rem;
    padding: 1.5rem;

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .hashTagSection {
        display: inline-flex;
        align-items: flex-start;
        gap: 0.5rem;
        margin-bottom: 1rem;
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
        gap: 0.5rem;

        h2 {
            font-size: ${fontSize.body1};
            color: #1A8EE5;
            font-weight: bold;
        }

        span {
            font-size: ${fontSize.smaller};
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
            width: 10rem;
            height: 3.375rem;
            white-space: pre-wrap;
            font-size: ${fontSize.smaller};
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;