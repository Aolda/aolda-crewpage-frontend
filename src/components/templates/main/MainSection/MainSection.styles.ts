// /src/components/templates/main/MainSection/MainSection.styles.ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';

export const SectionWrapper = styled.section<{ $bgColor?: string }>`
    display: flex;
    max-width: 90rem;
    width: 100%;

    margin: 0 auto;
    padding-top: 10rem;
    padding-left: 7.5rem;
    padding-right: 7.5rem;

    background-color: ${(props) => props.$bgColor || '#FFFFFF'};
    flex-direction: column;
    align-items: center;
    text-align: center;

    /* 750px 반응형 대응 */
    ${theme.media.mobile} {
        padding-top: 5rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }

    ${theme.media.tablet} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.75rem;
    padding: 0 1.25rem;

    ${theme.media.mobile} {
        margin-bottom: 2rem;
    }
`;

export const GrayBar = styled.div`
    width: 3rem;
    height: 0;
    border: solid 1.5px #636363;
    border-radius: 4px;
    margin-bottom: 0.5rem;
`;

export const Label = styled.span`
    display: block;
    font-size: ${fontSize.body1};
    font-weight: 600;
    color: ${colors.black600};
    margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
    font-size: ${fontSize.h2};
    font-weight: 700;
    line-height: 1.3;
    color: #111827;
    margin-bottom: 1.5rem;
    word-break: keep-all;

    span {
        color: ${colors.primary500};
    }

    ${theme.media.mobile} {
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }
`;

export const Description = styled.p`
    font-size: ${fontSize.base};
    line-height: 1.6;
    color: ${colors.gray500};
    max-width: 43.75rem;
    margin: 0 auto;
    word-break: keep-all;

    ${theme.media.mobile} {
        font-size: ${fontSize.smaller};
        line-height: 1.5;
    }
`;

export const Content = styled.div`
    width: 100%;
    margin: 0 auto;
`;