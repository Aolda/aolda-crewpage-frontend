'use client';

import Image from "next/image";
import { StyledFooter } from "./Footer.styles"

const Footer = () => {
    return (
        <StyledFooter>
            <section className="footerInner">
                <section className="logoSection">
                    <Image src="/images/aoldaIcon.svg" alt="Aolda logo" width={32} height={32}/>
                </section>

                <section className="textSection">
                    <section className="brandSection">
                        <span className="brandName">AOLDA</span>
                        <span className="description">교내 클라우드 인프라 개발/운영 소학회</span>
                    </section>

                    <section className="addressSection">
                        <span className="address">경기도 수원시 영통구 원천동 월드컵로 206 아주대학교</span>
                        <section className="managementSection">
                            <span className="management">회장 이수연</span>
                            <span className="divider" />
                            <span className="management">부회장 천진강</span>
                            <span className="divider" />
                            <span className="management">총무 간서인</span>
                        </section>
                    </section>
                </section>
            </section>
        </StyledFooter>
    );
};

export default Footer
