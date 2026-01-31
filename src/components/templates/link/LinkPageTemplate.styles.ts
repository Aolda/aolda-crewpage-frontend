import styled from "styled-components";
import { fontSize, colors } from "@/styles/theme";

export const PageHeader = styled.div`
    padding-top: 15rem;
    text-align: center;
    background: radial-gradient(circle at top right, #EBF5FF 0%, transparent 40%);

    h2 {
        font-size: ${fontSize.h2};
        font-weight: 700;
        line-height: 1.4;
        color: #111827;
        strong { color: ${colors.primary500}; }
    }
`;

export const LinkWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 7.5rem;
    width: 90rem;
    
    padding-top: 10rem;
    paddinf-left: 7.5rem;
    paddinf-right: 7.5rem;
    margin: 0 auto;
`;