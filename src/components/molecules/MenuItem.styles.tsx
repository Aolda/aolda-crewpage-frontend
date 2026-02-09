import styled from "styled-components";
import { fontSize, colors } from "@/styles/theme";

export const StyledMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 52.75rem;
    height: 9.875rem;
    padding-bottom: 1.5rem;
    border-bottom: solid 1px ${colors.border};
    gap: 1.25rem;

    .infoSection {
        display: flex;
        height: 4.125rem;
        flex-direction: column;
        align-items: flex-start;
        // gap: 0.5rem;
    }

    .titleSection {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

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