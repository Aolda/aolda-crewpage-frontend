// /src/components/molecules/Select.tsx
'use client';

import React, { useState, useRef, useEffect } from "react";
import * as S from "./Select.styles";

type LabelType = "generation" | "role" | "department" | "season" | "category";

interface SelectProps {
    label: LabelType;
    options: string[];
    onSelectChange: (value: string) => void;
    // 현재 선택된 값을 보여주고 싶다면 추가 (선택사항)
    selectedValue?: string;
    clearOptionLabel?: string;
}

const TITLE_MAP: Record<LabelType, string> = {
    generation: "기수",
    role: "역할",
    department: "학과",
    season: "전체 기간",
    category: "카테고리",
};

const Select: React.FC<SelectProps> = ({ label, options, onSelectChange, selectedValue, clearOptionLabel }) => {
    const title = TITLE_MAP[label];
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const optionItems = clearOptionLabel
        ? [{ label: clearOptionLabel, value: "" }, ...options.map((option) => ({ label: option, value: option }))]
        : options.map((option) => ({ label: option, value: option }));

    // 외부 클릭 시 닫기 로직
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (value: string) => {
        onSelectChange(value);
        setIsOpen(false); // 선택 후 메뉴 닫기
    };

    return (
        <S.SelectContainer ref={selectRef}>
            <S.SelectHeader onClick={() => setIsOpen(!isOpen)} $isSelected={!!selectedValue}>
                <S.LabelText $isSelected={!!selectedValue}>{selectedValue || title}</S.LabelText>
                <S.ArrowIcon $isOpen={isOpen} $isSelected={!!selectedValue}/>
            </S.SelectHeader>

            {isOpen && (
                <S.OptionsList>
                    {optionItems.map((option, index) => (
                        <S.OptionItem 
                            key={index} 
                            onClick={() => handleSelect(option.value)}
                            $isSelected={selectedValue === option.value}
                        >
                            {option.label}
                        </S.OptionItem>
                    ))}
                </S.OptionsList>
            )}
        </S.SelectContainer>
    );
};

export default Select;
