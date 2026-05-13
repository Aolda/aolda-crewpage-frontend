// /src/components/organisms/ProjectBlock.styles.ts
import styled from "styled-components"
import { fontSize, theme } from "@/styles/theme";

interface StyledProjectBlockProps {
    $bgColor: string;
}

export const StyledProjectBlock = styled.div<StyledProjectBlockProps>`
    display: flex;
    width: 17.0625rem;
    height: 25.59375rem;
    border-radius: 1.25rem;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${(props) => props.$bgColor};
    cursor: pointer;

    * {
        margin: 0;
        color: white;
    }

    .crewIcon {
        display: none;
    }

    /* ── 기본 섹션 스타일 ── */

    .infoSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        padding: 1.25rem 0 0 0;
    }

    .textSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        width: 100%;
        overflow: hidden;
        padding: 0 0.5rem;

        h1 {
            font-size: 2.25rem;
            font-weight: bold;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
        }

        .countLine {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            font-size: ${fontSize.base};
        }
    }

    .enName {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        font-size: ${fontSize.base};
    }

    .badgeWrapper {
        display: flex;
        justify-content: center;
    }

    .imgSection {
        position: relative;
        width: auto;
        height: 50%;
        border-radius: 1.25rem;
        overflow: hidden;

        img {
            position: absolute;
            width: 100%;
            height: auto;
            bottom: 0;
        }
    }

    /* ── 태블릿 ── */
    ${theme.media.tablet} {
        width: 100%;
        height: 20rem;
        border-radius: 1rem;

        .textSection h1 {
            font-size: 1.5rem;
            line-height: 1.2;
        }

        .textSection .countLine,
        .enName {
            font-size: 0.625rem;
        }
    }

    /* ── 모바일 (기본 스타일 뒤에 위치해야 우선 적용) ── */
    ${theme.media.mobile} {
        width: 100%;
        height: 5.375rem;
        border-radius: 0.75rem;

        .imgSection {
            display: none;
        }

        .infoSection {
            flex-direction: column;
            align-items: flex-start;
            padding: 0.75rem 0.625rem;
            gap: 0.25rem;
        }

        /* 텍스트섹션: h1 + countLine 한 줄 */
        .textSection {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 0 0.75rem 0;
            gap: 0.25rem;
            overflow: visible;

            h1 {
                flex: 1;
                min-width: 0;
                font-size: 0.75rem;
                font-weight: 700;
                text-align: left;
                line-height: 1.3;
            }

            .countLine {
                flex-shrink: 0;
                width: auto;
                font-size: 0.5rem;
                text-align: right;
                display: inline-flex;
                align-items: center;
                gap: 0.125rem;
                white-space: nowrap;

                .crewIcon {
                    display: inline-block;
                }
            }
        }

        .badgeWrapper {
            width: 100%;
            justify-content: flex-start;
        }

        .enName {
            font-size: 0.5rem;
            opacity: 0.8;
            text-align: left;
        }
    }
`;
