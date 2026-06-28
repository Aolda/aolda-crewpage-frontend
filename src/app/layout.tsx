import type { Metadata } from "next";
import { Noto_Sans_KR } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
// import { MSWComponent } from '@/components/MSWComponent';
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import DarkModeApplier from "@/components/DarkModeApplier";
import "./globals.css";

const notoKR = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-noto-sans',
});

const themeInitScript = `
    (function () {
        try {
            var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
            var lightQuery = window.matchMedia('(prefers-color-scheme: light)');
            var hour = new Date().getHours();
            var isNightTime = hour >= 19 || hour < 7;
            var isDark = lightQuery.matches ? false : darkQuery.matches ? true : isNightTime;

            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        } catch (_) {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    })();
`;

export const metadata: Metadata = {
    title: "Aolda",
    description: "Aolda",
    icons: {
        icon: [
            {
                url: "/images/aoldaIcon.svg?v=1",
                type: "image/svg+xml", // SVG 타입을 명시적으로 선언
            },
        ],
        // 모바일 기기 홈 화면 추가용 아이콘
        apple: "/images/aoldaIcon.svg",
    },
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={`${notoKR.variable}`} suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                />
            </head>
            <body className={notoKR.className}>
                <StyledComponentsRegistry>
                    <DarkModeApplier />
                    <Header />
                    {/* <MSWComponent> */}
                        <main style={{"marginBottom": "5rem", "minHeight": "80vh"}}>{children}</main>
                    {/* </MSWComponent> */}
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
