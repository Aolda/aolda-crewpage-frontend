import React from "react";
import { StyledProjectBlock } from "./ProjectBlock.styles";
import Badge from "../atoms/Badge";
import { type Project } from "../../assets/Types";

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
		<StyledProjectBlock bgColor={project.bgColor}>
			<section className="infoSection">
                <section className="textSection">
                    <span style={{"fontSize":"16px"}}>{project.crewNum}명 참여</span>
                    <h1 style={{"fontSize": "36px"}}>{project.title}</h1>
                    <span style={{"fontSize":"12px"}}>{project.subtitle}</span>
                </section>
                <Badge $theme={project.status}>진행중</Badge>
            </section>
			<section className="imgSection">
				<img src={project.src} alt="projectBlock img" />
			</section>
		</StyledProjectBlock>
	);
};

export default ProjectBlock