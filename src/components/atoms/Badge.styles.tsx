import styled, { css } from 'styled-components';
import { type BadgeProps }  from './Badge';
import { pxToRem } from '@/styles/utils';
import { fontSize } from '@/styles/theme';

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
    font-size: ${fontSize.smaller};
    border-radius: ${pxToRem(10)};
    width: fit-content;
    height: ${pxToRem(31)};
    padding: ${pxToRem(7)} ${pxToRem(16)};

    ${(props: BadgeProps) => themeStyles[props.$theme]}
`;