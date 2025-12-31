'use client';

import styled from "styled-components";

export const StyledSearchBox = styled.section`
    display: flex;
    width: 443px;
    height: 24px;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border: solid #E2E2E2;
    border-radius: 8px;
    border-width: 1px;


    input {
        border: none;
        outline: none;
        width: 145px;
        height: 24px;
        font-size: 16px;

        &::placeholder {
            color: #777777;
            font-size: 16px;
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
            width: 20px;
            height: 20px;
        }
    }
`;