'use client';

import React from "react";
import Image from "next/image";
import { StyledCrewBlock } from "./CrewBlock.styles";
import Badge from "../atoms/Badge";
import { type Member } from "@/types/Types";
import { fontSize } from "@/styles/theme";
import { pxToRem } from "@/styles/utils";
/*
* CrewBook page 크루원의 정보를 보여주는 block
* @params {Member} member 크루 정보를 담은 객체
* @params {boolean} isHomepage 홈페이지 크루, 크루북 크루 구분을 위한 인자(true -> homepage)
* @params {string} className 홈페이지 크루, 크루북 크루 스타일 구분 클래스
*/

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
                <Image src={src} alt={`${name} profile`}  width={120} height={120}/>
            </section>

            <section className="textContainer">
                <section className="infoContainer">
                    <section className="nameInfo">
                        <h2>{name}</h2>
                        <span>{position}</span>
                    </section>

                    {!isHomepage && (
                        <section className="badgeContainer">
                            <Badge $theme="status">{active ? "활동중" : "비활동"}</Badge>
                            <Badge $theme="info">{generation}기</Badge>
                            <Badge $theme="info">{`${major} ${studentNumber}학번`}</Badge>
                        </section>
                    )}
                </section>

                {isHomepage ? (
                    <span className="majorInfo">{major} {studentNumber}</span>
                ) : (
                    <section className="statsContainer">
                        <section style={{"display":"inline-flex", "gap":pxToRem(12), "alignItems":"center"}}>
                            <Image src="/CategoryImg.png" alt="categoryimg" width={18} height={18}/>
                            <span style={{"color":"#A0A0A0"}}>{member.activityCount || 0}</span>
                        </section>
                        <section>·</section>
                        <section style={{"display":"inline-flex", "gap":pxToRem(12), "alignItems":"center"}}>
                            <Image src="/BlogingImg.png" alt="blogingimg" width={18} height={18}/>
                            <span style={{"color":"#A0A0A0"}}>{member.blogCount || 0}</span>
                        </section>
                    </section>
                )}
            </section>
        </StyledCrewBlock>
    );
};

export default CrewBlock