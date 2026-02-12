import { ActivityListResponse } from '@/types/project';

/**
 * 아올다 전체 활동(프로젝트/스터디) 목록 Mock 데이터
 * 명세: GET /activity
 */
export const MOCK_ACTIVITY_RESPONSE: ActivityListResponse = {
    total: 4,
    // 페이지네이션이 적용된 경우의 필드
    paginate: {
        from: 1,
        to: 10,
        curr: 1
    },
    data: [
        {
            status: "ACTIVITY_STATUS/ONBOARDING", // 진행중
            startedAt: "2025-1",
            activityNames: {
                ko: "아올다 공식 홈페이지 개발",
                en: "Aolda Official Website Development"
            },
            activityType: "ACTIVITY_TYPE/PROJECT",
            description: "아올다 소학회의 아이덴티티를 보여줄 공식 웹사이트를 기획부터 배포까지 진행하는 풀스택 프로젝트입니다."
        },
        {
            status: "ACTIVITY_STATUS/RECRIUTING", // 모집중
            startedAt: "2025-1",
            activityNames: {
                ko: "Kubernetes 실전 아키텍처 스터디",
                en: "Kubernetes Deep Dive Study"
            },
            activityType: "ACTIVITY_TYPE/STUDY",
            description: "컨테이너 오케스트레이션의 표준인 쿠버네티스의 내부 구조를 파악하고 실전 클러스터를 구축해보는 스터디입니다."
        },
        {
            status: "ACTIVITY_STATUS/COMPLETED", // 완료
            startedAt: "2024-2",
            activityNames: {
                ko: "AWS 자격증(SAA) 취득 챌린지",
                en: "AWS Certified Solutions Architect Associate Study"
            },
            activityType: "ACTIVITY_TYPE/STUDY",
            description: "AWS SAA 자격증 취득을 목표로 클라우드 서비스의 전반적인 개념과 아키텍처 설계 역량을 기르는 활동입니다."
        },
        {
            status: "ACTIVITY_STATUS/ONBOARDING", // 진행중
            startedAt: "2024-2",
            activityNames: {
                ko: "클라우드 비용 최적화 프로젝트",
                en: "Cloud Cost Optimization Project"
            },
            activityType: "ACTIVITY_TYPE/PROJECT",
            description: "실제 운영 중인 서비스의 인프라 비용을 분석하고, 성능 저하 없이 아키텍처를 개선하여 비용을 절감하는 실무형 프로젝트입니다."
        }
    ]
};