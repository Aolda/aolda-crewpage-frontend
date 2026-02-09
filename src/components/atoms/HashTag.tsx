'use client';

import React from "react";
import { StyledHashTag } from "./HashTag.styles";
import { ProjectStatus, PROJECT_STATUS_LABEL } from "@/types/project";

/*
* 카드에 태그처럼 붙여서 상태를 표현하는 컴포넌트
* @params {boolean} [completed] 활동 완료 여부(완료가 아닐때는 어떤지 디자인팀에게 물어보기)
* @params {string} [date] 활동 시작 날짜
*/
interface HashTagProps {
    status?: ProjectStatus;
    date?: string,
}


const HashTag: React.FC<HashTagProps> = ({
	status, //date와 status는 둘중에 하나만 존재
	date,
}) => {
    // 1. 날짜가 들어온 경우 (YYYY.MM.DD)
	if(date) {
        const dateArr = date.split("."); 
        const month = parseInt(dateArr[1], 10);
        let season = "";
        
        if (month >= 3 && month <= 5) season = "봄";
        else if (month >= 6 && month <= 8) season = "여름";
        else if (month >= 9 && month <= 11) season = "가을";
        else season = "겨울";

        return (
            <StyledHashTag $date={date}>
                #{dateArr[0]}-{season}
            </StyledHashTag>
        );
    } 
    if(status){
        return (
            <StyledHashTag $status={status}>
                #{PROJECT_STATUS_LABEL[status]}
            </StyledHashTag>
        );
    }
};

export default HashTag;