'use client';

import React, { type ChangeEvent, type KeyboardEvent } from "react";
import Image from "next/image";
import { StyledSearchBox } from "./SearchBox.styles";

/*
* 회원 검색 기능 제공(크루북, 주요활동)
* @property {string} value 현재 입력 필드에 표시될 검색어 값
* @property {(e: ChangeEvent<HTMLInputElement>) => void} onChange 입력 값이 변경될 때마다 호출되는 핸들러 함수
* @property {(query: string) => void} onSearch 검색 버튼 클릭 또는 Enter 키 입력 시 검색을 실행하는 함수
* @property {string} placeholder 입력 필드가 비어 있을 때 표시될 안내 문구
*/
interface SearchBoxProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearch: (query: string) => void;
    placeholder: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
	value,
	onChange,
	onSearch,
	placeholder
}) => {
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        onSearch(value.trim());
    }
};

	return (
		<StyledSearchBox>
			<input
				type="text"
				value={value}
				onChange={onChange}
				onKeyDown={handleKeyDown}
                placeholder={placeholder}
			/>
			
			<button
				type='button'
				onClick={() => onSearch(value.trim())}
			>
				<Image src="/Search.png" alt="search" width={20} height={20}/>
			</button>
		</StyledSearchBox>
	);
};

export default SearchBox