'use client';

import React from "react";
import { StyledMenuItem } from "./MenuItem.styles";
import Badge from "../atoms/Badge";
import { type Project } from "@/types/Types";
import { fontSize } from "@/styles/theme";
/*
* 크루북 detail 페이지 Menu Section 하위 컴포넌트로, 항목을 담당
* @params {string} pageName 페이지 별로 구성 태그 구분(현재는 크루북 활동, 블로깅) activity or bloging
* @params {string} title MenuItem의 title
* @params {string} date MenuItem의 date
* @params {string} description MenuItem의 description
*/
interface MenuItemProps {
    pageName: string;
    title: Project["title"];
    date: Project["date"];
    description: Project["description"];
    status?: Project["status"];
}

const MenuItem: React.FC<MenuItemProps> = ({
	pageName,
	title,
	date,
	description,
    status
}) => {
		return (
			<StyledMenuItem>
				<section className="infoSection">
                    <section className="titleSection">
					    <h2 style={{"fontSize":fontSize.h3, "fontWeight":"bold"}}>{title}</h2>
					    { (pageName=="activity") && <Badge $theme="status">진행중</Badge> }
				    </section>
				    <span className='date' color='gray' style={{"fontSize":fontSize.base}}>{date}</span>
                </section>
				<section className="descriptionSection">
                    <p color='gray'>{description}</p>
                </section>
			</StyledMenuItem>
		);
};

export default MenuItem