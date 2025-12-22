import React from "react";
import CircularProgressBar from "./CircularProgressBar";
import { StyledOverviewCard, ColorBox } from "./OverViewCard.styles";

/*
* 주요활동 페이지의 개요 카드
* @params {string} title 제목
* @params {string} src 이미지 소스
* @params {int} totalNum 전체 활동 수
* @params {int} onGoingNum 진행중인 활동 수
*/
interface OverviewCardProps {
    title: string;
    src: string;
    totalNum: number;
    onGoingNum: number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
	title,
	src,
	totalNum,
	onGoingNum
}) => {
	let totalText="";
	let onGoingText="";
	
	if(title == "대회 참석") {
		totalText="참석";
		onGoingText = "수상";
	}else {
		totalText="전체";
		onGoingText="진행중";
	}
	
	return (
		<StyledOverviewCard>
            <section className="leftSection">
                <section className="titleSection">
                    <img src={src} alt={title}/>
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