import React, {useState, type ChangeEvent} from "react";
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
import SearchBox from "../component/molecules/SearchBox";
import MenuItem from "../component/molecules/MenuItem";
import LinkSection from "../component/organisms/LinkSection";
import LinkImg1 from "../assets/LinkImg1.png";
import LinkImg2 from "../assets/LinkImg2.png";

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
    date: "2025.11.10 13:43",
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
                <OverviewCard type={1} totalNum={20} onGoingNum={12} />
                <OverviewCard type={2} totalNum={100} onGoingNum={67} />
                <OverviewCard type={3} totalNum={16} onGoingNum={14} />
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

            <div className="container">
                <SearchBox
                    value={searchTerm}
                    onChange={handleInputChange}
                    onSearch={handleSearch}
                    placeholder="크루원을 검색해보세요"
                />
            </div>

            <div className="container">
                <MenuItem pageName="activity"
                    title={`${mockProject.title} (${mockProject.subtitle})`}
                    date={mockProject.date}
                    description={mockProject.description}
                />
            </div>

            <div className="container" style={{"flexDirection":"column"}}>
                <LinkSection 
                    src={LinkImg1}
                    index={0}
                    title="블로그"
                    description="아올다 내 아주대학교 학생들이 단순히 소학회 내 스터디 내용을 정리하는 곳이 아니라,
                    학생들이 AWS, GCP, Kubernetes, CI/CD 등 복잡한 클라우드 인프라를 직접 구축하고 운영하며
                    얻은 생생한 지식과 시행착오를 공유하는 공간입니다."
                    to="#"
                />
                <LinkSection 
                    src={LinkImg2}
                    index={1}
                    title="클라우드"
                    description="아올다는 이론과 실습의 간극을 메우기 위해 실제 클라우드 환경을
                    구축하고 운영하고 있습니다. 이 페이지는 우리 소학회원들이 자유롭게 서비스를 배포하고 테스트하며 클라우드 실무 역량을 키워나가는 
                    '개발 PlayGround'를 소개합니다."
                    to="#"
                />
            </div>
        </>
    );
}

export default Test