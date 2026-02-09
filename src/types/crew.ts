// src/types/crew.ts
// 1: 회장, 2: 부회장, 3: 총무, 4: 크루원
export type PositionValue = 1 | 2 | 3 | 4;
// 숫자를 한글 이름으로 매핑하는 객체
export const POSITION_LABEL: Record<PositionValue, string> = {
    1: '회장',
    2: '부회장',
    3: '총무',
    4: '크루원',
};

export type MemberStatus = 'ACTIVE' | 'INACTIVE'; // 활동중 -> ACTIVE, 비활동 -> INACTIVE

// 최종 CrewMember 인터페이스
export interface CrewMember {
    // 시스템 및 라우팅 필수 키
    id: string;             // URL 파라미터 및 API 호출용 고유 식별자
    
    // 기본 인적 사항
    name: string;           // 이름
    profileImage: string;   // 프로필 이미지 경로 (기존의 src)
    position: PositionValue; // 직책
    department: string;     // 전공 (소프트웨어, 사이버보안 등)
    studentNumber: string;  // 학번 (ex. "21")
    generation: number;     // 기수 (ex. 2)
    
    // 상태 및 연락처
    active: MemberStatus;   // 활동 여부 (활동중 -> ACTIVE, 비활동 -> INACTIVE)
    emailAddress: string;   // 이메일 주소
    
    // 크루북 상세 데이터
    description: string;    // 한 줄 소개
    follower: number;       // 팔로워 수
    following: number;      // 팔로잉 수
    
    // 활동 통계 (선택적 속성)
    activityCount?: number; // 총 활동 개수
    blogCount?: number;     // 총 블로그 포스팅 개수
}