import React, {useState} from "react";
import "./Test.css"
import Badge from "../component/atoms/Badge";
import HashTag from "../component/atoms/HashTag";
import VisionCard from "../component/molecules/VisionCard";
import ActivityBlock from "../component/molecules/ActivityBlock";
import CrewBlock from "../component/molecules/CrewBlock";
import CrewImg from "../assets/CrewImg.png"
import ExBgIMG from "../assets/ExBgIMG.png"
import OverviewCard from "../component/molecules/OverviewCard";
import ProjectBlock from "../component/molecules/ProjectBlock";
import { type Member, type Project, type BadgeTheme} from "../assets/Types";
import Select from "../component/molecules/Select";

const theme: BadgeTheme = "status";

const mockMember: Member = {
    src: CrewImg,
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
    src: ExBgIMG,
    title: "ACC",
    subtitle: "Aolda Cloud Console",
    status: theme,
    crewNum: 5,
    bgColor: "#018CF1",
    description: '위와 같은 서비스로 발전할 수 있는 초석을 만드는 프로젝트입니다.\n즉 미래에 만들어질 다수의 서비스를 연결할 수 있는 하나의 통합 클라우드 콘솔을  만드는 것을 의미합니다.\n“콘솔에서 각 프로젝트들을 CSP의 제품단위로 쓸 수 있도록” 말이죠',
    problems:[""],
    solutions:[""],
    members:[mockMember, mockMember],
    to: "#",
}

function Test() {
    const [selectedGeneration, setSelectedGeneration] = useState("0기");
    return (
        <>
            <div className='container'>
                <Badge $theme={theme}>활동중</Badge>
                <Badge $theme="info">{mockMember.generation}기</Badge>
                <Badge $theme="info">{mockMember.major} {mockMember.studentNumber}학번</Badge>
            </div>

            <div className='container'>
                <HashTag completed $bgColor='#1A8EE5'/>
                <HashTag $bgColor='#1A8EE5'/>
                <HashTag date='2025.08.15' $bgColor='black'/>
            </div>

            <div className='container'>
                <VisionCard
                    src=''
                    title='아이디어'
                    description={'아주대학교 학생들이 원하는 프로젝트들을 \n자유롭게 기획 및 진행해 볼 수 있어요'}
                />
            </div>

            <div className='container'>
                <ActivityBlock
                    completed={false}
                    date='2025.01.25'
                    title='네트워크 스터디'
                    subtitle='Network Study'
                    description={"2024-겨울에 진행되었던 ‘네트워크 스터디'는 아올다 0기 회원들을 대상으로 진행된 심화 네트워크 스터디 입니다."}
                />
                <ActivityBlock
                    completed={true}
                    date='2025.01.25'
                    title='네트워크 스터디'
                    subtitle='Network Study'
                    description={"2024-겨울에 진행되었던 ‘네트워크 스터디'는 아올다 0기 회원들을 대상으로 진행된 심화 네트워크 스터디 입니다."}
                />
            </div>
            <div className='container'>
                <CrewBlock member={mockMember} isHomepage={true} />
            </div>
            <div className="container">
                <CrewBlock member={mockMember} isHomepage={false} />
            </div>

            <div className="container">
                <OverviewCard title="프로젝트 수" src="#" totalNum={20} onGoingNum={12} />
                <OverviewCard title="참여 크루원" src="#" totalNum={100} onGoingNum={67} />
                <OverviewCard title="대회 참석" src="#" totalNum={16} onGoingNum={14} />
            </div>

            <div className="container">
                <ProjectBlock project={mockProject}/>
            </div>

            <div className="container">
                <Select
                    label="generation"
                    options={["0기", "1기", "2기"]}
                    onSelectChange={(value) => {
                        console.log("선택된 값:", value);
                        setSelectedGeneration(value);
                    }} />
                <Select
                    label="role"
                    options={["개발", "디자인"]}
                    onSelectChange={(value) => {
                        console.log("선택된 값:", value);
                        setSelectedGeneration(value);
                    }}/>
                <Select
                    label="department"
                    options={["소프트웨어", "사이버보안", "디지털미디어"]}
                    onSelectChange={(value) => {
                        console.log("선택된 값:", value);
                        setSelectedGeneration(value);
                    }}/>
            </div>
        </>
    );
}

export default Test