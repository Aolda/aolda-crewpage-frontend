'use client';

import React, { type ChangeEvent, type KeyboardEvent } from "react";
import Image from "next/image";
import { StyledSearchBox } from "./SearchBox.styles";

/*
* 회원 검색 기능 제공(크루북, 주요활동)
* @property {string} value 현재 입력 필드에 표시될 검색어 값
* @property {(e: ChangeEvent<HTMLInputElement>) => void} onChange 입력 값이 변경될 때마다 호출되는 핸들러 함수
* @property {string} placeholder 입력 필드가 비어 있을 때 표시될 안내 문구
*/
interface SearchBoxProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
	value,
	onChange,
	placeholder
}) => {

	return (
		<StyledSearchBox as="label">
			<input
				type="text"
				value={value ?? ""}
				onChange={onChange}
                placeholder={placeholder}
			/>
			
			<button type='button'>
				<Image src="/images/Search.png" alt="search" width={20} height={20}/>
			</button>
		</StyledSearchBox>
	);
};

export default SearchBox