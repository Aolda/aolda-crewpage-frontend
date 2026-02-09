'use client';

import Image from "next/image";
import { StyledFooter } from "./Footer.styles"

const Footer = () => {
    return (
        <StyledFooter>
            <section className="logoSection">
                <Image src="/logo.svg" alt="logo" width={130} height={33}/>
                <span className="description">교내 클라우드 인프라 개발/운영 소학회</span>
            </section>
            <section className="addressSection">
                <span className="address">경기도 수원시 영통구 원천동 월드컵로 206 아주대학교</span>
                <section className="managementSection">
                    <span className="management">회장 이나현</span>
                    <span className="divider"></span>
                    <span className="management">부회장 조예진</span>
                    <span className="divider"></span>
                    <span className="management">총무 김화균</span>
                </section>
            </section>
        </StyledFooter>
    );
};

export default Footer