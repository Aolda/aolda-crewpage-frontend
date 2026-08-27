//
export const ACTIVITY_STATUS = {
    'ACTIVITY_STATUS/PREPARING': '준비중',
    'ACTIVITY_STATUS/RECRUITING': '모집중',
    // The backend's existing Notion mapping uses this legacy spelling.
    'ACTIVITY_STATUS/RECRIUTING': '모집중',
    'ACTIVITY_STATUS/ONBOARDING': '진행중',
    'ACTIVITY_STATUS/COMPLETED': '완료',
    'ACTIVITY_STATUS/CANCELLED': '취소',
    'ACTIVITY_STATUS/STANDBY': '보류',
} as const;

export const ACTIVITY_TYPE_LABEL = {
    'ACTIVITY_TYPE/PROJECT': '프로젝트',
    'ACTIVITY_TYPE/STUDY': '스터디',
} as const;

export type ActivityStatusKey = keyof typeof ACTIVITY_STATUS;
export type ActivityTypeKey = keyof typeof ACTIVITY_TYPE_LABEL;

// 전체 활동 요약 정보 (리스트용)
export interface ActivitySummary {
    status: ActivityStatusKey;
    startedAt: string;
    activityNames: {
        ko: string;
        en: string;
        brief?: string | null;
    };
    background: {
        url: string, // 활동 배경이미지
        color: string // 활동 배경색상(#xxxxxx)
    };
    activityType: ActivityTypeKey;
    description: string; // 이 명세에는 소개글이 포함됩니다!
}

// 전체 활동 응답 타입
export interface ActivityListResponse {
    total: number;
    data: ActivitySummary[];
    paginate?: {
        from: number;
        to: number;
        curr: number;
    };
}

// 통계 데이터 타입
export interface ProjectStatistics {
    key: string;
    total: number;
    value: number;
}

// 프로젝트 요약 정보 (리스트용)
export interface ProjectSummary {
    activityId: string;
    status: ActivityStatusKey;
    startedAt: string;
    activityNames: {
        ko: string;
        en: string;
        brief?: string | null;
    };
    backgroundImage?: {
        url: string | null;
    } | null;
    background?: {
        url: string | null;
        color: string;
    } | null;
    participantsCount: number;
}

// 전체 조회 응답 타입
export interface ProjectListResponse {
    total: number;
    data: {
        statistics: {
            projects: ProjectStatistics;
            participants: ProjectStatistics;
            paran_projects: ProjectStatistics;
        };
        filters: {
            status: Record<string, { key: string; value: string }>;
            seasons: Record<string, { key: string; value: string }>;
        };
        projects: ProjectSummary[];
    };
}

// 프로젝트 유형 상수 정의
export const PROJECT_TYPE = {
    'PROJECT_TYPE/INFRA': '인프라 프로젝트 (HW 운영 관련 연관 프로젝트)',
    'PROJECT_TYPE/IN_HOUSE': '인하우스 프로젝트 (소학회 내부운용 서비스)',
    'PROJECT_TYPE/PUBLIC': '퍼블릭 클라우드서비스 개발 프로젝트 (일반공개 및 운용 서비스)',
} as const;

export type ProjectTypeKey = keyof typeof PROJECT_TYPE;

// 상세 조회 응답 데이터 구조
export interface ProjectDetailResponse {
    activityNames: {
        ko: string;
        en: string;
        brief?: string | null;
    };
    background?: {
        url: string | null;
        color: string;
    } | null;
    backgroundImage?: {
        url: string | null;
    } | null;
    contents: {
        ideaBackground: string; // 기획배경 (\n, \t 포함)
        activityInfo: {
            startedAt: string[]; // 진행학기 리스트
            projectType: ProjectTypeKey;
            activityCounts: number;
            bloggingCounts: number;
        };
        mainBloggings: Array<{
            title: string;
            createdBy: {
                crewId: number;
                crewName: string;
            };
            postedAt: string;
            contentPreview: string;
        }>;
    };
    participants: Array<{
        crewId: number;
        profile: {
            url: string;
        };
        crewName: string;
        univDepartment: string;
        univJoinedYear: string;
    }>;
    gallery: Array<{
        photoId: number;
        content: {
            url: string;
        };
    }>;
}
