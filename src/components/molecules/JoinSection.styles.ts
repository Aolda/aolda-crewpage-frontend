// /src/components/molecules/JoinSection.styles.ts
import styled from "styled-components";
import { fontSize, colors, theme } from "@/styles/theme";
// Styles (고정 rem 적용)
export const Container = styled.section`
    padding-top: 10rem;
    padding-bottom: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    ${theme.media.mobile} {
        text-align: left;
        align-items: flex-start;
        padding-top: 5rem;
        padding-bottom: 0;
        gap: 1rem;
    }

    h3 {
        font-size: ${fontSize.h2};
        font-weight: 700;
        line-height: 1.4;

        ${theme.media.mobile} {
            font-size: 1.5rem;
            word-break: keep-all;
            padding: 0 1rem;
        }

        [data-theme="dark"] & {
            color: #F9FAFB;
        }
    }
`;

export const ButtonGrid = styled.div`
    display: flex;
    gap: 2rem;

    .btn-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        ${theme.media.mobile} {
            gap: 0.5rem;
        }

        span {
            font-size: ${fontSize.base};
            font-weight: 400;
            color: ${colors.gray500};
            line-height: 1.5;

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
    background: ${colors.primary600};
    color: white;
    border: none;

    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 12.5rem;
    gap: 0.5rem;
    font-weight: 700;
    cursor: pointer;

    ${theme.media.mobile} {
        width: 100%;
        font-size: 0.625rem;
        font-weight: 500;

        img {
            width: 1rem;
        }
    }
`;

export const OutlineButton = styled(PrimaryButton)`
    background: white;
    color: #111827;
    border: 1px solid ${colors.gray600};

    [data-theme="dark"] & {
        background: #363636;
        color: #F9FAFB;
        border-color: rgba(255, 255, 255, 0.2);
    }
`;