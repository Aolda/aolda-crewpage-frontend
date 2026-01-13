import { Project } from '@/types/project';

export const MOCK_PROJECTS: Project[] = [
    {
        id: "proj_acc",
        title: "ACC",
        subtitle: "Aolda Cloud Console",
        description: "아올다 크루를 위한 통합 클라우드 관리 콘솔입니다.",
        date: "2024.01",
        status: "ONGOING", // 진행 중
        thumbnail: "/ExBgIMG.png",
        bgColor: "#1A8EE5",
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
        bgColor: "#6B7280",
        memberIds: ["crew_2"],
    }
];