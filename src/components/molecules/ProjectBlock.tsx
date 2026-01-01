'use client';

import React from "react";
import Image from "next/image";
import { StyledProjectBlock } from "./ProjectBlock.styles";
import Badge from "../atoms/Badge";
import { type Project } from "@/types/Types";
import { fontSize } from "@/styles/theme";
import { pxToRem } from "@/styles/utils";

/*
* 주요활동 페이지의 project 카드
* @params {int} crewNum 참여 인원 수
* @params {string} title 제목
* @params {string} subtitle 부제목
*/
interface ProjectBlockProps {
    project: Project;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
	project,
}) => {
	return (
		<StyledProjectBlock bgcolor={project.bgcolor}>
			<section className="infoSection">
                <section className="textSection">
                    <span style={{"fontSize":fontSize.base}}>{project.crewNum}명 참여</span>
                    <h1 style={{"fontSize": pxToRem(36)}}>{project.title}</h1>
                    <span style={{"fontSize":fontSize.smaller}}>{project.subtitle}</span>
                </section>
                <Badge $theme={project.status}>진행중</Badge>
            </section>
			<section className="imgSection">
				<Image src={project.src} alt="projectBlock img" width={300} height={300}/>
			</section>
		</StyledProjectBlock>
	);
};

export default ProjectBlock