// /src/components/ProjectBlock.tsx
'use client';

import React from "react";
import Image from "next/image";
import { StyledProjectBlock } from "./ProjectBlock.styles";
import Badge from "../atoms/Badge";
import { ProjectSummary, ACTIVITY_STATUS } from "@/types/project";

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
			$bgColor={project.background?.color || "#1A8EE5"}
			onClick={() => onDetailClick?.(project.activityId)}
		>
			<section className="infoSection">
				<section className="textSection">
					<span className="countLine">
						{project.participantsCount}명 참여
					</span>
					<section className="nameSection">
						<h1>{project.activityNames.brief ? project.activityNames.brief : project.activityNames.en}</h1>
						<span className="enName">{project.activityNames.en}</span>
					</section>
				</section>
                <div className="badgeWrapper">
                    <Badge variant="transparent" status={project.status}>{ACTIVITY_STATUS[project.status]}</Badge>
                </div>
            </section>
			<section className="imgSection">
				<Image
					src={project.background?.url || project.backgroundImage.url || "#"}
					alt="projectBlock img"
					width={300}
					height={300}
				/>
			</section>
		</StyledProjectBlock>
	);
};

export default ProjectBlock
