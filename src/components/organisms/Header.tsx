'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { pxToRem } from "@/styles/utils";
import { StyledHeader } from "./Header.styles";

const Header = () => {
    return (
        <StyledHeader>
            <section className="iconSection">
                <Image src="/icon.png" alt="icon" width={35} height={36}/>
            </section>
            <section className="linkSeciton">
                <Link href="/crewbook">크루북</Link>
                <Link href="/activity">주요 활동</Link>
                <Link href="/link">주요 링크</Link>
            </section>
            <section className="iconSection"></section>
        </StyledHeader>

    );
}

export default Header