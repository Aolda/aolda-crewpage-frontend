import styled, {css} from "styled-components";
import { fontSize } from "@/styles/theme";
import { pxToRem } from "@/styles/utils";

interface CrewBlockProps {
    $isHomepage: boolean;
}

export const StyledCrewBlock = styled.div<CrewBlockProps>`
    ${(props) => props.$isHomepage ? css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: ${pxToRem(220.8)};
        height: ${pxToRem(268)};

        padding: ${pxToRem(24)} ${pxToRem(36)};
        border: 1px solid #E2E2E2;
        border-radius: ${pxToRem(20)};
        gap: ${pxToRem(36)};

        .textSection {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: ${pxToRem(12)};

            .nameInfo {
                h2 {
                    font-size: ${fontSize.body1};
                    font-weight: bold;
                }

                span {
                    font-size: ${fontSize.base};
                }
            }

            .majorInfo {
                font-size: ${fontSize.base};
                font-weight: bold;
                color: #777777;
            }
        }


    ` : css`
        display: flex;
        align-items: center;
        width: ${pxToRem(1200)};
        height: ${pxToRem(168)};

        padding: ${pxToRem(24)} ${pxToRem(36)};
        border: 1px solid #E2E2E2;
        border-radius: ${pxToRem(20)};
        gap: ${pxToRem(36)};

        .textSection {
            display: flex;
            height: ${pxToRem(120)};
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        }

        .infoSection {
            display: flex;
            flex-direction: column;
            height: ${pxToRem(78)};
            gap: ${pxToRem(12)};

            .nameInfo {
                h2 {
                    font-size: ${fontSize.h3};
                    font-weight: bold;
                }

                span {
                    font-size: ${fontSize.body1};
                }
            }
        }

        .badgeSection {
            display: inline-flex;
            gap: ${pxToRem(8)};
        }
    `}

    .imageSection {
        width: ${pxToRem(120)};
        height: ${pxToRem(120)}; 

        img {
            width: 100%;
            border-radius: 50%;
        }
    }

    .nameInfo {
            display: inline-flex;
            align-items: center;
            gap: ${pxToRem(12)};
            h2 {
                font-size: ${(props) => props.$isHomepage ? fontSize.body1 : fontSize.h3};
            }
            span {
                font-size: ${(props) => props.$isHomepage ? fontSize.base : fontSize.body1};
                color: #777777;
            }
            
            * {
                margin: 0;
            }
    }

    .statsSection {
        display: flex;
        align-items: center;
        gap: ${pxToRem(24)};
        img {
            width: ${pxToRem(18)}; !important
            height: ${pxToRem(18)}; !important
        }
    }
`;