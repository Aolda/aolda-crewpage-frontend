// /src/components/organisms/CrewBlock.style.ts
import styled, { css } from "styled-components";
import { fontSize, theme } from "@/styles/theme";
import { radius, semanticColors, typography } from "@/styles/tokens";

interface CrewBlockProps {
    $isCrewpage: boolean;
}

const baseCardStyle = css`
    box-sizing: border-box;
    display: flex;
    border-radius: ${radius.xxl};

    [data-theme="dark"] & {
        background-color: ${semanticColors.background.card};
        border-color: ${semanticColors.border.default};
    }

    .imageSection {
        position: relative;
        width: 7.5rem;
        height: 7.5rem;
        flex-shrink: 0;
        border-radius: 50%;
        overflow: hidden;

        ${theme.media.tablet} {
            width: 5rem;
            height: 5rem;
        }
    }

    .nameInfo {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;

        * {
            margin: 0;
        }
    }
`;

const mainCrewCardStyle = css`
    ${baseCardStyle}

    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13.8rem;
    height: 16.75rem;
    padding: 1.5rem 2.25rem;
    gap: 2.25rem;
    background-color: ${semanticColors.background.card};
    border: 1px solid ${semanticColors.border.default};
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .textSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
    }

    .infoSection {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .nameInfo {
        h2 {
            ${typography('Body1')};
            color: ${semanticColors.text.primary};
            font-weight: bold;
        }

        span {
            ${typography('Body2')};
            color: ${semanticColors.text.secondary};
        }

        [data-theme="dark"] & {
            h2,
            span {
                color: ${semanticColors.text.primary};
            }
        }
    }

    .majorInfo {
        max-width: 100%;
        margin: 0;
        overflow: hidden;
        ${typography('Body2')};
        color: ${semanticColors.text.secondary};
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;

        [data-theme="dark"] & {
            color: ${semanticColors.text.primary};
        }
    }

    ${theme.media.tablet} {
        width: 100%;
        height: 11.8125rem;
        padding: 1.5rem 2.25rem;
        gap: 1.25rem;
        align-items: center;
        border-radius: ${radius.lg};

        .nameInfo {
            h2 { font-size: ${fontSize.base}; }
            span { font-size: ${fontSize.smaller}; }
        }

        .majorInfo {
            font-size: ${fontSize.smaller};
            font-weight: 700;
        }
    }

    ${theme.media.mobile} {
        width: 100%;
        height: 3.6875rem;
        padding: 0.75rem;
        gap: 0.5rem;
        align-items: flex-start;
        border-radius: ${radius.md};

        .imageSection { display: none; }

        .textSection {
            align-items: flex-start;
            gap: 0.25rem;
        }

        .infoSection { justify-content: flex-start; }

        .nameInfo {
            h2 { font-size: ${fontSize.smaller}; }
            span { font-size: 0.625rem; }
        }

        .majorInfo {
            font-size: 0.625rem;
            font-weight: 400;
        }
    }
`;

const crewPageCardStyle = css`
    ${baseCardStyle}

    align-items: center;
    width: 100%;
    height: 10.5rem;
    padding: 1.5rem 2.25rem;
    gap: 2.25rem;
    border: 1px solid ${semanticColors.border.default};

    .textSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1.4375rem;
    }

    .infoSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.75rem;
    }

    .nameInfo {
        h2 {
            ${typography('Title1')};
            color: ${semanticColors.text.primary};
            font-weight: bold;
        }

        span {
            ${typography('Body1')};
            color: ${semanticColors.text.secondary};
        }

        [data-theme="dark"] & {
            h2 { color: ${semanticColors.text.brand}; }
            span { color: ${semanticColors.text.primary}; }
        }
    }

    .badgeSection {
        display: inline-flex;
        gap: 0.5rem;

        .departmentBadgeLine {
            display: contents;
        }
    }

    .statsSection {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        color: ${semanticColors.text.secondary};

        [data-theme="dark"] & {
            color: ${semanticColors.text.primary};
        }

        img {
            width: 1.125rem;
            height: 1.125rem;
        }

        .icon-blue { display: none; }
    }

    ${theme.media.tablet} {
        height: 8rem;
        padding: 1rem;
        gap: 1.5rem;

        .textSection { gap: 1rem; }

        .infoSection {
            gap: 0.5rem;
        }

        .nameInfo {
            height: 1.5rem;

            h2 { font-size: 1.25rem; }
            span { font-size: 1rem; }
        }

        .statsSection {
            height: 1.125rem;

            img {
                width: 1rem;
                height: 1rem;
            }

            span {
                font-size: ${fontSize.smaller};
            }
        }
    }

    ${theme.media.mobile} {
        height: 5.3125rem;
        padding: 0.75rem;
        gap: 0;
        border-radius: ${radius.md};

        .imageSection { display: none; }

        .textSection {
            width: 100%;
            height: 100%;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 0;
        }

        .infoSection {
            flex: 1;
            min-width: 0;
            height: auto;
            gap: 0.75rem;
            overflow: hidden;
        }

        .nameInfo {
            h2 { font-size: 0.75rem; }
            span { font-size: 0.625rem; }
        }

        .badgeSection {
            flex-wrap: wrap;
            gap: 0.25rem;

            .departmentBadgeLine {
                display: inline-flex;
                flex-basis: 100%;
            }
        }

        .statsSection {
            flex-shrink: 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
            height: auto;

            > section:nth-child(2) { display: none; }

            .icon-gray { display: none; }
            .icon-blue { display: block; }

            img {
                width: 0.75rem;
                height: 0.75rem;
            }

            span { font-size: 0.625rem; }
        }
    }
`;

export const StyledCrewBlock = styled.div<CrewBlockProps>`
    ${({ $isCrewpage }) => ($isCrewpage ? crewPageCardStyle : mainCrewCardStyle)}
`;
