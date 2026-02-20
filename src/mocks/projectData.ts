import { ProjectDetailResponse } from '@/types/project';

import { ProjectListResponse } from '@/types/project';

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
                activityId: 101,
                status: "ACTIVITY_STATUS/ONBOARDING",
                startedAt: "2025-1",
                activityNames: {
                    ko: "아올다 공식 홈페이지 개발",
                    en: "Aolda Official Website Project"
                },
                backgroundImage: { url: "/images/project/aas.png" }
            },
            {
                activityId: 102,
                status: "ACTIVITY_STATUS/COMPLETED",
                startedAt: "2024-2",
                activityNames: {
                    ko: "클라우드 인프라 자동화 스터디",
                    en: "Cloud Infrastructure Automation Study"
                },
                backgroundImage: { url: "/images/project/abs.png" }
            }
        ]
    }
};

export const MOCK_PROJECT_DETAILS = {
    3: {
        activityNames: {
            ko: "아올다 디자인 시스템",
            en: "ADS (Aolda Design System)"
        },
        backgroundImage: {
            url: "/images/project/aas.png"
        },
        contents: {
            ideaBackground: "아올다 서비스 전반에 걸쳐 일관된 사용자 경험을 제공하기 위한 공통 디자인 가이드 및 컴포넌트 라이브러리입니다.\n\n다양한 프로젝트에서 중복되는 UI 요소를 통합하여 개발 생산성을 높이는 것이 목표입니다.",
            activityInfo: {
                startedAt: ["2024-2", "2025-1"],
                projectType: "PROJECT_TYPE/IN_HOUSE",
                activityCounts: 12,
                bloggingCounts: 5
            },
            mainBloggings: [
                {
                    title: "ADS 라이브러리 배포기",
                    createdBy: { crewId: 15, crewName: "정우재" },
                    postedAt: "2025-01-20 10:30:00",
                    contentPreview: "NPM을 통해 사내 라이브러리를 배포하고 관리하는 과정을 담았습니다."
                }
            ]
        },
        participants: [
            {
                crewId: 15,
                profile: { url: "/images/CrewImg.png" },
                crewName: "정우재",
                univDepartment: "소프트웨어학과",
                univJoinedYear: "22"
            }
        ],
        gallery: [
            { photoId: 1, content: { url: "/images/project/abs.png" } },
            { photoId: 2, content: { url: "/images/project/acc.png" } }
        ]
    }
};