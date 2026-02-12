import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StyledComponentsRegistry from '@/lib/registry';
// import { MSWComponent } from '@/components/MSWComponent';
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Aolda",
    description: "Aolda",
    icons: "/images/aoldaIcon.svg",
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body>
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
