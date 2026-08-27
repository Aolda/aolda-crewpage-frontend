import { ProjectDetailResponse, ProjectListResponse } from '@/types/project';

export const MOCK_PROJECT_RESPONSE: ProjectListResponse = {
    total: 2,
    data: {
        statistics: {
            projects: { key: "STATISTIC_VALUE/PROJECTS", total: 24, value: 8 },
            participants: { key: "STATISTIC_VALUE/PARTICIPANTS", total: 156, value: 42 },
            paran_projects: { key:"STATISTIC_VALUE/PARAN_PROJECTS", total: 12, value: 3 }
        },
        filters: {
            status: {
                "STATUS_RECRUITING": { key: "ACTIVITY_STATUS/RECRUITING", value: "모집중" },
                "STATUS_ONBOARDING": { key: "ACTIVITY_STATUS/ONBOARDING", value: "진행중" },
                "STATUS_COMPLETED": { key: "ACTIVITY_STATUS/COMPLETED", value: "완료" }
            },
            "seasons": {
                "SEMESTER_2024_2": { key: "2024-2", value: "2024학년도 2학기" },
                "SEMESTER_2025_1": { key: "2025-1", value: "2025학년도 1학기" },
                "SEMESTER_2025_2": { key: "2025-2", value: "2025학년도 2학기" },
            }
        },
        projects: [
            {
                activityId: '00000000-0000-4000-8000-000000000101',
                status: "ACTIVITY_STATUS/ONBOARDING",
                startedAt: "2025-1",
                activityNames: {
                    ko: "아올다 공식 홈페이지 개발",
                    en: "Aolda Official Website Project",
                    brief: "홈페이지 개발"
                },
                participantsCount: 6,
                background: { url: "/images/project/aas.png", color: "#1A8EE5" },
                backgroundImage: { url: "/images/project/aas.png" }
            },
            {
                activityId: '00000000-0000-4000-8000-000000000102',
                status: "ACTIVITY_STATUS/COMPLETED",
                startedAt: "2024-2",
                participantsCount: 4,
                activityNames: {
                    ko: "클라우드 인프라 자동화 스터디",
                    en: "Cloud Infrastructure Automation Study",
                    brief: "인프라 자동화"
                },
                background: { url: "/images/project/abs.png", color: "#5B4FCF" },
                backgroundImage: { url: "/images/project/abs.png" }
            }
        ]
    }
};

export const MOCK_PROJECT_DETAIL: ProjectDetailResponse = {
    activityNames: {
        ko: "아올다 공식 홈페이지 개발",
        en: "Aolda Official Website Project",
    },
    background: {
        url: "/images/project/aas.png",
        color: "#1A8EE5",
    },
    backgroundImage: {
        url: "/images/project/aas.png",
    },
    contents: {
        ideaBackground: "아올다 소학회의 아이덴티티를 온라인에서도 선명하게 전달하기 위해, 소학회 공식 홈페이지를 직접 기획·개발·배포하는 프로젝트입니다.\n\n단순한 소개 페이지가 아니라, 크루원 프로필·주요 활동·블로그·클라우드 링크 등 아올다의 모든 콘텐츠를 한 곳에서 탐색할 수 있는 통합 플랫폼을 목표로 합니다.\n\nNext.js 기반의 프론트엔드와 Spring Boot 기반의 백엔드를 아올다 자체 클라우드 환경에 배포하여 실제 운영 서비스로 이어집니다.",
        activityInfo: {
            startedAt: ["2025-1", "2025-2"],
            projectType: "PROJECT_TYPE/IN_HOUSE",
            activityCounts: 18,
            bloggingCounts: 12,
        },
        mainBloggings: [
            {
                title: "Next.js App Router 도입기 — 왜 Pages Router를 버렸나",
                createdBy: { crewId: 1, crewName: "김민준" },
                postedAt: "2025-03-15",
                contentPreview: "App Router의 서버 컴포넌트와 레이아웃 시스템이 기존 Pages Router 대비 어떤 이점을 제공하는지, 마이그레이션 과정에서 겪은 트러블슈팅을 공유합니다.",
            },
            {
                title: "Styled Components + Theme으로 디자인 시스템 구축하기",
                createdBy: { crewId: 2, crewName: "이서윤" },
                postedAt: "2025-03-22",
                contentPreview: "일관된 UI를 위해 색상·타이포그래피·반응형 브레이크포인트를 theme 객체로 관리하는 방법과, rem 기반 유닛 변환 유틸 함수 작성기를 담았습니다.",
            },
            {
                title: "Axios Instance + 에러 핸들러 공통화 전략",
                createdBy: { crewId: 3, crewName: "박지호" },
                postedAt: "2025-04-05",
                contentPreview: "API 호출마다 try-catch를 반복하지 않도록 Axios 인터셉터와 커스텀 훅으로 에러 처리를 공통화한 아키텍처 결정 기록입니다.",
            },
            {
                title: "아올다 클라우드에 Next.js 배포하기 — Nginx + PM2 세팅",
                createdBy: { crewId: 4, crewName: "최현우" },
                postedAt: "2025-04-18",
                contentPreview: "자체 서버에 Next.js standalone 빌드를 올리고 Nginx 리버스 프록시와 PM2 프로세스 매니저로 운영 환경을 구성하는 전 과정을 정리했습니다.",
            },
            {
                title: "반응형 UI 구현기 — 모바일·태블릿·데스크탑 대응 전략",
                createdBy: { crewId: 2, crewName: "이서윤" },
                postedAt: "2025-05-02",
                contentPreview: "CSS-in-JS 환경에서 미디어 쿼리 브레이크포인트를 theme으로 관리하고, 컴포넌트별 반응형 스타일을 효율적으로 작성하는 패턴을 소개합니다.",
            },
            {
                title: "GitHub Actions CI/CD 파이프라인 구성기",
                createdBy: { crewId: 5, crewName: "정다은" },
                postedAt: "2025-05-10",
                contentPreview: "PR 머지 시 자동으로 빌드·테스트·배포가 이루어지는 GitHub Actions 워크플로우를 아올다 서버 환경에 맞게 구성한 경험을 공유합니다.",
            },
        ],
    },
    participants: [
        {
            crewId: 1,
            profile: { url: "/images/project/CrewImg.png" },
            crewName: "김민준",
            univDepartment: "컴퓨터공학과",
            univJoinedYear: "21",
        },
        {
            crewId: 2,
            profile: { url: "/images/project/CrewImg.png" },
            crewName: "이서윤",
            univDepartment: "소프트웨어학과",
            univJoinedYear: "22",
        },
        {
            crewId: 3,
            profile: { url: "/images/project/CrewImg.png" },
            crewName: "박지호",
            univDepartment: "정보통신학과",
            univJoinedYear: "22",
        },
        {
            crewId: 4,
            profile: { url: "/images/project/CrewImg.png" },
            crewName: "최현우",
            univDepartment: "컴퓨터공학과",
            univJoinedYear: "23",
        },
        {
            crewId: 5,
            profile: { url: "/images/project/CrewImg.png" },
            crewName: "정다은",
            univDepartment: "소프트웨어학과",
            univJoinedYear: "23",
        },
        {
            crewId: 6,
            profile: { url: "/images/project/CrewImg.png" },
            crewName: "한승우",
            univDepartment: "전자공학과",
            univJoinedYear: "21",
        },
    ],
    gallery: [
        { photoId: 1, content: { url: "/images/project/aas.png" } },
        { photoId: 2, content: { url: "/images/project/abs.png" } },
        { photoId: 3, content: { url: "/images/project/aas.png" } },
        { photoId: 4, content: { url: "/images/project/abs.png" } },
        { photoId: 5, content: { url: "/images/project/aas.png" } },
        { photoId: 6, content: { url: "/images/project/abs.png" } },
    ],
};
