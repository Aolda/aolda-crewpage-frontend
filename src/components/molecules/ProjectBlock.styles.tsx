import styled from "styled-components"
import { fontSize } from "@/styles/theme";

interface StyledProjectBlockProps {
    bgcolor: string;
}

export const StyledProjectBlock = styled.div<StyledProjectBlockProps>`
    display: flex;
    width: 17.0625rem;
    height: 25.59375rem;
    border-radius: 1.25rem;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${(props) => props.bgcolor};

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
        }
    }

    .imgSection {
        position: relative;
        width: auto;
        height: 50%;
        overflow: hidden;
        img {
            position: absolute;
            height: 18.75rem !important;
            bottom: 0;
        }
    }
`;