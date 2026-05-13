// /src/components/ProjectBlock.tsx
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
			$bgColor={project.background?.color || "#1A8EE5"}
			onClick={() => onDetailClick?.(project.activityId)}
		>
			{/* 데스크탑/태블릿 레이아웃 */}
			<section className="infoSection">
                <section className="textSection">
                    <span>{project.participantsCount}명 참여</span>
                    <h1>{project.activityNames.brief}</h1>
                    <span>{project.activityNames.en}</span>
                </section>
                <Badge variant="transparent" status={project.status}>{ACTIVITY_STATUS[project.status]}</Badge>
            </section>
			<section className="imgSection">
				<Image
					src={project.background?.url || project.backgroundImage.url || "#"}
					alt="projectBlock img"
					width={300}
					height={300}
				/>
			</section>

			{/* 모바일 전용 레이아웃 */}
			<section className="mobileCard">
				<section className="mobileRow1">
					<span className="mobileName">{project.activityNames.brief}</span>
					<span className="mobileParticipants">
						<Image src="/images/project/CrewImg.png" alt="" width={10} height={10} />
						{project.participantsCount}명 참여
					</span>
				</section>
				<Badge variant="transparent" status={project.status}>{ACTIVITY_STATUS[project.status]}</Badge>
				<span className="mobileSubtitle">{project.activityNames.en}</span>
			</section>
		</StyledProjectBlock>
	);
};

export default ProjectBlock