import styled, { css } from 'styled-components';
import { type BadgeProps }  from './Badge';
import { pxToRem } from '@/styles/utils';
import { fontSize, colors } from '@/styles/theme';

const themeStyles = {
    info: css`
        border: 1px solid ${colors.gray600};
        color: ${colors.gray600};
    `,
    status: css`
        border: 1px solid ${colors.white500};
        background-color: ${colors.primary500};
        color: ${colors.white500};
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