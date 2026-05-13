// /src/components/templates/project/ProjectPageTemplate.styles.ts
import styled from 'styled-components';
import { fontSize, colors, theme } from '@/styles/theme';
import { pxToRem } from '@/styles/utils';

/* 헤더 섹션: 복합 그라데이션과 마스코트 배치 */
export const HeaderSection = styled.header`
    position: relative;
    width: 100%;
    /* 전체 높이 설정 (디자인에 맞춰 조절 필요) */
    height: 38.5rem;
    background-color: #F9FAFB;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 8rem;

    ${theme.media.tablet} {
        height: 26.5rem;
        padding-top: 4rem;
    }

    ${theme.media.mobile} {
        height: auto;
        padding-top: 4.75rem;
        padding-bottom: 1.5rem;
    }

    /* 배경 원형 그래픽 요소들 */
    .ellipse1 {
        position: absolute;
        top: 15rem;
        left: 50%;
        transform: translateX(-50%);
        width: 60.9375rem;
        height: 60.9375rem;
        border-radius: 50%;
        background: rgba(103, 132, 237, 0.8);
        z-index: 1;

        ${theme.media.tablet} {
            width: 40rem;
            height: 40rem;
            top: 9rem;
        }

        ${theme.media.mobile} {
            width: 18.056rem;
            height: 18.056rem;
            top: 7rem;
            left: 50%;
            transform: translateX(-50%);
        }
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
        z-index: 0;

        ${theme.media.mobile} {
            width: 10.815rem;
            height: 10.815rem;
            top: 8.5rem;
            left: -5rem;
        }
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
        z-index: 0;

        ${theme.media.tablet} {
            width: 20rem;
            height: 20rem;
            right: -4rem;
            top: -8rem;
        }

        ${theme.media.mobile} {
            width: 12.593rem;
            height: 12.593rem;
            left: 21.741rem;
            right: auto;
            top: -5rem;
        }
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

        ${theme.media.mobile} {
            gap: 0.5rem;
        }

        /* 마스코트, 타이틀, 설명을 감싸는 내부 섹션 */
        .textSection {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2rem;
            color: white;
            gap: 1rem;

            ${theme.media.tablet} {
                margin-bottom: 1rem;
                gap: 0.5rem;
            }

            ${theme.media.mobile} {
                margin-bottom: 0;
                gap: 0.25rem;
            }

            .mascot {
                ${theme.media.tablet} {
                    width: 7.5rem;
                    height: 7.5rem;
                }

                ${theme.media.mobile} {
                    width: 5rem;
                    height: auto;
                }
            }

            h1 {
                font-size: ${fontSize.h2};
                font-weight: 700;
                line-height: 1.4;

                ${theme.media.tablet} { font-size: 1.5rem; }
                ${theme.media.mobile} { font-size: 1rem; }
            }

            p {
                font-size: ${fontSize.body1};
                word-break: keep-all;

                ${theme.media.tablet} { font-size: 1rem; }
                ${theme.media.mobile} { display: none; }
            }
        }
    }
`;

export const ContentSection = styled.main`
    max-width: 90rem;
    width: 100%;
    margin: 0 auto;
    padding-left: 7.5rem;
    padding-right: 7.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${theme.media.desktopSm} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    ${theme.media.tablet} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    ${theme.media.mobile} {
        padding: 0 1rem;
    }
`;

export const StatsSection = styled.section`
    display: flex;
    max-width: 75rem;
    width: 100%;
    justify-content: center;
    gap: 1.5rem;

    padding-top: 3.75rem;
    z-index: 10;

    ${theme.media.tablet} {
        justify-content: space-between;
        gap: 1rem;
        padding-top: 2.5rem;
        max-width: 100%;
    }

    ${theme.media.mobile} {
        flex-direction: row;
        justify-content: space-between;
        gap: 0.5rem;
        padding: 2rem 0.5rem 0;
    }
`;

/* 필터 및 그리드 섹션 */
export const FilterBar = styled.div`
    max-width: 75rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 3.75rem;

    ${theme.media.tablet} {
        width: 100%;
        padding-top: 2rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 0.5rem;
        padding-top: 1.5rem;
        overflow: visible;
    }
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

    /* 3. 상태별 색상 */
    background-color: ${props => props.$isActive ? colors.primary500 : 'none'};
    color: ${props => props.$isActive ? '#FFFFFF' : '#6B7280'};

    /* 4. 인터랙션 */
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    ${theme.media.tablet} {
        padding: 0.5rem 0.75rem;
        font-size: 0.75rem;
    }

    ${theme.media.mobile} {
        padding: 0.4rem 0.75rem;
        font-size: ${fontSize.smaller};
    }

    &:hover {
        /* 활성화 상태면 유지, 비활성화면 살짝 더 진한 회색으로 */
        background-color: ${props => props.$isActive ? colors.primary500 : '#E5E7EB'};
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

    ${theme.media.mobile} {
        display: none;
    }
`;

export const MobileCategorySelect = styled.div`
    display: none;

    ${theme.media.mobile} {
        display: flex;
        align-items: center;
    }
`;

export const ProjectGrid = styled.section`
    max-width: 75rem;
    width: 100%;
    display: grid;
    /* 피그마 [A-5] 디자인: 4열 그리드 */
    grid-template-columns: repeat(4, 1fr);
    gap: 2.25rem;
    padding: 2rem 0 10rem 0;

    ${theme.media.tablet} {
        width: 100%;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem 1.25rem;
        padding: 2rem 0 5rem 0;
    }

    ${theme.media.mobile} {
        width: 100%;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 0.75rem;
        row-gap: 0.5rem;
        padding-bottom: 5rem;
    }
`;