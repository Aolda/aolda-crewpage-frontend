// /src/components/molecules/Profile.tsx
'use client';

import React from "react";
import Image from "next/image";
import { CrewDetailResponse, CREW_ROLE } from "@/types/crew";
import { StyledProfile } from "./Profile.styles";
import Badge from "../atoms/Badge";
import { fontSize } from "@/styles/theme";
import ProfileImage from "./ProfileImage";

interface ProfileProps {
    member: CrewDetailResponse;
}

const Profile: React.FC<ProfileProps> = ({
    member,
}) => {
    const currentRole = member.crewLog[0]?.type || 'CREW_ROLE/CREW';

    return (
        <StyledProfile>
            <section className="imgSection">
                <ProfileImage
                    key={member.profile.url}
                    src={member.profile.url}
                    alt={`${member.crewName} 프로필`}
                    width={320}
                    height={320}
                />
            </section>
            <section className="infoSection">
                <section className="nameInfo">
                    <span className="name">{member.crewName}</span>
                    <div className="nameBadgeWrapper">
                        <Badge status={member.isActive} variant="solid">
                            {member.isActive ? "활동중" : "비활동"}
                        </Badge>
                    </div>
                    <button
                        className="followBtnMobile"
                        type="button"
                        disabled
                        title="팔로우 기능을 준비 중입니다."
                        aria-label="팔로우 기능 준비 중"
                    >
                        준비 중
                    </button>
                </section>
                <section className="positionInfo">
                    <span>{CREW_ROLE[currentRole]} ·</span>
                    <span className="positionBadgeMobile">
                        {` ${member.isActive ? "활동중" : "비활동"}`}
                    </span>
                </section>
            </section>
            <section className="buttonSection">
                <button
                    type="button"
                    disabled
                    title="팔로우 기능을 준비 중입니다."
                    aria-label="팔로우 기능 준비 중"
                >
                    팔로우 준비 중
                </button>
            </section>
            <section className="descriptionSection">
                <p>{member.description}</p>
            </section>
            <section className="followerSection">
                <Image src="/images/crew/infoLogo.svg" alt="infoLogo" width={20} height={20}/>
                <span className="variable">{member.connections.followers}</span>
                <span className="nonvariable">followers</span>
                <span className="nonvariable" style={{"fontSize":fontSize.base}}>·</span>
                <span className="variable">{member.connections.followings}</span>
                <span className="nonvariable">following</span>
            </section>
            <section className="statsSection">
                <section className="statContainer">
                    <Image src="/images/crew/aoldaIcon.svg" alt="aolda logo" width={20} height={20}/>
                    <span>Aolda {member.joinedGen}기</span>
                </section>
                <section className="statContainer">
                    <Image src="/images/crew/ajouIcon.svg" alt="ajou logo" width={20} height={20}/>
                    <span>{`${member.univDepartment} ${member.univJoinedYear}학번`}</span>
                </section>
                <section className="statContainer">
                    <Image src="/images/crew/googleIcon.svg" alt="gmail logo" width={20} height={20}/>
                    <span>{member.crewEmail}</span>
                </section>
            </section>
        </StyledProfile>
    );
}

export default Profile
