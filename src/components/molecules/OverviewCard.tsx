'use client';

import React from "react";
import Image from "next/image";
import CircularProgressBar from "./CircularProgressBar";
import { StyledOverviewCard, ColorBox } from "./OverViewCard.styles";

/*
* 주요활동 페이지의 개요 카드
* @params {number} type 1: 프로젝트, 2: 참여 크루원, 3: 대회 참석 
* @params {string} src 이미지 소스
* @params {number} totalNum 전체 활동 수
* @params {number} onGoingNum 진행중인 활동 수
*/
interface OverviewCardProps {
    type: number;
    totalNum: number;
    onGoingNum: number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
	type,
	totalNum,
	onGoingNum
}) => {
    let title="";
    let src="";
	let totalText="";
	let onGoingText="";
    let imgWidth=0;
    let imgHeight=0;
	
	if(type == 3) {
        title="파란학기 연계율";
		totalText="전체";
		onGoingText = "진행중";
        src="/images/project/PrizeImg.png";
        imgWidth=16;
        imgHeight=21.81;
	}else {
		totalText="전체";
		onGoingText="진행중";
        if (type == 1) {
            title="프로젝트 수";
            src="/images/project/CategoryBlueImg.png";
            imgWidth=18;
            imgHeight=19;
        } else {
            title="참여 크루원";
            src="/images/project/CrewBlueImg.png";
            imgWidth=18;
            imgHeight=18;
        }
	}
	
	return (
		<StyledOverviewCard>
            <section className="leftSection">
                <section className="titleSection">
                    <Image src={src} alt={title} width={imgWidth} height={imgHeight}/>
                    <h3>{title}</h3>
                </section>
                <section className="legendSection">
                    <section className="legendItem">
                        <ColorBox $color="#E2E2E2" />
                        <span style={{"color": "#777777"}}>{totalText}</span>
                    </section>
                    <section className="legendItem">
                        <ColorBox $color="#1A8EE5" />
                        <span style={{"color": "#1A8EE5"}}>{onGoingText}</span>
                    </section>
                </section>
            </section>

            <section className="rightSection">
                <CircularProgressBar total={totalNum} current={onGoingNum} />
            </section>
		</StyledOverviewCard>
	);
};

export default OverviewCard