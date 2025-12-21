import styled, { css } from 'styled-components';
import { type BadgeTheme }  from './Badge';

interface BadgeProps {
    $theme: BadgeTheme;
}

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
    align-item: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    border-radius: 7px;
    width: auto;
    padding: 7px 16px;

    ${(props: BadgeProps) => themeStyles[props.$theme]}
`;