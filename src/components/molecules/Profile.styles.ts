// /src/components/molecules/Profile.styles.ts
import styled from "styled-components"
import { pxToRem } from "@/styles/utils";
import { fontSize, colors, theme } from "@/styles/theme";

export const StyledProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: ${pxToRem(320)};
    height: ${pxToRem(724)};
    justify-content: center;
    align-items: center;

    gap: ${pxToRem(24)};

    ${theme.media.mobile} {
        display: grid;
        width: 100%;
        height: auto;
        grid-template-areas: 
            "img info"
            "description description"
            "button button"
            "followers followers"
            "stats stats";
        
        grid-template-columns: 6rem 1fr;
        column-gap: 1.5rem;
        row-gap: 1.25rem; // 요소 간 간격 확보
        padding: 0;
        align-items: start;
        text-align: left;
    }

    .imgSection {
        grid-area: img;
        width: ${pxToRem(320)};
        height: ${pxToRem(320)};

        img {
            border: solid 2px ${colors.border};
            border-radius: 50%;
        }

        ${theme.media.mobile} {
            width: 5.5rem;
            height: 5.5rem;
        }
    }

    .infoSection {
        grid-area: info;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: ${pxToRem(84)};

        .nameInfo {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

            .name {
                font-size: ${fontSize.h2};
                font-weight: bold;
            }
        }

        ${theme.media.mobile} {
            justify-content: center;
            .nameInfo .name { font-size: 1.25rem; }
            .positionInfo { font-size: ${fontSize.smaller}; color: ${colors.gray500}; }
        }

        .positionInfo {
            font-size: ${fontSize.body1};
            font-weight: 400;
        }
    }

    .buttonSection {
        grid-area: button;
        display: flex;
        width: 100%;
        height: ${pxToRem(47)};
        justify-content: center;
        align-items: center;

        button {
            width: 100%;
            height: ${pxToRem(47)};
            border-radius: ${pxToRem(8)};
            background-color: ${colors.primary600};

            color: ${colors.white600};
        }
    }

    .descriptionSection {
        grid-area: description;
        diplay: flex;
        width: 100%;
        height: ${pxToRem(30)};
        text-align: left;

        font-size: ${fontSize.body1};
        font-weight: 400;
        color: ${colors.gray600};

        ${theme.media.mobile} {
            font-size: ${fontSize.smaller};
            padding-top: 0.5rem;
        }
    }

    .followerSection {
        grid-area: followers;
        display: inline-flex;
        width: 100%;
        align-items: center;
        gap: ${pxToRem(12)};

        font-size: ${fontSize.body1};

        ${theme.media.mobile} {
            padding: 0.5rem 0;
            border-top: 1px solid ${colors.gray500};
            font-size: ${fontSize.base};
            
            img { display: none; }
        }

        .variable {
            color: ${colors.black500};
            font-weight: 700;
        }

        .nonvariable {
            color: ${colors.gray600};
            font-weight: 400;
        }
    }

    .statsSection {
        grid-area: stats;
        display: flex;
        width: 100%;
        height: ${pxToRem(93)};
        flex-direction: column;
        
        gap: ${pxToRem(12)};

        ${theme.media.mobile} {
            padding-top: 0;
            border-top: none; 
        }

        .statContainer {
            display: inline-flex;
            gap: ${pxToRem(12)};

            font-size: ${fontSize.base};
            font-weight: 700;

            ${theme.media.mobile} {
                font-size: ${fontSize.smaller};
                color: ${colors.black500};
                
                img {
                    width: 1.125rem;
                    height: 1.125rem;
                }
            }
        }
    }
`;