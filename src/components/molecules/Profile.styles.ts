// /src/components/molecules/Profile.styles.ts
import styled from "styled-components"
import { fontSize, colors, theme } from "@/styles/theme";

export const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 45.25rem;
    justify-content: center;
    align-items: center;

    gap: 1.5rem;

    ${theme.media.tablet} {
        display: grid;
        width: 100%;
        height: 12.5rem;
        grid-template-areas:
            "img info"
            "img followers"
            "img stats"
            "img button";
        grid-template-columns: 12.5rem 1fr;
        grid-template-rows: auto auto auto 1fr;
        column-gap: 1.5rem;
        row-gap: 0.5rem;
        padding: 0;
        align-items: start;
        text-align: left;
    }

    ${theme.media.mobile} {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        gap: 0.25rem;
        padding: 0;
        align-items: flex-start;
        text-align: left;
    }

    /* desktop/tablet: hide mobile-only elements */
    .followBtnMobile { display: none; }
    .positionBadgeMobile { display: none; }

    .imgSection {
        grid-area: img;
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
        overflow: hidden;
        border: solid 2px #EFEFEF;
        flex-shrink: 0;

        [data-theme="dark"] & {
            border-color: #444444;
        }

        img {
            width: 20rem;
            height: 20rem;
            object-fit: cover;
        }

        ${theme.media.tablet} {
            grid-area: img;
            width: 12.5rem;
            height: 12.5rem;
            border: solid 1px #EFEFEF;

            img {
                width: 12.5rem;
                height: 12.5rem;
                object-fit: cover;
            }
        }

        ${theme.media.mobile} {
            width: 7.5rem;
            height: 7.5rem;
            margin-bottom: 0.5rem;

            img {
                width: 7.5rem;
                height: 7.5rem;
                object-fit: cover;
            }
        }
    }

    .infoSection {
        grid-area: info;
        gap: 0.5rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 5.25rem;

        .nameInfo {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

            .name {
                font-size: ${fontSize.h2};
                color: #232527;
                font-weight: 700;

                [data-theme="dark"] & {
                    color: ${colors.primary500};
                }
            }
        }

        .positionInfo {
            font-size: ${fontSize.body1};
            color: #777777;
            font-weight: 400;

            [data-theme="dark"] & {
                color: #EFEFEF;
            }
        }

        ${theme.media.tablet} {
            grid-area: info;
            height: auto;
            justify-content: flex-start;
            .nameInfo {
                justify-content: flex-start;
                gap: 0.75rem;
                .name { font-size: 1.25rem; }
            }
            .positionInfo { font-size: 0.75rem; }
        }

        ${theme.media.mobile} {
            width: 100%;
            height: auto;
            justify-content: flex-start;
            gap: 0.25rem;

            .nameInfo {
                justify-content: space-between;
                align-items: center;
                .name { font-size: 1.25rem; }
                .nameBadgeWrapper { display: none; }
                .followBtnMobile {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 3.5625rem;
                    height: 1.8125rem;
                    border-radius: 0.5rem;
                    background-color: ${colors.primary500};
                    color: ${colors.white600};
                    font-size: 0.625rem;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    flex-shrink: 0;

                    &:disabled {
                        cursor: not-allowed;
                        opacity: 0.65;
                    }
                }
            }

            .positionInfo {
                display: flex;
                align-items: center;
                gap: 0.25rem;
                font-size: 0.625rem;
                color: #777777;
                font-weight: 700;

                .positionBadgeMobile {
                    display: inline;
                    font-size: 0.625rem;
                    color: ${colors.primary500};
                    font-weight: 600;
                }
            }
        }
    }

    .buttonSection {
        grid-area: button;
        display: flex;
        width: 100%;
        height: 2.9375rem;
        justify-content: center;
        align-items: center;

        button {
            width: 100%;
            height: 2.9375rem;
            border-radius: 0.5rem;
            background-color: ${colors.primary600};

            color: ${colors.white600};

            &:disabled {
                cursor: not-allowed;
                opacity: 0.65;
            }
        }

        ${theme.media.tablet} {
            grid-area: button;
            align-self: end;
            height: auto;

            button {
                width: 100%;
                height: 2.9375rem;
                font-size: 1rem;
            }
        }

        ${theme.media.mobile} {
            display: none;
        }
    }

    .descriptionSection {
        grid-area: description;
        display: flex;
        width: 100%;
        height: 1.875rem;
        overflow: hidden;
        text-align: left;

        font-size: ${fontSize.body1};
        font-weight: 400;
        color: ${colors.gray600};

        [data-theme="dark"] & {
            color: #EFEFEF;
        }

        ${theme.media.tablet} {
            display: none;
        }

        ${theme.media.mobile} {
            display: none;
        }
    }

    .followerSection {
        grid-area: followers;
        display: inline-flex;
        width: 100%;
        align-items: center;
        gap: 0.75rem;

        font-size: ${fontSize.body1};

        ${theme.media.tablet} {
            grid-area: followers;
            gap: 0.5rem;
            font-size: 1rem;
            img { display: block; width: 1.25rem; height: 1.25rem; }
            .variable { font-size: 1rem; }
            .nonvariable { font-size: 1rem; }
        }

        ${theme.media.mobile} {
            gap: 0.275rem;
            font-size: 0.75rem;
            img { display: none; }
            .variable { font-size: 0.75rem; }
            .nonvariable { font-size: 0.75rem; }
        }

        .variable {
            color: ${colors.black500};
            font-weight: 700;

            [data-theme="dark"] & {
                color: ${colors.primary500};
            }
        }

        .nonvariable {
            color: ${colors.gray600};
            font-weight: 400;

            [data-theme="dark"] & {
                color: #EFEFEF;
            }
        }
    }

    .statsSection {
        grid-area: stats;
        display: flex;
        width: 100%;
        height: 5.8125rem;
        flex-direction: column;
        color: #232527;

        gap: 0.75rem;

        [data-theme="dark"] & {
            color: #FAFAFA;
        }

        ${theme.media.tablet} {
            grid-area: stats;
            height: auto;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
        }

        ${theme.media.mobile} {
            height: auto;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.375rem;
        }

        ${theme.media.mobile} {
            padding-top: 0;
            border-top: none;
        }

        .statContainer {
            display: inline-flex;
            gap: 0.75rem;

            font-size: ${fontSize.base};
            font-weight: 700;

            ${theme.media.tablet} {
                font-size: 0.75rem;
                gap: 0.5rem;
                img { width: 1rem; height: 1rem; }
            }

            ${theme.media.mobile} {
                font-size: 0.625rem;
                gap: 0.5rem;

                img {
                    width: 1rem;
                    height: 1rem;
                }
            }
        }
    }
`;
