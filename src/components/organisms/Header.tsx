// /src/components/organisms/Header.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { StyledHeader, NavLink } from "./Header.styles";

const NAV_ITEMS = [
    { label: '크루북', href: '/crew' },
    { label: '주요 활동', href: '/project' },
    { label: '주요 링크', href: '/link' },
];

const Header = () => {
    const pathname = usePathname();

    return (
        <StyledHeader>
            <section className="iconSection">
                <Link href="/"><Image src="/images/aoldaIcon.svg" alt="icon" width={35} height={36}/></Link>
            </section>
                <nav className="linkSeciton">
                    {NAV_ITEMS.map((item) => {
                    // 현재 경로가 해당 메뉴의 href로 시작하는지 확인 (상세 페이지 포함)
                    const isActive = pathname.startsWith(item.href);
                    
                    return (
                        <Link key={item.href} href={item.href} passHref>
                            <NavLink $isActive={isActive}>
                                {item.label}
                            </NavLink>
                        </Link>
                    );
                })}
                </nav>
            <section className="iconSection"></section>
        </StyledHeader>

    );
}

export default Header