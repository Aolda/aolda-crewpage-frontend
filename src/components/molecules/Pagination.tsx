// /src/components/molecules/Pagination.tsx
'use client';

import React from 'react';
import * as S from './Pagination.styles';

interface PaginationProps {
    current: number;   // 백엔드 명세의 paginate.curr
    total: number;     // 전체 데이터 개수 (예: 10)
    pageSize: number;  // 한 페이지당 노출 개수 (6)
    onPageChange: (page: number) => void;
}

const Pagination = ({ current, total, pageSize, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(total / pageSize);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <S.Container>
            <S.ArrowButton disabled={current === 1} onClick={() => onPageChange(current - 1)}>
                &lt; 이전
            </S.ArrowButton>

            <S.PageList>
                    {pages.map((page) => (
                <S.PageItem 
                    key={page} 
                    $isActive={current === page}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </S.PageItem>
                ))}
            </S.PageList>

            <S.ArrowButton disabled={current === totalPages} onClick={() => onPageChange(current + 1)}>
                다음 &gt;
            </S.ArrowButton>
        </S.Container>
    );
};

export default Pagination;