// /src/components/molecules/VisionCard.tsx
'use client';

import React from "react";
import Image from "next/image";
import * as S from "./VisionCard.styles"
/*
* Home page Vision Section의 카드(내부 요소로는 아이콘, 텍스트)
* @params {string} src 아이콘 경로
* @params {string} title 제목(variant='h1' color='blue')
* @params {string} description 설명(variant='title' color='gray')
*/
interface VisionCardProps {
    src: string;
    title: string;
    description: React.ReactNode;
}

const VisionCard: React.FC<VisionCardProps> = ({
	src,
	title,
	description
}) => {
	return (
		<S.StyledVisionCard>
			<Image src={src} alt={title} width={120} height={120}/>
			<S.TextContainer>
				<h1>{title}</h1>
				<p>{description}</p>
			</S.TextContainer>
		</S.StyledVisionCard>
	);
};

export default VisionCard