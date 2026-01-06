import styled from "styled-components";
import { fontSize, colors } from "@/styles/theme";
import { pxToRem } from "@/styles/utils";

export const StyledMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: ${pxToRem(844)};
    height: ${pxToRem(158)};
    padding-bottom: ${pxToRem(24)};
    border-bottom: solid 1px ${colors.border};
    gap: ${pxToRem(20)};

    .infoSection {
        display: flex;
        height: ${pxToRem(66)};
        flex-direction: column;
        align-items: flex-start;
        // gap: ${pxToRem(8)};
    }

    .titleSection {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: ${pxToRem(12)};

        * {
            margin: 0;
        }
    }

    .date {
        font-size: ${fontSize.base};
        color: ${colors.gray600};
    }

    .descriptionSection {
        display: flex;
        width: 100%;


        p {
            margin: 0;
            color: ${colors.gray600};
            font-size: ${fontSize.base};
            line-height: 1.5;
            text-align: left;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;

            white-space: pre-wrap;
        }
    }
`;