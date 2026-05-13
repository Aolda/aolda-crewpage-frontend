// /src/components/molecules/LinkSection.styles.ts
import styled from "styled-components";
import { colors, fontSize, theme } from "@/styles/theme";

export const StyledLinkSection = styled.section<{ $isEven: boolean }>`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    /* PC: 인덱스에 따라 좌우 교차 배치 */
    flex-direction: ${(props) => (props.$isEven ? "row-reverse" : "row")};
    text-align: ${(props) => (props.$isEven ? "right" : "left")};

    ${theme.media.tablet} {
        flex-direction: column;
        text-align: left;
        gap: 2rem;
        width: 100%;
    }

    ${theme.media.mobile} {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
        width: 100%;
    }

    .imgSection {
        width: 37rem;
        height: 27.5625rem;

        ${theme.media.tablet} {
            width: 100%;
            height: auto;
        }

        ${theme.media.mobile} {
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
        width: 36.5rem;
        gap: 2rem;

        /* PC 배치에 따른 정렬 */
        align-items: ${(props) => (props.$isEven ? "flex-end" : "flex-start")};

        ${theme.media.tablet} {
            width: 100%;
            align-items: flex-start;
            gap: 1.5rem;
        }

        ${theme.media.mobile} {
            width: 100%;
            align-items: center;
            gap: 1rem;
        }

        .indexNumber {
            font-size: ${fontSize.display1};
            color: ${colors.primary500};
            font-weight: 700;
            margin: 0;

            ${theme.media.mobile} {
                font-size: 2.5rem;
            }
        }

        .title {
            font-size: ${fontSize.h2};
            font-weight: 700;
            margin: 0;
            span { color: ${colors.primary500}; }

            ${theme.media.mobile} {
                font-size: ${fontSize.h3};
            }

            [data-theme="dark"] & {
                color: #F9FAFB;
            }
        }

        p {
            margin: 0;
            color: #777777;
            font-size: ${fontSize.body1};
            font-weight: 400;
            line-height: 1.5;

            white-space: pre-wrap;

            ${theme.media.mobile} {
                font-size: ${fontSize.smaller};
                br { display: none; }
            }

            span {
                color: ${colors.primary500};
            }

            [data-theme="dark"] & {
                color: #9CA3AF;
            }
        }
    }

    .linkButton {
        background: none;
        border: solid 1px #777777;
        border-radius: 0.5rem;
        padding: 0.75rem 1rem;
        cursor: pointer;
        transition: all 0.2s;

        ${theme.media.mobile} {
            width: 100%;
            max-width: 15rem;
        }

        &:hover {
            background-color: #FAFAFA;
        }

        [data-theme="dark"] & {
            border-color: rgba(255, 255, 255, 0.2);
            color: #F9FAFB;

            &:hover {
                background-color: #444444;
            }
        }
    }
`;