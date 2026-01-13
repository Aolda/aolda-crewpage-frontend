'use client';

import React from "react";
import Image from "next/image";
import { StyledProjectBlock } from "./ProjectBlock.styles";
import Badge from "../atoms/Badge";
import { type Project, PROJECT_STATUS_LABEL } from "@/types/project";
import { fontSize } from "@/styles/theme";

/*
* 주요활동 페이지의 project 카드
* @params {Project} project 프로젝트 정보
* @params {function} onDetailClick 상세 페이지로 이동하는 함수
*/
interface ProjectBlockProps {
    project: Project;
	onDetailClick?: (id: string) => void;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
	project,
	onDetailClick,
}) => {
	const memberCount = project.memberIds.length;

	return (
		<StyledProjectBlock
			bgColor={project.bgColor}
			onClick={() => onDetailClick?.(project.id)}
		>
			<section className="infoSection">
                <section className="textSection">
                    <span style={{"fontSize":fontSize.base}}>{memberCount}명 참여</span>
                    <h1 style={{"fontSize": "2.25rem"}}>{project.title}</h1>
                    <span style={{"fontSize":fontSize.smaller}}>{project.subtitle}</span>
                </section>
                <Badge variant="transparent" status={project.status}>{PROJECT_STATUS_LABEL[project.status]}</Badge>
            </section>
			<section className="imgSection">
				<Image src={project.thumbnail} alt="projectBlock img" width={300} height={300} layout="responsive"/>
			</section>
		</StyledProjectBlock>
	);
};

export default ProjectBlock