// /src/components/molecules/MenuItem.styles.ts
import styled from "styled-components";
import { fontSize, theme } from "@/styles/theme";
import { radius, semanticColors, typography } from "@/styles/tokens";

export const StyledMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 52.75rem;
    height: 9.875rem;
    padding-bottom: 1.5rem;
    border-bottom: solid 1px ${semanticColors.border.default};
    gap: 1.25rem;

    &:hover {
        cursor: pointer;
    }

    ${theme.media.tablet} {
        width: 100%;
        height: 7.5rem;
        padding: 0 1rem 1.5rem 1rem;
        border-bottom: solid 1px ${semanticColors.border.default};
        gap: 0.75rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        height: 4.9375rem;
        padding: 0.5rem 0.75rem 0.75rem 0.75rem;
        border: 1px solid ${semanticColors.border.default};
        border-radius: ${radius.md};
        gap: 0.5rem;
    }

    [data-theme="dark"] & {
        border-color: ${semanticColors.border.default};
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
            color: ${semanticColors.text.primary};
            font-weight: 700;
        }

        ${theme.media.tablet} {
            .title { font-size: ${fontSize.body1}; }
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
                color: ${semanticColors.text.brand};
            }
        }
    }

    .date {
        font-size: ${fontSize.base};
        font-weight: 400;
        color: ${semanticColors.text.secondary};

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
            ${typography('Body2')};
            color: ${semanticColors.text.secondary};
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

        }
    }
`;
