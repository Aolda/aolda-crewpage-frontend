// /src/components/organisms/ProjectBlock.styles.ts
import styled from "styled-components"
import { fontSize, theme } from "@/styles/theme";

interface StyledProjectBlockProps {
    $bgColor: string;
}

export const StyledProjectBlock = styled.div<StyledProjectBlockProps>`
    display: flex;
    width: 17.0625rem;
    height: 25.59375rem;
    border-radius: 1.25rem;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${(props) => props.$bgColor};
    cursor: pointer;

    ${theme.media.mobile} {
        width: 100%;
        height: 20rem;
        border-radius: 0.75rem;
    }

    * {
        margin: 0;
        color: white;
    }

    .infoSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        
        padding: 1.25rem 0 0 0;

        ${theme.media.mobile} {
            padding: 0.5rem 0.25rem 0;
            gap: 0.125rem;
        }
    }

    .textSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;

        h1 {
            font-size: 2.25rem;
            font-weight: bold;
            
            ${theme.media.mobile} { 
                font-size: 0.875rem;
                line-height: 1.2;
            }
        }

        span {
            ${theme.media.mobile} { 
                font-size: 0.5rem !important;
            }
        }
    }

    .imgSection {
        position: relative;
        width: auto;
        height: 50%;
        border-radius: 1.25rem;
        overflow: hidden;

        ${theme.media.mobile} {
            height: 35%;
        }

        img {
            position: absolute;
            width: 100%;
            height: auto;
            bottom: 0;
        }
    }
`;