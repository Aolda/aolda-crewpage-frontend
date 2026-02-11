import styled from 'styled-components';
import { colors, fontSize } from '@/styles/theme';

export const PageWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
`;

export const HeaderSection = styled.header`
    margin-bottom: 6rem;
    
    h1 {
        font-size: 4rem;
        font-weight: 800;
        color: #FFFFFF;
        margin: 1rem 0;
    }
    
    p {
        color: ${colors.white600};
        font-size: ${fontSize.body1};
    }
`;

/* 헤더 배경 */
export const HeaderBackground = styled.div<{ $bgColor: string, $bgImg: string }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    background: ${(props) => props.$bgColor};
    z-index: -1;

    background-image: url(${(props) => props.$bgImg});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
`;

export const Section = styled.section`
    margin-bottom: 8rem;
`;

export const SectionTitle = styled.h2`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${fontSize.h2};
    font-weight: 700;
    margin-bottom: 3.2rem;
    color: ${colors.black600};
`;

/* 활동 정보 카드 그리드 */
export const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.4rem;
    
    /* 하단 2개 배치를 위한 중앙 정렬 처리 */
    & > *:nth-last-child(-n+2):nth-child(3n+1) {
        grid-column: span 1.5; /* 혹은 별도의 컨테이너로 분리 필요 */
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