import styled, {css} from "styled-components";

interface CrewBlockProps {
    $isHomepage: boolean;
}

export const StyledCrewBlock = styled.div<CrewBlockProps>`
    ${(props) => props.$isHomepage ? css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 24px 36px;
        border: 1px solid #E2E2E2;
        border-radius: 20px;
        gap: 36px;

        .textContainer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;

            .majorInfo {
                font-size: 16px;
                font-weight: bold;
                color: #777777;
            }
        }


    ` : css`
        display: flex;
        align-items: center;
        width: 1128px;
        height: 120px;

        padding: 24px 36px;
        border: 1px solid #E2E2E2;
        border-radius: 20px;
        gap: 36px;

        .textContainer {
            display: flex;
            height: 120px;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
        }

        .infoContainer {
            display: flex;
            flex-direction: column;
            height: 78px;
            gap: 12px;
        }

        .badgeContainer {
            display: inline-flex;
            gap: 8px;
        }
    `}

    .imageContainer {
        width: 120px;
        height: 120px; 

        img {
            width: 100%;
            border-radius: 50%;
        }
    }

    .nameInfo {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            h2 {
                font-size: ${(props) => props.$isHomepage ? "20px" : "24px"};
            }
            span {
                font-size: ${(props) => props.$isHomepage ? "16px" : "20px"};
                color: #777777;
            }
            
            * {
                margin: 0;
            }
    }

    .statsContainer {
        display: flex;
        align-items: center;
        gap: 24px;
        img {
            width: 18px;
            height: 18px;
        }
    }
`;