// /src/components/molecules/JoinSection.styles.ts
import styled from "styled-components";
import { fontSize, theme } from "@/styles/theme";
import { primitiveColors, radius, semanticColors, typography } from "@/styles/tokens";
// Styles (고정 rem 적용)
export const Container = styled.section`
    padding-top: 10rem;
    padding-bottom: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    ${theme.media.tablet} {
        padding-top: 5rem;
    }

    ${theme.media.mobile} {
        text-align: left;
        align-items: flex-start;
        padding-top: 2.5rem;
        padding-bottom: 0;
        gap: 1rem;
    }

    h3 {
        ${typography('Heading2')};
        color: ${semanticColors.text.primary};

        ${theme.media.tablet} {
            font-size: ${fontSize.h3};
        }

        ${theme.media.mobile} {
            font-size: 1.5rem;
            word-break: keep-all;
            padding: 0 1rem;
        }
    }
`;

export const ButtonGrid = styled.div`
    display: flex;
    gap: 2rem;

    ${theme.media.tablet} {
        gap: 1.5rem;
    }

    ${theme.media.mobile} {
        gap: 0.75rem;
    }

    .btn-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        ${theme.media.mobile} {
            align-items: flex-start;
            gap: 0.5rem;
        }

        span {
            ${typography('Body2')};
            color: ${semanticColors.text.secondary};

            ${theme.media.tablet} {
                font-size: ${fontSize.smaller};
            }

            ${theme.media.mobile} {
                font-size: 0.625rem;
            }

        }

        br.not-mobile {
            display: block;

            ${theme.media.mobile} {
                display: none;
            }
        }
    }

    ${theme.media.mobile} {
        margin: 0rem 1rem;

        width: calc(100% - 2rem);
        justify-content: space-between;

        .btn-wrapper {
            width: 15rem;
        }
    }
`;

export const PrimaryButton = styled.a`
    background: ${semanticColors.brand.hover};
    color: ${primitiveColors.white[600]};
    border: none;

    padding: 0.75rem 1rem;
    border-radius: ${radius.md};

    display: flex;
    align-items: center;
    justify-content: center;
    width: 12.5rem;
    gap: 0.5rem;
    font-weight: 700;
    cursor: pointer;

    ${theme.media.tablet} {
        width: 10rem;
        height: 2.375rem;
        font-size: ${fontSize.smaller};

        img {
            width: 1rem;
            height: 1rem;
        }
    }

    ${theme.media.mobile} {
        width: 100%;
        padding: 0.5rem 0.75rem;
        font-size: 0.625rem;

        img {
            width: 1rem;
        }
    }
`;

export const OutlineButton = styled(PrimaryButton)`
    background: ${semanticColors.background.card};
    color: ${semanticColors.text.primary};
    border: 1px solid ${semanticColors.border.strong};

    &[aria-disabled='true'] {
        cursor: not-allowed;
        opacity: 0.7;
    }
`;
