import "./Test.css"
import Badge from "../component/atoms/Badge";
import HashTag from "../component/atoms/HashTag";
import VisionCard from "../component/molecules/VisionCard";
import ActivityBlock from "../component/molecules/ActivityBlock";
import CrewBlock, { type Member } from "../component/molecules/CrewBlock";
import CrewImg from "../assets/CrewImg.png"
import OverviewCard from "../component/molecules/OverviewCard";

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

function Test() {
    return (
        <>
            <div className='container'>
                <Badge $theme="status">활동중</Badge>
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
        </>
    );
}

export default Test