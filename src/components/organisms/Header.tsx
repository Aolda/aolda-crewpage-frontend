'use client';

import Image from "next/image";
import Link from "next/link";
import { StyledHeader } from "./Header.styles";

const Header = () => {
    return (
        <StyledHeader>
            <section className="iconSection">
                <Image src="/aoldaIcon.svg" alt="icon" width={35} height={36}/>
            </section>
            <nav className="linkSeciton">
                <Link href="/crewbook">크루북</Link>
                <Link href="/activity">주요 활동</Link>
                <Link href="/link">주요 링크</Link>
            </nav>
            <section className="iconSection"></section>
        </StyledHeader>

    );
}

export default Header