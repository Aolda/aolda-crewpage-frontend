// /src/components/templates/main/MainSection/MainSection.styles.ts
import styled from 'styled-components';
import { fontSize, theme } from '@/styles/theme';
import { radius, semanticColors, typography } from '@/styles/tokens';

export const SectionWrapper = styled.section<{ $bgColor?: string }>`
    display: flex;
    max-width: 90rem;
    width: 100%;

    margin: 0 auto;
    padding-top: 10rem;
    padding-left: 7.5rem;
    padding-right: 7.5rem;

    background-color: ${(props) => props.$bgColor || semanticColors.background.page};
    flex-direction: column;
    align-items: center;
    text-align: center;

    ${theme.media.mobile} {
        padding-top: 2.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        align-items: flex-start;
        text-align: left;
    }

    ${theme.media.desktopSm} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    ${theme.media.tablet} {
        padding-top: 3.75rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    [data-theme="dark"] & {
        background-color: ${(props) => props.$bgColor || semanticColors.background.page};
    }
`;

export const Header = styled.div<{ $hideOnMobile?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.75rem;
    padding: 0 1.25rem;

    ${theme.media.tablet} {
        margin-bottom: 1.5rem;
    }

    ${theme.media.mobile} {
        display: ${(props) => props.$hideOnMobile ? 'none' : 'flex'};
        align-items: flex-start;
        padding: 0;
        margin-bottom: 1.25rem;
    }
`;

export const GrayBar = styled.div`
    width: 3rem;
    height: 0;
    border: solid 1.5px ${semanticColors.border.strong};
    border-radius: ${radius.xs};
    margin-bottom: 0.5rem;

    ${theme.media.tablet} {
        width: 1.5rem;
        border: solid 1px ${semanticColors.border.strong};
    }

    ${theme.media.mobile} {
        display: none;
    }

`;

export const Label = styled.span`
    display: block;
    ${typography('Body1')};
    font-weight: 600;
    color: ${semanticColors.text.primary};
    margin-bottom: 1.5rem;

    ${theme.media.tablet} {
        margin-bottom: 0.75rem;
    }

    ${theme.media.mobile} {
        display: inline-block;
        color: ${semanticColors.text.brand};
        border: 1px solid ${semanticColors.border.brand};
        border-radius: ${radius.sm};
        padding: 0.25rem 0.5rem;
        font-size: 0.625rem;
        margin-bottom: 0.5rem;
    }

    [data-theme="dark"] & {
        color: ${semanticColors.text.brand};
    }
`;

export const Title = styled.h2`
    ${typography('Heading2')};
    line-height: 1.3;
    color: ${semanticColors.text.primary};
    margin-bottom: 1.5rem;
    word-break: keep-all;

    br.mobile-only {
        display: none;
    }

    span {
        color: ${semanticColors.text.brand};
    }

    ${theme.media.tablet} {
        font-size: ${fontSize.h3};
        margin-bottom: 0.75rem;
    }

    ${theme.media.mobile} {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        text-align: left;
        margin-bottom: 0.5rem;

        br.mobile-only {
            display: inline-block;
        }
    }

`;

export const Description = styled.p`
    ${typography('Body2')};
    line-height: 1.6;
    color: ${semanticColors.text.secondary};
    max-width: 43.75rem;
    margin: 0 auto;
    word-break: keep-all;

    ${theme.media.tablet} {
        font-size: ${fontSize.smaller};
    }

    ${theme.media.mobile} {
        font-size: 0.625rem;
        line-height: 1.5;
        margin: 0;
        text-align: left;
    }

`;

export const Content = styled.div`
    width: 100%;
    margin: 0 auto;
`;
