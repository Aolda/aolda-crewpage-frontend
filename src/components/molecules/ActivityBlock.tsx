'use client';

import React from "react";
import HashTag from "../atoms/HashTag";
import { StyledActivityBlock } from "./ActivityBlock.styles";

/*
* Home page Activity Section의 block(내부 요소로는 Badge, 텍스트)
* @params {boolean} [completed] 활동 완료 여부(완료가 아닐때는 어떤지 디자인팀에게 물어보기)
* @params {string} [date] 활동 시작 날짜
* @params {string} title 제목(variant='h3' color='balck')
* @params {string} subtitle 부제목(variant='body' color='gray')
* @params {string} description 설명(variant='body' color='gray')
*/

interface ActivityBlockProps {
    completed: boolean;
    date: string;
    title: string;
    subtitle: string;
    description: string;
}

const ActivityBlock: React.FC<ActivityBlockProps> = ({
	completed,
	date,
	title,
	subtitle,
	description
}) => {
	return (
		<StyledActivityBlock>
			<section className="topContainer">
                <section className="hashTagContainer">
                    <HashTag completed={completed} $bgColor="#1A8EE5"/>
			        <HashTag date={date} $bgColor="black"/>
                </section>
			    <section className="titleContainer">
                    <h2>{title}</h2>
			        <span style={{"color":"#777777"}}>{subtitle}</span>
                </section>
            </section>
			<section className="bottomContainer">
                <p style={{"color":"#777777"}}>{description}</p>
            </section>
		</StyledActivityBlock>
	);
};

export default ActivityBlock