// /src/components/templates/ProjectDetail/ProjectDetailPageTemplate.styles.ts
import styled, { css } from 'styled-components';
import { colors, fontSize, theme } from '@/styles/theme';

export const PageWrapper = styled.div`
    max-width: 90rem;
    width: 100%;
    margin: 0 auto;
    padding: 3.75rem 7.5rem;

    ${theme.media.desktopSm} {
        padding: 3.75rem 2.5rem;
    }

    ${theme.media.tablet} {
        padding: 3.75rem 2.5rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        padding: 1.5rem 1.25rem 2.5rem;
    }
`;

/* 모바일 전용 타이틀 블록 */
export const MobileTitle = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: block;
        margin-bottom: 1.5rem;

        h1 {
            font-size: 1.25rem; /* 20px */
            font-weight: 700;
            color: #111827;
            margin: 0 0 0.25rem;
        }

        p {
            font-size: 0.625rem; /* 10px */
            color: ${colors.gray500};
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
        color: #FFFFFF;
        margin: 0.75rem 0;
    }

    p {
        color: ${colors.white600};
        font-size: ${fontSize.base};
    }

    ${theme.media.tablet} {
        justify-content: center;
        padding: 13.5625rem 2rem 3.875rem 2rem;
        width: 100%;
        .titleGroup { gap: 0.125rem; }
    }

    ${theme.media.mobile} {
        /* 헤더 내부 콘텐츠 전부 숨김 — 타이틀은 MobileTitle로 이동 */
        & > * { display: none; }
    }
`;

/* 헤더 배경 */
export const HeaderBackground = styled.div<{ $bgColor: string }>`
    display: flex;
    position: relative;
    width: 100%;
    height: 31rem;
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
            opacity: 1;
        }
    }

    ${theme.media.mobile} {
        height: 13rem;
    }
`;

export const Section = styled.section<{ $isCard?: boolean }>`
    margin-bottom: 5rem;
    p {
        color: ${colors.gray500};
        line-height: 1.6;
        white-space: pre-wrap;
    }

    ${theme.media.tablet} {
        margin-bottom: 2rem;
    }

    ${theme.media.mobile} {
        margin-bottom: 1.5rem;
        p { 
            color: #111827;
            font-size: 0.625rem;:     
        }

        ${props => props.$isCard && css`
            border: 1px solid #E5E7EB;
            border-radius: 0.5rem;
            padding: 1rem;
        `}
    }
`;

export const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${fontSize.h3};
    font-weight: 700;
    margin-bottom: 1.25rem;
    color: ${colors.black600};

    ${theme.media.tablet} {
        font-size: 1.25rem;
        img { width: 1.5rem; height: 1.5rem; }
    }

    ${theme.media.mobile} {
        font-size: 0.75rem; /* 12px */
        gap: 0.5rem;
        margin-bottom: 0.75rem;
        img { width: 1rem; height: 1rem; } /* 16px */
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
    margin-top: 1.5rem;

    ${theme.media.mobile} {
        grid-template-columns: 1fr;
        gap: 0.75rem;
        margin-top: 0.75rem;
    }
`;

export const BlogCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 0.75rem;
    padding: 1.5rem;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    h3 {
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #111827;
    }

    .meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        margin-bottom: 0.75rem;

        .author {
            color: #4B5563;
        }

        .date {
            color: #9CA3AF;
        }
    }

    .preview {
        font-size: 0.875rem;
        color: #6B7280;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    ${theme.media.mobile} {
        padding: 0.875rem 1rem;

        h3 {
            font-size: 0.8125rem; /* 13px */
            margin-bottom: 0.25rem;
        }

        .meta {
            font-size: 0.625rem; /* 10px */
            margin-bottom: 0.375rem;
        }

        .preview {
            font-size: 0.625rem; /* 10px */
            -webkit-line-clamp: 2;
        }
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
        gap: 1rem;
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
