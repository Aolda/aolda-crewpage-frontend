'use client';

import React from "react";
import * as S from "./Select.styles";

type LabelType = "generation" | "role" | "department" | "season";

interface SelectProps {
    label: LabelType;
    options: string[];
    onSelectChange: (value: string) => void;
    // 현재 선택된 값을 보여주고 싶다면 추가 (선택사항)
    selectedValue?: string;
}

const TITLE_MAP: Record<LabelType, string> = {
    generation: "기수",
    role: "역할",
    department: "학과",
    season: "전체 기간",
};

const Select: React.FC<SelectProps> = ({ label, options, onSelectChange, selectedValue }) => {
    const title = TITLE_MAP[label];

    return (
        <S.SelectContainer>
            <S.LabelText>{selectedValue || title}</S.LabelText>
            <S.ArrowIcon />

            <S.NativeSelect
                id={label}
                onChange={(e) => onSelectChange(e.target.value)}
                defaultValue=""
            >
                <option value="" disabled hidden>
                {title} 선택
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </S.NativeSelect>
        </S.SelectContainer>
    );
};

export default Select;