'use client';

import React from "react";
import { StyledHashTag } from "./HashTag.styles";
import { ActivityStatusKey, ACTIVITY_STATUS } from "@/types/project";

interface HashTagProps {
    status?: ActivityStatusKey;
    date?: string, // 명세에 따른 "YYYY-N" 형식 (예: "2025-1")
}


const HashTag: React.FC<HashTagProps> = ({
	status, //date와 status는 둘중에 하나만 존재
	date,
}) => {
    // 1. 날짜가 들어온 경우 "YYYY-N"
	if(date) {
        const [year, semester] = date.split("-"); 
        
        // "2025-1" -> "#2025-1학기" 형태로 변환
        const formattedDate = semester ? `${year}-${semester}학기` : year;

        return (
            <StyledHashTag $date={date}>
                #{formattedDate}
            </StyledHashTag>
        );
    } 
    if(status){
        return (
            <StyledHashTag $status={status}>
                #{ACTIVITY_STATUS[status]}
            </StyledHashTag>
        );
    }
};

export default HashTag;