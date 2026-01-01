'use client';

import React from "react";
import Image from "next/image";
import { StyledVisionCard } from "./VisionCard.styles"
/*
* Home page Vision Section의 카드(내부 요소로는 아이콘, 텍스트)
* @params {string} src 아이콘 경로
* @params {string} title 제목(variant='h1' color='blue')
* @params {string} description 설명(variant='title' color='gray')
*/
interface VisionCardProps {
    src: string;
    title: string;
    description: string;
}

const VisionCard: React.FC<VisionCardProps> = ({
	src,
	title,
	description
}) => {
	return (
		<StyledVisionCard>
			<Image src="/LightBulb.png" alt={title} width={120} height={120}/>
			<h1>{title}</h1>
			<span>{description}</span>
		</StyledVisionCard>
	);
};

export default VisionCard