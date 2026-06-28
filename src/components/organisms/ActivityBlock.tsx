'use client';

import React from "react";
import HashTag from "../atoms/HashTag";
import { StyledActivityBlock } from "./ActivityBlock.styles";
import { ActivityStatusKey, ACTIVITY_STATUS } from "@/types/project";

interface ActivityBlockProps {
    status: ActivityStatusKey;
    date: string;
    title: string;
    subtitle: string;
    description: string;
}

const ActivityBlock: React.FC<ActivityBlockProps> = ({
	status,
	date,
	title,
	subtitle,
	description
}) => {
	return (
		<StyledActivityBlock>
			<section className="topSection">
                <section className="hashTagSection">
                    <HashTag status={status}/>
			        <HashTag date={date}/>
                </section>
			    <section className="titleSection">
                    <h2>{title}</h2>
			        <span>{subtitle}</span>
                </section>
            </section>
			<section className="bottomSection">
                <p>{description}</p>
            </section>
            <span className="mobileStatus">{ACTIVITY_STATUS[status]}</span>
		</StyledActivityBlock>
	);
};

export default ActivityBlock
