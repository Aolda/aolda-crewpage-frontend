// /src/components/organisms/CrewBlock.tsx
'use client';

import React from "react";
import Image from "next/image";
import { StyledCrewBlock } from "./CrewBlock.styles";
import Badge from "../atoms/Badge";
import { CrewMember, CREW_ROLE } from "@/types/crew"; 
import { useRouter } from "next/navigation";
import ProfileImage from "../molecules/ProfileImage";
/*
* CrewBook page 크루원의 정보를 보여주는 block
* @params {Member} member 크루 정보를 담은 객체
* @params {boolean} isCrewpage 홈페이지 크루, 크루북 크루 구분을 위한 인자(true -> homepage)
* @params {string} className 홈페이지 크루, 크루북 크루 스타일 구분 클래스
*/

interface CrewBlockProps {
    member: CrewMember;
    isCrewpage: boolean;
    onDetailClick?: (id: number) => void;
}

const CrewBlock: React.FC<CrewBlockProps> = ({
	member,
    isCrewpage,
    onDetailClick,
}) => {
    const currentRole = member.crewLog[0]?.type || 'CREW_ROLE/CREW';

    const router = useRouter();

    const handleClick = () => {
        if(onDetailClick) {
            onDetailClick(member.crewId);
        }else {
            router.push(`/crew/${member.crewId}/activity`);
        }
    }

    return (
        <StyledCrewBlock 
            $isCrewpage={isCrewpage}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        >
            <section className="imageSection">
                <ProfileImage
                    key={member.profile.url}
                    src={member.profile.url}
                    alt={`${member.crewName} 프로필`}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </section>

            <section className="textSection">
                <section className="infoSection">
                    <section className="nameInfo">
                        <h2>{member.crewName}</h2>
                        <span>{CREW_ROLE[currentRole]}</span>
                    </section>

                    {isCrewpage && (
                        <section className="badgeSection">
                            <Badge variant="solid" status={member.isActive}>{member.isActive ? "활동중" : "비활동"}</Badge>
                            <Badge variant="outline">{member.joinedGen}기</Badge>
                            <span className="departmentBadgeLine">
                                <Badge variant="outline">{`${member.univDepartment} ${member.univJoinedYear.slice(-2)}학번`}</Badge>
                            </span>
                        </section>
                    )}
                </section>

                {!isCrewpage ? (
                    <h4 className="majorInfo">{member.univDepartment} {member.univJoinedYear.slice(-2)}</h4>
                ) : (
                    <section className="statsSection">
                        <section style={{"display":"inline-flex", "gap":"0.75rem", "alignItems":"center"}}>
                            <Image className="icon-gray" src="/images/crew/CategoryImg.png" alt="categoryimg" width={24} height={24}/>
                            <Image className="icon-blue" src="/images/crew/CategoryImgBlue.png" alt="categoryimg" width={24} height={24}/>
                            <span>{member.totalActivities || 0}</span>
                        </section>
                        <section>·</section>
                        <section style={{"display":"inline-flex", "gap":"0.75rem", "alignItems":"center"}}>
                            <Image className="icon-gray" src="/images/crew/BlogingImg.png" alt="blogingimg" width={24} height={24}/>
                            <Image className="icon-blue" src="/images/crew/BlogingImgBlue.png" alt="blogingimg" width={24} height={24}/>
                            <span>{member.totalBloggings || 0}</span>
                        </section>
                    </section>
                )}
            </section>
        </StyledCrewBlock>
    );
};

export default CrewBlock
