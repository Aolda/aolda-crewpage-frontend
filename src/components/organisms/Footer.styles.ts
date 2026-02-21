import styled from "styled-components";
import { pxToRem } from "@/styles/utils";
import { colors, fontSize, theme } from "@/styles/theme";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 14.375rem;

    background-color: #061C2C;

    position: relative;
    bottom: 0;

    padding: 3.75rem 7.5rem;
    gap: 0.75rem;

    font-family: var(--font-cjk);

    ${theme.media.mobile} {
        height: auto;
        padding: 2.5rem 1.25rem;
        gap: 1.25rem;
    }

    .logoSection {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 16.3125rem;
        height: 3.5rem;

        gap: 0.25rem;

        ${theme.media.mobile} {
            width: 100%;
            height: auto;
        }

        .description {
            padding-left: 2.5rem;
            color: ${colors.primary500};
            font-size: ${fontSize.smaller};
            font-weight: 500;

            ${theme.media.mobile} {
                padding-left: 0;
                margin-top: 0.25rem;
            }
        }
    }

    .addressSection {
        display: flex;
        flex-direction: column;
        width: 20rem;
        height: 2.5625rem;

        color: white;
        padding-left: 2.5rem;

        ${theme.media.mobile} {
            width: 100%;
            height: auto;
            padding-left: 0;
            gap: 0.5rem;
        }

        .address {
            font-size: ${fontSize.smaller};
            font-weight: 300;
        }

        .managementSection {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: ${fontSize.smaller};
            font-weight: 300;

            ${theme.media.mobile} {
                flex-wrap: wrap;
            }

            .divider {
                width: 6px;
                height: 0px;
                border-width: 0.5px;
                transform: rotate(-90deg);
            }
        }
    }
`;