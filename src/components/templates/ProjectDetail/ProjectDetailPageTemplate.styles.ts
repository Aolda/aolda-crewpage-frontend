// /src/components/templates/ProjectDetail/ProjectDetailPageTemplate.styles.ts
import styled from 'styled-components';
import { colors, fontSize, theme } from '@/styles/theme';

export const PageWrapper = styled.div`
    max-width: 90rem;
    width: 100%;
    margin: 0 auto;
    padding: 3.75rem 7.5rem;

    ${theme.media.mobile} {
        width: 100%;
        padding: 2.5rem 1.25rem;
    }
`;

export const HeaderSection = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    max-width: 75rem;
    width: 100%;
    height: 100%;

    margin: 0 auto;
    padding: 4rem 1rem 2rem 1rem;

    .titleGroup {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }
    
    h1 {
        font-size: 2.25rem;
        font-weight: 700;
        color: #FFFFFF;
        margin: 0.5rem 0;
    }
    
    p {
        color: ${colors.white600};
        font-size: ${fontSize.base};
    }

    ${theme.media.mobile} {
        width: 100%;
        .titleGroup { gap: 0.125rem; }
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
            width: 12rem;
            opacity: 0.3;
        }
    }

    ${theme.media.mobile} {
        height: 18rem;
    }
`;

export const Section = styled.section`
    margin-bottom: 8rem;
    p {
        color: ${colors.gray500};
        line-height: 1;
    }

    ${theme.media.mobile} {
        margin-bottom: 4rem;
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

    ${theme.media.mobile} {
        font-size: 1.25rem;
        img { width: 1.5rem; height: 1.5rem; }
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
        gap: 0.75rem;
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
    }
`;

export const BlogCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E5E7EB; // 연한 회색 테두리
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
        font-size: 0.875rem;
        margin-bottom: 1rem;
        
        .author {
            color: #4B5563;
            margin-right: 0.75rem;
        }
        
        .date {
            color: #9CA3AF;
        }
    }

    .preview {
        font-size: 0.875rem;
        color: #6B7280;
        line-height: 1.5;
        /* 두 줄 이상일 때 말줄임표 처리 */
        display: -webkit-box;
        -webkit-line-clamp: 1; 
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    ${theme.media.mobile} {
        padding: 1.25rem;
        h3 { font-size: 1rem; }
    }
`;

/* 참여 크루 그리드 */
export const CrewGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
    
    ${theme.media.mobile} {
        grid-template-columns: repeat(3, 1fr);
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
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.6rem;
    margin-top: 1.6rem;

    ${theme.media.mobile} {
        grid-template-columns: repeat(2, 1fr); // 모바일에서 2열
        gap: 0.75rem;
    }
`;

export const GalleryItem = styled.div`
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    overflow: hidden;
`;