// src/types/project.ts
// 프로젝트 진행 상태 정의
// PLANNING: 기획 중, ONGOING: 진행 중, DONE: 완료
export type ProjectStatus = "PLANNING" | "ONGOING" | "DONE";

// 프로젝트 진행 상태별 한글 라벨 매핑
export const PROJECT_STATUS_LABEL: Record<ProjectStatus, string> = {
    PLANNING: '기획중',
    ONGOING: '진행중',
    DONE: '완료',
};

export interface Project {
    // 필수 식별자 및 라우팅
    id: string;               // URL 구분을 위한 고유 ID (to 대신 사용)
    
    // 핵심 정보
    title: string;            // 프로젝트 제목 (ex. ACC)
    subtitle: string;         // 부제목 (ex. Aolda Cloud Console)
    description: string;      // 프로젝트 한 줄 소개
    date: string;             // 시작 날짜 또는 기간 (ex. "2024.01")
    
    // 상태 관리
    status: ProjectStatus;       
    
    // 디자인 요소 (디자인상 프로젝트마다 다르므로 유지)
    thumbnail: string;        // 프로젝트 카드용 이미지 경로
    bgcolor: string;          // 카드나 배경에 쓰일 고유 색상 코드
    
    // 콘텐츠 (문항 수정)
    //solutions는 필요한 경우 유지
    solutions?: string[];     
    
    // 인원 정보
    // Member 객체 대신 id 배열만 관리하여 데이터 무결성 유지
    memberIds: string[];
}