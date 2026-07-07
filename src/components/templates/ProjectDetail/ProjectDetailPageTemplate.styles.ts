// /src/components/templates/ProjectDetail/ProjectDetailPageTemplate.styles.ts
import styled, { css } from 'styled-components';
import { fontSize, theme } from '@/styles/theme';
import { radius, semanticColors, typography } from '@/styles/tokens';

export const PageWrapper = styled.div`
    max-width: 90rem;
    width: 100%;
    margin: 0 auto;
    padding: 3.75rem 7.5rem;

    ${theme.media.desktopSm} {
        padding: 3.75rem 2rem;
    }

    ${theme.media.tablet} {
        padding: 2rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        padding: 1.5rem 1.5rem 2.5rem;
    }
`;

/* 모바일 전용 타이틀 블록 */
export const MobileTitle = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: block;
        margin-bottom: 1.25rem;

        h1 {
            ${typography('Body1')};
            font-weight: 700;
            color: ${semanticColors.text.primary};
            margin: 0 0 0.25rem;

            [data-theme="dark"] & {
                color: ${semanticColors.text.brand};
            }
        }

        p {
            ${typography('Caption2')};
            color: ${semanticColors.text.secondary};
            margin: 0;
        }
    }
`;

export const HeaderSection = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;

    max-width: 75rem;
    width: 100%;

    margin: 0 auto;
    padding: 13.5625rem 1rem 3.875rem 1rem;

    .titleGroup {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    h1 {
        font-size: 2.25rem;
        font-weight: 700;
        color: ${semanticColors.text.inverse};
        margin: 0.75rem 0;
    }

    p {
        color: ${semanticColors.text.inverse};
        font-size: ${fontSize.base};
        font-weight: 400;
    }

    ${theme.media.tablet} {
        justify-content: center;
        padding: 13.5625rem 2rem 3.875rem 2rem;
        width: 100%;
        .titleGroup { gap: 0.125rem; }
    }

    ${theme.media.mobile} {
        padding: 0;
        /* 헤더 내부 콘텐츠 전부 숨김 — 타이틀은 MobileTitle로 이동 */
        & > * { display: none !important; }
    }
`;

/* 헤더 배경 */
export const HeaderBackground = styled.div<{ $bgColor: string }>`
    display: flex;
    position: relative;
    width: 100%;
    height: 25rem;
    background: ${(props) => props.$bgColor};

    & > header {
        height: 100%;
    }

    img {
        position: absolute;
        bottom: 0;
        right: 0;

        width: 24rem;
        height: auto;

        ${theme.media.mobile} {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            object-fit: cover;
            object-position: center;
            opacity: 1;
        }
    }

    ${theme.media.mobile} {
        margin-top: 4.25rem;
        height: 17.5rem;
        overflow: hidden;
    }
`;

export const Section = styled.section<{ $isCard?: boolean }>`
    margin-bottom: 3.75rem;

    p {
        color: ${semanticColors.text.secondary};
        line-height: 1.5;
        font-weight: 400;
    }

    [data-theme="dark"] & {
        ${props => props.$isCard && css`
            border-color: ${semanticColors.border.default};
        `}
    }

    ${theme.media.tablet} {
        margin-bottom: 2rem;
    }

    ${theme.media.mobile} {
        margin-bottom: 1.25rem;
        p {
            color: ${semanticColors.text.primary};
            font-size: 0.625rem;
        }

        &.planningInfoSection {
            p {
                [data-theme="dark"] & {
                    color: ${semanticColors.text.brand};
                }
            }
        }

        ${props => props.$isCard && css`
            border: 1px solid ${semanticColors.border.default};
            border-radius: 0.5rem;
            padding: 1rem 0.75rem;
        `}
    }
`;

export const InfoSectionGroup = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3.75rem;

    ${Section} {
        margin-bottom: 0;
    }

    ${theme.media.tablet} {
        gap: 2rem;
        margin-bottom: 2rem;
    }

    ${theme.media.mobile} {
        gap: 1.25rem;
        margin-bottom: 1.25rem;
    }
`;

export const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    ${typography('Title1')};
    margin-bottom: 1.25rem;
    color: ${semanticColors.text.primary};

    ${theme.media.tablet} {
        font-size: 1.25rem;
        img { width: 1.5rem; height: 1.5rem; }
    }

    ${theme.media.mobile} {
        font-size: 0.75rem; /* 12px */
        gap: 0.25rem;
        margin-bottom: 0.5rem;
        img { width: 1rem; height: 1rem; } /* 16px */
    }

    [data-theme="dark"] & {
        color: ${semanticColors.text.primary};

        ${theme.media.mobile} {
            color: ${semanticColors.text.brand};
        }
    }
`;

/* 활동 정보 카드 그리드 */
export const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
    width: 100%;

    & > *:nth-child(-n+3) {
        grid-column: span 2;
    }

    & > *:nth-child(n+4) {
        grid-column: span 3;
    }

    ${theme.media.mobile} {
        grid-template-columns: 1fr;
        gap: 0;
        & > * { grid-column: span 1 !important; }
    }
`;

export const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;

    ${theme.media.tabletDown} {
        grid-template-columns: 1fr;
        gap: 0.75rem;

        & > *:nth-child(n + 5) {
            display: none;
        }
    }

    ${theme.media.mobile} {
        gap: 0.5rem;
    }
`;

export const BlogCard = styled.div`
    background: ${semanticColors.background.card};
    border: 1px solid ${semanticColors.border.default};
    border-radius: ${radius.lg};
    padding: 1.25rem 1.5rem;
    cursor: pointer;
    transition: transform 0.2s;

    ${theme.media.tablet} {
        padding: 0.75rem 1rem;
    }

    ${theme.media.mobile} {
        padding: 0.5rem 0.75rem;
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    h3 {
        ${typography('Body2')};
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: ${semanticColors.text.primary};

        ${theme.media.tablet} {
            font-size: ${fontSize.base};
        }

        ${theme.media.mobile} {
            font-size: ${fontSize.smaller};
            margin-bottom: 0.25rem;
        }

    }

    .meta {
        display: flex;
        align-items: center;
        gap: 1rem;
        ${typography('Body2')};
        margin-bottom: 1rem;

        ${theme.media.tablet} {
            font-size: ${fontSize.smaller};
            gap: 0.75rem;
            margin-bottom: 0.75rem;
        }

        ${theme.media.mobile} {
            font-size: 0.625rem;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .author {
            color: ${semanticColors.text.primary};
        }

        .date {
            color: ${semanticColors.text.secondary};
        }
    }

    .preview {
        ${typography('Body2')};
        color: ${semanticColors.text.secondary};
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;

        ${theme.media.tablet} {
            font-size: ${fontSize.smaller};
        }

        ${theme.media.mobile} {
            font-size: 0.625rem;

            [data-theme="dark"] & {
                color: ${semanticColors.text.primary};
            }
        }
    }

    [data-theme="dark"] & {
        background: ${semanticColors.background.card};
        border-color: ${semanticColors.border.default};
    }
`;

/* 참여 크루 그리드 */
export const CrewGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;

    ${theme.media.tablet} {
        grid-template-columns: repeat(4, 1fr);
    }

    ${theme.media.mobile} {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
        justify-items: center;
    }
`;

export const CardRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.4rem;
    margin-top: 2.4rem;
`;

export const GalleryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.6rem;
    margin-top: 1.6rem;

    ${theme.media.mobile} {
        gap: 0.375rem;
        margin-top: 0.75rem;
    }
`;

export const GalleryItem = styled.div`
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    overflow: hidden;
`;
