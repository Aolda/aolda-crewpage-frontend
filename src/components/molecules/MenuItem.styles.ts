// /src/components/molecules/MenuItem.styles.ts
import styled from "styled-components";
import { fontSize, colors, theme } from "@/styles/theme";

export const StyledMenuItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 52.75rem;
    height: 9.875rem;
    padding-bottom: 1.5rem;
    border-bottom: solid 1px ${colors.border};
    gap: 1.25rem;

    $:hover {
        cursor: pointer;
    }

    ${theme.media.tablet} {
        width: 100%;
        height: 7.5rem;
        padding-bottom: 1.25rem;
        gap: 0.75rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        height: auto;
        padding: 1.25rem 0;
        gap: 1rem;
    }

    .infoSection {
        display: flex;
        height: 4.125rem;
        flex-direction: column;
        align-items: flex-start;

        ${theme.media.tablet} {
            height: auto;
            width: 100%;
            gap: 0.25rem;
        }

        ${theme.media.mobile} {
            height: auto;
            width: 100%;
            gap: 0.25rem;
        }
    }

    .titleSection {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        * {
            margin: 0;
        }

        ${theme.media.mobile} {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: flex-start;
            gap: 0;

            /* 제목이 길어질 경우를 대비한 스타일 */
            h3 {
                font-size: 1.125rem;
                flex: 1;
                padding-right: 0.5rem;
                word-break: keep-all;
            }
        }
    }

    .date {
        font-size: ${fontSize.base};
        color: ${colors.gray600};

        ${theme.media.mobile} {
            font-size: ${fontSize.smaller};
        }
    }

    .descriptionSection {
        display: flex;
        width: 100%;


        p {
            margin: 0;
            color: ${colors.gray600};
            font-size: ${fontSize.base};
            line-height: 1.5;
            text-align: left;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;

            ${theme.media.mobile} {
                font-size: ${fontSize.smaller};
            }
        }
    }
`;