import styled from "styled-components"

export const StyledActivityBlock = styled.div`
    display: flex;
    border: 1px solid #E2E2E2;
    border-radius: 20px;
    width: 216px;
    height: 296px;
    padding: 24px;

    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .hashTagContainer {
        display: inline-flex;
        align-items: flex-start;
        gap: 8px;
        margin-bottom: 16px;
    }

    .titleContainer {
        display: flex;
        width: auto;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        * {
            margin: 0;
        }
    }

    .bottomContainer {
        display: flex;
        flex-direction: row;
        justify-content: right;
        width: 100%;

        p {
            margin: 0;
            width: 160px;
            height: 54px;
            white-space: pre-wrap;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;