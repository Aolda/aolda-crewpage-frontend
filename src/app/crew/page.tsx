//src/app/crew/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAxiosError } from "axios";

import { useErrorHandler } from "@/hooks/useErrorHandler";
import { getCrewList, getDepartmentList } from '@/api/crew';
import { CrewMember, DepartmentMap } from '@/types/crew';

import CrewPageTemplate from '@/components/templates/crew/CrewPagetemplate';
import LoadingScreen from '@/components/atoms/LoadingScreen';

export default function CrewListPage() {
    const router = useRouter();
    const { handleError } = useErrorHandler();

    const [crews, setCrews] = useState<CrewMember[]>([]);
    const [departments, setDepartments] = useState<DepartmentMap>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const fetchCrews = async () => {
            try {
                setIsLoading(true);
                setHasError(false);

                const params = {};

                // 크루 목록과 부서 목록을 병렬 fetch
                // 부서 목록은 실패해도 크루 목록 표시에 영향 없도록 독립 처리
                const [crewResponse, departmentResult] = await Promise.allSettled([
                    getCrewList(params),
                    getDepartmentList(),
                ]);

                if (crewResponse.status === 'rejected') throw crewResponse.reason;

                setCrews(crewResponse.value.data);
                if (departmentResult.status === 'fulfilled') {
                    setDepartments(departmentResult.value);
                } else {
                    console.warn('/team/department 로드 실패 (CORS 또는 서버 오류):', departmentResult.reason);
                }
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
    }, [handleError]);

    const handleDetailNavigation = (id: number) => {
        router.push(`/crew/${id}`);
    };

    if (isLoading) {
        return <LoadingScreen />;
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
        <CrewPageTemplate crewList={crews} departments={departments} onDetailClick={handleDetailNavigation} />
    );
}
