import { CrewMember } from '@/types/crew';

export const MOCK_CREW_LIST: CrewMember[] = [
    {
        crewId: 1, // 명세에 따라 숫자로 변경
        profile: { url: "/images/CrewImg.png" }, // 객체 구조로 변경
        crewName: "이나현",
        crewLog: [
            { generation: 0, type: "CREW_ROLE/P", department: "DEPARTMENT_TYPE/DEV" }
        ], // 기수별 상세 로그 추가
        isActive: true, // boolean으로 변경
        joinedGen: 0,
        univDepartment: "소프트웨어",
        univJoinedYear: "22", // "00" 형태의 문자열
        totalActivities: 10,
        totalBloggings: 5,
    },
    {
        crewId: 2,
        profile: { url: "/images/CrewImg.png" },
        crewName: "조예진",
        crewLog: [
            { generation: 0, type: "CREW_ROLE/VP", department: "DEPARTMENT_TYPE/DEV" }
        ],
        isActive: true,
        joinedGen: 0,
        univDepartment: "소프트웨어",
        univJoinedYear: "21",
        totalActivities: 24,
        totalBloggings: 12,
    },
    {
        crewId: 3,
        profile: { url: "/images/CrewImg.png" },
        crewName: "김화균",
        crewLog: [
            { generation: 0, type: "CREW_ROLE/EA", department: "DEPARTMENT_TYPE/INFRA" }
        ],
        isActive: true,
        joinedGen: 0,
        univDepartment: "사이버보안",
        univJoinedYear: "21",
        totalActivities: 10,
        totalBloggings: 5,
    },
    {
        crewId: 4,
        profile: { url: "/images/CrewImg.png" },
        crewName: "천진강",
        crewLog: [
            { generation: 1, type: "CREW_ROLE/CREW", department: "DEPARTMENT_TYPE/INFRA" }
        ],
        isActive: true,
        joinedGen: 1,
        univDepartment: "사이버보안",
        univJoinedYear: "21",
        totalActivities: 10,
        totalBloggings: 5,
    },
    {
        crewId: 5,
        profile: { url: "/images/CrewImg.png" },
        crewName: "한동현",
        crewLog: [
            { generation: 1, type: "CREW_ROLE/CREW", department: "DEPARTMENT_TYPE/INFRA" }
        ],
        isActive: true,
        joinedGen: 1,
        univDepartment: "사이버보안",
        univJoinedYear: "21",
        totalActivities: 10,
        totalBloggings: 5,
    },
    {
        crewId: 6,
        profile: { url: "/images/CrewImg.png" },
        crewName: "문서현",
        crewLog: [
            { generation: 1, type: "CREW_ROLE/CREW", department: "DEPARTMENT_TYPE/DEV" }
        ],
        isActive: true,
        joinedGen: 1,
        univDepartment: "소프트웨어",
        univJoinedYear: "21",
        totalActivities: 10,
        totalBloggings: 5,
    },
    {
        crewId: 7,
        profile: { url: "/images/CrewImg.png" },
        crewName: "박병언",
        crewLog: [
            { generation: 1, type: "CREW_ROLE/CREW", department: "DEPARTMENT_TYPE/DEV" }
        ],
        isActive: true,
        joinedGen: 1,
        univDepartment: "소프트웨어",
        univJoinedYear: "21",
        totalActivities: 10,
        totalBloggings: 5,
    },
    {
        crewId: 8,
        profile: { url: "/images/CrewImg.png" },
        crewName: "김철수",
        crewLog: [
            { generation: 2, type: "CREW_ROLE/CREW", department: "DEPARTMENT_TYPE/DESIGN" }
        ],
        isActive: true,
        joinedGen: 2,
        univDepartment: "디지털미디어",
        univJoinedYear: "21",
        totalActivities: 10,
        totalBloggings: 5,
    },
    {
        crewId: 9,
        profile: { url: "/images/CrewImg.png" },
        crewName: "이영희",
        crewLog: [
            { generation: 2, type: "CREW_ROLE/CREW", department: "DEPARTMENT_TYPE/DESIGN" }
        ],
        isActive: true,
        joinedGen: 2,
        univDepartment: "디지털미디어",
        univJoinedYear: "21",
        totalActivities: 10,
        totalBloggings: 5,
    },
];