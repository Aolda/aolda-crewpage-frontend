import styled from "styled-components";

export const StyledMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 844px;
    height: 134px;
    padding-bottom: 24px;
    border-bottom: solid 1px #E2E2E2;
    gap: 20px;

    .infoSection {
        display: flex;
        height: 66px;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }

    .titleSection {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 12px;

        * {
            margin: 0;
        }
    }

    .date {
        font-size: 16px;
        color: #777777;
    }

    .descriptionSection {
        display: flex;
        width: 100%;


        p {
            margin: 0;
            color: #777777;
            font-size: 16px;
            line-height: 1.5;
            text-align: left;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;

            white-space: pre-wrap;
        }
    }
`;