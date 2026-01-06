import { fontSize } from "@/styles/theme";
import { pxToRem } from "@/styles/utils";

import styled from "styled-components"

export const StyledActivityBlock = styled.div`
    display: flex;
    border: 1px solid #E2E2E2;
    border-radius: ${pxToRem(20)};
    width: ${pxToRem(240)};
    height: ${pxToRem(320)};
    padding: ${pxToRem(24)};

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .hashTagSection {
        display: inline-flex;
        align-items: flex-start;
        gap: ${pxToRem(8)};
        margin-bottom: ${pxToRem(16)};
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
        gap: ${pxToRem(8)};

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
            width: ${pxToRem(160)};
            height: ${pxToRem(54)};
            white-space: pre-wrap;
            font-size: ${fontSize.smaller};
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;