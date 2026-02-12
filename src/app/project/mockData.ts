import { ProjectDetailResponse } from '@/types/project';

export const MOCK_PROJECT_DETAILS: Record<number, ProjectDetailResponse> = {
    3: {
        activityNames: {
            ko: "아올다 디자인 시스템",
            en: "ADS (Aolda Design System)"
        },
        backgroundImage: {
            url: "/images/project/ads_bg.png"
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
            { photoId: 1, content: { url: "/images/project/gallery1.png" } },
            { photoId: 2, content: { url: "/images/project/gallery2.png" } }
        ]
    }
};