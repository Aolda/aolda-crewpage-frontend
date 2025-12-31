import styled from "styled-components"

export const StyledVisionCard = styled.div `
    display: flex;
    width: 348px;
    height: 358px;
    border: 2px solid #E2E2E2;
    border-radius: 16px;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 32px 36px;

    img {
        width: 120px;
        height: 120px;
    }
    
    h1 {
        color: #1A8EE5;
    }

    span {
        color: #777777;
        white-space: pre-wrap;
    }
`;