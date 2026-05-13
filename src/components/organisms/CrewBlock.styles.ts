// /src/components/organisms/CrewBlock.style.ts
import styled, {css} from "styled-components";
import { fontSize, colors, theme } from "@/styles/theme";

interface CrewBlockProps {
    $isCrewpage: boolean;
}

export const StyledCrewBlock = styled.div<CrewBlockProps>`
    box-sizing: border-box;

    ${(props) => (!props.$isCrewpage) ? css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 13.8rem;
        height: 16.75rem;

        padding: 1.5rem 2.25rem;
        border: 1px solid ${colors.border};
        border-radius: 1.25rem;
        gap: 2.25rem;

        transition: transform 0.2s;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        ${theme.media.mobile} {
            width: 100%;
            height: auto;
            padding: 0.875rem 0.75rem;
            gap: 0.5rem;
            align-items: flex-start;
            border-radius: 0.5rem;

            .imageSection { display: none; }
        }

        ${theme.media.tablet} {
            width: 100%;
            height: 11.8125rem;
            padding: 0.875rem 0.75rem;
            gap: 0.75rem;
            align-items: center;
        }

        .textSection {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.75rem;
            width: 100%;
            overflow: hidden;

            .infoSection {
                display: flex;
                justify-content: center;
                width: 100%;
            }

            ${theme.media.mobile} {
                align-items: flex-start;
                gap: 0.25rem;
            }

            .nameInfo {
                h2 {
                    font-size: ${fontSize.body1};
                    font-weight: bold;

                    ${theme.media.tablet} { font-size: ${fontSize.base};}
                    ${theme.media.mobile} { font-size: ${fontSize.smaller}; }
                }

                span {
                    font-size: ${fontSize.base};

                    ${theme.media.tablet} { font-size: ${fontSize.smaller};}
                    ${theme.media.mobile} { font-size: 0.625rem; }
                }
            }

            .majorInfo {
                font-size: ${fontSize.smaller};
                font-weight: bold;
                color: ${colors.gray600};
                max-width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;

                ${theme.media.mobile} {
                    font-size: 0.625rem;
                    font-weight: 400;
                    color: ${colors.gray500};
                }
            }
        }


    ` : css`
        display: flex;
        align-items: center;
        width: 100%;
        height: 10.5rem;

        padding: 1.5rem 2.25rem;
        border: 1px solid #E2E2E2;
        border-radius: 1.25rem;
        gap: 2.25rem;

        .textSection {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 0.75rem;
        }

        .infoSection {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0.75rem;

            .nameInfo {
                h2 {
                    font-size: ${fontSize.h3};
                    font-weight: bold;
                }
                span {
                    font-size: ${fontSize.body1};
                }
            }
        }

        .badgeSection {
            display: inline-flex;
            gap: 0.5rem;
        }

        ${theme.media.tablet} {
            height: 8rem;
            padding: 1rem;
            gap: 1.5rem;

            .infoSection {
                gap: 0.5rem;
                .nameInfo {
                    height: 1.5rem;
                    h2 { font-size: 1.25rem; }
                }
            }
        }

        ${theme.media.mobile} {
            height: 5.3125rem;
            padding: 0.75rem;
            border-radius: 0.5rem;
            gap: 0;

            .imageSection { display: none; }

            .textSection {
                width: 100%;
                height: 100%;
                flex-direction: row;
                justify-content: space-between;
                align-items: flex-start;
                gap: 0;
            }

            .infoSection {
                flex: 1;
                min-width: 0;
                height: auto;
                gap: 0.25rem;
                overflow: hidden;
            }

            .statsSection {
                flex-shrink: 0;
            }

            .infoSection .nameInfo {
                h2 { font-size: 0.75rem; }
                span { font-size: 0.625rem; }
            }

            .badgeSection {
                flex-wrap: wrap;
                gap: 0.25rem;

                > span:nth-child(3) { flex-basis: 100%; }
            }
        }
    `}

    .imageSection {
        position: relative;
        width: 7.5rem;
        height: 7.5rem;
        flex-shrink: 0;
        border-radius: 50%;
        overflow: hidden;

        ${theme.media.tablet} {
            width: 5rem;
            height: 5rem;
        }
    }

    .nameInfo {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        h2 {
            font-size: ${(props) => props.$isCrewpage ? fontSize.h3 : fontSize.body1};
        }
        span {
            font-size: ${(props) => props.$isCrewpage ? fontSize.body1 : fontSize.base};
            color: ${colors.gray600};
        }

        * {
            margin: 0;
        }

        ${theme.media.mobile} {
            h2 { font-size: 0.75rem; }
            span { font-size: 0.625rem; }
        }
    }

    .statsSection {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        img {
            width: 1.125rem;
            height: 1.125rem;
        }

        .icon-blue { display: none; }

        ${theme.media.tablet} {
            height: 1.125rem;
            img {
                width: 1rem;
                height: 1rem;
            }
            span {
                font-size: ${fontSize.smaller};
            }
        }

        ${theme.media.mobile} {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
            height: auto;

            > section:nth-child(2) { display: none; }

            .icon-gray { display: none; }
            .icon-blue { display: block; }

            img {
                width: 0.75rem;
                height: 0.75rem;
            }
            span { font-size: 0.625rem; }
        }
    }
`;