//Badge 현황 인터페이스
export type BadgeTheme = "info" | "status";

//멤버 객체
export interface Member {
    src: string;            //프로필 이미지(홈페이지, 크루북 페이지에 들어가는 이미지)
    name: string;           //이름
    position: string;       //직책(회장 | 부회장 | 총무 | 크루원)
    major: string;          //전공(소프트웨어, 사이버보안, ...)
    studentNumber: string;  //학번(년도만. ex. 21, 22, 23, ...)
    generation: number;     //기수(숫자만. ex. 0, 1, 2)
    active: boolean;        //활동 여부(활동중 -> true)
    to: string;             //크루북 디테일 페이지 경로
    activityCount?: number; //활동 개수
    blogCount?: number;     //블로그 개수
}
//프로젝트 객체
export interface Project {
    src: string;            //주요활동 페이지에서 ProjectBlock에 들어가는 이미지 경로
    title: string;          //프로젝트 제목(ex. ACC)
    subtitle: string;       //프로젝트 부제목(ex. Aolda Cloud Console)
    status: BadgeTheme;        //프로젝트 진행상황
    crewNum: number;        //활동에 참여한 사람 수
    bgColor: string;        //주요활동 페이지에서 ProjectBlock에 들어가는 배경 색
    description: string;    //프로젝트 한줄 소개(제품은 한줄 소개, 프로젝트는 기획 정보)
    problems: string[];     //주요활동, 제품 소개 페이지에서 "문제점"에 들어가는 내용
    solutions: string[];    //주요활동, 제품 소개 페이지에서 "해결책"에 들어가는 내용
    members: Member[];      //활동에 참여한 사람 배열
    to: string;             //제품소개, 주요활동 페이지 경로
}