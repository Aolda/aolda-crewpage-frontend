import styled from 'styled-components';
import { fontSize } from '@/styles/theme';
import { pxToRem } from '@/styles/utils';

export const PageWrapper = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    min-height: 100vh;
`;

/* 헤더 섹션: 복합 그라데이션과 마스코트 배치 */
export const HeaderSection = styled.header`
    position: relative;
    width: 100%;
    /* 전체 높이 설정 (디자인에 맞춰 조절 필요) */
    height: 38.5rem; 
    background-color: #F9FAFB; /* 기본 배경색 */
    overflow: hidden; /* 배경 요소가 튀어나가지 않도록 */
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 7.5rem;

    /* 배경 원형 그래픽 요소들 */
    .ellipse1 {
        position: absolute;
        top: 15rem;
        left: 50%;
        transform: translateX(-50%);
        width: 60.9375rem; /* 화면보다 넓게 잡아서 완만한 곡선 표현 */
        height: 60.9375rem;
        border-radius: 50%;
        background: rgba(103, 132, 237, 0.8);
        z-index: 1; /* 콘텐츠보다 뒤에 */
    }

    .ellipse2 {
        position: absolute;
        top: 10.9375rem;
        left: -11.6875rem;
        width: 36.5rem;
        height: 36.5rem;
        border-radius: 50%;
        background: rgba(239, 118, 187, 0.3);
        filter: blur(46.7px);
        z-index: 0; /* 가장 뒤에 */
    }

    .ellipse3 {
        position: absolute;
        top: -17.75rem;
        right: -9.375rem;
        width: 42.5rem;
        height: 42.5rem;
        border-radius: 50%;
        background: rgba(118, 187, 239, 0.3);
        filter: blur(46.7px);
        z-index: 0; /* 가장 뒤에 */
    }

    /* 실제 콘텐츠를 감싸는 컨테이너 */
    .contentsSection {
        position: relative;
        z-index: 2; /* 배경 위에 위치 */
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        max-width: 50rem;
        padding: 0 1.25rem;

        /* 마스코트, 타이틀, 설명을 감싸는 내부 섹션 */
        .textSection {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2rem;
            color: white;
            gap: 1rem;

            h1 {
                font-size: ${fontSize.h2};
                font-weight: 700;
                line-height: 1.4;
            }

            p {
                font-size: ${fontSize.body1};
                // line-height: 1.6;
                word-break: keep-all;
            }
        }
    }
`;

export const StatsSection = styled.section`
    display: flex;
    width: 75rem;
    margin: 0 auto;
    justify-content: center;
    gap: 1.5rem;
    padding-top: 3.75rem;
    z-index: 10;
`;

/* 필터 및 그리드 섹션 */
export const FilterBar = styled.div`
    max-width: 75rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 3.75rem;
`;

export const FilterButton = styled.button<{ $isActive: boolean }>`
    /* 1. 기본 레이아웃 */
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    border: none;
    
    /* 2. 폰트 설정 */
    font-size: ${fontSize.base};
    font-weight: 700;
    line-height: 1.5;
    
    /* 3. 상태별 색상 (사용자님이 요청하신 크루 페이지 매커니즘) */
    background-color: ${props => props.$isActive ? '#111827' : '#F3F4F6'};
    color: ${props => props.$isActive ? '#FFFFFF' : '#6B7280'};
    
    /* 4. 인터랙션 */
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        /* 활성화 상태면 유지, 비활성화면 살짝 더 진한 회색으로 */
        background-color: ${props => props.$isActive ? '#111827' : '#E5E7EB'};
    }

    /* 버튼 사이의 간격을 위해 (부모 LeftButtonGroup에서 gap을 주지만 개별 설정도 가능) */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
`;

export const LeftButtonGroup = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const ProjectGrid = styled.main`
    max-width: 75rem;
    margin: 0 auto;
    display: grid;
    /* 피그마 [A-5] 디자인: 4열 그리드 */
    grid-template-columns: repeat(4, 1fr);
    gap: 2.25rem;
    padding-top: 2rem;
    padding-bottom: 10rem;
`;