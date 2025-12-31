import styled, { css } from 'styled-components';
import { type BadgeProps }  from './Badge';
import { pxToRem } from '@/styles/utils';

const themeStyles = {
    info: css`
        border: 1px solid #777777;
        color: #777777;
    `,
    status: css`
        border: 1px solid white;
        background-color: #1A8EE5;
        color: white;
    `,
};

export const StyledBadge = styled.div<BadgeProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-size: 12px;
    border-radius: 7px;
    width: fit-content;
    height: 15px;
    padding: 7px 16px;

    ${(props: BadgeProps) => themeStyles[props.$theme]}
`;