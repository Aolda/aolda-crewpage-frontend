//
export const CREW_ROLE = {
    'CREW_ROLE/P': '회장',
    'CREW_ROLE/VP': '부회장',
    'CREW_ROLE/EA': '총무',
    'CREW_ROLE/CREW': '일반 크루원',
} as const;

export const DEPARTMENT_TYPE = {
    'DEPARTMENT_TYPE/CLEVEL': '임원진',
    'DEPARTMENT_TYPE/DEV': '개발팀',
    'DEPARTMENT_TYPE/INFRA': '인프라팀',
    'DEPARTMENT_TYPE/GA': '운영지원팀',
    'DEPARTMENT_TYPE/DESIGN': '디자인팀',
} as const;

export interface CrewLog {
    generation: number;
    type: keyof typeof CREW_ROLE;
    department: keyof typeof DEPARTMENT_TYPE;
}

// 서버 응답 기반의 크루 데이터 타입
export interface CrewMember {
    crewId: number;
    profile: {
        url: string;
    };
    crewName: string;
    crewLog: CrewLog[];
    isActive: boolean;
    joinedGen: number;
    univDepartment: string;
    univJoinedYear: string; // "00" 형태의 문자열
    totalActivities: number;
    totalBloggings: number;
}

// 페이지네이션 정보 타입
export interface Paginate {
    from: number;
    to: number;
    curr: number;
}

// 최종 응답 타입
export interface CrewListResponse {
    total: number;
    data: CrewMember[];
    paginate?: Paginate; // 페이지네이션 적용 시에만 포함
}

//
export const ACTIVITY_TYPE_LABEL = {
    'ACTIVITY_TYPE/PROJECT': '프로젝트',
    'ACTIVITY_TYPE/STUDY': '스터디',
} as const;

import { ProjectStatus } from './project';

export interface CrewActivity {
    activityId: number;
    status: ProjectStatus;
    startedAt: string;
    activityNames: { ko: string; en: string };
    activityType: keyof typeof ACTIVITY_TYPE_LABEL;
    description: string;
}

export interface CrewBlogging {
    title: string;
    postedAt: string;
    contentPreview: string;
}

// 크루 상세 응답 데이터 구조
export interface CrewDetailResponse {
    crewId: number;
    profile: { url: string };
    crewName: string;
    crewLog: CrewLog[];
    isActive: boolean;
    joinedGen: number;
    univDepartment: string;
    univJoinedYear: string;
    crewEmail: string;
    description: string;
    activities: CrewActivity[];
    bloggings: CrewBlogging[];
    connections: {
        isFollowing: boolean;
        followers: number;
        followings: number;
    };
}