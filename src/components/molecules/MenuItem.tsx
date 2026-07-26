'use client';

import React from "react";
import Link from "next/link";
import { StyledMenuItem } from "./MenuItem.styles";
import Badge from "../atoms/Badge";
import { ACTIVITY_STATUS, type ActivityStatusKey } from "@/types/project";

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
						<h2 className="title">{title}</h2>
						<div className="badgeWrapper">
							{ (pageName === "activity") && status
								&& <Badge variant="solid" status={status}>
									{ACTIVITY_STATUS[status]}
							</Badge> }
						</div>
					</section>
					<section className="dateRow">
						{ (pageName === "activity") && status && (
							<span className="inlineBadge">{ACTIVITY_STATUS[status]}</span>
						)}
						<span className="date">{date}</span>
					</section>
				</section>
				<section className="descriptionSection">
					<p>{description}</p>
				</section>
			</StyledMenuItem>
		</Link>
	);
};

export default MenuItem
