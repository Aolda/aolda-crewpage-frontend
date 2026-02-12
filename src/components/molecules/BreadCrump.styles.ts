import styled from 'styled-components';
import { colors, fontSize } from '@/styles/theme';

export const Breadcrumb = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: ${fontSize.base};
    color: ${colors.white500};
`;

export const BreadcrumbItem = styled.span`
    display: flex;
    align-items: center;
`;

export const BreadcrumbLink = styled.a`
    color: ${colors.white500};
    text-decoration: none;
    transition: color 0.2s;

    // &:hover {
    //     color: ${colors.primary500};
    // }
`;

export const BreadcrumbText = styled.span`
    color: ${colors.white500};
`;

export const Separator = styled.span`
    margin: 0 0.4rem;
    color: ${colors.white500};
`;

