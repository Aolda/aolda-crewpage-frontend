'use client';

import React from "react";
import { StyledHashTag } from "./HashTag.styles";
import { colors } from "@/styles/theme";

/*
* 카드에 태그처럼 붙여서 상태를 표현하는 컴포넌트
* @params {boolean} [completed] 활동 완료 여부(완료가 아닐때는 어떤지 디자인팀에게 물어보기)
* @params {string} [date] 활동 시작 날짜
*/
interface HashTagProps {
    completed?: boolean,
    date?: string,
    color: string,
}


const HashTag: React.FC<HashTagProps> = ({
	completed, //date와 completed는 둘중에 하나만 존재
	date,
    color,
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
            <StyledHashTag $bgColor={colors.black500} $date={date} $color={color}>
                #{dateArr[0]}-{season}
            </StyledHashTag>
        );
    }
    // 2. 활동 완료 여부가 들어온 경우
    const status = completed ? "완료" : "진행중";
    
    return (
        <StyledHashTag $bgColor={colors.primary500} $completed={completed} $color={color}>
            #{status}
        </StyledHashTag>
    );
};

export default HashTag;