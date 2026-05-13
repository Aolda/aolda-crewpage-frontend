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

    ${theme.media.tablet} {
        width: 100%;
        height: 20rem;
        border-radius: 1rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        height: auto;
        border-radius: 0.75rem;

        .infoSection { display: none; }
        .imgSection { display: none; }
    }

    * {
        margin: 0;
        color: white;
    }

    .infoSection {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        
        padding: 1.25rem 0 0 0;

        ${theme.media.mobile} {
            padding: 0.5rem 0.25rem 0;
            gap: 0.125rem;
        }
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

            ${theme.media.tablet} {
                font-size: 1.5rem;
                line-height: 1.2;
            }

            ${theme.media.mobile} {
                font-size: 0.875rem;
                line-height: 1.2;
            }
        }

        span {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;

            ${theme.media.tablet} {
                font-size: 0.625rem !important;
            }

            ${theme.media.mobile} {
                font-size: 0.5rem !important;
            }
        }
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

    /* 모바일 전용 카드 레이아웃 */
    .mobileCard {
        display: none;

        ${theme.media.mobile} {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            padding: 0.75rem 0.625rem;
            width: 100%;
        }

        .mobileRow1 {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 0.25rem;
        }

        .mobileName {
            font-size: 0.75rem;
            font-weight: 700;
            flex: 1;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        .mobileParticipants {
            display: inline-flex;
            align-items: center;
            gap: 0.125rem;
            font-size: 0.5rem;
            flex-shrink: 0;
            white-space: nowrap;
            opacity: 0.9;
        }

        .mobileSubtitle {
            font-size: 0.5rem;
            opacity: 0.75;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`;