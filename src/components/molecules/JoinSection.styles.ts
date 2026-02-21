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
        padding-top: 5rem;
        padding-bottom: 5rem;
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
        span {
            font-size: ${fontSize.base};
            font-weight: 400;
            color: ${colors.gray500};
            line-height: 1.5;

            ${theme.media.mobile} {
                font-size: ${fontSize.small};
            }
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
        width: 10rem;
        font-size: ${fontSize.small};
        font-weight: 500;
    }
`;

export const OutlineButton = styled(PrimaryButton)`
    background: white;
    color: #111827;
    border: 1px solid ${colors.gray600};
`;