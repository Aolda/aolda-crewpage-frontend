import styled from 'styled-components';
import { colors, fontSize } from '@/styles/theme';

export const PageWrapper = styled.div`
    width: 90rem;
    margin: 0 auto;

    padding-top: 3.75rem;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
    padding-bottom: 3.75rem;
`;

export const HeaderSection = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 75rem;
    height: auto;

    margin: 0 auto;
    margin-bottom: 3.75rem;
    
    h1 {
        font-size: 2.25rem;
        font-weight: 700;
        color: #FFFFFF;
        margin: 1rem 0;
    }
    
    p {
        color: ${colors.white600};
        font-size: ${fontSize.base};
    }
`;

/* 헤더 배경 */
export const HeaderBackground = styled.div<{ $bgColor: string }>`
    display: flex;
    position: relative;
    width: 100%;
    height: 25rem;
    background: ${(props) => props.$bgColor};

    img {
        position: absolute;
        bottom: 0;
        right: 0;

        width: 24rem;
        height: auto;
    }
`;

export const Section = styled.section`
    margin-bottom: 8rem;
    p {
        color: ${colors.gray500};
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
`;

/* 활동 정보 카드 그리드 */
export const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 6열 그리드 생성 */
    gap: 1.5rem;
    width: 100%;

    /* 1, 2, 3번째 카드 (첫 줄): 각각 2칸씩 차지 (2 * 3 = 6) */
    & > *:nth-child(-n+3) {
        grid-column: span 2;
    }

    /* 4, 5번째 카드 (둘째 줄): 각각 3칸씩 차지 (3 * 2 = 6) */
    & > *:nth-child(n+4) {
        grid-column: span 3;
    }

    /* 모바일 대응: 한 줄에 하나씩 */
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        & > * {
            grid-column: span 1 !important;
        }
    }
`;

/* 참여 크루 그리드 */
export const CrewGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4열 배치 */
    gap: 2rem;
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
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
`;

export const GalleryItem = styled.div`
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    overflow: hidden;
`;