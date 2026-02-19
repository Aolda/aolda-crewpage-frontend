import type { Metadata } from "next";
import { Noto_Sans_KR } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
// import { MSWComponent } from '@/components/MSWComponent';
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import "./globals.css";

const notoScript = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-noto-sans', 
});

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
        <html lang="ko" className={`${notoScript.variable}`}>
            <body className={notoScript.className}>
                <StyledComponentsRegistry>
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
