//src/app/crew/page.tsx
'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { CrewMember } from '@/types/crew';
import { getCrewList, CrewQueryParams } from '@/api/crew';
import CrewPageTemplate from '@/components/templates/crew/CrewPagetemplate';
import Pagination from '@/components/molecules/Pagination';

const ITEMS_PER_PAGE = 6;

export default function CrewListPage() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // 현재 페이지 수 추출(기본은 1)
    const currentPage = Number(searchParams.get('page')) || 1;

    const [crews, setCrews] = useState<CrewMember[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // 쿼리 파라미터 업데이트 함수
    const updateQuery = useCallback((newParams: Partial<CrewQueryParams>) => {
        const params = new URLSearchParams(searchParams.toString());
        
        Object.entries(newParams).forEach(([key, value]) => {
            if (value === undefined || value === null) {
                params.delete(key);
            } else {
                params.set(key, String(value));
            }
        });

        router.push(`${pathname}?${params.toString()}`);
    }, [pathname, router, searchParams]);

    // 쿼리 스트링 기반 데이터 패칭
    useEffect(() => {
        const fetchCrews = async () => {
            try {
                setIsLoading(true);
                
                // URL에 포함된 모든 검색 조건을 객체로 구성
                const params: CrewQueryParams = {
                    page: currentPage,
                    generation: searchParams.get('generation') ? Number(searchParams.get('generation')) : undefined,
                    role: searchParams.get('role') || undefined,
                    univDepartment: searchParams.get('univDepartment') || undefined,
                };

                const response = await getCrewList(params);
                setCrews(response.data);
                setTotalCount(response.total);
            } catch (error) {
                console.error('크루 리스트 로드 실패:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCrews();
    }, [currentPage, searchParams]);


    const handleDetailNavigation = (id: number) => {
        router.push(`/crew/${id}/activity`);
    };

    if (isLoading) return <div>크루 목록을 불러오는 중...</div>;

    return (
        <CrewPageTemplate crewList={crews} onDetailClick={handleDetailNavigation}>
            <Pagination 
                current={currentPage} 
                total={totalCount} 
                pageSize={ITEMS_PER_PAGE} 
                onPageChange={(page) => updateQuery({ page })} 
            /> 
        </CrewPageTemplate>
    );
}