// /src/components/organisms/Header.tsx
'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import * as S from "./Header.styles";

const NAV_ITEMS = [
    { label: '크루북', href: '/crew' },
    { label: '주요 활동', href: '/activity' },
    { label: '주요 링크', href: '/link' },
];

const Header = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <S.StyledHeader>
                <section className="iconSection">
                    <Link href="/" className='logoWrapper'>
                        <Image src="/images/aoldaIcon.svg" alt="icon" width={35} height={36}/>
                        <span className="logoText">AOLDA</span>
                    </Link>
                </section>

                {/* 데스크톱 전용 네비게이션 */}
                <nav className="linkSeciton pc-only">
                    {NAV_ITEMS.map((item) => {
                        // 현재 경로가 해당 메뉴의 href로 시작하는지 확인 (상세 페이지 포함)
                        const isActive = pathname.startsWith(item.href);
                    
                        return (
                            <Link key={item.href} href={item.href} passHref>
                                <S.NavLink $isActive={isActive}>
                                    {item.label}
                                </S.NavLink>
                            </Link>
                        );
                    })}
                </nav>

                {/* 모바일 전용 햄버거 메뉴 아이콘 */}
                <section className="mobileMenuIcon mobile-only" onClick={toggleMenu}>
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </section>
                {/* PC에서 우측 균형을 맞추기 위한 빈 섹션 */}
                <section className="iconSection pc-only"></section>
            </S.StyledHeader>

            {/* 모바일 사이드바 메뉴 및 배경 오버레이 */}
            <S.MobileMenuOverlay $isOpen={isMenuOpen} onClick={toggleMenu} />
            <S.MobileMenuContainer $isOpen={isMenuOpen}>
                <nav className="mobileNav">
                    {NAV_ITEMS.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link key={item.href} href={item.href} onClick={toggleMenu}>
                                <div className={`mobileNavLink ${isActive ? 'active' : ''}`}>
                                    {item.label}
                                </div>
                            </Link>
                        );
                    })}
                </nav>
            </S.MobileMenuContainer>
        </>
    );
}

export default Header