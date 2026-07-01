// /src/components/molecules/LinkSection.styles.ts
import styled from "styled-components";
import { colors, fontSize, theme } from "@/styles/theme";

export const StyledLinkSection = styled.section<{ $isEven: boolean }>`
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;

    /* PC: 인덱스에 따라 좌우 교차 배치 */
    flex-direction: ${(props) => (props.$isEven ? "row-reverse" : "row")};
    text-align: ${(props) => (props.$isEven ? "right" : "left")};

    ${theme.media.tablet} {
        flex-direction: column;
        text-align: left;
        gap: 0.75rem;
        width: 100%;
    }

    ${theme.media.mobile} {
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
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
            align-items: flex-start;
            gap: 1rem;
        }

        .titleSection {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            ${theme.media.mobile} {
                align-items: flex-start;
            }
        }

        .indexNumber {
            font-family: var(--font-pretendard);
            font-size: ${fontSize.display1};
            color: ${colors.primary500};
            font-weight: 700;
            margin: 0;
            line-height: 1;

            ${theme.media.mobile} {
                font-size: 2.5rem;
            }
        }

        .title {
            font-size: ${fontSize.h2};
            font-weight: 700;
            margin: 0;
            color: #232527;
            span { color: ${colors.primary500}; }

            ${theme.media.mobile} {
                font-size: ${fontSize.h3};
            }

            [data-theme="dark"] & {
                color: #FAFAFA;
            }
        }

        p {
            margin: 0;
            color: #777777;
            font-size: ${fontSize.body1};
            font-weight: 400;
            line-height: 1.5;

            // white-space: pre-wrap;

            ${theme.media.tablet} {
                width: 100%;
                font-size: ${fontSize.base};
                text-align: left;

                .pc-br {
                    display: none;
                }
            }

            ${theme.media.mobile} {
                font-size: ${fontSize.smaller};
                br { display: none; }
                text-align: left;

                .pc-br {
                    display: none;
                }
            }

            span {
                color: ${colors.primary500};
            }

            [data-theme="dark"] & {
                color: #EFEFEF;
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
        color: #232527;
        font-size: ${fontSize.base};
        font-weight: 700;

        ${theme.media.tablet} {
            width: 100%;
            border: 1px solid #EFEFEF;
            font-size: ${fontSize.smaller};
            padding: 1rem;
        }

        ${theme.media.mobile} {
            width: 100%;
            border: 1px solid #EFEFEF;
            font-size: ${fontSize.smaller};
            padding: 0.75rem 1rem;
        }

        &:hover {
            background-color: #FAFAFA;
        }

        [data-theme="dark"] & {
            border-color: #FAFAFA;
            color: #FAFAFA;

            ${theme.media.tablet} {
                border-color: #444444;
            }

            ${theme.media.mobile} {
                border-color: #444444;
            }

            &:hover {
                background-color: #444444;
            }
        }
    }
`;
