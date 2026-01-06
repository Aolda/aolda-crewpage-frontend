'use client';

import React, {type CSSProperties} from "react";
import Image from "next/image";
import { StyledLinkSection } from "./LinkSection.styles";
import { pxToRem } from "@/styles/utils";
import { colors } from "@/styles/theme";

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
    description: string;
    to: string;
}

const LinkSection: React.FC<LinkSectionProps> = ({
	src,
	index,
	title,
	description,
	to
}) => {
	let flexDirection = "row";
	let align="flex-start";
	let textalign="left";
	
	if((index+1) % 2 == 1) {
		flexDirection="row";
		align="flex-start";
		textalign="left";
	}else {
		flexDirection="row-reverse";
		align="flex-end";
		textalign="right";
	}
	const styles: Record<string, CSSProperties> = {
	    "offsetStyles": {
		    "display": "flex",
	        "flexDirection": flexDirection as React.CSSProperties['flexDirection'],
            "gap": pxToRem(24),
			"textAlign": textalign as React.CSSProperties['textAlign'],
	    }
	};
	
	return (
		<StyledLinkSection style={styles.offsetStyles}>
			<section className="imgSection">
				<Image src={src} alt={title} width={588} height={441}/>
			</section>
			<section className="textSection" style={{"alignItems":align}}>
				<h1 style={{"fontSize":pxToRem(72), "color":colors.primary500, "fontWeight":"700"}}>0{index+1}</h1>
				<h1 style={{"fontSize": pxToRem(32), "fontWeight":"700"}}>
					<span style={{"color":colors.primary500}}>아올다 </span>
					{title}
				</h1>
				<p>{description}</p>
				<button onClick={() => {}}>
					아올다 {title} 이동하기
				</button>
			</section>
		</StyledLinkSection>
	);
};

export default LinkSection