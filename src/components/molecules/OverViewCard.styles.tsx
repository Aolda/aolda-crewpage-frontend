import styled from 'styled-components';

export const StyledOverviewCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 292px;
    height: 85px;
    padding: 31px; 46px;
    background-color: white;
    // 잎사귀 모양 border-radius (왼쪽 위, 오른쪽 아래만 둥글게)
    border-radius: 60px 12px 60px 12px; 
    box-shadow: 0px 4px 20px 0px #1A8EE54D;
    gap: 55px;

    .leftSection {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .titleSection {
        display: flex;
        align-items: center;
        gap: 8px;
        h3 {
            margin: 0;
            font-size: 20px;
            font-weight: bold;
        }
    }

    .legendSection {
        display: flex;
        gap: 16px;
    }

    .legendItem {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 14px;
        color: #555;
    }

    .rightSection {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const ColorBox = styled.div<{ $color: string }>`
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background-color: ${(props) => props.$color};
`;