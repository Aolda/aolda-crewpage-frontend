import styled from "styled-components";
import { fontSize, colors } from "@/styles/theme";
// Styles (고정 rem 적용)
export const Container = styled.section`
    padding-top: 10rem;
    padding-bottom: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    h3 {
        font-size: ${fontSize.h2};
        font-weight: 700;
        line-height: 1.4;
    }
`;

export const ButtonGrid = styled.div`
    display: flex;
    gap: 2rem;

    .btn-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        span {
            font-size: ${fontSize.base};
            font-weight: 400;
            color: ${colors.gray500};
            line-height: 1.5;
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
`;

export const OutlineButton = styled(PrimaryButton)`
    background: white;
    color: #111827;
    border: 1px solid ${colors.gray600};
`;