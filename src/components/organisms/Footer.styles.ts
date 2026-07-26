import styled from "styled-components";
import { colors, fontSize, theme } from "@/styles/theme";

export const StyledFooter = styled.footer`
    display: flex;
    width: 100%;
    height: 14.375rem;
    align-items: center;

    background-color: #061C2C;

    position: relative;
    bottom: 0;

    padding: 3.75rem 7.5rem;
    gap: 0.75rem;

    font-family: var(--font-cjk);
    
    ${theme.media.desktopSm} {
        padding-left: 2.5rem;
    }

    ${theme.media.mobile} {
        height: auto;
        padding: 2.5rem 1.25rem;
        gap: 1.25rem;
    }

    ${theme.media.tablet} {
        padding-left: 3.5rem;
        padding-right: 7.5rem;
    }

    .footerInner {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        width: 100%;
        max-width: 75rem;
    }

    .logoSection {
        display: flex;
        width: 2rem;
        height: 2rem;
        flex-shrink: 0;

        ${theme.media.mobile} {
            width: 1.25rem;
            height: 1.25rem;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

    .textSection {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        min-width: 0;
    }

    .brandSection {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .brandName {
        color: ${colors.white600};
        font-family: var(--font-paperlogy);
        font-size: ${fontSize.h2};
        font-weight: 700;
        line-height: 1;
    }

    .description {
        color: ${colors.primary500};
        font-size: ${fontSize.smaller};
        font-weight: 400;
        line-height: 1.4;
    }

    .addressSection {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        color: white;

        .address {
            font-size: ${fontSize.smaller};
            font-weight: 400;
        }

        .managementSection {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-size: ${fontSize.smaller};
            font-weight: 400;

            ${theme.media.mobile} {
                flex-wrap: wrap;
            }

            .divider {
                width: 1px;
                height: 4px;
                background-color: ${colors.white600};
                opacity: 0.7;
            }
        }
    }

    ${theme.media.mobile} {
        .footerInner {
            gap: 1rem;
        }

        .logoSection {
            width: 1.25rem;
            height: 1.25rem;
        }

        .textSection {
            gap: 1rem;
        }

        .brandName {
            font-size: ${fontSize.h3};
        }

        .description,
        .addressSection .address,
        .addressSection .managementSection {
            font-size: 0.625rem;
        }
    }
`;
