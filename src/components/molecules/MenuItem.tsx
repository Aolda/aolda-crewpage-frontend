'use client';

import React from "react";
import Link from "next/link";
import { StyledMenuItem } from "./MenuItem.styles";
import Badge from "../atoms/Badge";
import { ACTIVITY_STATUS, type ActivityStatusKey } from "@/types/project";
import { fontSize } from "@/styles/theme";
/*
* 크루 상세 페이지의 활동/블로깅 리스트 항목 컴포넌트
* @params {number} id - 이동에 필요한 ID
* @params {string} pageName - "activity" 또는 "블로깅"
* @params {string} title - 활동명 또는 블로그 제목
* @params {string} date - 시작 학기 또는 게시일
* @params {string} description - 활동 소개 또는 블로그 미리보기
* @params {ProjectStatus} status - 프로젝트 진행 상태 (활동 탭에서만 사용)
*/
interface MenuItemProps {
	id: number;
    pageName: string;
    title: string;
    date: string;
    description: string;
    status?: ActivityStatusKey;
}

const MenuItem: React.FC<MenuItemProps> = ({
	id,
	pageName,
	title,
	date,
	description,
    status
}) => {
	const href = pageName === "activity" ? `/project/${id}` : `/blog/${id}`;

	return (
		<Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
			<StyledMenuItem>
				<section className="infoSection">
					<section className="titleSection">
						<h2 style={{"fontSize":fontSize.h3, "fontWeight":"bold"}}>{title}</h2>
						{ (pageName==="activity") && status
							&& <Badge variant="solid" status={status}>
								{ACTIVITY_STATUS[status]}
						</Badge> }
					</section>
					<span className='date' color='gray' style={{"fontSize":fontSize.base}}>{date}</span>
				</section>
				<section className="descriptionSection">
					<p color='gray'>{description}</p>
				</section>
			</StyledMenuItem>
		</Link>
	);
};

export default MenuItem