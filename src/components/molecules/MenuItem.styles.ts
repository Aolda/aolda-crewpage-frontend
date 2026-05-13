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
        padding-bottom: 1.25rem;
        gap: 0.75rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        height: 4.9375rem;
        padding: 0.5rem 1rem 0 0.75rem;
        border: 1px solid ${colors.border};
        border-radius: 0.5rem;
        gap: 0.375rem;
    }

    [data-theme="dark"] & {
        border-color: rgba(255, 255, 255, 0.1);
    }

    /* desktop/tablet: inlineBadge 숨김 */
    .inlineBadge { display: none; }

    .infoSection {
        display: flex;
        height: 4.125rem;
        flex-direction: column;
        align-items: flex-start;

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
            font-weight: bold;
        }

        ${theme.media.tablet} {
            .title { font-size: ${fontSize.body1}; }
        }

        ${theme.media.mobile} {
            width: 100%;
            .title {
                font-size: 1rem;
                font-weight: bold;
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
            gap: 0.375rem;

            .inlineBadge {
                display: inline;
                font-size: 0.625rem;
                font-weight: 600;
                color: ${colors.primary500};
            }
        }
    }

    .date {
        font-size: ${fontSize.base};
        color: ${colors.gray600};

        ${theme.media.tablet} {
            font-size: ${fontSize.smaller};
        }

        ${theme.media.mobile} {
            font-size: 0.625rem;
        }
    }

    .descriptionSection {
        display: flex;
        width: 100%;

        p {
            margin: 0;
            color: ${colors.gray600};
            font-size: ${fontSize.base};
            line-height: 1.5;
            text-align: left;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            ${theme.media.mobile} {
                font-size: 0.625rem;
                -webkit-line-clamp: 1;
            }
        }
    }
`;
