import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { fontSize } from "@/styles/theme";

export const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: ${pxToRem(320)};
    height: ${pxToRem(724)};
    justify-content: center;
    align-items: center;

    gap: ${pxToRem(24)};

    .imgSection {
        width: ${pxToRem(320)};
        height: ${pxToRem(320)};

        img {
            border: solid 2px #E2E2E2;
            border-radius: 50%;
        }
    }

    .infoSection {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${pxToRem(84)};

        .nameInfo {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

            .name {
                font-size: ${fontSize.h2};
                font-weight: bold;
            }
        }

        .positionInfo {
            font-size: ${fontSize.body1};
            font-weight: 400;
        }
    }

    .buttonSection {
        display: flex;
        width: 100%;
        height: ${pxToRem(47)};
        justify-content: center;
        align-items: center;

        button {
            width: 100%;
            height: ${pxToRem(47)};
            border-radius: ${pxToRem(8)};
            background-color: #1572B8;
        }
    }

    .descriptionSection {
        diplay: flex;
        width: 100%;
        height: ${pxToRem(30)};
        text-align: left;

        font-size: ${fontSize.body1};
        font-weight: 400;
        color: #777777;
    }

    .followerSection {
        display: inline-flex;
        width: 100%;
        align-items: center;
        gap: ${pxToRem(12)};

        font-size: ${fontSize.body1};

        .variable {
            color: black;
            font-weight: 700;
        }

        .nonvariable {
            color: #777777;
            font-weight: 400;
        }
    }

    .statsSection {
        display: flex;
        width: 100%;
        height: ${pxToRem(93)};
        flex-direction: column;
        
        gap: ${pxToRem(12)};

        .statContainer {
            display: inline-flex;
            gap: ${pxToRem(12)};

            font-size: ${fontSize.base};
            font-weight: 700;
        }
    }
`;