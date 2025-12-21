import React from "react"
import { StyledHashTag } from "./HashTag.styles";

/*
* 카드에 태그처럼 붙여서 상태를 표현하는 컴포넌트
* @params {boolean} [completed] 활동 완료 여부(완료가 아닐때는 어떤지 디자인팀에게 물어보기)
* @params {string} [date] 활동 시작 날짜
* @params {React.ReactNode} children Badge의 내부 요소
* @params {string} bgColor 색 설정(blue, black)
*/
interface HashTagProps {
    children: React.ReactNode,
    completed?: boolean,
    date?: string,
    $bgColor: string,
}


const HashTag: React.FC<HashTagProps> = ({
	completed, //date와 completed는 둘중에 하나만 존재
	date,
	children,
	$bgColor
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
            <StyledHashTag $bgColor={$bgColor} $date={date}>
                #{dateArr[0]}-{season}
            </StyledHashTag>
        );
    }
    // 2. 활동 완료 여부가 들어온 경우
    const status = completed ? "완료" : "진행중";
    
    return (
        <StyledHashTag $bgColor={$bgColor} $completed={completed}>
            #{status}
        </StyledHashTag>
    );
};

export default HashTag;