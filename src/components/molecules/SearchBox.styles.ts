'use client';

import styled from "styled-components";
import { fontSize, colors, theme } from "@/styles/theme";

export const StyledSearchBox = styled.section`
    display: flex;
    width: 29.6875rem;

    ${theme.media.tablet} {
        width: 22.5rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        height: 2rem;
        padding: 0 0.75rem;
    }

    height: 3rem;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
    border: solid ${colors.border};
    border-radius: 0.5rem;
    border-width: 1px;

    cursor: text;


    input {
        border: none;
        outline: none;
        width: fit-content;
        height: 1.5rem;
        font-size: ${fontSize.base};

        &::placeholder {
            color: ${colors.gray600};
            font-size: ${fontSize.base};
            font-weight: 400;
        }

        ${theme.media.mobile} {
            &::placeholder {
                font-size: 0.625rem;
            }
        }
    }

    button {
        background: none;
        border: none;
        outline: none;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
    
        img {
            width: 1.25rem;
            height: 1.25rem;

            ${theme.media.mobile} {
                width: 0.75rem;
                height: 0.75rem;
            }
        }
    }
`;