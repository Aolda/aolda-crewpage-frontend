import React from "react";
import { StyledCrewBlock } from "./CrewBlock.styles";
import Badge from "../atoms/Badge";
/*
* CrewBook page 크루원의 정보를 보여주는 block
* @params {Member} member 크루 정보를 담은 객체
* @params {boolean} isHomepage 홈페이지 크루, 크루북 크루 구분을 위한 인자(true -> homepage)
* @params {string} className 홈페이지 크루, 크루북 크루 스타일 구분 클래스
*/

export interface Member {
    src: string;
    name: string;
    position: string;
    major: string;
    studentNumber: string;
    generation: number;
    active: boolean;
    to: string;
    activityCount?: number;
    blogCount?: number;
}

interface CrewBlockProps {
    member: Member;
    isHomepage: boolean;
    onDetailClick?: (name: string) => void;
}

const CrewBlock: React.FC<CrewBlockProps> = ({
	member,
    isHomepage,
    onDetailClick,
}) => {
    const { src, name, position, major, studentNumber, generation, active, to } = member;

    return (
        <StyledCrewBlock 
            $isHomepage={isHomepage}
            onClick={!isHomepage ? () => onDetailClick?.(to) : undefined}
            style={{ cursor: isHomepage ? 'default' : 'pointer' }}
        >
            <section className="imageContainer">
                <img src={src} alt={`${name} profile`} />
            </section>

            <section className="textContainer">
                <section className="infoContainer">
                    <section className="nameInfo">
                        <h2>{name}</h2>
                        <span>{position}</span>
                    </section>

                    {/* 분기 1: Homepage가 아닐 때만 뱃지 그룹 노출 */}
                    {!isHomepage && (
                        <section className="badgeContainer">
                            <Badge $theme="status">{active ? "활동중" : "비활동"}</Badge>
                            <Badge $theme="info">{generation}기</Badge>
                            <Badge $theme="info">{`${major} ${studentNumber}학번`}</Badge>
                        </section>
                    )}
                </section>

                {/* 분기 2: 하단 정보 표시 (전공/학번 vs 활동 통계) */}
                {isHomepage ? (
                    <span className="majorInfo">{major} {studentNumber}</span>
                ) : (
                    <section className="statsContainer">
                        <span>활동 수 {member.activityCount || 0}</span>
                        <span>블로깅 수 {member.blogCount || 0}</span>
                    </section>
                )}
            </section>
        </StyledCrewBlock>
    );
};

export default CrewBlock