import styled, { css } from 'styled-components';
import { type BadgeProps }  from './Badge';
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
    border-radius: 0.625rem;
    width: fit-content;
    height: 1.9375rem;
    padding: 0.4375rem 1rem;

    ${(props: BadgeProps) => themeStyles[props.$theme]}
`;