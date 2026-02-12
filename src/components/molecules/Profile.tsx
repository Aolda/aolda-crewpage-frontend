'use client';

import React from "react";
import Image from "next/image";
import { CrewMember, POSITION_LABEL } from "@/types/crew"; 
import { StyledProfile } from "./Profile.styles";
import Badge from "../atoms/Badge";
import { fontSize } from "@/styles/theme";

interface ProfileProps {
    member: CrewMember;
}

const Profile: React.FC<ProfileProps> = ({
    member,
}) => {
    return (
        <StyledProfile>
            <section className="imgSection">
                <Image src={member.profileImage} alt="crew image" width={320} height={320}/>
            </section>
            <section className="infoSection">
                <section className="nameInfo">
                    <span className="name">{member.name}</span>
                    <Badge status={member.active} variant="solid">{member.active ? "활동중" : "비활동"}</Badge>
                </section>
                <section className="positionInfo">
                    <span>{POSITION_LABEL[member.position]}</span>
                </section>
            </section>
            <section className="buttonSection">
                <button>follow</button>
            </section>
            <section className="descriptionSection">
                <span>{member.description}</span>
            </section>
            <section className="followerSection">
                <Image src="/images/crew/infoLogo.svg" alt="infoLogo" width={20} height={20}/>
                <span className="variable">{member.follower}</span>
                <span className="nonvariable">followers</span>
                <span className="nonvariable" style={{"fontSize":fontSize.base}}>·</span>
                <span className="variable">{member.following}</span>
                <span className="nonvariable">following</span>
            </section>
            <section className="statsSection">
                <section className="statContainer">
                    <Image src="/images/crew/aoldaIcon.svg" alt="aolda logo" width={20} height={20}/>
                    <span>Aolda {member.generation}기</span>
                </section>
                <section className="statContainer">
                    <Image src="/images/crew/ajouIcon.svg" alt="ajou logo" width={20} height={20}/>
                    <span>{member.department + "학과 " + member.studentNumber + "학번"}</span>
                </section>
                <section className="statContainer">
                    <Image src="/images/crew/googleIcon.svg" alt="gmail logo" width={20} height={20}/>
                    <span>{member.emailAddress}</span>
                </section>
            </section>
        </StyledProfile>
    );
}

export default Profile