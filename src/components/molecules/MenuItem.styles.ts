// /src/components/molecules/MenuItem.styles.ts
import styled from "styled-components";
import { fontSize, colors, theme } from "@/styles/theme";

export const StyledMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 52.75rem;
    height: 9.875rem;
    padding-bottom: 1.5rem;
    border-bottom: solid 1px ${colors.border};
    gap: 1.25rem;

    &:hover {
        cursor: pointer;
    }

    ${theme.media.tablet} {
        width: 100%;
        height: 7.5rem;
        padding: 0 1rem 1.5rem 1rem;
        border-bottom: solid 1px #FEFEFE;
        gap: 0.75rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        height: 4.9375rem;
        padding: 0.5rem 0.75rem 0.75rem 0.75rem;
        border: 1px solid #EFEFEF;
        border-radius: 0.5rem;
        gap: 0.5rem;
    }

    [data-theme="dark"] & {
        border-color: #444444;
    }

    /* desktop/tablet: inlineBadge 숨김 */
    .inlineBadge { display: none; }

    .infoSection {
        display: flex;
        height: 4.125rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        ${theme.media.tablet} {
            height: auto;
            width: 100%;
            gap: 0.25rem;
        }

        ${theme.media.mobile} {
            height: auto;
            width: 100%;
            gap: 0.125rem;
        }
    }

    .titleSection {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        * { margin: 0; }

        .title {
            font-size: ${fontSize.h3};
            color: #232527;
            font-weight: 700;

            [data-theme="dark"] & {
                color: #EFEFEF;
            }
        }

        ${theme.media.tablet} {
            .title { font-size: ${fontSize.body1}; }

            [data-theme="dark"] & {
                color: #EFEFEF;
            }
        }

        ${theme.media.mobile} {
            width: 100%;
            .title {
                font-size: 1rem;
                font-weight: 700;
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .badgeWrapper { display: none; }
        }
    }

    .dateRow {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;

        ${theme.media.mobile} {
            .inlineBadge {
                display: inline;
                font-size: 0.625rem;
                font-weight: 400;
                color: ${colors.primary500};
            }
        }
    }

    .date {
        font-size: ${fontSize.base};
        font-weight: 400;
        color: #777777;

        [data-theme="dark"] & {
            color: #EFEFEF;
        }

        ${theme.media.tablet} {
            font-size: ${fontSize.smaller};

            [data-theme="dark"] & {
                color: #EFEFEF;
            }
        }

        ${theme.media.mobile} {
            font-size: 0.625rem;

            [data-theme="dark"] & {
                color: #EFEFEF;
            }
        }
    }

    .descriptionSection {
        display: flex;
        width: 100%;

        p {
            margin: 0;
            color: ${colors.gray600};
            font-size: ${fontSize.base};
            font-weight: 400;
            line-height: 1.5;
            text-align: left;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            ${theme.media.tablet} {
                font-size: ${fontSize.smaller};
            }

            ${theme.media.mobile} {
                font-size: 0.625rem;
                -webkit-line-clamp: 1;
            }

            [data-theme="dark"] & {
                color: #EFEFEF;
            }
        }
    }
`;
