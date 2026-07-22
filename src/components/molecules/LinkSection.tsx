// /src/components/molecules/LinkSection.tsx
'use client';

import React from "react";
import Image from "next/image";
import { StyledLinkSection } from "./LinkSection.styles";

/*
* 주요링크 페이지의 항목별 섹션
* @params {string} src 이미지 소스
* @params {int} index 인덱스 번호(몇번쨰 항목인지)
* @params {string} title 제목
* @params {string} description 설명글
* @params {stirng} to 버튼 클릭시 이동할 링크
*/
interface LinkSectionProps {
    src: string;
    index: number;
    title: string;
    description: React.ReactNode;
    to: string;
}

const LinkSection: React.FC<LinkSectionProps> = ({
	src,
	index,
	title,
	description,
	to,
}) => {
	const isEven = index % 2 === 1;

    return (
        <StyledLinkSection $isEven={isEven}>
            <section className="imgSection">
                <Image src={src} alt={title} width={588} height={441} layout="responsive" />
            </section>
            <section className="textSection">
                <section className="titleSection">
                    <h1 className="indexNumber">0{index + 1}</h1>
                    <h1 className="title">
                        <span>아올다 </span>
                        {title}
                    </h1>
                </section>
                <p>{description}</p>
                <a className="linkButton" href={to} target="_blank" rel="noopener noreferrer">
                    아올다 {title} 이동하기
                </a>
            </section>
        </StyledLinkSection>
    );
};

export default LinkSection
