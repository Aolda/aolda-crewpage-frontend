'use client';

import React from "react";
import Image from "next/image";
import { StyledProjectBlock } from "./ProjectBlock.styles";
import Badge from "../atoms/Badge";
import { ProjectSummary, ACTIVITY_STATUS } from "@/types/project";
import { fontSize } from "@/styles/theme";

/*
* 주요활동 페이지의 프로젝트 카드 컴포넌트
* @params {ProjectSummary} project - 서버에서 받은 프로젝트 요약 정보
* @params {function} onDetailClick - 상세 페이지 이동 함수 (activityId 전달)
*/
interface ProjectBlockProps {
    project: ProjectSummary;
	onDetailClick?: (id: number) => void;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
	project,
	onDetailClick,
}) => {
	return (
		<StyledProjectBlock
			$bgColor={"orange"}
			onClick={() => onDetailClick?.(project.activityId)}
		>
			<section className="infoSection">
                <section className="textSection">
                    <span style={{"fontSize":fontSize.base}}>x명 참여</span>
                    <h1 style={{"fontSize": "2.25rem"}}>{project.activityNames.ko}</h1>
                    <span style={{"fontSize":fontSize.smaller}}>{project.activityNames.en}</span>
                </section>
                <Badge variant="transparent" status={project.status}>{ACTIVITY_STATUS[project.status]}</Badge>
            </section>
			<section className="imgSection">
				<Image src={project.backgroundImage.url} alt="projectBlock img" width={300} height={300}/>
			</section>
		</StyledProjectBlock>
	);
};

export default ProjectBlock