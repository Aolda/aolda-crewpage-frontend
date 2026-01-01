'use client';

import Image from "next/image";
import SearchBox from '@/components/molecules/SearchBox';
import LinkSection from '@/components/organisms/LinkSection';
import Badge from "@/components/atoms/Badge";
import HashTag from "@/components/atoms/HashTag";
import { pxToRem } from "@/styles/utils";
import ActivityBlock from "@/components/molecules/ActivityBlock";
import OverviewCard from "@/components/molecules/OverviewCard";
import CrewBlock from "@/components/molecules/CrewBlock";
import { type Member } from "@/types/Types";
import { type Project } from "@/types/Types";
import MenuItem from "@/components/molecules/MenuItem";
import ProjectBlock from "@/components/molecules/ProjectBlock";

const mockMember: Member = {
  src: "/CrewImg.png",
  name: "김아주",
  position: "회장",
  major: "소프트웨어",
  studentNumber: "22",
  generation: 0,
  active: true,
  to: "/crew/kim-ajou",
  activityCount: 12,
  blogCount: 5
};
const mockProject: Project = {
  src: "/ExBgIMG.png",
  title: "ACC",
  subtitle: "Aolda Cloud Console",
  date: "2025.11.10 13:43",
  status: "status",
  crewNum: 5,
  bgcolor: "#018CF1",
  description: '위와 같은 서비스로 발전할 수 있는 초석을 만드는 프로젝트입니다.\n즉 미래에 만들어질 다수의 서비스를 연결할 수 있는 하나의 통합 클라우드 콘솔을  만드는 것을 의미합니다.\n“콘솔에서 각 프로젝트들을 CSP의 제품단위로 쓸 수 있도록” 말이죠',
  problems:[""],
  solutions:[""],
  members:[mockMember, mockMember],
  to: "#",
}

export default function Home() {
  return (
    <main style={{ padding: pxToRem(20) }}>
      <div>
        <Badge $theme="status">진행중</Badge>
        <Badge $theme="info">소프트웨어</Badge>
        <HashTag completed $bgColor="#1A8EE5" color="white"/>
        <HashTag date="2025.09.24" $bgColor="black" color="white" />
      </div>
        <ActivityBlock
          completed
          date="2025.01.23"
          title="네트워크 스터디"
          subtitle="Network Study"
          description="2024-겨울에 진행되었던 ‘네트워크 스터디'는 아올다 0기 회원들을 대상으로 진행된 심화 네트워크 스터디입니다.‘컴퓨터 네트워크'에서 학습한 내용을 바탕으로  라우팅/스위칭 알고리즘에 대한 분석과 가상 망분리, 서브넷팅에 대한 내용을 학습하였으며, ‘Cisco Packet Tracer’를 활용한 실습을 진행하였습니다."
        />
      <div style={{"display":"flex", "gap":"10px"}}>
        <OverviewCard type={1} totalNum={20} onGoingNum={13}/>
        <OverviewCard type={2} totalNum={20} onGoingNum={13}/>
        <OverviewCard type={3} totalNum={20} onGoingNum={13}/>
      </div>
      <div>
        <CrewBlock member={mockMember} isHomepage/>
        <CrewBlock member={mockMember} isHomepage={false}/>
      </div>
      <div style={{"display":"flex", "flexDirection":"column", "gap":"24px"}}>
        <MenuItem pageName="bloging" title={mockProject.title} date={mockProject.date} description={mockProject.description}/>
        <MenuItem pageName="bloging" title={mockProject.title} date={mockProject.date} description={mockProject.description}/>
        <MenuItem pageName="activity" title={`${mockProject.title}(${mockProject.subtitle})`} date={mockProject.date} description={mockProject.description}/>
        <MenuItem pageName="activity" title={`${mockProject.title}(${mockProject.subtitle})`} date={mockProject.date} description={mockProject.description}/>
      </div>
      <div>
        <ProjectBlock project={mockProject}/>
      </div>
    </main>
  );
}
