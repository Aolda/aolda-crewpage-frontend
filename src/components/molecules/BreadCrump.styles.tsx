import styled from 'styled-components';
import { colors, fontSize } from '@/styles/theme';

export const Breadcrumb = styled.nav`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: ${fontSize.base};
    color: ${colors.gray600};
    margin-bottom: 1.6rem;
`;

export const BreadcrumbItem = styled.span`
    display: flex;
    align-items: center;
`;

export const BreadcrumbLink = styled.a`
    color: ${colors.gray600};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        color: ${colors.primary500};
    }
`;

export const BreadcrumbText = styled.span`
    color: ${colors.gray600};
`;

export const Separator = styled.span`
    margin: 0 0.4rem;
    color: ${colors.gray600};
`;

