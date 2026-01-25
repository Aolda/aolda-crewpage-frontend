import styled, {css} from "styled-components";
import { fontSize, colors } from "@/styles/theme";

interface CrewBlockProps {
    $isHomepage: boolean;
}

export const StyledCrewBlock = styled.div<CrewBlockProps>`
    ${(props) => props.$isHomepage ? css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 13.8rem;
        height: 16.75rem;

        padding: 1.5rem 2.25rem;
        border: 1px solid ${colors.border};
        border-radius: 1.25rem;
        gap: 2.25rem;

        .textSection {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.75rem;

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
                color: ${colors.gray600};
            }
        }


    ` : css`
        display: flex;
        align-items: center;
        width: 90rem;
        height: 10.5rem;

        padding: 1.5rem 2.25rem;
        border: 1px solid #E2E2E2;
        border-radius: 1.25rem;
        gap: 2.25rem;

        .textSection {
            display: flex;
            height: 7.5rem;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        }

        .infoSection {
            display: flex;
            flex-direction: column;
            height: 4.875rem;
            gap: 0.75rem;

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
            gap: 0.5rem;
        }
    `}

    .imageContainer {
        width: 7.5rem;
        height: 7.5rem; 

        img {
            width: 100%;
            border-radius: 50%;
        }
    }

    .nameInfo {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            h2 {
                font-size: ${(props) => props.$isHomepage ? fontSize.body1 : fontSize.h3};
            }
            span {
                font-size: ${(props) => props.$isHomepage ? fontSize.base : fontSize.body1};
                color: ${colors.gray600};
            }
            
            * {
                margin: 0;
            }
    }

    .statsSection {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        img {
            width: 1.125rem; !important
            height: 1.125rem; !important
        }
    }
`;