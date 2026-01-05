'use client';

import React, {useState, type ChangeEvent} from "react";
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
import SearchBox from '@/components/molecules/SearchBox';
import Select from "@/components/molecules/Select";
import LinkSection from "@/components/organisms/LinkSection";

import Header from "@/components/organisms/Header";

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

  const [selectedGeneration, setSelectedGeneration] = useState("0기");

    const [searchTerm, setSearchTerm] = useState("");

    // 2. 입력값이 바뀔 때 실행될 함수
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // 3. 실제 검색을 실행할 함수 (버튼 클릭이나 엔터 시)
    const handleSearch = (query: string) => {
        if (query.trim() === "") {
            alert("검색어를 입력해주세요!");
            return;
        }
        console.log(`"${query}"(으)로 크루원을 검색합니다...`);
        // 여기에 실제 필터링 로직이나 API 호출 로직을 넣습니다.
    };
  return (
    <main style={{ padding: pxToRem(20) }}>
      <Header />
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
      <div>
        <SearchBox
          value={searchTerm}
          onChange={handleInputChange}
          onSearch={handleSearch}
          placeholder="크루원을 검색해보세요"
        />
      </div>
      <div>
        <Select label="generation" options={["0", "1", "2", "3"]} onSelectChange={() => {}} />
        <Select label="role" options={["개발", "디자인"]} onSelectChange={() => {}} />
        <Select label="department" options={["소프트웨어", "사이버보안", "디지털미디어"]} onSelectChange={() => {}} />
      </div>
      <div>
        <LinkSection
          src="/LinkImg1.png"
          index={0}
          title="블로그"
          description={"아올다 내 아주대학교 학생들이 단순히 소학회 내 스터디 내용을 정리하는 곳이 아니라, 학생들이 AWS, GCP, Kubernetes, CI/CD 등 복잡한 클라우드 인프라를 직접 구축하고 운영하며 얻은 생생한 지식과 시행착오를 공유하는 공간입니다."}
          to="#"/>
        <LinkSection
          src="/LinkImg2.png"
          index={1}
          title="클라우드"
          description={"아올다는 이론과 실습의 간극을 메우기 위해 실제 클라우드 환경을\n구축하고 운영하고 있습니다. 이 페이지는 우리 소학회원들이 자유롭게\n 서비스를 배포하고 테스트하며 클라우드 실무 역량을 키워나가는\n'개발 PlayGround'를 소개합니다."}
          to="#"/>
      </div>
    </main>
  );
}
