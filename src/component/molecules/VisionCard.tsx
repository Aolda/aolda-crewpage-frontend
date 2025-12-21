import React from "react";
import { StyledVisionCard } from "./VisionCard.styles"
import LightBulb from "../../assets/LightBulb.png"
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
			<img src={LightBulb} alt={title}/>
			<h1>{title}</h1>
			<span>{description}</span>
		</StyledVisionCard>
	);
};

export default VisionCard