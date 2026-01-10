'use client';

import styled from "styled-components";
import { fontSize, colors } from "@/styles/theme";
import { pxToRem } from "@/styles/utils";

export const StyledSearchBox = styled.section`
    display: flex;
    width: ${pxToRem(475)};
    height: ${pxToRem(48)};
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: ${pxToRem(12)} ${pxToRem(16)};
    border: solid 1px ${colors.border};
    border-radius: ${pxToRem(8)};


    input {
        border: none;
        outline: none;
        width: content-fit;
        height: ${pxToRem(24)};
        font-size: ${fontSize.base};

        &::placeholder {
            color: ${colors.gray600};
            font-size: ${fontSize.base};
            font-weight: 400;
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
            width: ${pxToRem(20)};
            height: ${pxToRem(20)};
        }
    }
`;