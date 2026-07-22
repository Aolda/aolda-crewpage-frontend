// /src/components/molecules/LinkSection.styles.ts
import styled from "styled-components";
import { colors, fontSize } from "@/styles/theme";

export const StyledLinkSection = styled.section<{ $isEven: boolean }>`
    display: flex;
    align-items: center;
    gap: 7.5rem;

    /* PC: 인덱스에 따라 좌우 교차 배치 */
    flex-direction: ${(props) => (props.$isEven ? "row-reverse" : "row")};
    text-align: ${(props) => (props.$isEven ? "right" : "left")};

    @media (max-width: 1279px) {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
        width: 100%;
    }

    .imgSection {
        width: 36.75rem;
        height: 27.5625rem;

        @media (max-width: 1279px) {
            width: 100%;
            max-width: 25rem;
            height: auto;
        }

        img {
            width: 100%;
            height: auto;
            border-radius: 1rem;
        }
    }

    .textSection {
        display: flex;
        flex-direction: column;
        width: 36.75rem;
        gap: 2rem;

        /* PC 배치에 따른 정렬 */
        align-items: ${(props) => (props.$isEven ? "flex-end" : "flex-start")};

        @media (max-width: 1279px) {
            width: 100%;
            align-items: center;
            gap: 1rem;
        }

        .indexNumber {
            font-size: ${fontSize.display1};
            color: ${colors.primary500};
            font-weight: 700;
            margin: 0;

            @media (max-width: 1279px) {
                font-size: 2.5rem;
            }
        }

        .title {
            font-size: ${fontSize.h2};
            font-weight: 700;
            margin: 0;
            span { color: ${colors.primary500}; }

            @media (max-width: 1279px) {
                font-size: ${fontSize.h3};
            }
        }

        p {
            margin: 0;
            color: #777777;
            font-size: ${fontSize.body1};
            font-weight: 400;
            line-height: 1.5;

            white-space: pre-wrap;

            @media (max-width: 1279px) {
                font-size: ${fontSize.smaller};
                br { display: none; }
            }

            span {
                color: ${colors.primary500};
            }
        }
    }

    .linkButton {
        background: none;
        border: solid 1px #777777;
        border-radius: 0.5rem;
        padding: 0.75rem 1rem;
        cursor: pointer;
        color: inherit;
        text-decoration: none;
        transition: all 0.2s;

        @media (max-width: 1279px) {
            width: 100%;
            max-width: 15rem;
        }

        &:hover {
            background-color: #FAFAFA;
        }
    }
`;
