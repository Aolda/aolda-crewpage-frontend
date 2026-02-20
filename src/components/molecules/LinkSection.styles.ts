import styled from "styled-components";
import { colors, fontSize } from "@/styles/theme";

export const StyledLinkSection = styled.section`
    .imgSection {
        width: 36.75rem;
        height: 27.5625rem;

        img {
            width: 100%;
        }
    }

    .textSection {
        display: flex;
        flex-direction: column;
        width: 36.75rem;
        gap: 2rem;

        p {
            margin: 0;
            color: #777777;
            font-size: ${fontSize.body1};
            font-weight: 400;
            line-height: 1.5;

            white-space: pre-wrap;

            span {
                color: ${colors.primary500};
            }
        }
    }

    button {
        background: none;
        border: solid 1px #777777;
        border-radius: 0.5rem;
        padding: 0.75rem 1rem;
    }
`;