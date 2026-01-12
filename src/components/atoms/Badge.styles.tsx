import styled, { css } from 'styled-components';
import { type BadgeProps }  from './Badge';
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
    border-radius: 0.625rem;
    width: fit-content;
    height: 1.9375rem;
    padding: 0.4375rem 1rem;

    ${(props: BadgeProps) => themeStyles[props.$theme]}
`;