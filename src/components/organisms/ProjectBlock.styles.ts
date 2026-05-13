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

        .imgSection { display: none; }

        .infoSection {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding: 0.75rem 0.625rem;
            gap: 0;
        }

        .textSection {
            display: contents;
        }

        h1 {
            order: 1;
            flex: 1;
            font-size: 0.75rem;
            font-weight: 700;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .countLine {
            order: 2;
            display: inline-flex;
            align-items: center;
            gap: 0.125rem;
            font-size: 0.5rem;
            flex-shrink: 0;
            white-space: nowrap;
            .crewIcon { display: inline-block; }
        }

        .badgeWrapper {
            order: 10;
            width: 100%;
            margin-top: 0.25rem;
        }

        .enName {
            order: 20;
            width: 100%;
            font-size: 0.5rem;
            opacity: 0.8;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-top: 0.125rem;
        }
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
    }

    .crewIcon {
        display: none;
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

`;