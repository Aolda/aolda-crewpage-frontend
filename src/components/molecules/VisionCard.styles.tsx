import styled from "styled-components"

export const StyledVisionCard = styled.div `
    display: flex;
    width: 21.75rem;
    height: 22.75rem;
    border: 2px solid #E2E2E2;
    border-radius: 1rem;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 2rem 2.25rem;

    img {
        width: 7.5rem;
        height: 7.5rem;
    }
    
    h1 {
        color: #1A8EE5;
    }

    span {
        color: #777777;
        white-space: pre-wrap;
    }
`;