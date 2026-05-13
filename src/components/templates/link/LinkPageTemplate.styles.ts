// /src/components/templates/link/LinkPageTempalte.styles.ts
import styled from "styled-components";
import { fontSize, colors, theme } from "@/styles/theme";

export const PageWrapper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
`;

/* 배경 원형 그래픽 요소들 */
export const Ellipse = styled.div`
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    pointer-events: none;

    ${theme.media.mobile} {
        opacity: 0.1; 
        filter: blur(50px);
    }

    &.ellipse1 {
        top: 37.8125rem;
        left: -13.625rem;
        width: 49.625rem;
        height: 49.625rem;
        background: rgba(26, 142, 229, 0.1);
        filter: blur(100px);

        ${theme.media.mobile} {
            width: 20rem;
            height: 20rem;
            top: 25rem;
            left: -8rem;
        }
    }

    &.ellipse2 {
        top: 10.9375rem;
        left: -11.6875rem;
        width: 52.4375rem;
        height: 52.4375rem;
        background: rgba(0, 146, 255, 0.2);
        filter: blur(80px);

        ${theme.media.mobile} {
            width: 22rem;
            height: 22rem;
            top: 5rem;
            left: -6rem;
        }
    }

    &.ellipse3 {
        top: 69.564375rem;
        left: 82.245625rem;
        width: 83.145rem;
        height: 83.145rem;

        background: radial-gradient(54.43% 54.43% at 70.76% 45.57%, #EDF7FF 0%, #197FCC 100%);
        opacity: 0.08;
        filter: blur(1.228125rem);
        backdrop-filter: blur(4.159375rem);
        transform: matrix(0, 1, 1, 0, 0, 0);

        ${theme.media.mobile} {
            width: 35rem;
            height: 35rem;
            top: 50rem;
            right: -10rem;
            left: auto;
        }
    }

    &.ellipse4 {
        top: -42.375rem;
        left: 50.825625rem;
        width: 60.845625rem;
        height: 60.845625rem;

        background: radial-gradient(54.43% 54.43% at 70.76% 45.57%, #EDF7FF 0%, #78C0F5 100%);
        opacity: 0.3;
        filter: blur(1.228125rem);
        backdrop-filter: blur(4.159375rem);
        transform: matrix(-1, 0, 0, 1, 0, 0);

        ${theme.media.mobile} {
            width: 28rem;
            height: 28rem;
            top: -10rem;
            right: -5rem;
            left: auto;
        }
    }

    &.ellipse5 {
        left: -45.4375rem;
        width: 96.6775rem;
        height: 96.6775rem;

        background: radial-gradient(94.21% 94.21% at 75.64% 6.26%, rgba(237, 247, 255, 0) 0%, #78C0F5 100%);
        opacity: 0.15;
        filter: blur(1.228125rem);
        backdrop-filter: blur(4.159375rem);
        transform: matrix(-0.57, 0.82, 0.82, 0.57, 0, 0);

        ${theme.media.mobile} {
            width: 40rem;
            height: 40rem;
            left: -15rem;
            top: 60rem;
        }
    }

    &.ellipse6 {
        top: -4.729375rem;
        left: 40.515625rem;
        width: 21.13rem;
        height: 21.13rem;

        background: radial-gradient(49.94% 49.94% at 49.94% 50.06%, #0033FF 0%, #9FD6FF 100%);
        opacity: 0.59;
        filter: blur(1.9375rem);
        transform: matrix(-1, 0, 0, 1, 0, 0);

        ${theme.media.mobile} {
            width: 12rem;
            height: 12rem;
            top: 2rem;
            right: 10%;
            left: auto;
            opacity: 0.3;
        }
    }
`;

export const PageHeader = styled.div`
    position: relative;
    z-index: 1;
    padding-top: 15rem;
    text-align: center;

    h2 {
        font-size: ${fontSize.h2};
        font-weight: 700;
        line-height: 1.4;
        color: #111827;
        strong { color: ${colors.primary500}; }
    }

    ${theme.media.mobile} {
        padding-top: 8rem;

        h2 { font-size: 1.5rem; }
    }
`;

export const LinkWrapper = styled.main`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 7.5rem;
    max-width: 90rem;
    width: 100%;

    padding-top: 10rem;
    padding-left: 7.5rem;
    padding-right: 7.5rem;
    margin: 0 auto;

    ${theme.media.desktopSm} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }

    ${theme.media.tablet} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        gap: 5rem;
    }

    ${theme.media.mobile} {
        width: 100%;
        padding: 5rem 1.25rem 0;
        gap: 4rem;
    }
`;

export const UnderSection = styled.section`
    position: relative;
    z-index: 1;
    display: flex;
    width: 90rem;
    height: auto;

    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 0 auto;
    padding: 12.5rem 7.5rem 0;

    ${theme.media.tablet} {
        width: 100%;
        padding: 8rem 2.5rem 0;
    }

    ${theme.media.mobile} {
        width: 100%;
        padding: 6rem 1.25rem 0;
    }

    .img-container {
        width: 65.8rem;
        ${theme.media.tablet} {
            width: 100%;
        }
        ${theme.media.mobile} {
            width: 100%;
        }
    }

    h2 {
        margin-top: 3.75rem;
        text-align: center;
        font-size: ${fontSize.h2};
        font-weight: 700;
        line-height: 1.4;
        color: #111827;
        span { color: ${colors.primary500}; }

        ${theme.media.mobile} {
            font-size: 1.25rem;
            margin-top: 2rem;
        }
    }
`;