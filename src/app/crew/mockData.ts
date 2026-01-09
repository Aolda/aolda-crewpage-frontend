import { CrewMember } from '@/types/crew';
import { Project } from '@/types/project';

export const MOCK_CREW_LIST: CrewMember[] = [
    {
        id: "crew_1",
        name: "김철수",
        profileImage: "/images/profiles/sample1.png",
        position: 4, // 크루원
        department: "소프트웨어전공",
        studentNumber: "22",
        generation: 2,
        active: 'ACTIVE',
        emailAddress: "chulsoo@example.com",
        description: "새로운 기술을 배우는 것을 좋아하는 신입 크루입니다.",
        follower: 15,
        following: 20,
        activityCount: 10,
        blogCount: 5,
    },
    {
        id: "crew_2",
        name: "이영희",
        profileImage: "/images/profiles/sample2.png",
        position: 1,
        department: "사이버보안전공",
        studentNumber: "20",
        generation: 1,
        active: 'ACTIVE',
        emailAddress: "younghee@example.com",
        description: "아올다의 1기 회장을 맡고 있는 이영희입니다.",
        follower: 250,
        following: 180,
        activityCount: 24,
        blogCount: 12,
    },
    {
        id: "crew_3",
        name: "박지민",
        profileImage: "/images/profiles/sample3.png",
        position: 2,
        department: "컴퓨터공학전공",
        studentNumber: "21",
        generation: 1,

        active: 'ACTIVE',
        emailAddress: "jimin@example.com",
        description: "꼼꼼한 설계와 기록을 중요하게 생각합니다.",
        follower: 85,
        following: 90,
        activityCount: 10,
        blogCount: 5,
    },
];

export const MOCK_PROJECTS: Project[] = [
    {
        id: "proj_acc",
        title: "ACC",
        subtitle: "Aolda Cloud Console",
        description: "아올다 크루를 위한 통합 클라우드 관리 콘솔입니다.",
        date: "2024.01",
        status: "ONGOING", // 진행 중
        thumbnail: "/images/projects/acc-thumb.png",
        bgcolor: "#1A8EE5",
        memberIds: ["crew_1", "crew_2"],
    },
    {
        id: "proj_new",
        title: "Next Project",
        subtitle: "새로운 기획",
        description: "현재 아이디어 구상 및 요구사항 정의 단계에 있습니다.",
        date: "2024.03",
        status: "PLANNING", // 기획 중
        thumbnail: "/images/projects/planning-thumb.png",
        bgcolor: "#6B7280",
        memberIds: ["crew_2"],
    }
];