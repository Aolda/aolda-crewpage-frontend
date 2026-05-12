//src/app/crew/page.tsx
'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { isAxiosError } from "axios";

import { useErrorHandler } from "@/hooks/useErrorHandler";
import { getCrewList, getDepartmentList, CrewQueryParams } from '@/api/crew';
import { CrewMember, DepartmentMap } from '@/types/crew';

import CrewPageTemplate from '@/components/templates/crew/CrewPagetemplate';
import Pagination from '@/components/molecules/Pagination';

const ITEMS_PER_PAGE = 6;

export default function CrewListPage() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { handleError } = useErrorHandler();

    // 현재 페이지 수 추출(기본은 1)
    const currentPage = Number(searchParams.get('page')) || 1;

    const [crews, setCrews] = useState<CrewMember[]>([]);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [departments, setDepartments] = useState<DepartmentMap>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchCrews = async () => {
            try {
                setIsLoading(true);
                setHasError(false);

                const params: CrewQueryParams = {
                    page: currentPage,
                    generation: searchParams.get('generation') ? Number(searchParams.get('generation')) : undefined,
                    role: searchParams.get('role') || undefined,
                    univDepartment: searchParams.get('univDepartment') || undefined,
                };

                // 크루 목록과 부서 목록을 병렬 fetch
                const [crewResponse, departmentMap] = await Promise.all([
                    getCrewList(params),
                    getDepartmentList(),
                ]);

                setCrews(crewResponse.data);
                setTotalCount(crewResponse.total);
                setDepartments(departmentMap);
            } catch (error) {
                setHasError(true);
                if (isAxiosError(error) && error.response?.data?.code) {
                    handleError(error.response.data.code);
                } else {
                    console.error('크루 리스트 로드 실패:', error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchCrews();
    }, [currentPage, searchParams, handleError]);

    const handleDetailNavigation = (id: number) => {
        router.push(`/crew/${id}`);
    };

    if (isLoading) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                크루 목록을 불러오는 중...
            </div>
        );
    }

    if (hasError) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
                <p>크루 정보를 불러오는 중 서버 오류가 발생했습니다.</p>
                <button onClick={() => window.location.reload()}>새로고침</button>
            </div>
        );
    }

    return (
        <CrewPageTemplate crewList={crews} departments={departments} onDetailClick={handleDetailNavigation}>
            <Pagination 
                current={currentPage} 
                total={totalCount} 
                pageSize={ITEMS_PER_PAGE} 
                onPageChange={(page) => {}} 
            /> 
        </CrewPageTemplate>
    );
}