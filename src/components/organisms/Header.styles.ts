// src/components/organisms/Header.styles.ts
import styled from "styled-components"
import { fontSize, theme } from "@/styles/theme";
import { radius, semanticColors } from "@/styles/tokens";


export const StyledHeader = styled.header`
    display: flex;
    width: calc(100% - 10rem);
    height: 4.5rem;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;
    border: solid 1px ${semanticColors.border.default};
    border-radius: ${radius.lg};
    background-color: ${semanticColors.background.card};

    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translate(-50%);
    z-index: 110;

    [data-theme="dark"] & {
        background-color: ${semanticColors.background.card};
        border-color: ${semanticColors.border.default};
    }

    box-sizing: border-box;

    /* 태블릿+모바일 대응: 상단 고정 및 풀사이즈 */
    ${theme.media.tabletDown} {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        transform: none;
        border-radius: 0;
        border: none;
        height: 4.25rem;
        padding: 0 1.25rem;
    }

    .iconSection {
        display: flex;
        align-items: center;

        .logoWrapper {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
        }

        .logoText {
            display: none;

            ${theme.media.tabletDown} {
                display: block;
                font-size: 1.25rem;
                font-weight: 700;
                font-family: var(--font-paperlogy);
                color: ${semanticColors.text.brand};
                letter-spacing: -0.02em;
            }
        }
    }

    .linkSeciton.pc-only {
        display: inline-flex;
        align-items: center;
        height: 2.5rem;

        ${theme.media.tabletDown} { display: none; }
    }

    .mobile-only {
        display: none;
        ${theme.media.tabletDown} { display: flex; align-items: center; }
    }

    .iconSection.pc-only {
        width: 2.25rem;
        height: 2.25rem;

        ${theme.media.tabletDown} { display: none; }
    }

    .mobileMenuIcon {
        cursor: pointer;
        
        .hamburger {
            width: 18px;
            height: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            span {
                display: block;
                width: 100%;
                height: 2px; // 각 줄의 두께
                background-color: ${semanticColors.text.secondary}; // 회색 색상 적용 (테마 변수 활용)
                border-radius: 2px; // 끝부분을 약간 둥글게 처리하여 부드러운 느낌
                transition: all 0.3s ease-in-out; // 추후 애니메이션을 위한 준비

                [data-theme="dark"] & {
                    background-color: ${semanticColors.text.primary};
                }
            }

            &.open {
                span:nth-child(1) {
                    transform: translateY(5px) rotate(45deg); // 1번 막대를 아래로 밀고 회전
                    background-color: ${semanticColors.text.secondary}; // 강조를 위해 색상 변경 가능

                    [data-theme="dark"] & {
                        background-color: ${semanticColors.text.primary};
                    }
                }
                span:nth-child(2) {
                    opacity: 0; // 중간 막대 숨김
                    transform: translateX(-10px);

                    [data-theme="dark"] & {
                        background-color: ${semanticColors.text.primary};
                    }
                }
                span:nth-child(3) {
                    transform: translateY(-5px) rotate(-45deg); // 3번 막대를 위로 밀고 회전
                    background-color: ${semanticColors.text.secondary};

                    [data-theme="dark"] & {
                        background-color: ${semanticColors.text.primary};
                    }
                }
            }
        }
    }
`;

export const NavLink = styled.span<{ $isActive: boolean }>`
    height: 2.5rem;
    text-align: center;
    padding: 0.5rem 2.25rem;
    font-size: ${fontSize.base};
    font-weight: 400;

    color: ${props => props.$isActive ? semanticColors.text.brand : semanticColors.text.secondary};

    [data-theme="dark"] & {
        color: ${props => props.$isActive ? semanticColors.text.brand : semanticColors.text.primary};
    }

    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
        color: ${semanticColors.text.brand}; /* 마우스를 올렸을 때도 미리 피드백 제공 */
    }
`;

/* 배경 오버레이: 메뉴가 열릴 때 화면을 어둡게 만듭니다 */
export const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
    display: none;
    ${theme.media.tabletDown} {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
        opacity: ${props => props.$isOpen ? 1 : 0};
        visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
        transition: all 0.3s ease-in-out;
    }
`;

/* 사이드바 컨테이너: 오른쪽에서 등장하는 로직 */
export const MobileMenuContainer = styled.div<{ $isOpen: boolean }>`
    display: none;
    ${theme.media.tabletDown} {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        width: 70%; // 화면의 70% 너비 차지
        height: 100%;
        background-color: ${semanticColors.background.card};
        z-index: 101;

        [data-theme="dark"] & {
            background-color: ${semanticColors.background.elevated};
        }
        padding: 6rem 1.5rem 2rem;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        
        /* 오른쪽에서 슬라이드 애니메이션 */
        transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;

        .mobileNav {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .mobileNavLink {
            font-size: ${fontSize.base};
            font-weight: 500;
            color: ${semanticColors.text.secondary};
            padding: 0.75rem 0;
            border-bottom: 1px solid ${semanticColors.border.default};

            [data-theme="dark"] & {
                color: ${semanticColors.text.primary};
            }

            &.active {
                color: ${semanticColors.text.brand};
                border-bottom: 1px solid ${semanticColors.border.brand};
                font-weight: 700;
            }

            &:hover {
                color: ${semanticColors.brand.hover};
                border-bottom: 1px solid ${semanticColors.brand.hover};
            }
        }
    }
`;
