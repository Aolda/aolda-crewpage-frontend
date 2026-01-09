'use client';

import React from "react";
import Image from "next/image";
import { StyledCrewBlock } from "./CrewBlock.styles";
import Badge from "../atoms/Badge";
import { CrewMember, POSITION_LABEL } from "@/types/crew"; 
import { pxToRem } from "@/styles/utils";
import { colors } from "@/styles/theme";
/*
* CrewBook page 크루원의 정보를 보여주는 block
* @params {Member} member 크루 정보를 담은 객체
* @params {boolean} isHomepage 홈페이지 크루, 크루북 크루 구분을 위한 인자(true -> homepage)
* @params {string} className 홈페이지 크루, 크루북 크루 스타일 구분 클래스
*/

interface CrewBlockProps {
    member: CrewMember;
    isHomepage: boolean;
    onDetailClick?: (id: string) => void;
}

const CrewBlock: React.FC<CrewBlockProps> = ({
	member,
    isHomepage,
    onDetailClick,
}) => {
    // const memberStatus = member.active ? 'ACTIVE' : 'INACTIVE';

    return (
        <StyledCrewBlock 
            $isHomepage={isHomepage}
            onClick={!isHomepage ? () => onDetailClick?.(member.id) : undefined}
            style={{ cursor: isHomepage ? 'default' : 'pointer' }}
        >
            <section className="imageSection">
                <Image src={member.profileImage} alt={`${member.name} profile`}  width={120} height={120}/>
            </section>

            <section className="textSection">
                <section className="infoSection">
                    <section className="nameInfo">
                        <h2>{member.name}</h2>
                        <span>{POSITION_LABEL[member.position]}</span>
                    </section>

                    {!isHomepage && (
                        <section className="badgeSection">
                            <Badge variant="solid" status={member.active}>{member.active ? "활동중" : "비활동"}</Badge>
                            <Badge variant="outline">{member.generation}기</Badge>
                            <Badge variant="outline">{`${member.department} ${member.studentNumber}학번`}</Badge>
                        </section>
                    )}
                </section>

                {isHomepage ? (
                    <span className="majorInfo">{member.department} {member.studentNumber}</span>
                ) : (
                    <section className="statsSection">
                        <section style={{"display":"inline-flex", "gap":pxToRem(12), "alignItems":"center"}}>
                            <Image src="/CategoryImg.png" alt="categoryimg" width={18} height={18}/>
                            <span style={{"color":colors.gray500}}>{member.activityCount || 0}</span>
                        </section>
                        <section>·</section>
                        <section style={{"display":"inline-flex", "gap":pxToRem(12), "alignItems":"center"}}>
                            <Image src="/BlogingImg.png" alt="blogingimg" width={18} height={18}/>
                            <span style={{"color":colors.gray500}}>{member.blogCount || 0}</span>
                        </section>
                    </section>
                )}
            </section>
        </StyledCrewBlock>
    );
};

export default CrewBlock