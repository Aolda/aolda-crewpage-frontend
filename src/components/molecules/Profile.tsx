'use client';

import React from "react";
import Image from "next/image";
import { CrewMember, CREW_ROLE } from "@/types/crew"; 
import { StyledProfile } from "./Profile.styles";
import Badge from "../atoms/Badge";
import { fontSize } from "@/styles/theme";

interface ProfileProps {
    member: CrewMember;
}

const Profile: React.FC<ProfileProps> = ({
    member,
}) => {
    const currentRole = member.crewLog[0]?.type || 'CREW_ROLE/CREW';

    return (
        <StyledProfile>
            <section className="imgSection">
                <Image src={member.profile.url} alt="crew image" width={320} height={320}/>
            </section>
            <section className="infoSection">
                <section className="nameInfo">
                    <span className="name">{member.crewName}</span>
                    <Badge status={member.isActive} variant="solid">{member.isActive ? "활동중" : "비활동"}</Badge>
                </section>
                <section className="positionInfo">
                    <span>{CREW_ROLE[currentRole]}</span>
                </section>
            </section>
            <section className="buttonSection">
                <button>follow</button>
            </section>
            <section className="descriptionSection">
                {/* 리스트 명세에는 없으므로, 추후 상세조회(/crew/:id) 연동 시 데이터가 추가될 예정 */}
                <span>{/* member.description */}</span>
            </section>
            <section className="followerSection">
                <Image src="/images/crew/infoLogo.svg" alt="infoLogo" width={20} height={20}/>
                <span className="variable">{/*member.follower*/}</span>
                <span className="nonvariable">followers</span>
                <span className="nonvariable" style={{"fontSize":fontSize.base}}>·</span>
                <span className="variable">{/*member.following*/}</span>
                <span className="nonvariable">following</span>
            </section>
            <section className="statsSection">
                <section className="statContainer">
                    <Image src="/images/crew/aoldaIcon.svg" alt="aolda logo" width={20} height={20}/>
                    <span>Aolda {member.joinedGen}기</span>
                </section>
                <section className="statContainer">
                    <Image src="/images/crew/ajouIcon.svg" alt="ajou logo" width={20} height={20}/>
                    <span>{member.univDepartment + member.univJoinedYear + "학번"}</span>
                </section>
                <section className="statContainer">
                    <Image src="/images/crew/googleIcon.svg" alt="gmail logo" width={20} height={20}/>
                    <span>{/*member.emailAddress*/}</span>
                </section>
            </section>
        </StyledProfile>
    );
}

export default Profile