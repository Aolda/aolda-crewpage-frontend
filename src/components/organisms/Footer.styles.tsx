import styled from "styled-components";
import { pxToRem } from "@/styles/utils";
import { fontSize } from "@/styles/theme";

export const StyledFooter = styled.footer`
    display: flex;
    width: 100%;
    height: ${pxToRem(217)};

    background-color: #061C2C;

    position: relative;
    bottom: 0;

    .logoSection {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: ${pxToRem(261)};
        height: ${pxToRem(56)};

        position: absolute;
        top: ${pxToRem(43)};
        left: ${pxToRem(69.75)};

        gap: ${pxToRem(6)};

        .description {
            padding-left: ${pxToRem(40)};
            color: white;
            font-size: ${fontSize.smaller};
            font-weight: 300;
        }
    }

    .addressSection {
        display: flex;
        flex-direction: column;
        width: ${pxToRem(301.5)};
        height: ${pxToRem(41)};

        position: absolute;
        top: ${pxToRem(116)};
        left: ${pxToRem(118.13)};

        color: white;

        .address {
            font-size: ${fontSize.smaller};
            font-weight: 300;
        }

        .managementSection {
            display: inline-flex;
            align-items: center;
            gap: ${pxToRem(8)};
            font-size: ${fontSize.smaller};
            font-weight: 300;

            .divider {
                width: 4px;
                height: 0px;
                border-width: 1px;
                transform: rotate(-90deg);
            }
        }
    }
`;