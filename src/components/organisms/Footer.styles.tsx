import styled from "styled-components";
import { pxToRem } from "@/styles/utils";
import { colors, fontSize } from "@/styles/theme";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 14.4375rem;

    background-color: #061C2C;

    position: relative;
    bottom: 0;

    padding: 3.75rem 7.5rem;

    gap: 0.75rem;

    .logoSection {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 16.3125rem;
        height: 3.5rem;

        gap: 0.25rem;

        .description {
            padding-left: 2.5rem;
            color: ${colors.primary500};
            font-size: ${fontSize.smaller};
            font-weight: 500;
        }
    }

    .addressSection {
        display: flex;
        flex-direction: column;
        width: 18.84375rem;
        height: 2.5625rem;

        color: white;
        padding-left: 2.5rem;

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

            .divider {
                width: 4px;
                height: 0px;
                border-width: 0.5px;
                transform: rotate(-90deg);
            }
        }
    }
`;