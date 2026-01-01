import styled from "styled-components"

interface StyledProjectBlockProps {
    bgColor: string;
}

export const StyledProjectBlock = styled.div<StyledProjectBlockProps>`
    display: flex;
    width: 273px;
    height: 409.5px;
    border-radius: 20px;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${(props) => props.bgColor};

    * {
        margin: 0;
        color: white;
    }

    .infoSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
        
        padding: 20px 0 0 0;
    }

    .textSection {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 4px;
    }

    .imgSection {
        position: relative;
        width: auto;
        height: 200px;
        overflow: hidden;
        img {
            position: absolute;
            width: 130%;
            top: -100px;
            left: -10%;
        }
    }
`;